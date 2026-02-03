// app/components/ApplicationProcessSection.tsx

"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepItem {
  id: string;
  step: string;
  description: string;
}

const applicationSteps: StepItem[] = [
  {
    id: "s1",
    step: "Step 1",
    description: "Confirm eligibility based on programme requirements.",
  },
  {
    id: "s2",
    step: "Step 2",
    description: "Register online at the TSU application portal.",
  },
  {
    id: "s3",
    step: "Step 3",
    description: "Pay the non-refundable application fee (₦35,000) and Screening fee (10,000)",
  },
  {
    id: "s4",
    step: "Step 4",
    description: "Complete and submit your online application form.",
  },
  {
    id: "s5",
    step: "Step 5",
    description: "Request your former institution to forward transcripts (soft or hard copy) to the Secretary, College of Postgraduate Studies, TSU.",
  },
  {
    id: "s6",
    step: "Step 6",
    description: "Await confirmation and updates from the PG School.",
  },
];

export const ApplicationProcessSection: React.FC = () => {
  return (
    <section id="application-process" className="py-10 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Application Process
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Follow these steps to complete your postgraduate application successfully.
        </p>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {applicationSteps.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="mt-1 shrink-0 text-[#2E7D32]">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#003366]">
                  {item.step}
                </h3>
                <p className="mt-1 text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button
            onClick={() => window.open("https://application.tsuniversity.edu.ng/register.php", "_blank")}
            variant="default"
          >
            Start Your Application
          </Button>
        </div>
      </div>
    </section>
  );
};
