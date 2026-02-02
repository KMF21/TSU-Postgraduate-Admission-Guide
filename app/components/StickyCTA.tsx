// app/components/StickyCTA.tsx

"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      <div className="flex flex-col items-end gap-2">
        {/* Microcopy / Tooltip */}
        {/* <p className="text-sm text-gray-700 italic text-right">
          Connect with fellow applicants, ask questions, and receive timely guidance.
        </p> */}

        {/* CTA Button */}
        <Button
          onClick={() => {
            window.open("https://chat.whatsapp.com/D1A1DtRiFN3Fr2j7iZaRYk?mode=gi_t", "_blank");
          }}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg"
        >
          <MessageCircle size={20} />
          Join the WhatsApp Admission Community
        </Button>
      </div>
    </div>
  );
};
