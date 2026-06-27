"use client";

import React, { useState } from "react";
import { X, UserCheck, ShieldCheck, Phone, MapPin, Calendar, Sprout, Layers, BadgeCheck } from "lucide-react";

interface Farmer {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  age: number;
  village: string;
  district: string;
  state: string;
  phone: string;
  commodity: string;
  commodityHindi: string;
  landHoldings: number; // in acres
  date: string;
  status: "Verified" | "Pending Approval";
}

const mockFarmers: Farmer[] = [
  {
    id: "KS-9801",
    name: "Ramesh Kumar",
    initials: "RK",
    avatarBg: "bg-green-100 text-green-700 border-green-200",
    age: 42,
    village: "Bihta",
    district: "Patna",
    state: "Bihar",
    phone: "+91 98765 12345",
    commodity: "Wheat",
    commodityHindi: "गेहूं",
    landHoldings: 5.0,
    date: "2026-06-22",
    status: "Verified",
  },
  {
    id: "KS-9802",
    name: "Sunita Devi",
    initials: "SD",
    avatarBg: "bg-amber-100 text-amber-700 border-amber-200",
    age: 38,
    village: "Cholapur",
    district: "Varanasi",
    state: "Uttar Pradesh",
    phone: "+91 98765 23456",
    commodity: "Rice",
    commodityHindi: "चावल",
    landHoldings: 3.5,
    date: "2026-06-22",
    status: "Verified",
  },
  {
    id: "KS-9803",
    name: "Mahendra Singh",
    initials: "MS",
    avatarBg: "bg-emerald-100 text-emerald-700 border-emerald-200",
    age: 48,
    village: "Laxmangarh",
    district: "Sikar",
    state: "Rajasthan",
    phone: "+91 98765 34567",
    commodity: "Mustard",
    commodityHindi: "सरसों",
    landHoldings: 8.0,
    date: "2026-06-21",
    status: "Verified",
  },
  {
    id: "KS-9804",
    name: "Devendra Patel",
    initials: "DP",
    avatarBg: "bg-blue-100 text-blue-700 border-blue-200",
    age: 35,
    village: "Depalpur",
    district: "Indore",
    state: "Madhya Pradesh",
    phone: "+91 98765 45678",
    commodity: "Soybean",
    commodityHindi: "सोयाबीन",
    landHoldings: 6.2,
    date: "2026-06-21",
    status: "Verified",
  },
  {
    id: "KS-9805",
    name: "Harpreet Singh",
    initials: "HS",
    avatarBg: "bg-teal-100 text-teal-700 border-teal-200",
    age: 50,
    village: "Suratgarh",
    district: "Sri Ganganagar",
    state: "Rajasthan",
    phone: "+91 98765 56789",
    commodity: "Wheat",
    commodityHindi: "गेहूं",
    landHoldings: 12.0,
    date: "2026-06-20",
    status: "Pending Approval",
  },
];

