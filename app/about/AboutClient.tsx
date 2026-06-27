"use client";

import React from "react";
import Link from "next/link";
import { UserPlus, ShoppingBag, Handshake, Globe, Award, TrendingUp, Users, Sprout, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutClient() {
  const { t } = useLanguage();

  const HOW_IT_WORKS_STEPS = [
    {
      step: "01",
      icon: UserPlus,
      title: t("about.step1Title") || "Register Account",
      description: t("about.step1Desc") || "Sign up securely as a farmer partner or wholesale buyer with verified credentials.",
    },
    {
      step: "02",
      icon: ShoppingBag,
      title: t("about.step2Title") || "List & Browse",
      description: t("about.step2Desc") || "Farmers post their harvested produce with grade specs. Buyers browse listings and compare prices.",
    },
    {
      step: "03",
      icon: Handshake,
      title: t("about.step3Title") || "Negotiate & Trade",
      description: t("about.step3Desc") || "Initiate contact, discuss parameters directly, and conclude transactions with full transparency.",
    },
  ];

  const IMPACT_METRICS = [
    { value: "10,000+", label: t("about.impactFarmers") || "Verified Farmers", icon: Users, bg: "bg-green-50 text-green-600 border-green-100" },
    { value: "500+", label: t("about.impactBuyers") || "Wholesale Buyers", icon: Award, bg: "bg-blue-50 text-blue-600 border-blue-100" },
    { value: "5M+", label: t("about.impactTraded") || "Tons Traded", icon: TrendingUp, bg: "bg-amber-50 text-amber-600 border-amber-100" },
    { value: "20+", label: t("about.impactStates") || "States Covered", icon: Globe, bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  ];

  const TEAM_MEMBERS = [
    {
      name: "Arjun Sharma",
      role: t("role.founder") || "Founder & CEO",
      initials: "AS",
      avatarBg: "bg-green-100 text-green-700 border-green-200",
      bio: t("about.founderBio") || "Ex-AgriTech strategist committed to bringing transparency and better margins to Indian farmers.",
    },
    {
      name: "Priya Patel",
      role: t("role.ops") || "Head of Operations",
      initials: "PP",
      avatarBg: "bg-amber-100 text-amber-700 border-amber-200",
      bio: t("about.opsBio") || "Over 8 years managing agricultural supply chains and mandi distribution networks across Central India.",
    },
    {
      name: "Rohit Kumar",
      role: t("role.tech") || "Tech Lead",
      initials: "RK",
      avatarBg: "bg-blue-100 text-blue-700 border-blue-200",
      bio: t("about.techBio") || "Full-stack engineer passionate about building high-performance, accessible digital tools for rural markets.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white select-none">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-green-100/40 to-emerald-50 overflow-hidden text-center">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-200/50 text-green-800 font-bold text-xs uppercase tracking-widest border border-green-300/30">
            <Sprout className="h-4 w-4 shrink-0" />
            <span>{t("about.ourVision") || "Our Vision"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight">
            {t("about.title") || "Connecting India's Farmers to the Digital World"}
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mt-2">
            {t("about.subtitle") || "Grain Saathi is an online agriculture commodity trading platform dedicated to building a transparent, digital-first marketplace. We empower crop producers by linking them directly with wholesale mandis and food corporations."}
          </p>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION CARDS */}
      <section className="py-20 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <h3 className="text-xl font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600 shrink-0" />
                <span>{t("about.ourMission") || "Our Mission"}</span>
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {t("about.missionDesc") || "To build transparent trade lanes where agricultural producers can secure fair market rates without middlemen interventions. By providing live mandi rates, quality grade benchmarks, and direct buyer channels, we ensure margins return to the farm gate."}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <h3 className="text-xl font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
                <span>{t("about.ourVision") || "Our Vision"}</span>
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {t("about.visionDesc") || "To design a digital-first, decentralized agricultural economy for rural India. We envision a future where every kisan has the agency to negotiate directly with corporate commodity buyers, backed by robust logistics, escrow systems, and quality checks."}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">{t("about.howItWorks") || "How It Works"}</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-5 shadow-sm group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-green-100 tracking-tight">
                    {step.step}
                  </span>
                  <div className="h-11 w-11 bg-green-50 rounded-xl flex items-center justify-center text-green-600 border border-green-100/50 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-5 w-5 shrink-0" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-extrabold text-slate-800 text-base">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: IMPACT NUMBERS */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center text-center p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center border shadow-sm shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300 ${metric.bg}`}>
                  <metric.icon className="h-5 w-5 shrink-0" />
                </div>
                <span className="text-3xl font-black text-slate-850 tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TEAM MEMBERS */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">{t("about.leadershipTitle") || "Our Leadership Team"}</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4 text-center items-center hover:shadow-md transition-all duration-300"
              >
                <div className={`h-16 w-16 rounded-2xl border text-xl font-black flex items-center justify-center shadow-md shadow-slate-100 ${member.avatarBg}`}>
                  {member.initials}
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-800 text-lg leading-tight">
                    {member.name}
                  </h4>
                  <span className="text-xs text-green-600 font-bold mt-1 block">
                    {member.role}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-semibold leading-relaxed mt-2">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-emerald-600 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2689&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t("about.ctaTitle") || "Ready to grow your agricultural trades?"}
          </h2>
          <p className="text-base text-white/80 max-w-xl leading-relaxed mt-1">
            {t("about.ctaDesc") || "Join thousands of verified farmers, wholesale buyers, and food processing corporations trading on India's leading digital marketplace."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
            <Link
              href="/register"
              className="px-8 py-3.5 bg-white text-green-700 hover:bg-green-50 font-bold rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-1.5 animate-pulse hover:animate-none"
            >
              <span>{t("about.registerFarmer") || "Register as Farmer"}</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <Link
              href="/register"
              className="px-8 py-3.5 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center"
            >
              {t("about.registerBuyer") || "Register as Buyer"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
