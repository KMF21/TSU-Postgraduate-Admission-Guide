import { NextResponse } from "next/server";
import axios from "axios";
import { nanoid } from "nanoid";
import { z } from "zod";
import { sanityServer } from "@/sanity/lib/serverClient";

const schema = z.object({
  fullName: z.string().min(3),
  matricNumber: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  programme: z.string(),
  yearOfGraduation: z.string(),
  destinationInstitution: z.string(),
  extraCharge: z.number().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const transcriptFee = 5000; // base fee
    const serviceCharge = data.extraCharge ?? 200; // default service charge
    const totalAmount = transcriptFee + serviceCharge;

    const reference = `TSU-${nanoid(10)}`;

    // 1️⃣ Create pending payment in Sanity
    await sanityServer.create({
      _type: "transcriptPayment",
      _id: reference, // ensure unique ID = reference
      status: "pending",
      currency: "NGN",
      amount: totalAmount,
      ...data,
    });

    // 2️⃣ Initialize Paystack
    const paystackRes = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: data.email,
        amount: totalAmount * 100,
        reference,
        currency: "NGN",
        metadata: {
          ...data,
          serviceCharge,
          reference,
        },
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/callback`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({
      authorization_url: paystackRes.data.data.authorization_url,
      reference,
      amount: totalAmount,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: error?.message || "Payment initialization failed" },
      { status: 400 }
    );
  }
}
