"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-3.5 select-none">
      {faqs.map((faq, idx) => {
        const isOpen = activeIndex === idx;

        return (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
          >
            {/* Clickable Header Button */}
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-700 hover:bg-slate-50/50 hover:text-slate-900 transition-colors cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{faq.question}</span>
              <span className="text-slate-400 shrink-0">
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 transition-transform duration-300 stroke-[2.5]" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform duration-300 stroke-[2.5]" />
                )}
              </span>
            </button>

            {/* Answer Content Wrapper */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 border-t border-slate-50/50 text-slate-500 leading-relaxed text-sm">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
