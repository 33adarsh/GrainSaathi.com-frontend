import React from "react";
import Image from "next/image";
import { Edit2, Trash2, IndianRupee, Sprout } from "lucide-react";
import { Listing } from "@/types";
import StatusBadge from "./StatusBadge";

export interface ListingCardProps {
  listing: Listing;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function ListingCard({
  listing,
  onEdit,
  onDelete,
}: ListingCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 gap-4 select-none">
      {/* Crop details & image thumbnail */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative h-16 w-16 rounded-xl overflow-hidden shrink-0 border border-slate-100">
          <Image
            src={listing.product.image}
            alt={listing.product.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-tight truncate">
            {listing.product.name}
          </h4>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
            Grade {listing.product.grade} &bull; Posted on {listing.postedDate}
          </span>
        </div>
      </div>

      {/* Metrics, status & action buttons */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-50">
        {/* Quantity and Price */}
        <div className="flex gap-6 items-center">
          <div className="flex flex-col text-right sm:text-left">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Quantity
            </span>
            <span className="text-xs font-black text-slate-700 mt-0.5">
              {listing.product.quantity}
            </span>
          </div>

          <div className="flex flex-col text-right">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Rate
            </span>
            <span className="text-xs font-black text-green-700 mt-0.5 flex items-center justify-end">
              ₹{listing.product.price.toLocaleString("en-IN")}/q
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="shrink-0">
          <StatusBadge status={listing.status} />
        </div>

        {/* Edit / Delete action triggers */}
        <div className="flex items-center gap-1.5 border-l border-slate-100 pl-4">
          <button
            onClick={() => onEdit?.(listing.id)}
            className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
            aria-label={`Edit listing ${listing.id}`}
          >
            <Edit2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete?.(listing.id)}
            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
            aria-label={`Delete listing ${listing.id}`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
