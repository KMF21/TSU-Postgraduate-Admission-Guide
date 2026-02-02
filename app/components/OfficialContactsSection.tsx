// app/components/OfficialContactsSection.tsx

"use client";

import { Mail, MapPin, FileText } from "lucide-react";

interface ContactItem {
  id: string;
  title: string;
  value: string;
  icon: React.ElementType;
}

const contacts: ContactItem[] = [
  {
    id: "c1",
    title: "Email",
    value: "tsupgs@tsuniversity.edu.ng",
    icon: Mail,
  },
  {
    id: "c2",
    title: "Address",
    value: "Secretary, College of Postgraduate Studies, Taraba State University, PMB 1167, Jalingo",
    icon: MapPin,
  },
  {
    id: "c3",
    title: "Transcript Forwarding",
    value:
      "All candidates must request their former institutions to forward either soft or hard copies of their transcripts to the Secretary, College of Postgraduate Studies, TSU or via email.",
    icon: FileText,
  },
];

export const OfficialContactsSection: React.FC = () => {
  return (
    <section id="official-contacts" className="py-10 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Official Contacts
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Reach out to the College of Postgraduate Studies for inquiries or submission of official documents.
        </p>

        {/* Contacts Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <div
                key={contact.id}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6 items-start"
              >
                <div className="mt-1 shrink-0 text-[#2E7D32]">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#003366]">
                    {contact.title}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">{contact.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
