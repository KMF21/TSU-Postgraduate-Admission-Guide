import { NextRequest, NextResponse } from "next/server";
import { sanityServer } from "@/sanity/lib/serverClient";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const reference = body.reference;

    if (!reference) {
      return NextResponse.json({ status: "error", message: "No reference provided" }, { status: 400 });
    }

    // 1️⃣ Verify payment with Paystack API
    const verifyRes = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
    });

    const paystackData = verifyRes.data.data;

    if (paystackData.status !== "success") {
      return NextResponse.json({ status: "error", message: "Payment not successful" }, { status: 400 });
    }

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
      amount: paystackData.amount / 100, // convert kobo → Naira
      status: "paid",
      paidAt: new Date().toISOString(),
    });

    return NextResponse.json({ status: "success" });
  } catch (err: any) {
    console.error("Webhook error:", err.message);
    return NextResponse.json({ status: "error", message: "Webhook failed" }, { status: 500 });
  }
}
