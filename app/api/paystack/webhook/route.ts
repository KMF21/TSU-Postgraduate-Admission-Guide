// app/api/paystack/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sanityServer } from "@/sanity/lib/serverClient";
import axios from "axios";
import nodemailer from "nodemailer";

// Helper to send receipt email
async function sendReceiptEmail({
  to,
  fullName,
  reference,
  programme,
  amount,
  paidAt,
  receiptUrl,
}: {
  to: string;
  fullName: string;
  reference: string;
  programme: string;
  amount: number;
  paidAt: string;
  receiptUrl: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
    <h2>Taraba State University – Transcript Payment Receipt</h2>
    <p><strong>Student:</strong> ${fullName}</p>
    <p><strong>Programme:</strong> ${programme}</p>
    <p><strong>Reference:</strong> ${reference}</p>
    <p><strong>Amount Paid:</strong> ₦${amount.toLocaleString()}</p>
    <p><strong>Date:</strong> ${paidAt}</p>
    <p>You can view your printable receipt <a href="${receiptUrl}">here</a>.</p>
    <p>Thank you for your payment.</p>
  `;

  await transporter.sendMail({
    from: `"TSU PG Admissions" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Transcript Payment Receipt - ${reference}`,
    html: htmlContent,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const reference = body.reference;

    if (!reference) {
      return NextResponse.json(
        { status: "error", message: "No reference provided" },
        { status: 400 }
      );
    }

    // 1️⃣ Verify payment with Paystack
    const verifyRes = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
      }
    );

    const paystackData = verifyRes.data.data;

    if (paystackData.status !== "success") {
      return NextResponse.json(
        { status: "error", message: "Payment not successful" },
        { status: 400 }
      );
    }

    const paidAt = new Date().toISOString();
    const amount = paystackData.amount / 100; // convert kobo to Naira

    // 2️⃣ Save payment to Sanity
    await sanityServer.create({
      _type: "transcriptPayment",
      _id: reference, // use Paystack reference as ID
      fullName: paystackData.metadata.fullName,
      matricNumber: paystackData.metadata.matricNumber,
      email: paystackData.customer.email,
      phone: paystackData.metadata.phone,
      programme: paystackData.metadata.programme,
      yearOfGraduation: paystackData.metadata.yearOfGraduation,
      destinationInstitution: paystackData.metadata.destinationInstitution,
      serviceCharge: paystackData.metadata.serviceCharge,
      amount,
      status: "paid",
      paidAt,
    });

    // 3️⃣ Send receipt email
    const receiptUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/receipts/${reference}`;
    try {
      await sendReceiptEmail({
        to: paystackData.customer.email,
        fullName: paystackData.metadata.fullName,
        reference,
        programme: paystackData.metadata.programme,
        amount,
        paidAt,
        receiptUrl,
      });
    } catch (emailErr) {
      console.error("Error sending receipt email:", emailErr);
      // Don't fail the webhook just because email fails
    }

    return NextResponse.json({ status: "success" });
  } catch (err: any) {
    console.error("Webhook error:", err);
    return NextResponse.json(
      { status: "error", message: "Webhook failed" },
      { status: 500 }
    );
  }
}
