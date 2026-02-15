import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { sanityServer } from "@/sanity/lib/serverClient";

// Paystack signs with SECRET KEY (NOT webhook secret)
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY!;

export async function POST(req: NextRequest) {
  try {
    // VERY IMPORTANT: get raw body (do NOT use req.json())
    const body = await req.text();

    // Paystack signature header
    const signature = req.headers.get("x-paystack-signature");

    if (!signature) {
      console.log("❌ No Paystack signature header");
      return NextResponse.json(
        { status: "error", message: "No signature header" },
        { status: 400 }
      );
    }

    // Verify webhook
    const hash = crypto
      .createHmac("sha512", PAYSTACK_SECRET_KEY)
      .update(body)
      .digest("hex");

    if (hash !== signature) {
      console.log("❌ Invalid Paystack signature");
      return NextResponse.json(
        { status: "error", message: "Invalid signature" },
        { status: 403 }
      );
    }

    console.log("✅ Paystack webhook verified");

    // Parse event
    const payload = JSON.parse(body);

    // Only care about successful payments
    if (payload.event !== "charge.success") {
      console.log("ℹ️ Ignored event:", payload.event);
      return NextResponse.json({ status: "ignored" });
    }

    const paymentData = payload.data;

    const reference = paymentData.reference;
    const customer = paymentData.customer || {};
    const metadata = paymentData.metadata || {};
    const amount = paymentData.amount;
    const paid_at = paymentData.paid_at;

    const fullName = `${customer.first_name || metadata.fullName || ""} ${
      customer.last_name || ""
    }`.trim();

    // Build transaction document
    const transaction = {
      _type: "transcriptPayment",
      _id: reference,
      reference,
      status: "paid",
      fullName,
      email: metadata.email || customer.email || "",
      phone: metadata.phone || "",
      matricNumber: metadata.matricNumber || "",
      programme: metadata.programme || "",
      yearOfGraduation: metadata.yearOfGraduation || "",
      destinationInstitution: metadata.destinationInstitution || "",
      extraCharge: metadata.extraCharge || 0,
      amount: amount / 100, // convert kobo → naira
      currency: "NGN",
      paidAt: paid_at || new Date().toISOString(),
      receiptUrl: `/receipts/${reference}`,
      paystackMetadata: metadata,
    };

    // Save to Sanity
    await sanityServer.createOrReplace(transaction);

    console.log("💾 Payment saved:", reference);

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("🚨 Paystack webhook error:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
