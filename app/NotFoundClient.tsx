"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFoundClient() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-100 shadow-lg flex flex-col items-center gap-6">
        
        {/* Large SVG illustration: tractor/field scene */}
        <svg
          viewBox="0 0 200 120"
          className="w-64 h-auto text-green-600 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sky & Clouds */}
          <path d="M20 30 Q30 20 40 30 T60 30" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M140 25 Q150 15 160 25 T180 25" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" />

          {/* Curved Ground Fields */}
          <path
            d="M5 110 Q50 95 100 110 T195 110"
            stroke="#bbf7d0"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M10 115 Q70 105 130 115 T190 115"
            stroke="#86efac"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Sun */}
          <circle cx="170" cy="35" r="10" fill="#fef08a" />
          <circle cx="170" cy="35" r="7" fill="#fde047" />

          {/* Tractor Cabin & Body */}
          <rect x="75" y="60" width="30" height="22" rx="2" fill="#15803d" />
          <rect x="60" y="70" width="20" height="22" rx="2" fill="#16a34a" />
          <rect x="79" y="63" width="10" height="8" rx="1" fill="#f8fafc" /> {/* Cabin window */}
          <line x1="80" y1="82" x2="80" y2="92" stroke="#475569" strokeWidth="2" /> {/* Steering shaft */}
          
          {/* Engine chimney exhaust */}
          <line x1="65" y1="70" x2="65" y2="58" stroke="#475569" strokeWidth="2.5" />
          <path d="M63 58 H67" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Wheels */}
          <circle cx="92" cy="92" r="12" fill="#334155" />
          <circle cx="92" cy="92" r="6" fill="#94a3b8" />
          <circle cx="68" cy="94" r="8" fill="#334155" />
          <circle cx="68" cy="94" r="4" fill="#94a3b8" />

          {/* Little green sprouts on the ground */}
          <path d="M25 105 Q28 100 27 96" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M27 96 Q32 99 35 104" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
          
          <path d="M125 108 Q128 103 127 99" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M127 99 Q132 102 135 107" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Text descriptions */}
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">
            {t("404.title") || "Oops! Page Not Found"}
          </h2>
          <p className="text-sm text-slate-500 font-semibold mt-2">
            {t("404.subtitle") || "Looks like this agricultural field is empty."}
          </p>
        </div>

        {/* Navigation actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
          <Link
            href="/"
            className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold rounded-xl text-xs shadow-md shadow-green-500/10 hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span>{t("404.backHome") || "Go Back Home"}</span>
          </Link>
          <Link
            href="/marketplace"
            className="flex-1 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ShoppingBag className="h-4 w-4 shrink-0" />
            <span>{t("nav.marketplace") || "Marketplace"}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
