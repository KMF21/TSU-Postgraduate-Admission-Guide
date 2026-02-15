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
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // ---- Pricing ----
    const transcriptFee = 10000; // TSU official fee (edit later)
    const serviceCharge = 200; // your platform fee
    const totalAmount = transcriptFee + serviceCharge;

    const reference = `TSU-${nanoid(10)}`;

    // 1️⃣ Create pending record in Sanity
    await sanityServer.create({
      _type: "transcriptRequest",
      reference,
      status: "pending",
      ...data,
      amount: totalAmount,
    });

    // 2️⃣ Initialize Paystack
    const paystackRes = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: data.email,
        amount: totalAmount * 100, // Paystack uses kobo
        reference,
        metadata: {
          matricNumber: data.matricNumber,
          fullName: data.fullName,
        },
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
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Payment initialization failed" },
      { status: 400 }
    );
  }
}
