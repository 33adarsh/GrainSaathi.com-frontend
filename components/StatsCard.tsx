import React from "react";

export interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: "green" | "blue" | "orange" | "red";
}

const colorMap = {
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
  },
  orange: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-600",
    border: "border-red-100",
  },
};

export default function StatsCard({ icon, label, value, color }: StatsCardProps) {
  const styles = colorMap[color] || colorMap.green;

  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md select-none">
      {/* Icon Circle */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${styles.bg} ${styles.text} ${styles.border}`}
      >
        {icon}
      </div>

      {/* Details */}
      <div className="flex flex-col min-w-0">
        <span className="text-2xl font-black text-slate-800 tracking-tight leading-none mb-1">
          {value}
        </span>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider truncate">
          {label}
        </span>
      </div>
    </div>
  );
}
