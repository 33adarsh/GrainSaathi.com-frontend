import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-8 animate-pulse select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* 1. Header/Toolbar Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200/50 pb-6">
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            {/* Title Bar */}
            <div className="h-7 w-3/4 bg-slate-200 rounded-xl" />
            {/* Description Sub-bar */}
            <div className="h-4 w-1/2 bg-slate-200 rounded-lg mt-1" />
          </div>

          {/* Action pills buttons right */}
          <div className="flex gap-3 w-full md:w-auto">
            <div className="h-10 w-24 bg-slate-200 rounded-xl" />
            <div className="h-10 w-32 bg-slate-200 rounded-xl" />
          </div>
        </div>

        {/* 2. Grid Cards Skeletons (4 Columns layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/60 rounded-3xl p-5 flex flex-col gap-4 shadow-sm"
            >
              {/* Card Image area */}
              <div className="w-full aspect-video bg-slate-200 rounded-2xl" />

              {/* Title & Price rows */}
              <div className="flex justify-between items-start">
                <div className="h-5 w-1/2 bg-slate-200 rounded-lg" />
                <div className="h-5 w-1/4 bg-slate-200 rounded-lg" />
              </div>

              {/* Bottom statistics bars */}
              <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-slate-100">
                <div className="h-3.5 w-3/4 bg-slate-200 rounded" />
                <div className="h-3.5 w-1/2 bg-slate-200 rounded" />
              </div>

              {/* Action Button */}
              <div className="h-9 w-full bg-slate-200 rounded-xl mt-3" />
            </div>
          ))}
        </div>

        {/* 3. Bottom Description Block Skeleton */}
        <div className="bg-white border border-slate-200/60 rounded-3xl p-6 flex flex-col gap-4 mt-4 shadow-sm">
          <div className="h-5 w-1/4 bg-slate-200 rounded-lg" />
          <div className="flex flex-col gap-2.5 mt-2">
            <div className="h-3.5 w-full bg-slate-200 rounded" />
            <div className="h-3.5 w-5/6 bg-slate-200 rounded" />
            <div className="h-3.5 w-4/5 bg-slate-200 rounded" />
          </div>
        </div>

      </div>
    </div>
  );
}
