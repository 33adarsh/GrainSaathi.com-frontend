"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
              Home
            </Link>
            <Link href="/marketplace" className="nav-link text-sm tracking-wide">
              Marketplace
            </Link>
            <Link href="/products" className="nav-link text-sm tracking-wide">
              Products
            </Link>
            <Link href="#about" className="nav-link text-sm tracking-wide">
              About Us
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2">
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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-xl text-green-700 hover:bg-green-50 transition-all duration-300 cursor-pointer">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
