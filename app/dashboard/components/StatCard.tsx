"use client";

import { Sprout, ShoppingBag, Users, IndianRupee, ArrowUpRight, ArrowDownRight } from "lucide-react";

export type StatIconType = "sprout" | "shopping-bag" | "users" | "rupee";

const iconMap = {
  sprout: Sprout,
  "shopping-bag": ShoppingBag,
  users: Users,
  rupee: IndianRupee,
};

export interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isUp: boolean;
  icon: StatIconType;
  iconBg: string; // Tailwind class string, e.g. "bg-green-100 text-green-600"
}

export default function StatCard({
  label,
  value,
  change,
  isUp,
  icon,
  iconBg,
}: StatCardProps) {
  const Icon = iconMap[icon] || Sprout;
  return (
    <div className="group flex flex-col justify-between bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out select-none">
      <div className="flex items-center justify-between">
        {/* Value and Label */}
        <div className="flex flex-col">
          <span className="text-3xl font-extrabold text-slate-800 tracking-tight leading-none mb-2">
            {value}
          </span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {label}
          </span>
        </div>

        {/* Icon in Circle Container */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${iconBg} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="h-6 w-6 shrink-0" />
        </div>
      </div>

      {/* Percentage change status badge */}
      <div className="flex items-center mt-5">
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold ${
            isUp
              ? "bg-green-50 text-green-700 border border-green-100"
              : "bg-red-50 text-red-700 border border-red-100"
          }`}
        >
          {isUp ? (
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 stroke-[2.5]" />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5 shrink-0 stroke-[2.5]" />
          )}
          <span>{change}</span>
        </span>
        <span className="text-xs font-medium text-slate-400 ml-2">
          vs. last month
        </span>
      </div>
    </div>
  );
}
