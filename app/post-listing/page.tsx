"use client";

import React, { useState } from "react";
import { Sprout, MapPin, Calendar, FileText, Image as ImageIcon, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const CROP_OPTIONS = [
  "Basmati Rice",
  "Sharbati Wheat",
  "Maize",
  "Sona Masoori",
  "Toor Dal",
  "Soybean",
  "Bengal Gram",
  "Mustard Seeds",
  "Other",
];

const STATE_OPTIONS = [
  "Punjab",
  "Haryana",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Rajasthan",
  "Maharashtra",
  "Bihar",
  "Karnataka",
  "Andhra Pradesh",
  "Gujarat",
];

export default function PostListingPage() {
  // Form State Values
  const [cropName, setCropName] = useState(CROP_OPTIONS[0]);
  const [qualityGrade, setQualityGrade] = useState<"A" | "B" | "C">("A");
  const [price, setPrice] = useState("");
  const [minOrder, setMinOrder] = useState("");
  const [availableQty, setAvailableQty] = useState("");
  const [state, setState] = useState(STATE_OPTIONS[0]);
  const [district, setDistrict] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const [isPosted, setIsPosted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Character Limit for description
  const descriptionMaxLen = 300;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock network latency for listing creation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsPosted(true);
    }, 1200);
  };

  const handleReset = () => {
    setCropName(CROP_OPTIONS[0]);
    setQualityGrade("A");
    setPrice("");
    setMinOrder("");
    setAvailableQty("");
    setState(STATE_OPTIONS[0]);
    setDistrict("");
    setHarvestDate("");
    setDescription("");
    setPhotoUrl("");
    setIsPosted(false);
  };

  const getGradeLabel = (grade: "A" | "B" | "C") => {
    switch (grade) {
      case "A":
        return "Premium";
      case "B":
        return "Standard";
      case "C":
        return "Basic";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="flex flex-col gap-1.5 mb-8 text-center md:text-left">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight flex items-center justify-center md:justify-start gap-2">
            <Sparkles className="h-7 w-7 text-green-600 shrink-0" />
            <span>Create New Crop Listing</span>
          </h1>
          <p className="text-sm font-semibold text-slate-400">
            Publish your crop produce on the Grain Saathi live market and connect with verified buyers.
          </p>
        </div>

        {isPosted ? (
          /* ==========================================
             SUCCESS POSTING MESSAGE
             ========================================== */
          <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center flex flex-col items-center gap-6 mt-10">
            <div className="h-16 w-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 border border-green-100">
              <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800">Produce Posted Successfully!</h2>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Your listing for **{cropName}** (Grade {qualityGrade}) has been posted successfully and is now active on the Grain Saathi marketplace.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md shadow-green-500/10 transition-colors cursor-pointer text-sm"
              >
                Post Another Produce
              </button>
              <a
                href="/marketplace"
                className="flex-1 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl transition-colors text-center text-sm flex items-center justify-center gap-1.5"
              >
                <span>View Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : (
          /* ==========================================
             TWO COLUMN FORM + PREVIEW VIEW
             ========================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT PANEL: The Listing Creation Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-8"
            >
              {/* SECTION 1: Crop Details */}
              <div className="flex flex-col gap-5">
                <h3 className="text-base font-extrabold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <Sprout className="h-4.5 w-4.5 text-green-600" />
                  <span>Section 1: Crop Produce Details</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Crop Name selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cropName" className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      Crop Name
                    </label>
                    <select
                      id="cropName"
                      value={cropName}
                      onChange={(e) => setCropName(e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    >
                      {CROP_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price per quintal input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="price" className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      Price per quintal (₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-sm font-bold text-slate-400">₹</span>
                      <input
                        type="number"
                        id="price"
                        placeholder="e.g. 2800"
                        min="100"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="w-full pl-7 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Quality grade selection */}
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      Quality Grade
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      {(["A", "B", "C"] as const).map((grade) => (
                        <label
                          key={grade}
                          className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all cursor-pointer select-none text-center ${
                            qualityGrade === grade
                              ? "bg-green-50 border-green-500 text-green-700 font-bold"
                              : "bg-white border-slate-100 hover:border-slate-200 text-slate-500"
                          }`}
                        >
                          <input
                            type="radio"
                            name="qualityGrade"
                            value={grade}
                            checked={qualityGrade === grade}
                            onChange={() => setQualityGrade(grade)}
                            className="sr-only"
                          />
                          <span className="text-lg font-black">{grade}</span>
                          <span className="text-[10px] uppercase font-bold opacity-70 mt-1">
                            {getGradeLabel(grade)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Minimum order qty */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="minOrder" className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      Min Order Qty (quintal)
                    </label>
                    <input
                      type="number"
                      id="minOrder"
                      placeholder="e.g. 50"
                      min="1"
                      value={minOrder}
                      onChange={(e) => setMinOrder(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    />
                  </div>

                  {/* Available qty */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="availableQty" className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      Available Qty (quintal)
                    </label>
                    <input
                      type="number"
                      id="availableQty"
                      placeholder="e.g. 200"
                      min="1"
                      value={availableQty}
                      onChange={(e) => setAvailableQty(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Location Details */}
              <div className="flex flex-col gap-5">
                <h3 className="text-base font-extrabold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <MapPin className="h-4.5 w-4.5 text-green-600" />
                  <span>Section 2: Mandi / Warehouse Location</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* State Select */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="state" className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      State
                    </label>
                    <select
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    >
                      {STATE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District Text */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="district" className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      District
                    </label>
                    <input
                      type="text"
                      id="district"
                      placeholder="e.g. Karnal"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 3: More Details */}
              <div className="flex flex-col gap-5">
                <h3 className="text-base font-extrabold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <Calendar className="h-4.5 w-4.5 text-green-600" />
                  <span>Section 3: Harvesting & Description</span>
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {/* Harvest Date */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="harvestDate" className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                      Harvest Date
                    </label>
                    <input
                      type="date"
                      id="harvestDate"
                      value={harvestDate}
                      onChange={(e) => setHarvestDate(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors text-slate-600"
                    />
                  </div>

                  {/* Description Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="description" className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                        Produce Description
                      </label>
                      <span className={`text-[10px] font-bold ${
                        description.length > descriptionMaxLen ? "text-red-500" : "text-slate-400"
                      }`}>
                        {description.length} / {descriptionMaxLen} chars
                      </span>
                    </div>
                    <textarea
                      id="description"
                      rows={3}
                      maxLength={descriptionMaxLen}
                      placeholder="Specify produce moisture level, sorting standards, pesticide usage, etc."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Photo URL Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="photoUrl" className="text-[11px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
                      <ImageIcon className="h-3.5 w-3.5" />
                      <span>Photo URL</span>
                    </label>
                    <input
                      type="url"
                      id="photoUrl"
                      placeholder="e.g. https://images.unsplash.com/photo-..."
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit triggers */}
              <button
                type="submit"
                disabled={isSubmitting || description.length > descriptionMaxLen}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold rounded-xl transition-all duration-300 shadow-md shadow-green-500/25 disabled:opacity-50 text-base cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
              >
                {isSubmitting ? "Posting produce..." : "Post Listing"}
              </button>
            </form>

            {/* RIGHT PANEL: Live Card Preview */}
            <div className="lg:col-span-5 flex flex-col gap-3 sticky top-24">
              <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider select-none text-center lg:text-left flex items-center justify-center lg:justify-start gap-1">
                <FileText className="h-4.5 w-4.5 text-slate-400" />
                <span>Live Card Preview</span>
              </span>

              {/* Product Preview Card */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-md overflow-hidden flex flex-col transition-all duration-300">
                
                {/* Product Image placeholder */}
                <div className="relative aspect-video w-full bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center overflow-hidden">
                  {photoUrl && photoUrl.startsWith("http") ? (
                    <img
                      src={photoUrl}
                      alt="Crop produce preview"
                      className="object-cover w-full h-full"
                      onError={() => {
                        // Suppress broken image link errors gracefully
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-5xl">🌾</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Photo Placeholder
                      </span>
                    </div>
                  )}

                  {/* Live Grade Tag Overlay */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-black text-green-700 border border-green-100 shadow-sm">
                    Grade {qualityGrade}
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
                      Live Produce
                    </span>
                    <h4 className="font-extrabold text-slate-800 text-lg tracking-tight leading-tight truncate">
                      {cropName}
                    </h4>
                  </div>

                  {/* Value and stats */}
                  <div className="flex items-baseline gap-0.5 border-y border-slate-50 py-3">
                    <span className="text-2xl font-black text-green-700 tracking-tight">
                      ₹{price ? parseInt(price).toLocaleString("en-IN") : "0"}
                    </span>
                    <span className="text-xs text-green-600 font-bold">/quintal</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold truncate">
                      <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                      <span>
                        {district ? `${district}, ` : "Mandi, "}
                        {state}
                      </span>
                    </div>

                    {/* Minimum order info */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold">
                      <Sprout className="h-4 w-4 text-slate-300 shrink-0" />
                      <span>
                        Min Order: {minOrder ? minOrder : "0"} quintal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
