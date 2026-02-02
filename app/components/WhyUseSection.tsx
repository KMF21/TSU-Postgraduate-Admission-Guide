import {
  CheckCircle,
  FileText,
  AlertTriangle,
  LayoutGrid,
  MessageCircle,
} from "lucide-react";

type BenefitItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const benefits: BenefitItem[] = [
  {
    title: "Verified and up-to-date information",
    description:
      "Reduces confusion by presenting only verified and current postgraduate admission information sourced from official university notices.",
    icon: CheckCircle,
  },
  {
    title: "Clear application guidance",
    description:
      "Provides a step-by-step guide to the postgraduate application process, from eligibility checks to final submission.",
    icon: FileText,
  },
  {
    title: "Common mistakes highlighted",
    description:
      "Draws attention to frequent application errors and how to avoid them, improving application accuracy.",
    icon: AlertTriangle,
  },
  {
    title: "Centralized academic information",
    description:
      "Offers a single, organized location for programme listings, admission requirements, and official updates.",
    icon: LayoutGrid,
  },
  {
    title: "Applicant support community",
    description:
      "Connects applicants to a supportive WhatsApp community for discussion, shared experiences, and guidance.",
    icon: MessageCircle,
  },
];

export function WhyUseSection() {
  return (
    <section id="why-use" className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Why Use This Platform?</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="mt-1 shrink-0 text-[#2E7D32]">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#003366]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
