"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp, Medal } from "lucide-react";

interface CommodityVolume {
  rank: number;
  name: string;
  nameHindi: string;
  volume: number;
}

const mockCommodities: CommodityVolume[] = [
  { rank: 1, name: "Wheat", nameHindi: "गेहूं", volume: 48200 },
  { rank: 2, name: "Rice", nameHindi: "चावल", volume: 41500 },
  { rank: 3, name: "Soybean", nameHindi: "सोयाबीन", volume: 28900 },
  { rank: 4, name: "Maize", nameHindi: "मक्का", volume: 22100 },
  { rank: 5, name: "Mustard", nameHindi: "सरसों", volume: 17800 },
];

export default function TopCommodities() {
  const [animated, setAnimated] = useState(false);
  
  // Trigger animation after mount for a premium visual growth effect
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const maxVolume = mockCommodities[0].volume; // 48200 is the highest volume

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-amber-100 text-amber-700 ring-2 ring-amber-300/40";
      case 2:
        return "bg-slate-200 text-slate-700 ring-2 ring-slate-300/40";
      case 3:
        return "bg-orange-100 text-orange-700 ring-2 ring-orange-200/40";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 select-none h-full flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600 shrink-0" />
            <h3 className="text-lg font-bold text-slate-800">
              Top Commodities <span className="text-slate-400 font-normal text-sm">(शीर्ष फसलें)</span>
            </h3>
          </div>
          <span className="text-[10px] uppercase font-extrabold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
            Vol (Qtl)
          </span>
        </div>

        {/* List of ranks */}
        <div className="flex flex-col gap-5">
          {mockCommodities.map((crop) => {
            const percentage = (crop.volume / maxVolume) * 100;
            return (
              <div key={crop.rank} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  {/* Rank and Name */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6.5 w-6.5 items-center justify-center rounded-lg text-xs font-black shrink-0 ${getRankBadgeColor(
                        crop.rank
                      )}`}
                    >
                      {crop.rank <= 3 ? (
                        <Medal className="h-3.5 w-3.5" />
                      ) : (
                        crop.rank
                      )}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800 text-sm leading-tight">
                        {crop.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold leading-tight mt-0.5">
                        {crop.nameHindi}
                      </span>
                    </div>
                  </div>

                  {/* Volume (Qtl) */}
                  <span className="text-sm font-black text-slate-700">
                    {crop.volume.toLocaleString("en-IN")}{" "}
                    <span className="text-[10px] text-slate-400 font-bold">qtl</span>
                  </span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${percentage}%` : "0%",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info bottom text */}
      <div className="text-[10px] text-center text-slate-400 font-semibold mt-6 border-t border-slate-100 pt-4">
        Updated in real-time based on local mandi logs
      </div>
    </div>
  );
}
