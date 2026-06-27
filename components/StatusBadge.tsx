"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export type StatusType =
  | "Active"
  | "Sold"
  | "Pending"
  | "Verified"
  | "Sent"
  | "Replied"
  | "Closed"
  | "Confirmed"
  | "Delivered";

export interface StatusBadgeProps {
  status: StatusType;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { t } = useLanguage();

  const getBadgeStyles = (val: StatusType) => {
    switch (val) {
      case "Active":
      case "Verified":
      case "Replied":
      case "Delivered":
        return "bg-green-50 text-green-700 border-green-200/60";
      case "Pending":
      case "Sent":
        return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "Confirmed":
        return "bg-blue-50 text-blue-700 border-blue-200/60";
      case "Sold":
      case "Closed":
        return "bg-slate-100 text-slate-600 border-slate-200/60";
      default:
        return "bg-slate-50 text-slate-500 border-slate-200/40";
    }
  };

  const getStatusText = (val: StatusType) => {
    const key = `status.${val.toLowerCase()}`;
    return t(key) || val;
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border tracking-wide select-none ${getBadgeStyles(
        status
      )}`}
    >
      {getStatusText(status)}
    </span>
  );
}

