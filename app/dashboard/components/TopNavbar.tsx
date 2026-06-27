"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { Menu, Bell, LogOut } from "lucide-react";
import { SidebarContext } from "./Sidebar";

export default function TopNavbar() {
  const { setIsOpen } = useContext(SidebarContext);

  const handleLogout = () => {
    // Mock logout logic - e.g., redirect to home page or login screen
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6 shadow-sm select-none">
      {/* Left Section: Mobile Hamburger & Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors lg:hidden cursor-pointer"
          aria-label="Open sidebar menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="font-extrabold text-lg md:text-xl tracking-tight text-slate-800">
            Grain Saathi <span className="inline-block text-xl">🌾</span>
          </span>
        </Link>
      </div>

      {/* Right Section: Notifications, Profile, Logout */}
      <div className="flex items-center gap-4">
        {/* Notifications Icon with Badge */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
          aria-label="View notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
            3
          </span>
        </button>

        {/* Divider */}
        <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />

        {/* User Profile Info */}
        <div className="flex items-center gap-3">
          {/* Avatar Icon */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-sm font-extrabold text-white shadow-sm">
            AS
          </div>
          {/* User Name */}
          <div className="hidden flex-col items-start text-sm sm:flex">
            <span className="font-semibold text-slate-700 leading-none">
              Arjun Singh
            </span>
            <span className="text-xs text-slate-400 mt-0.5 leading-none font-medium">
              Administrator
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-6 w-[1px] bg-slate-200" />

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
          aria-label="Logout button"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          <span className="hidden md:inline">Log Out</span>
        </button>
      </div>
    </header>
  );
}
