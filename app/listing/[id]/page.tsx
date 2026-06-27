"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Heart, MessageSquare, Star, BadgeCheck, Shield, Calendar, Layers, IndianRupee } from "lucide-react";
import { mockListings } from "@/lib/mockData";
import Breadcrumb from "@/components/Breadcrumb";
import StatusBadge from "@/components/StatusBadge";
import InquiryModal from "@/components/InquiryModal";

export default function ListingDetailsPage() {
  const listing = mockListings[0]; // Defaulting to the first listing as requested
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Generate initials for the farmer's avatar
  const initials = listing.farmer.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Get 3 similar listings (excluding the current one)
  const similarListings = mockListings
    .filter((l) => l.id !== listing.id)
    .slice(0, 3);

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Marketplace", href: "/marketplace" },
    { label: listing.product.name },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        
        {/* 1. Breadcrumb navigation */}
        <Breadcrumb items={breadcrumbItems} />

        {/* 2. Main details section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
          {/* Left Column: Product Image */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100">
              <Image
                src={listing.product.image}
                alt={listing.product.name}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Right Column: Listing Details & Pricing */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              {/* Product Status & ID Header */}
              <div className="flex items-center justify-between">
                <StatusBadge status={listing.status} />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  ID: {listing.id}
                </span>
              </div>

              {/* Product Title */}
              <div>
                <h1 className="text-3xl font-black text-slate-800 tracking-tight leading-tight">
                  {listing.product.name}
                </h1>
                <p className="text-xs text-slate-400 font-semibold mt-1">
                  Category: {listing.product.category}
                </p>
              </div>

              {/* Price Details */}
              <div className="flex items-baseline gap-1.5 p-4 bg-green-50/50 border border-green-100/60 rounded-2xl">
                <IndianRupee className="h-5 w-5 text-green-700 stroke-[2.5] self-center shrink-0" />
                <span className="text-3xl font-black text-green-700 tracking-tight">
                  {listing.product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs font-bold text-green-600">/quintal</span>
              </div>

              {/* Product Specifications Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                {/* Quality Grade */}
                <div className="flex flex-col p-3 bg-slate-50 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Quality Grade
                  </span>
                  <span className="text-base font-black text-slate-800 mt-0.5">
                    Grade {listing.product.grade}
                  </span>
                </div>

                {/* Min Order Quantity */}
                <div className="flex flex-col p-3 bg-slate-50 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Min Order Qty
                  </span>
                  <span className="text-base font-black text-slate-800 mt-0.5">
                    {listing.minOrderQty} Quintals
                  </span>
                </div>

                {/* Total Available Quantity */}
                <div className="flex flex-col p-3 bg-slate-50 rounded-xl col-span-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Total Quantity Listed
                  </span>
                  <span className="text-base font-black text-slate-800 mt-0.5">
                    {listing.product.quantity}
                  </span>
                </div>
              </div>

              {/* Location indicator */}
              <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
                <MapPin className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                <span>{listing.product.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 border-t border-slate-100 pt-6">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold rounded-xl shadow-md shadow-green-600/25 hover:shadow-lg transition-all duration-200 cursor-pointer text-base hover:-translate-y-0.5"
              >
                <MessageSquare className="h-5 w-5 shrink-0" />
                <span>Send Inquiry</span>
              </button>

              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`w-full flex items-center justify-center gap-2 py-3 border rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                  isSaved
                    ? "bg-red-50 border-red-200 text-red-600"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                <Heart
                  className={`h-4.5 w-4.5 shrink-0 ${
                    isSaved ? "fill-red-600 text-red-600" : "text-slate-400"
                  }`}
                />
                <span>{isSaved ? "Saved to Wishlist" : "Save to Wishlist"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Farmer details card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Avatar initials */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 text-lg font-black text-white shadow-md shadow-green-500/10">
              {initials}
            </div>

            {/* Farmer Profile Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="font-extrabold text-slate-800 text-base md:text-lg">
                  {listing.farmer.name}
                </h3>
                {listing.farmer.verified && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-50 text-green-700 border border-green-200/50 text-[10px] font-black uppercase tracking-wider">
                    <BadgeCheck className="h-3 w-3 shrink-0" />
                    Verified Farmer
                  </span>
                )}
              </div>
              <p className="text-xs font-semibold text-slate-400 mt-1 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {listing.farmer.location}
              </p>
            </div>
          </div>

          {/* Farmer rating metrics */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8 flex-grow md:flex-grow-0">
            {/* Rating stars */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Farmer Rating
              </span>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4.5 w-4.5 text-amber-500 fill-amber-500 shrink-0" />
                <span className="text-sm font-extrabold text-slate-700">
                  {listing.farmer.rating}
                </span>
              </div>
            </div>

            {/* Total Listings */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Total Listings
              </span>
              <span className="text-sm font-black text-slate-700 mt-1">
                {listing.farmer.totalListings} items
              </span>
            </div>

            {/* Member since year */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Member Since
              </span>
              <span className="text-sm font-black text-slate-700 mt-1">
                {listing.farmer.joinedYear}
              </span>
            </div>
          </div>
        </div>

        {/* 4. Product description */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
            Product Description <span className="text-slate-400 font-normal text-sm">(विवरण)</span>
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            {listing.description}
          </p>
        </div>

        {/* 5. Similar products section */}
        <div className="flex flex-col gap-5 mt-4">
          <h3 className="text-xl font-black text-slate-800 tracking-tight">
            Similar Grain Listings <span className="text-slate-400 font-bold text-sm">(समान फसलें)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarListings.map((sim) => (
              <div
                key={sim.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Similar Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={sim.product.image}
                    alt={sim.product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Similar details */}
                <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-tight group-hover:text-green-700 transition-colors">
                      {sim.product.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400">
                      Grade {sim.product.grade} &bull; {sim.product.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                    {/* Price */}
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-sm font-black text-green-700">
                        ₹{sim.product.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[10px] text-green-600 font-bold">/qtl</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold truncate max-w-[120px]">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span>{sim.product.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Inquiry modal dialog */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        productName={listing.product.name}
        farmerName={listing.farmer.name}
      />
    </div>
  );
}
