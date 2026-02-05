// app/components/BulletinBoardSection.tsx

"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BulletinItem {
  id: string;
  title: string;
  date: string;
}

const bulletins: BulletinItem[] = [
  { id: "b1", title: "Application portal opens", date: "30-01-2026" },
  { id: "b2", title: "Application deadline", date: "30-03-2026" },
  { id: "b3", title: "Screening / interviews", date: "00-00-2026" },
];

export const BulletinBoardSection: React.FC = () => {
  return (
    <section id="bulletin-board" className="py-10 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Important Dates & Updates
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Stay updated with the official postgraduate admission dates and announcements.
        </p>

        {/* Bulletin List */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {bulletins.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6 items-center"
            >
              <div className="mt-1 shrink-0 text-[#D32F2F]">
                <AlertCircle size={22} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#003366]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-10">
          <Button
            onClick={() => alert("Subscription feature coming soon!")}
            variant="default"
          >
            Subscribe for Updates
          </Button>
        </div> */}
      </div>
    </section>
  );
};
