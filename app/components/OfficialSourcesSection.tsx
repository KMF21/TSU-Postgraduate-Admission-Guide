// app/components/OfficialSourcesSection.tsx

"use client";

import { FileText } from "lucide-react";

interface SourceItem {
  id: string;
  title: string;
  link?: string;
}

const sources: SourceItem[] = [
  { id: "s1", title: "PG School 2024/2025 Advertisement", link: "#" },
  { id: "s2", title: "TSU Application Portal", link: "https://application.tsuniversity.edu.ng/register.php" },
];

export const OfficialSourcesSection: React.FC = () => {
  return (
    <section id="official-sources" className="py-10 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Official Sources
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          All information is sourced from official TSU announcements.
        </p>

        {/* Sources List */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sources.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6 items-center"
            >
              <div className="mt-1 shrink-0 text-[#2E7D32]">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#003366]">{item.title}</h3>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Visit
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional Microcopy */}
        <p className="mt-8 text-center text-sm text-gray-600 italic">
          Check official sources regularly for updates.
        </p>
      </div>
    </section>
  );
};
