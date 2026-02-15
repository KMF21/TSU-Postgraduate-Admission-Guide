"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type TranscriptFormInputs = {
  fullName: string;
  matricNumber: string;
  email: string;
  phone: string;
  programme: string;
  yearOfGraduation: string;
  destinationInstitution: string;
};

export default function TranscriptPaymentPage() {
  const { register, handleSubmit } = useForm<TranscriptFormInputs>();
  const router = useRouter();
  const [paystackLoaded, setPaystackLoaded] = useState(false);

  // Load Paystack script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setPaystackLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit: SubmitHandler<TranscriptFormInputs> = (data) => {
    if (!paystackLoaded) {
      toast.info("Payment system is still loading. Please wait a moment...");
      return;
    }

    // Generate unique transaction reference
    const reference = uuidv4();

    // Base transcript fee (edit anytime)
    const BASE_FEE = 5000;
    const SERVICE_CHARGE = 200;
    const amount = BASE_FEE + SERVICE_CHARGE;

    try {
      const handler = (window as any).PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email: data.email,
        amount: amount * 100, // Paystack expects kobo
        currency: "NGN",
        ref: reference,

        // IMPORTANT: This metadata travels to Paystack → webhook → your server
        metadata: {
          fullName: data.fullName,
          matricNumber: data.matricNumber,
          phone: data.phone,
          programme: data.programme,
          yearOfGraduation: data.yearOfGraduation,
          destinationInstitution: data.destinationInstitution,
          serviceCharge: SERVICE_CHARGE,
        },

        // DO NOT SAVE PAYMENT HERE
        callback: function (response: any) {
          toast.success("Payment received. Generating receipt...");

          // Redirect immediately
          // Paystack webhook will securely confirm payment
          router.push(`/receipts/${response.reference}`);
        },

        onClose: function () {
          toast.warn("Payment window closed. Transaction not completed.");
        },
      });

      handler.openIframe();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-[#0055A4] mb-2">
        Transcript Payment
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        Taraba State University — Postgraduate Transcript Request
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label>Full Name</Label>
          <Input {...register("fullName", { required: true })} />
        </div>

        <div>
          <Label>Matric Number</Label>
          <Input {...register("matricNumber", { required: true })} />
        </div>

        <div>
          <Label>Email Address</Label>
          <Input type="email" {...register("email", { required: true })} />
        </div>

        <div>
          <Label>Phone Number</Label>
          <Input {...register("phone", { required: true })} />
        </div>

        <div>
          <Label>Programme</Label>
          <Input {...register("programme", { required: true })} />
        </div>

        <div>
          <Label>Year of Graduation</Label>
          <Input
            type="number"
            {...register("yearOfGraduation", { required: true })}
          />
        </div>

        <div>
          <Label>Destination Institution</Label>
          <Input {...register("destinationInstitution", { required: true })} />
        </div>

        {/* Fee Breakdown */}
        <div className="bg-blue-50 border rounded-md p-4 text-sm">
          <p className="flex justify-between">
            <span>Transcript Fee</span>
            <span>₦5,200</span>
          </p>
         
          <hr className="my-2" />
          <p className="flex justify-between font-semibold text-[#0055A4]">
            <span>Total</span>
            <span>₦5,200</span>
          </p>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white"
        >
          Proceed to Pay
        </Button>
      </form>

      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}
