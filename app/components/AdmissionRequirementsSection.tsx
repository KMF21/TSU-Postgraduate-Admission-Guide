// app/components/AdmissionRequirementsSection.tsx

"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface RequirementItem {
  id: string;
  description: string;
}

const generalRequirements: RequirementItem[] = [
  { id: "g1", description: "Minimum of five O’Level credits, including English and Mathematics, in not more than two sittings (WASC, NECO, NABTEB, GCE)" },
  { id: "g2", description: "Bachelor’s degree for PGD, MSc, and PhD applicants" },
  { id: "g3", description: "PhD candidates require a minimum weighted average of 50% (3.5 points)" },
];

const pgdRequirements: RequirementItem[] = [
  { id: "p1", description: "Bachelor’s degree in relevant discipline" },
  { id: "p2", description: "Meet general O’Level credit requirements" },
];

const mscRequirements: RequirementItem[] = [
  { id: "m1", description: "Bachelor’s degree with at least second-class lower division in relevant discipline" },
  { id: "m2", description: "Meet general O’Level credit requirements" },
];

const phdRequirements: RequirementItem[] = [
  { id: "d1", description: "Master’s degree in relevant discipline" },
  { id: "d2", description: "Minimum weighted average of 50% (3.5 points)" },
  { id: "d3", description: "Meet general O’Level credit requirements" },
];

export const AdmissionRequirementsSection: React.FC = () => {
  const renderRequirements = (items: RequirementItem[]) => (
    <div className="grid gap-4 max-h-[400px] overflow-y-auto">
      {items.map(item => (
        <div key={item.id} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
          <div className="mt-1 shrink-0 text-[#2E7D32]">
            <CheckCircle size={22} />
          </div>
          <p className="text-sm text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section id="admission-requirements" className="py-10 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Admission Requirements
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          All applicants must meet general and programme-specific requirements as outlined in the official TSU PG 2024/2025 advert.
        </p>

        <Tabs defaultValue="general" className="space-y-8">
          <TabsList className="justify-center mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="pgd">PGD</TabsTrigger>
            <TabsTrigger value="msc">MSc</TabsTrigger>
            <TabsTrigger value="phd">PhD</TabsTrigger>
          </TabsList>

          <TabsContent value="general">{renderRequirements(generalRequirements)}</TabsContent>
          <TabsContent value="pgd">{renderRequirements(pgdRequirements)}</TabsContent>
          <TabsContent value="msc">{renderRequirements(mscRequirements)}</TabsContent>
          <TabsContent value="phd">{renderRequirements(phdRequirements)}</TabsContent>
        </Tabs>

        {/* CTA */}
        {/* <div className="text-center mt-8">
          <Button
            onClick={() => window.open("https://application.tsuniversity.edu.ng/register.php", "_blank")}
            variant="default"
          >
            Check Detailed Requirements
          </Button>
        </div> */}
      </div>
    </section>
  );
};
