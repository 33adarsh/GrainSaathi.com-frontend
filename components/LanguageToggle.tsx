"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center p-0.5 bg-slate-100 rounded-full border border-slate-200 text-[10px] md:text-xs font-extrabold cursor-pointer hover:bg-slate-200/50 transition-all select-none shrink-0"
      aria-label="Toggle Language"
    >
      <span
        className={`px-2 py-1 rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-green-600 text-white shadow-sm font-black"
            : "text-slate-500 font-semibold"
        }`}
      >
        EN
      </span>
      <span
        className={`px-2 py-1.5 rounded-full transition-all duration-200 ${
          language === "hi"
            ? "bg-green-600 text-white shadow-sm font-black"
            : "text-slate-500 font-semibold"
        }`}
      >
        हि
      </span>
    </button>
  );
}
