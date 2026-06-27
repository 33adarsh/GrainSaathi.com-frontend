"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";

interface Order {
  id: string;
  farmerName: string;
  location: string;
  commodity: string;
  commodityHindi: string;
  quantity: number;
  buyer: string;
  status: "Pending" | "Confirmed" | "Delivered";
  date: string;
}

const mockOrders: Order[] = [
  {
    id: "GS-2024-0041",
    farmerName: "Rajesh Kumar",
    location: "Patna, Bihar",
    commodity: "Wheat",
    commodityHindi: "गेहूं",
    quantity: 150,
    buyer: "Patna Mandi Corp",
    status: "Confirmed",
    date: "2026-06-21",
  },
  {
    id: "GS-2024-0042",
    farmerName: "Sunita Devi",
    location: "Hapur, Uttar Pradesh",
    commodity: "Rice",
    commodityHindi: "चावल",
    quantity: 320,
    buyer: "Hapur Wholesalers",
    status: "Delivered",
    date: "2026-06-20",
  },
  {
    id: "GS-2024-0043",
    farmerName: "Ramesh Yadav",
    location: "Indore, Madhya Pradesh",
    commodity: "Maize",
    commodityHindi: "मक्का",
    quantity: 80,
    buyer: "Indore Traders Ltd",
    status: "Pending",
    date: "2026-06-20",
  },
  {
    id: "GS-2024-0044",
    farmerName: "Amit Patel",
    location: "Kota, Rajasthan",
    commodity: "Soybean",
    commodityHindi: "सोयाबीन",
    quantity: 240,
    buyer: "Kota Oil Mills",
    status: "Confirmed",
    date: "2026-06-19",
  },
  {
    id: "GS-2024-0045",
    farmerName: "Geeta Sharma",
    location: "Bharatpur, Rajasthan",
    commodity: "Mustard",
    commodityHindi: "सरसों",
    quantity: 110,
    buyer: "Bharatpur Mandi",
    status: "Delivered",
    date: "2026-06-18",
  },
  {
    id: "GS-2024-0046",
    farmerName: "Suresh Chandra",
    location: "Meerut, Uttar Pradesh",
    commodity: "Wheat",
    commodityHindi: "गेहूं",
    quantity: 450,
    buyer: "Adani Wilmar Ltd",
    status: "Pending",
    date: "2026-06-18",
  },
  {
    id: "GS-2024-0047",
    farmerName: "Ram Singh",
    location: "Varanasi, Uttar Pradesh",
    commodity: "Rice",
    commodityHindi: "चावल",
    quantity: 180,
    buyer: "Varanasi Food Corp",
    status: "Delivered",
    date: "2026-06-17",
  },
  {
    id: "GS-2024-0048",
    farmerName: "Kavita Bai",
    location: "Bhopal, Madhya Pradesh",
    commodity: "Soybean",
    commodityHindi: "सोयाबीन",
    quantity: 300,
    buyer: "Bhopal Agro Ind",
    status: "Pending",
    date: "2026-06-16",
  },
];

type StatusFilter = "All" | "Pending" | "Confirmed" | "Delivered";

export default function OrdersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  // Filter orders dynamically based on search query and status filter
  const filteredOrders = useMemo(() => {
    return mockOrders.filter((order) => {
      // Matches search term on Farmer Name or Commodity
      const matchesSearch =
        order.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.commodityHindi.includes(searchQuery);

      // Matches status select
      const matchesStatus =
        statusFilter === "All" ? true : order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  // Compute status counts for badges
  const counts = useMemo(() => {
    const total = mockOrders.length;
    const pending = mockOrders.filter((o) => o.status === "Pending").length;
    const confirmed = mockOrders.filter((o) => o.status === "Confirmed").length;
    const delivered = mockOrders.filter((o) => o.status === "Delivered").length;
    return { All: total, Pending: pending, Confirmed: confirmed, Delivered: delivered };
  }, []);

  const getStatusStyle = (status: "Pending" | "Confirmed" | "Delivered") => {
    switch (status) {
      case "Pending":
        return "bg-amber-50 text-amber-700 border border-amber-200/60";
      case "Confirmed":
        return "bg-blue-50 text-blue-700 border border-blue-200/60";
      case "Delivered":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200/60";
      default:
        return "bg-slate-50 text-slate-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 select-none h-full flex flex-col justify-between">
      <div>
        {/* Title Area */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Recent Orders <span className="text-slate-400 font-normal text-sm">(हाल के ऑर्डर)</span>
            </h3>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">
              Live trade logs connecting farmers and wholesale buyers
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute top-2.5 left-3 h-4.5 w-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search farmer or crop..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
            />
          </div>
        </div>

        {/* Tab Filters Row */}
        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-slate-100 pb-4">
          {(["All", "Pending", "Confirmed", "Delivered"] as StatusFilter[]).map((tab) => {
            const isActive = statusFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-green-600 text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`inline-flex items-center justify-center rounded-md px-1.5 py-0.5 text-[10px] font-black ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {counts[tab]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Table Component */}
        <div className="w-full overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50/70 text-slate-400 font-semibold border-b border-slate-100 uppercase tracking-wider text-[10px]">
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Farmer Name</th>
                <th className="px-6 py-4">Commodity</th>
                <th className="px-6 py-4 text-right">Qty (qtl)</th>
                <th className="px-6 py-4">Buyer</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    {/* Order ID */}
                    <td className="px-6 py-4 font-bold text-slate-700 whitespace-nowrap">
                      {order.id}
                    </td>
                    {/* Farmer details */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-800">
                          {order.farmerName}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {order.location}
                        </span>
                      </div>
                    </td>
                    {/* Commodity */}
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-700">
                      <span>{order.commodity}</span>
                      <span className="text-xs text-slate-400 ml-1">
                        ({order.commodityHindi})
                      </span>
                    </td>
                    {/* Quantity */}
                    <td className="px-6 py-4 text-right font-extrabold text-slate-800 whitespace-nowrap">
                      {order.quantity.toLocaleString("en-IN")}
                    </td>
                    {/* Buyer */}
                    <td className="px-6 py-4 font-medium text-slate-600 whitespace-nowrap">
                      {order.buyer}
                    </td>
                    {/* Status Badge */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold tracking-wide ${getStatusStyle(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    {/* Date */}
                    <td className="px-6 py-4 text-slate-400 whitespace-nowrap font-semibold">
                      {order.date}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-10 text-slate-400 font-medium"
                  >
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination / Record count display */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-semibold border-t border-slate-100 pt-4 mt-6">
        <span>
          Showing {filteredOrders.length} of {mockOrders.length} orders
        </span>
        <span className="text-green-600 font-bold">
          Grain Saathi Clearing House
        </span>
      </div>
    </div>
  );
}
