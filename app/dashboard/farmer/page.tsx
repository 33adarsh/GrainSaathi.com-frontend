"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Sprout,
  MessageSquare,
  PlusCircle,
  User,
  LogOut,
  IndianRupee,
  ShoppingBag,
  Clock,
  ExternalLink,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { mockListings, mockInquiries, mockOrders, mockFarmers } from "@/lib/mockData";
import StatsCard from "@/components/StatsCard";
import StatusBadge from "@/components/StatusBadge";
import ListingCard from "@/components/ListingCard";
import { useLanguage } from "@/context/LanguageContext";

type ActiveTabType = "Overview" | "Listings" | "Inquiries" | "Profile";

export default function FarmerDashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("Overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Rajesh Kumar is F-01
  const farmer = mockFarmers[0];

  // Dynamic calculations for Rajesh Kumar (F-01)
  const totalEarnings = mockOrders
    .filter((o) => o.listing.farmer.id === farmer.id && o.status !== "Pending")
    .reduce((sum, current) => sum + current.totalPrice, 0);

  const activeListingsCount = mockListings.filter(
    (l) => l.farmer.id === farmer.id && l.status === "Active"
  ).length;

  const pendingInquiriesCount = mockInquiries.filter(
    (i) => i.status === "Sent"
  ).length;

  const totalOrdersCount = mockOrders.filter(
    (o) => o.listing.farmer.id === farmer.id
  ).length;

  // Handlers for action triggers
  const handleEdit = (id: string) => {
    alert(`Edit mode triggered for listing: ${id}`);
  };

  const handleDelete = (id: string) => {
    const confirm = window.confirm(`Are you sure you want to delete listing ${id}?`);
    if (confirm) {
      alert(`Listing ${id} successfully deleted (Mock Action).`);
    }
  };

  const handleReply = (id: string, buyerName: string) => {
    const text = window.prompt(`Type your message to send to ${buyerName}:`);
    if (text) {
      alert(`Message successfully dispatched to ${buyerName}: "${text}"`);
    }
  };

  const handleCloseInquiry = (id: string) => {
    alert(`Inquiry ${id} closed successfully.`);
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  // Nav items configuration
  const sidebarLinks = [
    { name: t("dash.dashboard") || "Dashboard", tab: "Overview", icon: LayoutDashboard },
    { name: t("dash.myListings") || "My Listings", tab: "Listings", icon: Sprout },
    { name: t("dash.inquiries") || "Inquiries", tab: "Inquiries", icon: MessageSquare },
    { name: t("dash.postNewListing") || "Post New Listing", href: "/post-listing", icon: PlusCircle },
    { name: t("dash.profile") || "Profile", tab: "Profile", icon: User },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50/50 select-none">
      
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-64 h-screen border-r border-slate-200 bg-white sticky top-0 justify-between py-6 shrink-0">
        <div>
          {/* Logo & Farmer Identity */}
          <div className="px-6 border-b border-slate-100 pb-5">
            <h2 className="font-extrabold text-lg text-slate-800">Grain Saathi</h2>
            <div className="flex items-center gap-2.5 mt-4 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="h-8 w-8 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                {farmer.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-xs text-slate-700 truncate">{farmer.name}</span>
                <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider">{t("dash.kisanPartner") || "Kisan Partner"}</span>
              </div>
            </div>
          </div>

          {/* Links list */}
          <nav className="mt-6 flex flex-col gap-1 px-3">
            {sidebarLinks.map((link) => {
              const isLinkActive = link.tab ? activeTab === link.tab : false;

              if (link.href) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <link.icon className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => setActiveTab(link.tab as ActiveTabType)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all text-left cursor-pointer ${
                    isLinkActive
                      ? "bg-green-50 text-green-700 border-l-4 border-green-600 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent"
                  }`}
                >
                  <link.icon
                    className={`h-4.5 w-4.5 shrink-0 ${
                      isLinkActive ? "text-green-600" : "text-slate-400"
                    }`}
                  />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout bottom wrapper */}
        <div className="px-3 border-t border-slate-100 pt-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer text-left"
          >
            <LogOut className="h-4.5 w-4.5 shrink-0" />
            <span>{t("dash.logout") || "Log Out"}</span>
          </button>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAV / TABS HEADER */}
      <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between h-16 bg-white px-4 border-b border-slate-200 shadow-sm">
        <h2 className="font-extrabold text-base text-slate-800">Grain Saathi Kisan</h2>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile navigation panel dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 flex flex-col gap-1 shadow-md z-20 sticky top-16">
          {sidebarLinks.map((link) => {
            if (link.href) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-600"
                >
                  <link.icon className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                  <span>{link.name}</span>
                </Link>
              );
            }
            return (
              <button
                key={link.name}
                onClick={() => {
                  setActiveTab(link.tab as ActiveTabType);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left cursor-pointer ${
                  activeTab === link.tab
                    ? "bg-green-50 text-green-700"
                    : "text-slate-600"
                }`}
              >
                <link.icon className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                <span>{link.name}</span>
              </button>
            );
          })}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-red-600 text-left cursor-pointer"
          >
            <LogOut className="h-4.5 w-4.5 text-slate-400 shrink-0" />
            <span>{t("dash.logout") || "Log Out"}</span>
          </button>
        </div>
      )}

      {/* MAIN CONTENTS ROUTING VIEWPORT */}
      <main className="flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === "Overview" && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            {/* Header section */}
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-black text-slate-800 tracking-tight">
                {t("dash.welcomeBack") || "Welcome back"}, {farmer.name}!
              </h1>
              <p className="text-sm font-semibold text-slate-400">
                {t("dash.summary") || "Here is a summary of your farm statistics and incoming buyer requests."}
              </p>
            </div>

            {/* Statistics Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                icon={<IndianRupee className="h-6 w-6" />}
                label={t("dash.totalEarnings")}
                value={`₹${totalEarnings.toLocaleString("en-IN")}`}
                color="green"
              />
              <StatsCard
                icon={<Sprout className="h-6 w-6" />}
                label={t("dash.activeListings")}
                value={activeListingsCount.toString()}
                color="blue"
              />
              <StatsCard
                icon={<MessageSquare className="h-6 w-6" />}
                label={t("dash.pendingInquiries")}
                value={pendingInquiriesCount.toString()}
                color="orange"
              />
              <StatsCard
                icon={<ShoppingBag className="h-6 w-6" />}
                label={t("dash.totalOrders") || "Total Orders"}
                value={totalOrdersCount.toString()}
                color="red"
              />
            </div>

            {/* Recent Inquiries Table */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                <h3 className="font-extrabold text-slate-800 text-base">
                  {t("dash.recentInquiries") || "Recent Inquiries"}
                </h3>
                <button
                  onClick={() => setActiveTab("Inquiries")}
                  className="text-green-600 font-bold text-xs hover:text-green-700 flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{t("dash.viewAllInquiries") || "View All Inquiries"}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="w-full overflow-x-auto rounded-xl border border-slate-100">
                <table className="w-full min-w-[600px] text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-100">
                      <th className="px-4 py-3">{t("dash.buyerName") || "Buyer Name"}</th>
                      <th className="px-4 py-3">{t("dash.product") || "Product"}</th>
                      <th className="px-4 py-3 text-right">{t("dash.quantity") || "Quantity"}</th>
                      <th className="px-4 py-3">{t("dash.date") || "Date"}</th>
                      <th className="px-4 py-3">{t("dash.status") || "Status"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {mockInquiries.slice(0, 5).map((inq) => {
                      const associatedListing = mockListings.find(l => l.id === inq.listingId);
                      return (
                        <tr key={inq.id} className="hover:bg-slate-50/40 transition-colors">
                          <td className="px-4 py-3 font-semibold text-slate-700">{inq.buyer.name}</td>
                          <td className="px-4 py-3 text-slate-600">
                            {associatedListing?.product.name || "Crop Produce"}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-slate-700">
                            {inq.quantity} qtl
                          </td>
                          <td className="px-4 py-3 text-slate-400 font-semibold">{inq.date}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={inq.status} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick action buttons block */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-6">
              <Link
                href="/post-listing"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold rounded-xl shadow-md shadow-green-500/10 cursor-pointer text-sm"
              >
                <PlusCircle className="h-4.5 w-4.5" />
                <span>{t("dash.postNewListing")}</span>
              </Link>
              <button
                onClick={() => setActiveTab("Inquiries")}
                className="flex-1 py-3 border border-slate-200 hover:bg-slate-100 text-slate-600 font-bold rounded-xl transition-all cursor-pointer text-sm"
              >
                {t("dash.viewAllInquiries") || "View All Inquiries"}
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: MY LISTINGS */}
        {activeTab === "Listings" && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Header section with Post button */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
              <div className="flex flex-col">
                <h2 className="text-xl font-black text-slate-800 tracking-tight">
                  {t("dash.myActiveListings") || "My Active Listings"}
                </h2>
                <p className="text-xs font-semibold text-slate-400">
                  {t("dash.manageListings") || "Manage your crop listings listed on the live marketplace database."}
                </p>
              </div>
              <Link
                href="/post-listing"
                className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                <PlusCircle className="h-4 w-4 shrink-0" />
                <span>{t("dash.postNewListing")}</span>
              </Link>
            </div>

            {/* Listings feed */}
            <div className="flex flex-col gap-4">
              {mockListings
                .filter((l) => l.farmer.id === farmer.id)
                .map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
            </div>
          </div>
        )}

        {/* TAB 3: INQUIRIES */}
        {activeTab === "Inquiries" && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="flex flex-col pb-4 border-b border-slate-100">
              <h2 className="text-xl font-black text-slate-800 tracking-tight">
                {t("dash.buyerInquiries") || "Buyer Inquiries"}
              </h2>
              <p className="text-xs font-semibold text-slate-400">
                {t("dash.replyToRequests") || "Reply to buyer purchase requests and negotiate contract terms."}
              </p>
            </div>

            {/* Inquiries list table */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[750px] text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-100">
                      <th className="px-6 py-4">{t("dash.buyerCo") || "Buyer & Co."}</th>
                      <th className="px-6 py-4">{t("dash.product") || "Product"}</th>
                      <th className="px-6 py-4 text-right">{t("dash.quantity") || "Quantity"}</th>
                      <th className="px-6 py-4">{t("dash.message") || "Message"}</th>
                      <th className="px-6 py-4">{t("dash.date") || "Date"}</th>
                      <th className="px-6 py-4">{t("dash.status") || "Status"}</th>
                      <th className="px-6 py-4 text-center">{t("dash.actions") || "Actions"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {mockInquiries.map((inq) => {
                      const associatedListing = mockListings.find(l => l.id === inq.listingId);
                      return (
                        <tr key={inq.id} className="hover:bg-slate-50/20 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="font-extrabold text-slate-800">{inq.buyer.name}</span>
                              <span className="text-[10px] text-slate-400 font-bold">{inq.buyer.company}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-slate-600 font-semibold">
                            {associatedListing?.product.name || "Crop Produce"}
                          </td>
                          <td className="px-6 py-4 text-right font-black text-slate-800">
                            {inq.quantity} qtl
                          </td>
                          <td className="px-6 py-4 text-slate-500 max-w-[200px] truncate text-xs">
                            {inq.message}
                          </td>
                          <td className="px-6 py-4 text-slate-400 font-semibold whitespace-nowrap">
                            {inq.date}
                          </td>
                          <td className="px-6 py-4">
                            <StatusBadge status={inq.status} />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                onClick={() => handleReply(inq.id, inq.buyer.name)}
                                className="px-2.5 py-1 bg-green-50 border border-green-100 rounded-lg text-xs font-bold text-green-700 hover:bg-green-600 hover:text-white transition-all cursor-pointer"
                              >
                                {t("dash.reply") || "Reply"}
                              </button>
                              <button
                                onClick={() => handleCloseInquiry(inq.id)}
                                className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-all cursor-pointer"
                              >
                                {t("dash.close") || "Close"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PROFILE */}
        {activeTab === "Profile" && (
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm animate-fadeIn flex flex-col gap-6">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
              <div className="h-14 w-14 bg-green-600 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-md shadow-green-500/10">
                {farmer.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-black text-slate-800 tracking-tight">{farmer.name}</h2>
                <span className="text-xs text-green-600 font-bold uppercase tracking-wider mt-0.5">{t("dash.verifiedKisanPartner") || "Verified Kisan Partner"}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("dash.mobileNumber") || "Mobile Number"}</span>
                <span className="text-sm font-bold text-slate-800 mt-1">{farmer.phone}</span>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("dash.stateDistrict") || "State & District"}</span>
                <span className="text-sm font-bold text-slate-800 mt-1">{farmer.location}</span>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("dash.farmerRating") || "Farmer Rating"}</span>
                <span className="text-sm font-bold text-slate-800 mt-1 flex items-center gap-1">
                  ★ {farmer.rating} / 5.0
                </span>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("dash.totalListingsListed") || "Total Listings Listed"}</span>
                <span className="text-sm font-bold text-slate-800 mt-1">{farmer.totalListings} items</span>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

