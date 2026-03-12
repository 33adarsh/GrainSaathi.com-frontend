"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sprout, TrendingUp, Users } from "lucide-react";

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (imagesRef.current) observer.observe(imagesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-green-50/80 via-white to-emerald-50/60 overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-green-50/50 rounded-full blur-3xl" />

      {/* Background image with green overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2689&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:py-32 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left z-10">
          {/* Badge */}
          <div className="hero-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/80 text-green-700 font-medium text-sm mb-6 border border-green-200/60 backdrop-blur-sm shadow-sm">
            <Sprout className="h-4 w-4" />
            <span>Empowering Indian Agriculture</span>
          </div>

          {/* Heading */}
          <h1 className="hero-fade-up text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight mb-6 leading-[1.1]">
            Direct Trading for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Quality Grains
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-fade-up text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Grain Saathi connects farmers directly with wholesale buyers and
            agro companies. Fair prices, transparent trading, and secure
            transactions for everyone.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/marketplace"
              className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              Browse Marketplace
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/login"
              className="px-8 py-3.5 rounded-xl bg-white/70 backdrop-blur-sm border border-green-200/60 hover:border-green-400 text-green-700 hover:text-green-800 font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md"
            >
              Join the Network
            </Link>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="hero-stagger grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-green-100/80"
          >
            {[
              { icon: Users, value: "10k+", label: "Active Farmers" },
              { icon: TrendingUp, value: "5M+", label: "Tons Traded" },
              { icon: Sprout, value: "100%", label: "Quality Assured" },
            ].map((stat, i) => (
              <div key={i} className="hero-stagger-item">
                <div className="flex items-center gap-2 text-green-600 mb-1 justify-center lg:justify-start">
                  <stat.icon className="h-5 w-5" />
                  <span className="font-bold text-2xl text-slate-800">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div ref={imagesRef} className="hero-stagger lg:w-1/2 mt-16 lg:mt-0 z-10 w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="hero-stagger-item group relative rounded-2xl overflow-hidden shadow-lg shadow-green-900/10 ring-1 ring-white/60">
                <img
                  src="https://images.unsplash.com/photo-1595085352132-723522a1ce01?q=80&w=800&auto=format&fit=crop"
                  alt="Farmer in field"
                  className="object-cover h-48 w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hero-stagger-item group relative rounded-2xl overflow-hidden shadow-lg shadow-green-900/10 ring-1 ring-white/60">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop"
                  alt="Wheat grains"
                  className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="hero-stagger-item group relative rounded-2xl overflow-hidden shadow-lg shadow-green-900/10 ring-1 ring-white/60">
                <img
                  src="https://images.unsplash.com/photo-1534951474654-87823058c487?q=80&w=800&auto=format&fit=crop"
                  alt="Grain sacks"
                  className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hero-stagger-item group relative rounded-2xl overflow-hidden shadow-lg shadow-green-900/10 ring-1 ring-white/60">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
                  alt="Agriculture landscape"
                  className="object-cover h-48 w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
