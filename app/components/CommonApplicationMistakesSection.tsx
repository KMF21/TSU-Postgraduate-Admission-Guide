// app/components/CommonApplicationMistakesSection.tsx

"use client";

import { AlertTriangle } from "lucide-react";

interface MistakeItem {
  id: string;
  description: string;
}

const commonMistakes: MistakeItem[] = [
  { id: "m1", description: "Submitting incomplete or incorrect O’Level results" },
  { id: "m2", description: "Selecting the wrong programme or degree type" },
  { id: "m3", description: "Missing application deadlines" },
  { id: "m4", description: "Failing to forward transcripts promptly" },
  { id: "m5", description: "Paying fees incorrectly or on unofficial channels" },
];

export const CommonApplicationMistakesSection: React.FC = () => {
  return (
    <section id="common-mistakes" className="py-10 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Avoid These Common Pitfalls
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Careful adherence to these guidelines increases your chance of a smooth application.
        </p>

        {/* Mistake Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {commonMistakes.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mt-1 shrink-0 text-[#D32F2F]">
                <AlertTriangle size={22} />
              </div>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Optional Microcopy */}
        <p className="mt-8 text-center text-sm text-gray-600 italic">
          Following these tips carefully can help you avoid delays or issues with your application.
        </p>
      </div>
    </section>
  );
};
