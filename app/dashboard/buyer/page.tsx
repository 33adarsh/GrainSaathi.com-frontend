"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  MessageSquare,
  User,
  LogOut,
  IndianRupee,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  Eye,
  HeartOff,
  ShoppingBag as BagIcon,
  Trash2
} from "lucide-react";
import { mockOrders, mockInquiries, mockProducts, mockBuyers, mockListings } from "@/lib/mockData";
import StatsCard from "@/components/StatsCard";
import StatusBadge from "@/components/StatusBadge";
import { useLanguage } from "@/context/LanguageContext";

type ActiveTabType = "Overview" | "Orders" | "Saved" | "Inquiries" | "Profile";
type OrderFilterType = "All" | "Pending" | "Confirmed" | "Delivered";

export default function BuyerDashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("Overview");
  const [orderFilter, setOrderFilter] = useState<OrderFilterType>("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState<any | null>(null);

  // Saved product IDs state for real-time unsaving interactions
  const [savedProductIds, setSavedProductIds] = useState<string[]>(["1", "2", "3", "4"]);

  // Arjun Singh is B-01
  const buyer = mockBuyers[0];

  // Dynamic calculations for Arjun Singh (B-01)
  const totalSpent = mockOrders
    .filter((o) => o.buyer.id === buyer.id && o.status !== "Pending")
    .reduce((sum, current) => sum + current.totalPrice, 0);

  const ordersPlacedCount = mockOrders.filter(
    (o) => o.buyer.id === buyer.id
  ).length;

  const activeInquiriesCount = mockInquiries.filter(
    (i) => i.buyer.id === buyer.id && i.status !== "Closed"
  ).length;

  const savedProductsCount = savedProductIds.length;

  // Filter products matching saved IDs state
  const savedProducts = mockProducts.filter((p) => savedProductIds.includes(p.id));

  // Handler for unsaving a product
  const handleUnsave = (id: string, name: string) => {
    setSavedProductIds(savedProductIds.filter((pId) => pId !== id));
    alert(`"${name}" removed from saved wishlist.`);
  };

  // Filter orders for the buyer based on filter tab
  const buyerOrders = mockOrders.filter((o) => {
    const isBuyerOrder = o.buyer.id === buyer.id;
    if (!isBuyerOrder) return false;
    return orderFilter === "All" ? true : o.status === orderFilter;
  });

  const handleLogout = () => {
    window.location.href = "/";
  };

  const sidebarLinks = [
    { name: t("dash.dashboard") || "Dashboard", tab: "Overview", icon: LayoutDashboard },
    { name: t("dash.myOrders") || "My Orders", tab: "Orders", icon: ShoppingBag },
    { name: t("dash.savedProducts") || "Saved Products", tab: "Saved", icon: Heart },
    { name: t("dash.myInquiries") || "My Inquiries", tab: "Inquiries", icon: MessageSquare },
    { name: t("dash.profile") || "Profile", tab: "Profile", icon: User },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50/50 select-none">
      
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-64 h-screen border-r border-slate-200 bg-white sticky top-0 justify-between py-6 shrink-0">
        <div>
          {/* Logo & Buyer Identity */}
          <div className="px-6 border-b border-slate-100 pb-5">
            <h2 className="font-extrabold text-lg text-slate-800">Grain Saathi</h2>
            <div className="flex items-center gap-2.5 mt-4 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="h-8 w-8 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                {buyer.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-xs text-slate-700 truncate">{buyer.name}</span>
                <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider">{t("dash.corporateBuyer") || "Corporate Buyer"}</span>
              </div>
            </div>
          </div>

          {/* Links list */}
          <nav className="mt-6 flex flex-col gap-1 px-3">
            {sidebarLinks.map((link) => {
              const isLinkActive = activeTab === link.tab;

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

        {/* Logout button */}
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
        <h2 className="font-extrabold text-base text-slate-800">Grain Saathi Buyer</h2>
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
          {sidebarLinks.map((link) => (
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
          ))}
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
            {/* Header welcome */}
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-black text-slate-800 tracking-tight">
                {t("dash.welcomeBack") || "Welcome back"}, {buyer.name}!
              </h1>
              <p className="text-sm font-semibold text-slate-400">
                {t("dash.buyerSummary") || "Dashboard status for purchasing from Grain Saathi verified farmers."}
              </p>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                icon={<IndianRupee className="h-6 w-6" />}
                label={t("dash.totalSpent")}
                value={`₹${totalSpent.toLocaleString("en-IN")}`}
                color="green"
              />
              <StatsCard
                icon={<ShoppingBag className="h-6 w-6" />}
                label={t("dash.ordersPlaced")}
                value={ordersPlacedCount.toString()}
                color="blue"
              />
              <StatsCard
                icon={<MessageSquare className="h-6 w-6" />}
                label={t("dash.activeInquiries") || "Active Inquiries"}
                value={activeInquiriesCount.toString()}
                color="orange"
              />
              <StatsCard
                icon={<Heart className="h-6 w-6" />}
                label={t("dash.savedProducts")}
                value={savedProductsCount.toString()}
                color="red"
              />
            </div>

            {/* Bottom splits: Recent Orders & Recent Inquiries */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Orders table */}
              <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                  <h3 className="font-extrabold text-slate-800 text-sm">
                    {t("dash.recentOrders") || "Recent Orders"}
                  </h3>
                  <button
                    onClick={() => setActiveTab("Orders")}
                    className="text-green-600 font-bold text-xs hover:text-green-700 flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>{t("dash.viewAll") || "View All"}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="w-full overflow-x-auto rounded-xl border border-slate-100">
                  <table className="w-full min-w-[500px] text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-100">
                        <th className="px-4 py-3">{t("dash.product") || "Product"}</th>
                        <th className="px-4 py-3">{t("dash.farmerName") || "Farmer Name"}</th>
                        <th className="px-4 py-3 text-right">{t("dash.quantity") || "Quantity"}</th>
                        <th className="px-4 py-3 text-right">{t("dash.totalPrice") || "Total Price"}</th>
                        <th className="px-4 py-3">{t("dash.status") || "Status"}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {mockOrders.slice(0, 3).map((order) => (
                        <tr key={order.id} className="hover:bg-slate-50/30 transition-colors">
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {order.listing.product.name}
                          </td>
                          <td className="px-4 py-3 text-slate-500">{order.listing.farmer.name}</td>
                          <td className="px-4 py-3 text-right font-bold text-slate-700">
                            {order.quantity} qtl
                          </td>
                          <td className="px-4 py-3 text-right text-green-700 font-extrabold">
                            ₹{order.totalPrice.toLocaleString("en-IN")}
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={order.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Inquiries Panel */}
              <div className="lg:col-span-1 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                  <h3 className="font-extrabold text-slate-800 text-sm">
                    {t("dash.myInquiries") || "My Inquiries"}
                  </h3>
                  <button
                    onClick={() => setActiveTab("Inquiries")}
                    className="text-green-600 font-bold text-xs hover:text-green-700 flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>{t("dash.allThreads") || "All Threads"}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex flex-col divide-y divide-slate-100">
                  {mockInquiries.slice(0, 3).map((inq) => {
                    const associatedListing = mockListings.find(l => l.id === inq.listingId);
                    return (
                      <div key={inq.id} className="flex justify-between items-center py-3">
                        <div className="flex flex-col min-w-0">
                          <span className="font-semibold text-slate-800 text-xs truncate">
                            {associatedListing?.product.name || "Crop Produce"}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-0.5 font-bold">
                            Farmer: {associatedListing?.farmer.name}
                          </span>
                        </div>
                        <StatusBadge status={inq.status} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MY ORDERS */}
        {activeTab === "Orders" && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Header section with Filter Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex flex-col">
                <h2 className="text-xl font-black text-slate-800 tracking-tight">
                  {t("dash.myOrders") || "My Orders"}
                </h2>
                <p className="text-xs font-semibold text-slate-400">
                  {t("dash.trackDelivery") || "Track delivery states and status logs of your agricultural purchases."}
                </p>
              </div>
            </div>

            {/* Quick Status Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
              {(["All", "Pending", "Confirmed", "Delivered"] as OrderFilterType[]).map((tab) => {
                const isActive = orderFilter === tab;
                const filterLabels: { [key: string]: string } = {
                  "All": t("dash.filterAll") || "All",
                  "Pending": t("dash.filterPending") || "Pending",
                  "Confirmed": t("dash.filterConfirmed") || "Confirmed",
                  "Delivered": t("dash.filterDelivered") || "Delivered",
                };
                return (
                  <button
                    key={tab}
                    onClick={() => setOrderFilter(tab)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-green-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {filterLabels[tab] || tab}
                  </button>
                );
              })}
            </div>

            {/* Orders Data Grid */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[750px] text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-100">
                      <th className="px-6 py-4">{t("dash.orderId") || "Order ID"}</th>
                      <th className="px-6 py-4">{t("dash.productName") || "Product Name"}</th>
                      <th className="px-6 py-4">{t("dash.farmerDetails") || "Farmer Details"}</th>
                      <th className="px-6 py-4 text-right">{t("dash.quantity") || "Quantity"}</th>
                      <th className="px-6 py-4 text-right">{t("dash.totalPrice") || "Total Price"}</th>
                      <th className="px-6 py-4">{t("dash.status") || "Status"}</th>
                      <th className="px-6 py-4">{t("dash.datePlaced") || "Date Placed"}</th>
                      <th className="px-6 py-4 text-center">{t("dash.action") || "Action"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {buyerOrders.length > 0 ? (
                      buyerOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-slate-50/20 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-800">{order.id}</td>
                          <td className="px-6 py-4 text-slate-600 font-semibold">
                            {order.listing.product.name}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="font-extrabold text-slate-800">{order.listing.farmer.name}</span>
                              <span className="text-[10px] text-slate-400 font-bold">{order.listing.farmer.location}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right font-black text-slate-800">
                            {order.quantity} qtl
                          </td>
                          <td className="px-6 py-4 text-right text-green-700 font-black">
                            ₹{order.totalPrice.toLocaleString("en-IN")}
                          </td>
                          <td className="px-6 py-4">
                            <StatusBadge status={order.status} />
                          </td>
                          <td className="px-6 py-4 text-slate-400 font-semibold whitespace-nowrap">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => setSelectedOrderDetails(order)}
                              className="px-2.5 py-1.5 bg-green-50 border border-green-100 rounded-lg text-xs font-bold text-green-700 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-1 cursor-pointer mx-auto"
                            >
                              <Eye className="h-3.5 w-3.5" />
                              <span>{t("dash.details") || "Details"}</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="text-center py-12 text-slate-400 font-medium">
                          {t("dash.noMatchingOrders") || "No matching orders found."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SAVED PRODUCTS */}
        {activeTab === "Saved" && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Tab header */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
              <div className="flex flex-col">
                <h2 className="text-xl font-black text-slate-800 tracking-tight">
                  {t("dash.savedWishlist") || "Saved Produce Wishlist"}
                </h2>
                <p className="text-xs font-semibold text-slate-400">
                  {t("dash.savedWishlistSub") || "Access crop produce bookmarked for fast procurement."}
                </p>
              </div>
              <Link
                href="/marketplace"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                {t("dash.browseMore") || "Browse More"}
              </Link>
            </div>

            {/* Saved list grid */}
            {savedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Image Header with Unsave Overlay Button */}
                    <div className="relative h-44 w-full bg-slate-50 overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Heart/Bookmark Unsave trigger */}
                      <button
                        onClick={() => handleUnsave(prod.id, prod.name)}
                        className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-red-500 border border-slate-100 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        title="Remove from Saved"
                      >
                        <Heart className="h-4.5 w-4.5 fill-red-500 text-red-500" />
                      </button>
                    </div>

                    {/* Details content */}
                    <div className="p-4 flex flex-col flex-grow justify-between gap-4">
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-tight truncate">
                          {prod.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                          {t("dash.grade") || "Grade"} {prod.grade} &bull; {prod.category}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-base font-black text-green-700">
                            ₹{prod.price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-[10px] text-green-600 font-bold">/qtl</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold truncate max-w-[120px]">
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span>{prod.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
                <HeartOff className="h-12 w-12 text-slate-300 mb-4" />
                <h3 className="text-base font-extrabold text-slate-700">{t("dash.wishlistEmpty") || "Your wishlist is empty"}</h3>
                <p className="text-xs text-slate-400 mt-1.5 max-w-xs">
                  {t("dash.wishlistEmptySub") || "Bookmark listings on the marketplace to view them here for quick negotiation."}
                </p>
                <Link
                  href="/marketplace"
                  className="mt-5 px-5 py-2.5 bg-green-50 text-green-700 font-bold rounded-xl text-xs hover:bg-green-600 hover:text-white transition-all"
                >
                  {t("dash.browseMarketplace") || "Browse Marketplace"}
                </Link>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: MY INQUIRIES */}
        {activeTab === "Inquiries" && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="flex flex-col pb-4 border-b border-slate-100">
              <h2 className="text-xl font-black text-slate-800 tracking-tight">
                {t("dash.negotiationsInquiries") || "My Negotiations / Inquiries"}
              </h2>
              <p className="text-xs font-semibold text-slate-400">
                {t("dash.negotiationsSub") || "View all pending crop inquiries sent to Grain Saathi partner farmers."}
              </p>
            </div>

            {/* Inquiries list */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-100">
                      <th className="px-6 py-4">{t("dash.inquiryId") || "Inquiry ID"}</th>
                      <th className="px-6 py-4">{t("dash.productName") || "Product Name"}</th>
                      <th className="px-6 py-4">{t("dash.farmerName") || "Farmer Name"}</th>
                      <th className="px-6 py-4 text-right">{t("dash.qtyRequested") || "Qty Requested"}</th>
                      <th className="px-6 py-4">{t("dash.myMessage") || "My Message"}</th>
                      <th className="px-6 py-4">{t("dash.dateSent") || "Date Sent"}</th>
                      <th className="px-6 py-4">{t("dash.status") || "Status"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {mockInquiries
                      .filter((i) => i.buyer.id === buyer.id)
                      .map((inq) => {
                        const associatedListing = mockListings.find(l => l.id === inq.listingId);
                        return (
                          <tr key={inq.id} className="hover:bg-slate-50/20 transition-colors">
                            <td className="px-6 py-4 font-bold text-slate-800">{inq.id}</td>
                            <td className="px-6 py-4 text-slate-600 font-semibold">
                              {associatedListing?.product.name || "Crop Produce"}
                            </td>
                            <td className="px-6 py-4 font-semibold text-slate-700">
                              {associatedListing?.farmer.name || "Kisan Partner"}
                            </td>
                            <td className="px-6 py-4 text-right font-black text-slate-800">
                              {inq.quantity} qtl
                            </td>
                            <td className="px-6 py-4 text-slate-500 max-w-[200px] truncate text-xs">
                              {inq.message}
                            </td>
                            <td className="px-6 py-4 text-slate-400 font-semibold">
                              {inq.date}
                            </td>
                            <td className="px-6 py-4">
                              <StatusBadge status={inq.status} />
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

        {/* TAB 5: PROFILE */}
        {activeTab === "Profile" && (
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm animate-fadeIn flex flex-col gap-6">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
              <div className="h-14 w-14 bg-green-600 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-md shadow-green-500/10">
                {buyer.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-black text-slate-800 tracking-tight">{buyer.name}</h2>
                <span className="text-xs text-green-600 font-bold uppercase tracking-wider mt-0.5">{t("dash.corporateBuyingAgent") || "Corporate Buying Agent"}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("dash.company") || "Company"}</span>
                <span className="text-sm font-bold text-slate-800 mt-1">{buyer.company}</span>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("dash.phone") || "Phone"}</span>
                <span className="text-sm font-bold text-slate-800 mt-1">{buyer.phone}</span>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("dash.hq") || "Headquarters"}</span>
                <span className="text-sm font-bold text-slate-800 mt-1">{buyer.location}</span>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t("dash.buyingStatus") || "Buying Status"}</span>
                <span className="text-sm font-bold text-slate-800 mt-1 text-green-600 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                  {t("dash.activeClearingAccount") || "Active Clearing House Account"}
                </span>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ORDER DETAILS DIALOG MODAL OVERLAY */}
      {selectedOrderDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedOrderDetails(null)}
          />

          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 z-10 overflow-hidden transform scale-100 transition-all">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-green-50/20 to-white">
              <div className="flex items-center gap-2">
                <BagIcon className="h-5 w-5 text-green-600 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm md:text-base">{t("dash.orderReceipt") || "Order Receipt"}</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">ID: {selectedOrderDetails.id}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedOrderDetails(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:bg-slate-100 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Details body */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <span className="text-xs font-semibold text-slate-500">{t("dash.orderStatus") || "Order Status"}</span>
                <StatusBadge status={selectedOrderDetails.status} />
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">{t("dash.cropName") || "Crop Name"}</span>
                  <span className="font-bold text-slate-800">{selectedOrderDetails.listing.product.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">{t("dash.farmerName") || "Farmer Name"}</span>
                  <span className="font-bold text-slate-800">{selectedOrderDetails.listing.farmer.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">{t("dash.location") || "Location"}</span>
                  <span className="font-bold text-slate-800">{selectedOrderDetails.listing.product.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">{t("dash.quantity") || "Quantity"}</span>
                  <span className="font-black text-slate-800">{selectedOrderDetails.quantity} quintals</span>
                </div>
                <div className="flex justify-between text-sm border-t border-slate-100 pt-3.5">
                  <span className="text-slate-400 font-semibold">{t("dash.totalPricePaid") || "Total Price Paid"}</span>
                  <span className="font-black text-green-700 text-lg">₹{selectedOrderDetails.totalPrice.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
              <button
                onClick={() => setSelectedOrderDetails(null)}
                className="px-4 py-2 border border-slate-200 bg-white rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
              >
                {t("common.cancel") || "Close"}
              </button>
              <button
                onClick={() => alert("Invoice print triggered.")}
                className="px-4 py-2 bg-green-600 text-white rounded-xl text-xs font-bold hover:bg-green-700 transition-all shadow-sm cursor-pointer"
              >
                {t("dash.printInvoice") || "Print Invoice"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
