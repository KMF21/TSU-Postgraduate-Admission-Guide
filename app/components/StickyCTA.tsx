// app/components/StickyCTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const StickyCTA: React.FC = () => {
  const handleClick = () => {
    window.open(
      "https://chat.whatsapp.com/D1A1DtRiFN3Fr2j7iZaRYk?mode=gi_t",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50">
      <Button
        onClick={handleClick}
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#1ebe57]"
        aria-label="Join the TSU Postgraduate WhatsApp Admission Community"
      >
        <MessageCircle className="h-5 w-5" />

        {/* Mobile: short label | Desktop: full text */}
        <span className="text-sm font-medium md:hidden">
          Join WhatsApp
        </span>

        <span className="hidden text-sm font-medium md:inline">
          Join the WhatsApp Admission Community
        </span>
      </Button>
    </div>
  );
};
