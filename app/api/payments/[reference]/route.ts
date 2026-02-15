import { NextRequest, NextResponse } from "next/server";
import { sanityServer } from "@/sanity/lib/serverClient";

type RouteContext = {
  params: Promise<{ reference: string }>;
};

export async function GET(req: NextRequest, context: RouteContext) {
  // ⚠️ NEW NEXTJS 15 RULE
  const { reference } = await context.params;

  if (!reference) {
    return NextResponse.json(
      { message: "Reference is required" },
      { status: 400 }
    );
  }

  try {
    const payment = await sanityServer.fetch(
      `*[_type == "transcriptPayment" && _id == $ref][0]{
        _id, fullName, matricNumber, email, phone,
        programme, yearOfGraduation, destinationInstitution,
        extraCharge, amount, status, paidAt
      }`,
      { ref: reference }
    );

    if (!payment) {
      return NextResponse.json(
        { message: "Payment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(payment);
  } catch (error: any) {
    console.error("Payment fetch error:", error);
    return NextResponse.json(
      { message: error.message || "Failed to fetch payment" },
      { status: 500 }
    );
  }
}
