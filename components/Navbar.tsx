"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname?.startsWith('/dashboard')) return null;

  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = false; // Mock logged-in farmer state for listing creation

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50
        transition-all duration-500 ease-out
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-green-600/8 border-b border-green-200/40"
            : "bg-white/90 backdrop-blur-md shadow-md shadow-green-600/5"
        }
        rounded-b-2xl
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1 h-16 sm:h-20 overflow-hidden items-center relative group">
            <Link href="/" className="flex items-center w-full h-full relative">
              <div className="absolute inset-0 flex items-center justify-start mix-blend-multiply contrast-125 transform scale-[2.5] origin-left ml-4 md:scale-[3] md:ml-6 group-hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/images/logo.png"
                  alt="Grain Saathi Logo"
                  width={300}
                  height={100}
                  className="w-auto h-full object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="nav-link text-sm tracking-wide">
              {t("nav.home")}
            </Link>
            <Link href="/marketplace" className="nav-link text-sm tracking-wide">
              {t("nav.marketplace")}
            </Link>
            <Link href="/products" className="nav-link text-sm tracking-wide">
              {t("nav.products")}
            </Link>
            <Link href="/about" className="nav-link text-sm tracking-wide">
              {t("nav.about")}
            </Link>
            <Link href="/contact" className="nav-link text-sm tracking-wide">
              {t("nav.contact")}
            </Link>
            <Link href="/pricing" className="nav-link text-sm tracking-wide">
              {t("nav.pricing")}
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageToggle />
            <button
              className="p-2.5 rounded-xl text-green-700 hover:bg-green-50 hover:text-green-800 transition-all duration-300 cursor-pointer"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="p-2.5 rounded-xl text-green-700 hover:bg-green-50 hover:text-green-800 transition-all duration-300 cursor-pointer"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            {isLoggedIn && (
              <Link
                href="/post-listing"
                className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold rounded-xl text-xs shadow-sm hover:shadow transition-all duration-200 cursor-pointer shrink-0"
              >
                {t("nav.postListing")}
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-green-700 hover:bg-green-50 transition-all duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-md rounded-b-2xl border-t border-green-100/40 shadow-lg flex flex-col gap-0.5">
          <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between mb-2">
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Select Language</span>
            <LanguageToggle />
          </div>
          
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-green-700 hover:bg-green-50 font-medium transition-all duration-200"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/marketplace"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-green-700 hover:bg-green-50 font-medium transition-all duration-200"
          >
            {t("nav.marketplace")}
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-green-700 hover:bg-green-50 font-medium transition-all duration-200"
          >
            {t("nav.products")}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-green-700 hover:bg-green-50 font-medium transition-all duration-200"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-green-700 hover:bg-green-50 font-medium transition-all duration-200"
          >
            {t("nav.contact")}
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-green-700 hover:bg-green-50 font-medium transition-all duration-200"
          >
            {t("nav.pricing")}
          </Link>
          {isLoggedIn && (
            <Link
              href="/post-listing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-xs text-center transition-all duration-200 mt-2"
            >
              {t("nav.postListing")}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