export default function FarmerRegistrations() {
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);

  const openModal = (farmer: Farmer) => {
    setSelectedFarmer(farmer);
  };

  const closeModal = () => {
    setSelectedFarmer(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 select-none h-full flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-green-600 shrink-0" />
            <h3 className="text-lg font-bold text-slate-800">
              Kisan Registrations <span className="text-slate-400 font-normal text-sm">(नए किसान)</span>
            </h3>
          </div>
          <span className="text-[10px] uppercase font-extrabold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
            New
          </span>
        </div>

        {/* List of Farmers */}
        <div className="flex flex-col divide-y divide-slate-100">
          {mockFarmers.map((farmer) => (
            <div
              key={farmer.id}
              className="flex items-center justify-between py-3 hover:bg-slate-50/50 px-2 rounded-xl transition-colors"
            >
              {/* Left Profile Detail */}
              <div className="flex items-center gap-3">
                {/* Initials Avatar */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-extrabold ${farmer.avatarBg}`}
                >
                  {farmer.initials}
                </div>
                {/* Text details */}
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-800 text-sm flex items-center gap-1">
                    {farmer.name}
                    {farmer.status === "Verified" && (
                      <BadgeCheck className="h-4 w-4 text-green-600 shrink-0" />
                    )}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    {farmer.district}, {farmer.state}
                  </span>
                </div>
              </div>

              {/* Right view button & crop info */}
              <div className="flex items-center gap-4">
                <span className="hidden md:inline-flex px-2 py-0.5 bg-slate-50 text-slate-500 rounded border border-slate-100 text-[10px] font-bold">
                  {farmer.commodity}
                </span>
                <button
                  onClick={() => openModal(farmer)}
                  className="px-3 py-1.5 bg-green-50 border border-green-100 rounded-lg text-xs font-bold text-green-700 hover:bg-green-600 hover:text-white transition-all cursor-pointer"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info bottom text */}
      <div className="text-[10px] text-center text-slate-400 font-semibold mt-6 border-t border-slate-100 pt-4">
        Currently pending verification: 1 profile
      </div>

      {/* ========================================================
          MODAL DETAIL DIALOG OVERLAY
          ======================================================== */}
      {selectedFarmer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />

          {/* Modal Content Card */}
          <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl border border-slate-100 transform scale-100 transition-all duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-green-50/30 to-white">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border text-base font-extrabold ${selectedFarmer.avatarBg}`}
                >
                  {selectedFarmer.initials}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-base flex items-center gap-1.5">
                    {selectedFarmer.name}
                    {selectedFarmer.status === "Verified" && (
                      <ShieldCheck className="h-4 w-4 text-green-600 shrink-0 fill-green-50" />
                    )}
                  </h4>
                  <span className="text-xs text-slate-400 font-semibold">
                    Kisan ID: {selectedFarmer.id}
                  </span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
                aria-label="Close modal dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 flex flex-col gap-6">
              {/* Status Badge */}
              <div className="flex items-center justify-between bg-slate-50 border border-slate-100 p-3 rounded-2xl">
                <span className="text-xs font-semibold text-slate-500">
                  Verification Status
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                    selectedFarmer.status === "Verified"
                      ? "bg-green-100 text-green-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {selectedFarmer.status}
                </span>
              </div>

              {/* Grid Profile Details */}
              <div className="grid grid-cols-2 gap-4">
                {/* Age */}
                <div className="flex items-center gap-3 p-3 rounded-2xl border border-slate-50 hover:bg-slate-50/30 transition-colors">
                  <Calendar className="h-5 w-5 text-slate-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Age
                    </span>
                    <span className="text-sm font-extrabold text-slate-800">
                      {selectedFarmer.age} Years
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3 rounded-2xl border border-slate-50 hover:bg-slate-50/30 transition-colors">
                  <Phone className="h-5 w-5 text-slate-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Phone Number
                    </span>
                    <span className="text-sm font-extrabold text-slate-800">
                      {selectedFarmer.phone}
                    </span>
                  </div>
                </div>

                {/* Primary Commodity */}
                <div className="flex items-center gap-3 p-3 rounded-2xl border border-slate-50 hover:bg-slate-50/30 transition-colors">
                  <Sprout className="h-5 w-5 text-slate-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Crop Category
                    </span>
                    <span className="text-sm font-extrabold text-slate-800">
                      {selectedFarmer.commodity} ({selectedFarmer.commodityHindi})
                    </span>
                  </div>
                </div>

                {/* Land Holdings */}
                <div className="flex items-center gap-3 p-3 rounded-2xl border border-slate-50 hover:bg-slate-50/30 transition-colors">
                  <Layers className="h-5 w-5 text-slate-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Land Holdings
                    </span>
                    <span className="text-sm font-extrabold text-slate-800">
                      {selectedFarmer.landHoldings} Acres
                    </span>
                  </div>
                </div>
              </div>

              {/* Geographic details */}
              <div className="flex items-start gap-3 p-3 rounded-2xl border border-slate-50">
                <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Full Farm Address
                  </span>
                  <span className="text-sm font-extrabold text-slate-800">
                    Village {selectedFarmer.village}, District{" "}
                    {selectedFarmer.district}, {selectedFarmer.state}
                  </span>
                </div>
              </div>

              {/* Government Verification list flags */}
              <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold text-slate-600 mb-1">
                  Credentials Authenticated
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Aadhar KYC</span>
                    <span className="text-green-600 font-extrabold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Land Revenue Records</span>
                    <span className="text-green-600 font-extrabold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Bank account details</span>
                    <span className="text-green-600 font-extrabold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer actions */}
            <div className="flex gap-3 px-6 py-4 bg-slate-50 border-t border-slate-100 justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-slate-200 hover:bg-slate-100 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Verification check triggered for ${selectedFarmer.name}`);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors shadow-md shadow-green-500/10 cursor-pointer"
              >
                Recheck Credentials
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
