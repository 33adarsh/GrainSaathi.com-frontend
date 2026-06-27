"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import translations, { Language } from "../lib/translations";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("grainsathii_lang") as Language;
    if (saved === "hi" || saved === "en") {
      setLanguage(saved);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "hi" : "en";
    setLanguage(newLang);
    localStorage.setItem("grainsathii_lang", newLang);
  };

  const t = (key: string): string => {
    const trans = translations[language];
    // @ts-ignore
    return trans[key] || translations["en"][key] || key;
  };

  // Dynamically set HTML lang tag and class attributes
  useEffect(() => {
    if (!mounted) return;

    document.documentElement.lang = language;
    if (language === "hi") {
      document.documentElement.classList.add("font-devanagari", "leading-relaxed");
    } else {
      document.documentElement.classList.remove("font-devanagari", "leading-relaxed");
    }
  }, [language, mounted]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
