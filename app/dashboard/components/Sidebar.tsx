"use client";

import React, { createContext, useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sprout,
  ShoppingBag,
  Users,
  Building,
  CreditCard,
  BarChart3,
  Settings,
  X,
  Leaf
} from "lucide-react";

// Sidebar context to control the mobile drawer state
interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Listings", href: "/dashboard/listings", icon: Sprout },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { name: "Farmers", href: "/dashboard/farmers", icon: Users },
  { name: "Buyers", href: "/dashboard/buyers", icon: Building },
  { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const renderNavLinks = () => {
    return navItems.map((item) => {
      // In Next.js, matching the exact path or nested subpaths
      const isActive = pathname === item.href;

      return (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setIsOpen(false)} // Close mobile drawer when clicking a link
          className={`flex items-center gap-3 px-4 py-3 mx-3 my-1 rounded-xl font-medium transition-all duration-200 group cursor-pointer ${
            isActive
              ? "bg-green-50 text-green-700 border-l-4 border-green-600 shadow-sm"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent"
          }`}
        >
          <item.icon
            className={`h-5 w-5 transition-colors duration-200 ${
              isActive
                ? "text-green-600"
                : "text-slate-400 group-hover:text-slate-600"
            }`}
          />
          <span className="text-sm tracking-wide">{item.name}</span>
        </Link>
      );
    });
  };

  return (
    <>
      {/* ========================================================
          DESKTOP SIDEBAR
          ======================================================== */}
      <aside className="hidden lg:flex flex-col w-64 h-screen border-r border-slate-200 bg-white flex-shrink-0 sticky top-0 justify-between select-none">
        <div>
          {/* Logo Brand Header */}
          <div className="flex items-center gap-2.5 h-16 px-6 border-b border-slate-100 bg-gradient-to-r from-green-50/50 to-white">
            <div className="h-9 w-9 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-md shadow-green-500/20">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Grain Saathi
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex-1 overflow-y-auto">
            {renderNavLinks()}
          </nav>
        </div>

        {/* Footer Admin Version info */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-center">
          <p className="text-xs font-semibold text-slate-400 tracking-wide">
            Grain Saathi Admin v1.0
          </p>
        </div>
      </aside>

      {/* ========================================================
          MOBILE DRAWER SIDEBAR
          ======================================================== */}
      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden select-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Mobile Header with close button */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-md shadow-green-500/20">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Grain Saathi
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex-1 overflow-y-auto">
            {renderNavLinks()}
          </nav>
        </div>

        {/* Mobile Footer Admin Info */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-center">
          <p className="text-xs font-semibold text-slate-400 tracking-wide">
            Grain Saathi Admin v1.0
          </p>
        </div>
      </aside>
    </>
  );
}
