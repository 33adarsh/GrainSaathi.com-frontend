"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, Zap, Leaf, Building2, HelpCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { useLanguage } from "@/context/LanguageContext";

export default function PricingPage() {
  const { t } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const BILLING_FAQS = [
    {
      question: t("pricing.faq1.q") || "Can I switch from Monthly to Yearly billing later?",
      answer: t("pricing.faq1.a") || "Yes, you can upgrade to Yearly billing at any time from your partner settings dashboard to enjoy 2 months free of charge immediately.",
    },
    {
      question: t("pricing.faq2.q") || "Is there a lock-in contract period for Farmer Premium?",
      answer: t("pricing.faq2.a") || "No lock-in contracts. You can cancel your Farmer Premium subscription at any time, and you will retain access to premium features until your current billing period ends.",
    },
    {
      question: t("pricing.faq3.q") || "What payment channels are supported?",
      answer: t("pricing.faq3.a") || "We support all UPI applications, credit/debit cards, net banking, and direct bank transfers managed securely by our clearing house partner.",
    },
  ];

  const COMPARISON_FEATURES = [
    { name: t("pricing.feat.capacity") || "Listings Capacity", free: t("pricing.val.upto3") || "Up to 3 products", pro: t("pricing.val.unlimited") || "Unlimited", buyer: "N/A" },
    { name: t("pricing.feat.browse") || "Browse Listings", free: t("pricing.val.basic") || "Basic", pro: t("pricing.val.full") || "Full Access", buyer: t("pricing.val.unlimited") || "Unlimited" },
    { name: t("pricing.feat.receive") || "Receive Inquiries", free: true, pro: true, buyer: "N/A" },
    { name: t("pricing.feat.send") || "Send Inquiries", free: "N/A", pro: "N/A", buyer: t("pricing.val.unlimited") || "Unlimited" },
    { name: t("pricing.feat.priority") || "Priority Search Placement", free: false, pro: true, buyer: "N/A" },
    { name: t("pricing.feat.badge") || "Profile Verification Badge", free: false, pro: true, buyer: "N/A" },
    { name: t("pricing.feat.whatsapp") || "WhatsApp Alert Logs", free: false, pro: true, buyer: "N/A" },
    { name: t("pricing.feat.analytics") || "Analytics Dashboard", free: false, pro: true, buyer: "N/A" },
    { name: t("pricing.feat.wishlist") || "Wishlist Save Limit", free: "N/A", pro: "N/A", buyer: t("pricing.val.upto50") || "Up to 50 items" },
    { name: t("pricing.feat.support") || "Dedicated Support Agent", free: t("pricing.val.email") || "Email support", pro: t("pricing.val.priority247") || "24/7 Priority", buyer: t("pricing.val.standard") || "Standard" },
  ];

  const isYearly = billingPeriod === "yearly";

  const getProPrice = () => {
    return isYearly ? "₹4,990" : "₹499";
  };

  const getProPeriod = () => {
    return isYearly ? "/year" : "/month";
  };

  const renderComparisonValue = (val: any) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="h-5 w-5 text-green-600 stroke-[2.5] mx-auto" />
      ) : (
        <X className="h-5 w-5 text-slate-350 mx-auto" />
      );
    }
    return <span className="text-xs text-slate-500 font-semibold">{val}</span>;
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: HEADER & TOGGLE */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            {t("pricing.title")}
          </h1>
          <p className="text-slate-500 text-base leading-relaxed">
            {t("pricing.subtitle") || "No hidden clearing fees. Cancel your subscription at any time."}
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200 mt-4">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                !isYearly ? "bg-white text-green-700 shadow-sm" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {t("pricing.billedMonthly") || "Billed Monthly"}
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                isYearly ? "bg-white text-green-700 shadow-sm" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>{t("pricing.billedYearly") || "Billed Yearly"}</span>
              <span className="bg-green-100 text-green-700 font-black text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                {t("pricing.twoMosFree") || "2 mos free"}
              </span>
            </button>
          </div>
        </div>

        {/* SECTION 2: PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto mb-20">
          
          {/* Card 1: FREE - Farmer Basic */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base">{t("pricing.farmerBasic") || "Farmer Basic"}</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t("pricing.freePlan") || "Free Plan"}</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline">
                <span className="text-3xl font-black text-slate-800 tracking-tight">₹0</span>
                <span className="text-xs font-semibold text-slate-400 ml-1">/month</span>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-3.5 border-t border-slate-50 pt-5 text-sm font-semibold text-slate-500">
                {[
                  t("pricing.val.upto3") || "List up to 3 products",
                  t("pricing.val.basicProfile") || "Basic partner profile",
                  t("pricing.val.receiveInquiries") || "Receive buyer inquiries",
                  t("pricing.val.emailSupport") || "Standard email support",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4.5 w-4.5 text-green-600 shrink-0 stroke-[2.5]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/register"
              className="w-full mt-8 py-3 text-center border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              {t("pricing.getStartedFree") || "Get Started Free"}
            </Link>
          </div>

          {/* Card 2: PRO - Farmer Premium */}
          <div className="bg-white border-2 border-green-500 rounded-3xl p-6 flex flex-col justify-between shadow-lg relative overflow-hidden transform md:scale-[1.04] z-10">
            <span className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-[9px] font-black rounded-full uppercase tracking-wider shadow-sm">
              {t("pricing.mostPopular")}
            </span>

            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-green-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-green-500/25">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-800 text-base">{t("pricing.farmerPremium") || "Farmer Premium"}</h3>
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">{t("pricing.priorityAccess") || "Priority Access"}</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline">
                <span className="text-3xl font-black text-slate-855 tracking-tight">{getProPrice()}</span>
                <span className="text-xs font-semibold text-slate-400 ml-1">{getProPeriod()}</span>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-3.5 border-t border-slate-50 pt-5 text-sm font-semibold text-slate-500">
                {[
                  t("pricing.val.unlimitedListings") || "Unlimited crop listings",
                  t("pricing.val.prioritySearch") || "Priority search placement",
                  t("pricing.val.verifiedBadge") || "Verified badge overlay",
                  t("pricing.val.whatsappAlerts") || "WhatsApp alert notifications",
                  t("pricing.val.analyticsDashboard") || "Analytics logs dashboard",
                  t("pricing.val.dedicatedSupport") || "24/7 dedicated support",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4.5 w-4.5 text-green-600 shrink-0 stroke-[2.5]" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/register"
              className="w-full mt-8 py-3 text-center bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold rounded-xl text-xs shadow-md shadow-green-500/20 hover:shadow-lg transition-all cursor-pointer"
            >
              {t("pricing.upgradePremium") || "Upgrade to Premium"}
            </Link>
          </div>

          {/* Card 3: BUYER - Always Free */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base">{t("pricing.buyerPlan") || "Buyer Plan"}</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t("pricing.enterprise") || "Enterprise"}</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline">
                <span className="text-3xl font-black text-slate-800 tracking-tight">{t("pricing.alwaysFree") || "Always Free"}</span>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-3.5 border-t border-slate-50 pt-5 text-sm font-semibold text-slate-500">
                {[
                  t("pricing.val.unlimitedBrowse") || "Unlimited marketplace browsing",
                  t("pricing.val.unlimitedInquiries") || "Send unlimited farmer inquiries",
                  t("pricing.val.save50") || "Save up to 50 products",
                  t("pricing.val.trackingLogs") || "Order status tracking logs",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4.5 w-4.5 text-green-600 shrink-0 stroke-[2.5]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/register"
              className="w-full mt-8 py-3 text-center border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              {t("pricing.registerBuyer") || "Register as Buyer"}
            </Link>
          </div>

        </div>

        {/* SECTION 3: COMPARISON MATRIX TABLE */}
        <div className="max-w-4xl mx-auto mb-24 flex flex-col gap-6">
          <h3 className="text-xl font-black text-slate-800 text-center">
            {t("pricing.detailedComparison") || "Detailed Plan Comparison"}
          </h3>

          <div className="w-full overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-sm">
            <table className="w-full min-w-[650px] text-center text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-700 font-extrabold">
                  <th className="px-6 py-4 text-left">{t("pricing.feature") || "Feature"}</th>
                  <th className="px-6 py-4">{t("pricing.farmerBasic") || "Farmer Basic"}</th>
                  <th className="px-6 py-4 text-green-700">{t("pricing.farmerPremium") || "Farmer Premium"}</th>
                  <th className="px-6 py-4">{t("pricing.buyerPlan") || "Buyer Plan"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                {COMPARISON_FEATURES.map((feat) => (
                  <tr key={feat.name} className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-3.5 text-left font-bold text-slate-700">{feat.name}</td>
                    <td className="px-6 py-3.5">{renderComparisonValue(feat.free)}</td>
                    <td className="px-6 py-3.5 font-bold text-slate-700">
                      {renderComparisonValue(feat.pro)}
                    </td>
                    <td className="px-6 py-3.5">{renderComparisonValue(feat.buyer)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4: PRICING FAQS */}
        <div className="max-w-2xl mx-auto mb-20 flex flex-col gap-6">
          <h3 className="text-xl font-black text-slate-800 text-center flex items-center justify-center gap-2">
            <HelpCircle className="h-5 w-5 text-green-600" />
            <span>{t("pricing.pricingFaqs") || "Pricing FAQs"}</span>
          </h3>
          <FAQAccordion faqs={BILLING_FAQS} />
        </div>

        {/* SECTION 5: QUESTIONS CTA */}
        <div className="bg-green-50 border border-green-100 rounded-3xl p-8 text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
          <h4 className="font-extrabold text-green-800 text-lg">{t("pricing.stillHaveQuestions") || "Still have questions?"}</h4>
          <p className="text-xs text-green-700 max-w-xs font-semibold leading-relaxed">
            {t("pricing.teamHelp") || "Our trade relations team is happy to help you with platform subscriptions, mandis integrations, and billing queries."}
          </p>
          <a
            href="/contact"
            className="mt-2 px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            {t("pricing.contactSupport") || "Contact Support Desk"}
          </a>
        </div>

      </div>
    </div>
  );
}

