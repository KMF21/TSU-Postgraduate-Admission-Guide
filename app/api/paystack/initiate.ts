import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY!;
const BASE_TRANSCRIPT_FEE = 20300; // NGN

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const data = req.body;

    // Calculate total amount
    const extra = data.extraCharge ? Number(data.extraCharge) : 0;
    const totalAmount = BASE_TRANSCRIPT_FEE + extra;

    // Save initial record in Sanity
    await client.create({
      _type: "transcriptPayment",
      reference: data.reference,
      status: "pending",
      fullName: data.fullName,
      matricNumber: data.matricNumber,
      email: data.email,
      phone: data.phone,
      programme: data.programme,
      yearOfGraduation: data.yearOfGraduation,
      destinationInstitution: data.destinationInstitution,
      amount: totalAmount,
    });

    res.status(200).json({
      paystackKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      amount: totalAmount,
      ref: data.reference,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
