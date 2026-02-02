// app/components/FAQSection.tsx

"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FileText } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq1",
    question: "Is MSc Computer Science offered at TSU?",
    answer: "Yes. MSc Computer Science is available under the Department of Mathematical Sciences.",
  },
  {
    id: "faq2",
    question: "Can I submit transcripts electronically?",
    answer: "Yes, your former institution can forward either soft or hard copies to the College of Postgraduate Studies.",
  },
  {
    id: "faq3",
    question: "What is the application fee for all programmes?",
    answer: "The non-refundable application fee for all advertised programmes is ₦20,300.",
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-10 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Find answers to the most common queries about TSU postgraduate admissions.
        </p>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="flex items-center gap-3 text-[#003366] font-semibold">
                <FileText size={20} />
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-sm mt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
