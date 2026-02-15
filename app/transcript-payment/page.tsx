"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ------------------ Zod Schema ------------------
const transcriptSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  matricNumber: z.string().min(1, "Matric Number is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  programme: z.string().min(1, "Programme is required"),
  yearOfGraduation: z
    .string()
    .min(1, "Year of Graduation is required")
    .regex(/^\d{4}$/, "Enter a valid year"),
  destinationInstitution: z
    .string()
    .min(1, "Destination Institution is required"),
});

type TranscriptFormInputs = z.infer<typeof transcriptSchema>;

export default function TranscriptPaymentPage() {
  const router = useRouter();
  const [paystackLoaded, setPaystackLoaded] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  const BASE_FEE = 10000;
  const SERVICE_CHARGE = 300;
  const totalAmount = BASE_FEE + SERVICE_CHARGE;

  // React Hook Form + Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TranscriptFormInputs>({
    resolver: zodResolver(transcriptSchema),
  });

  // Load Paystack script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setPaystackLoaded(true);
    document.body.appendChild(script);

    return () => void document.body.removeChild(script);
  }, []);

const onSubmit = (data: TranscriptFormInputs) => {
  if (!paystackLoaded) {
    toast.info("Payment system is still loading. Please wait a moment...");
    return;
  }

  setIsPaying(true);
  const reference = uuidv4();

  // Make sure handler is a var and functions are normal functions
  const handler = (window as any).PaystackPop.setup({
    key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    email: data.email,
    amount: totalAmount * 100,
    currency: "NGN",
    ref: reference,
    metadata: { ...data, serviceCharge: SERVICE_CHARGE, reference },

    // ✅ Must be normal functions
    callback: function (response: any) {
      toast.success("Payment successful! Saving to server...");

      fetch("/api/paystack/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: response.reference }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Webhook failed");
          router.push(`/receipts/${response.reference}`);
        })
        .catch((err) => {
          console.error("Error saving payment:", err);
          toast.error(
            "Payment succeeded but could not save record. Contact support."
          );
          setIsPaying(false);
        });
    },

    onClose: function () {
      toast.warn("Payment window closed. Transaction not completed.");
      setIsPaying(false);
    },
  });

  handler.openIframe();
};


  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md md:mt-22">
      <h1 className="text-2xl font-bold text-[#0055A4] mb-2">
        Transcript Payment
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Taraba State University — Postgraduate Transcript Request
      </p>

      {/* Fee Breakdown */}
      <div className="bg-blue-50 border rounded-md p-4 text-sm mb-3">
        <p className="flex justify-between font-semibold">
          <span>Transcript Fee</span>
          <span>₦{totalAmount.toLocaleString()}</span>
        </p>
        <hr className="my-2" />
        <p className="flex justify-between font-semibold text-[#0055A4]">
          <span>Total</span>
          <span>₦{totalAmount.toLocaleString()}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {[
          { label: "Full Name", name: "fullName" },
          { label: "Matric Number", name: "matricNumber" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone" },
          { label: "Programme", name: "programme" },
          {
            label: "Year of Graduation",
            name: "yearOfGraduation",
            type: "number",
          },
          { label: "Destination Institution", name: "destinationInstitution" },
        ].map((field) => (
          <div key={field.name}>
            <Label>{field.label}</Label>
            <Input
              type={field.type || "text"}
              {...register(field.name as keyof TranscriptFormInputs)}
            />
            {errors[field.name as keyof TranscriptFormInputs] && (
              <p className="text-red-600 text-sm mt-1">
                {errors[field.name as keyof TranscriptFormInputs]?.message}
              </p>
            )}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full cursor-pointer bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center justify-center"
          disabled={isPaying}
        >
          {isPaying ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Proceed to Pay"
          )}
        </Button>
      </form>

      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}
