import React from "react";
import Sidebar, { SidebarProvider } from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";

export const metadata = {
  title: "Grain Saathi | Admin Dashboard",
  description: "Administrative panel for managing Grain Saathi listings, farmers, wholesale buyers, and trades.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden bg-slate-50 font-sans antialiased text-slate-800">
        {/* Responsive left sidebar */}
        <Sidebar />

        {/* Right workspace viewport */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Sticky top navigation bar */}
          <TopNavbar />

          {/* Main scrollable body */}
          <main className="flex-grow overflow-y-auto bg-slate-50/60 p-4 md:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
