"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PG from "../assets/PG.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-[600px] flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={PG}
          alt="Taraba State University College of Postgraduate Studies"
          fill
          priority
          className="object-cover object-[25%_center]"
          sizes="100vw"
          quality={90}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#003366]/75" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 py-28 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md">
          TSU Postgraduate Admissions Guide
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/90 leading-relaxed">
          Your verified source for postgraduate admission information at Taraba
          State University. Navigate the application process, explore available
          programmes, and stay updated with official announcements.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* 🔥 NEW PAYMENT BUTTON */}
          {/* <Button
            asChild
            size="lg"
            className="bg-[#D4AF37] text-[#003366] hover:bg-[#c39b2f] hover:text-white transition-all font-semibold shadow-xl px-6 py-4 text-base"
          >
            <Link href="/transcript-payment">
              Pay for Transcript Processing
            </Link>
          </Button> */}

          

          {/* WhatsApp Community */}
          {/* <Button
            asChild
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1ebe57] transition-all font-semibold shadow-lg px-6 py-4 text-base"
          >
            <Link href="https://chat.whatsapp.com/D1A1DtRiFN3Fr2j7iZaRYk?mode=gi_t">
              Join the WhatsApp Admission Community
            </Link>
          </Button> */}

          {/* View Requirements */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white bg-white/20 hover:text-[#003366] transition-all px-6 py-4 text-base"
          >
            <Link href="#admission-requirements">View Admission Requirements</Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/70 italic">
          All information is based on the official 2025/2026 PG advert.
        </p>
      </div>
    </section>
  );
}
