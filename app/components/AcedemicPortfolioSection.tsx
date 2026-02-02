// app/components/AcademicPortfolioSection.tsx

"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Programme, programmes } from "@/lib/Programms";

const AcademicPortfolioSection: React.FC = () => {
  // Normalize degree types for tabs
  const normalizedProgrammes = programmes.map((p: Programme) => ({
    ...p,
    degreeType:
      p.degreeType === "M.A" || p.degreeType === "M.Ed"
        ? "MSc"
        : p.degreeType,
  }));

  const pgdProgrammes = normalizedProgrammes.filter(p => p.degreeType === "PGD");
  const mscProgrammes = normalizedProgrammes.filter(p => p.degreeType === "MSc");
  const phdProgrammes = normalizedProgrammes.filter(p => p.degreeType === "PhD");

  return (
    <section id="academic-portfolio" className="py-10 px-4 md:px-16 lg:px-32 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Available Programmes
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Explore postgraduate programmes across TSU faculties. Use the tabs below to view PGD, MSc, and PhD programmes.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="pgd" className="space-y-4">
        <TabsList className="justify-center mb-8">
          <TabsTrigger value="pgd">PGD Programmes</TabsTrigger>
          <TabsTrigger value="msc">MSc Programmes</TabsTrigger>
          <TabsTrigger value="phd">PhD Programmes</TabsTrigger>
        </TabsList>

        {/* PGD Tab Content */}
        <TabsContent value="pgd">
          <div className="max-h-100 overflow-y-auto space-y-3">
            {pgdProgrammes.map(p => (
              <div key={p.id} className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="font-bold font-semibold text-gray-900">{p.programmeName}</p>
                <p className="text-gray-700 text-sm">{p.shortDescription}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* MSc Tab Content */}
        <TabsContent value="msc">
          <div className="max-h-100 overflow-y-auto space-y-3">
            {mscProgrammes.map(p => (
              <div key={p.id} className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="font-bold font-semibold text-gray-900">{p.programmeName}</p>
                <p className="text-gray-700 text-sm">{p.shortDescription}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* PhD Tab Content */}
        <TabsContent value="phd">
          <div className="max-h-100 overflow-y-auto space-y-3">
            {phdProgrammes.map(p => (
              <div key={p.id} className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="font-bold font-semibold text-gray-900">{p.programmeName}</p>
                <p className="text-gray-700 text-sm">{p.shortDescription}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AcademicPortfolioSection;
