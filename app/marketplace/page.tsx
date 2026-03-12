import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { Filter, Search, SlidersHorizontal, SortDesc } from "lucide-react";

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: "Live Marketplace | Grain Saathi",
  description:
    "Browse live grain listings from verified farmers across India. Connect directly, negotiate prices, and trade securely on Grain Saathi.",
};

/* ─── Data (will be replaced by API calls in production) ─── */
const MARKETPLACE_LISTINGS = [
  {
    id: "1",
    name: "Premium Basmati Rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop",
    quantity: "500 Quintals",
    price: 3200,
    location: "Karnal, Haryana",
    farmerName: "Rajesh Kumar",
  },
  {
    id: "2",
    name: "Organic Sharbati Wheat",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop",
    quantity: "200 Quintals",
    price: 2800,
    location: "Sehore, Madhya Pradesh",
    farmerName: "Suresh Patel",
  },
  {
    id: "3",
    name: "Golden Hybrid Maize",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop",
    quantity: "150 Quintals",
    price: 2100,
    location: "Guntur, Andhra Pradesh",
    farmerName: "Venkatesh Rao",
  },
  {
    id: "4",
    name: "Sona Masoori Paddy",
    image: "https://images.unsplash.com/photo-1534951474654-87823058c487?q=80&w=600&auto=format&fit=crop",
    quantity: "800 Quintals",
    price: 2450,
    location: "Raichur, Karnataka",
    farmerName: "Mohammed Ali",
  },
  {
    id: "5",
    name: "Toor Dal (Pigeon Pea)",
    image: "https://images.unsplash.com/photo-1585935409141-f6701fdbbe3e?q=80&w=600&auto=format&fit=crop",
    quantity: "50 Quintals",
    price: 9500,
    location: "Latur, Maharashtra",
    farmerName: "Govind Patil",
  },
  {
    id: "6",
    name: "Soybean Market Grade",
    image: "https://images.unsplash.com/photo-1594911772125-07fdaeeabc3d?q=80&w=600&auto=format&fit=crop",
    quantity: "350 Quintals",
    price: 4600,
    location: "Indore, Madhya Pradesh",
    farmerName: "Amit Sharma",
  },
] as const;

const FILTER_CATEGORIES = ["Wheat", "Rice & Paddy", "Maize", "Pulses", "Oilseeds"] as const;
const FILTER_LOCATIONS = ["All India", "Madhya Pradesh", "Maharashtra", "Haryana", "Punjab"] as const;

/* ─── Shared style tokens ─── */
const GLASS_CONTROL =
  "bg-white/70 backdrop-blur-sm border border-green-100/60 rounded-xl text-sm transition-all duration-200";
const GLASS_CONTROL_HOVER =
  "hover:bg-green-50 hover:text-green-700 hover:border-green-200/60";

/* ─── Reusable sub-components ─── */
function ToolbarButton({
  icon: Icon,
  label,
}: {
  icon: typeof Filter;
  label: string;
}) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2.5 font-medium text-slate-600 cursor-pointer ${GLASS_CONTROL} ${GLASS_CONTROL_HOVER}`}
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function PaginationButton({
  children,
  active = false,
  disabled = false,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
}) {
  if (active) {
    return (
      <button
        aria-current="page"
        className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center text-sm font-semibold shadow-md shadow-green-600/20 cursor-pointer"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      disabled={disabled}
      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${GLASS_CONTROL} ${GLASS_CONTROL_HOVER} text-slate-600`}
    >
      {children}
    </button>
  );
}

/* ─── Page component ─── */
export default function Marketplace() {
  const listings = MARKETPLACE_LISTINGS;
  const totalPages = 3; // placeholder until real pagination
  const currentPage = 1;

  return (
    <div className="relative bg-gradient-to-b from-green-50/40 via-white to-white min-h-screen py-8 overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 bg-green-100/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Live Marketplace
            </h1>
            <p className="text-slate-500 mt-1">
              Directly connect with farmers and negotiate prices.
            </p>
          </div>

          {/* Search & toolbar */}
          <div className="flex w-full md:w-auto gap-3" role="toolbar" aria-label="Search and filter controls">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
              <input
                type="search"
                placeholder="Search grains, locations..."
                aria-label="Search listings"
                className={`w-full md:w-64 pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-300 ${GLASS_CONTROL}`}
              />
            </div>
            <ToolbarButton icon={Filter} label="Filters" />
            <ToolbarButton icon={SortDesc} label="Sort" />
          </div>
        </header>

        <div className="flex gap-8">
          {/* ── Sidebar filters (desktop) ── */}
          <aside className="hidden lg:block w-64 shrink-0" aria-label="Filter options">
            <div className={`p-5 rounded-2xl shadow-sm ${GLASS_CONTROL}`}>
              <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold border-b border-green-100/50 pb-3">
                <SlidersHorizontal className="h-5 w-5 text-green-600" />
                Filters
              </div>

              <div className="space-y-5">
                {/* Category filter */}
                <fieldset>
                  <legend className="text-sm font-medium text-slate-800 mb-2">
                    Category
                  </legend>
                  <div className="space-y-2.5">
                    {FILTER_CATEGORIES.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-slate-700 cursor-pointer transition-colors duration-200"
                      >
                        <input
                          type="checkbox"
                          name="category"
                          value={cat}
                          className="rounded text-green-600 focus:ring-green-500 bg-green-50/50 border-green-200"
                        />
                        {cat}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Location filter */}
                <fieldset className="pt-4 border-t border-green-100/50">
                  <legend className="text-sm font-medium text-slate-800 mb-2">
                    Location
                  </legend>
                  <select
                    name="location"
                    aria-label="Filter by location"
                    className={`w-full py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-300 text-slate-600 ${GLASS_CONTROL}`}
                  >
                    {FILTER_LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>
            </div>
          </aside>

          {/* ── Main content ── */}
          <main className="flex-1">
            {/* Product grid */}
            {listings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {listings.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <Search className="h-12 w-12 text-green-300 mb-4" />
                <h2 className="text-xl font-semibold text-slate-700 mb-2">
                  No listings found
                </h2>
                <p className="text-slate-400 max-w-sm">
                  Try adjusting your filters or search query to find what
                  you&apos;re looking for.
                </p>
              </div>
            )}

            {/* Pagination */}
            {listings.length > 0 && (
              <nav aria-label="Pagination" className="mt-12 flex justify-center items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  className={`px-4 py-2 font-medium cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${GLASS_CONTROL} ${GLASS_CONTROL_HOVER} text-slate-600`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationButton key={page} active={page === currentPage}>
                      {page}
                    </PaginationButton>
                  )
                )}

                <button
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 font-medium cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${GLASS_CONTROL} ${GLASS_CONTROL_HOVER} text-slate-600`}
                >
                  Next
                </button>
              </nav>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
