import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap select-none text-sm text-slate-400 font-semibold gap-1.5 py-2">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        return (
          <React.Fragment key={idx}>
            {/* Link or Label */}
            {isLast || !item.href ? (
              <span className="text-slate-600 font-bold max-w-[200px] truncate">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-green-600 transition-colors"
              >
                {item.label}
              </Link>
            )}

            {/* Separator Chevron */}
            {!isLast && (
              <ChevronRight className="h-4 w-4 shrink-0 stroke-[2.5] text-slate-300" />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
