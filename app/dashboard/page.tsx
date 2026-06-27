import React from "react";
import StatCard from "./components/StatCard";
import PriceChart from "./components/PriceChart";
import TopCommodities from "./components/TopCommodities";
import OrdersTable from "./components/OrdersTable";
import FarmerRegistrations from "./components/FarmerRegistrations";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div className="flex flex-col gap-1 select-none">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">
          Admin Dashboard Overview
        </h2>
        <p className="text-sm font-semibold text-slate-400">
          Welcome back, Arjun Singh. Monitoring Grain Saathi trading operations.
        </p>
      </div>

      {/* KPI Stats Grid Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Listings */}
        <StatCard
          label="Total Listings"
          value="1,240"
          change="+8.2%"
          isUp={true}
          icon="sprout"
          iconBg="bg-green-100 text-green-700 border border-green-200"
        />

        {/* Active Orders */}
        <StatCard
          label="Active Orders"
          value="342"
          change="+3.5%"
          isUp={true}
          icon="shopping-bag"
          iconBg="bg-blue-100 text-blue-700 border border-blue-200"
        />

        {/* Registered Farmers */}
        <StatCard
          label="Kisan Registrations"
          value="5,870"
          change="+12.1%"
          isUp={true}
          icon="users"
          iconBg="bg-emerald-100 text-emerald-700 border border-emerald-200"
        />

        {/* Revenue This Month */}
        <StatCard
          label="Revenue This Month"
          value="₹12,45,000"
          change="-2.3%"
          isUp={false}
          icon="rupee"
          iconBg="bg-amber-100 text-amber-700 border border-amber-200"
        />
      </div>

      {/* Grid Row 2: Mandi Price Chart (left) & Top Commodities (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PriceChart />
        </div>
        <div className="lg:col-span-1">
          <TopCommodities />
        </div>
      </div>

      {/* Grid Row 3: Recent Orders Table (left) & Farmer Registrations (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrdersTable />
        </div>
        <div className="lg:col-span-1">
          <FarmerRegistrations />
        </div>
      </div>
    </div>
  );
}
