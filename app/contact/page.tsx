"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  const FAQS_LIST = [
    {
      question: t("contact.faq1.q") || "How do I register as a farmer?",
      answer: t("contact.faq1.a") || "You can register by clicking the 'Register as Farmer' option on the homepage, filling in your profile details, and providing basic documents like Land Revenue Records or a Kisan Card to activate verified status.",
    },
    {
      question: t("contact.faq2.q") || "Is Grain Saathi free to use?",
      answer: t("contact.faq2.a") || "Yes, listing crop produce and browsing listings is completely free. We charge a minimal clearing fee only when a commodity trade transaction is successfully completed.",
    },
    {
      question: t("contact.faq3.q") || "How are payments handled?",
      answer: t("contact.faq3.a") || "Payments are handled securely via our clearing house mechanism. Buyers deposit funds into a secure escrow account, which is directly dispatched to the farmer's verified bank account upon crop delivery and quality verification.",
    },
    {
      question: t("contact.faq4.q") || "Can I list multiple grain types?",
      answer: t("contact.faq4.a") || "Absolutely. Farmers can post multiple crop listings for different grains like Wheat, Rice, Maize, Soybean, Mustard, and Pulses concurrently under their single account.",
    },
    {
      question: t("contact.faq5.q") || "How does quality verification work?",
      answer: t("contact.faq5.a") || "listings are marked with Quality Grades (Grade A, B, or C). We offer on-field inspection and certificate updates for crop moisture levels and impurities to guarantee quality transparency.",
    },
    {
      question: t("contact.faq6.q") || "What states are currently supported?",
      answer: t("contact.faq6.a") || "We currently support trade operations across 10 agricultural states including Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Rajasthan, Maharashtra, Bihar, Karnataka, Andhra Pradesh, and Gujarat.",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Query");
  const [message, setMessage] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock dispatch delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">{t("contact.title") || "Contact & Support"}</h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-5" />
          <p className="text-lg text-slate-500 leading-relaxed">
            {t("contact.subtitle") || "Have questions about trading, payments, or registration? Get in touch with our team or browse the FAQ section."}
          </p>
        </div>

        {/* Two-Column Desktop / One-Column Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Details & Form */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Contact Details Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-6">
              <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-3">
                {t("contact.getInTouch")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("contact.emailUs") || "Email Us"}</span>
                    <a href="mailto:support@grainsaathi.com" className="text-sm font-semibold text-slate-700 hover:text-green-600 truncate transition-colors">
                      support@grainsaathi.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("contact.callSupport") || "Call Support"}</span>
                    <span className="text-sm font-semibold text-slate-700">
                      +91 98765 43210
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("contact.hq") || "Headquarters"}</span>
                    <span className="text-sm font-semibold text-slate-700">
                      Patna, Bihar, India
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("contact.officeHours") || "Office Hours"}</span>
                    <span className="text-sm font-semibold text-slate-700">
                      {t("contact.officeHoursVal") || "Mon-Sat, 9am–6pm"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Container */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-5">
              <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-3">
                {t("contact.sendMsgHeader") || "Send us a Message"}
              </h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center flex flex-col items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="h-10 w-10 text-green-600 stroke-[2.5]" />
                  <div>
                    <h4 className="font-extrabold text-green-800 text-sm">{t("contact.msgSuccess") || "Message Sent Successfully!"}</h4>
                    <p className="text-xs text-green-700 mt-1">
                      {t("contact.msgSuccessSub") || "We'll get back to you within 24 hours!"}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-bold text-green-700 hover:text-green-800 hover:underline cursor-pointer"
                  >
                    {t("contact.sendAnother") || "Send another query"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {t("contact.yourName") || "Your Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder={t("contact.placeholderName") || "e.g. Ramesh Kumar"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {t("contact.emailAddr") || "Email Address"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder={t("contact.placeholderEmail") || "e.g. ramesh@example.com"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {t("contact.topic") || "Topic / Subject"}
                    </label>
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    >
                      <option value="General Query">{t("contact.subject.general") || "General Query"}</option>
                      <option value="Partnership">{t("contact.subject.partner") || "Partnership"}</option>
                      <option value="Technical Issue">{t("contact.subject.tech") || "Technical Issue"}</option>
                      <option value="Feedback">{t("contact.subject.feedback") || "Feedback"}</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {t("contact.msgInquiry") || "Inquiry Message"}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder={t("contact.placeholderMsg") || "Type details of your request here..."}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold rounded-xl shadow-md shadow-green-500/20 disabled:opacity-50 text-sm cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Send className="h-4 w-4 shrink-0" />
                    <span>{isSubmitting ? t("contact.sending") : t("contact.sendMessage")}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: FAQ ACCORDION */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-6 h-full">
              <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-3">
                {t("contact.faq")}
              </h3>
              
              {/* Reusable accordion */}
              <FAQAccordion faqs={FAQS_LIST} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

