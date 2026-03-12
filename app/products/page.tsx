import ProductCard from '@/components/ProductCard';

const allProducts = [
  {
    id: "1",
    name: "Premium Basmati Rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop",
    quantity: "Available across India",
    price: 3200,
    location: "Multiple Locations"
  },
  {
    id: "2",
    name: "Organic Sharbati Wheat",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop",
    quantity: "Available across India",
    price: 2800,
    location: "Multiple Locations"
  },
  {
    id: "3",
    name: "Golden Hybrid Maize",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop",
    quantity: "Available across India",
    price: 2100,
    location: "Multiple Locations"
  },
  {
    id: "4",
    name: "Sona Masoori Paddy",
    image: "https://images.unsplash.com/photo-1534951474654-87823058c487?q=80&w=600&auto=format&fit=crop",
    quantity: "Available across India",
    price: 2450,
    location: "Multiple Locations"
  },
  {
    id: "5",
    name: "Toor Dal (Pigeon Pea)",
    image: "https://images.unsplash.com/photo-1585935409141-f6701fdbbe3e?q=80&w=600&auto=format&fit=crop",
    quantity: "Available across India",
    price: 9500,
    location: "Multiple Locations"
  },
  {
    id: "6",
    name: "Soybean Market Grade",
    image: "https://images.unsplash.com/photo-1594911772125-07fdaeeabc3d?q=80&w=600&auto=format&fit=crop",
    quantity: "Available across India",
    price: 4600,
    location: "Multiple Locations"
  },
  {
    id: "7",
    name: "Bengal Gram (Chana)",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=600&auto=format&fit=crop",
    quantity: "Available across India",
    price: 5400,
    location: "Multiple Locations"
  },
  {
    id: "8",
    name: "Mustard Seeds",
    image: "https://images.unsplash.com/photo-1447690709975-318628b14c57?q=80&w=600&auto=format&fit=crop",
    quantity: "Available across India",
    price: 5200,
    location: "Multiple Locations"
  }
];

export default function Products() {
  return (
    <div className="relative bg-gradient-to-b from-green-50/40 via-white to-white min-h-screen py-12 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Agricultural Products</h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-5" />
          <p className="text-lg text-slate-500 leading-relaxed">
            Browse our comprehensive directory of agricultural commodities traded on Grain Saathi. Average market rates are indicated.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All Products', 'Rice & Paddy', 'Wheat', 'Maize', 'Pulses', 'Oilseeds', 'Spices'].map((cat, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                idx === 0
                  ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-md shadow-green-600/20'
                  : 'bg-white/70 backdrop-blur-sm text-slate-600 border border-green-100/60 hover:bg-green-50 hover:text-green-700 hover:border-green-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-20 relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-100/60 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 to-emerald-50/20 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Can&apos;t find what you&apos;re looking for?</h3>
            <p className="text-slate-500 mb-6">Our marketplace is updated daily with new listings from farmers across India.</p>
            <button className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/25 hover:-translate-y-0.5 cursor-pointer">
              Post a Buying Requirement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
