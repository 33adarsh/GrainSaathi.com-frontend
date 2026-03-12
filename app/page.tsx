import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import LoginSection from '@/components/LoginSection';
import { Leaf, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const featuredProducts = [
  {
    id: "1",
    name: "Premium Basmati Rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop",
    quantity: "500 Quintals",
    price: 3200,
    location: "Karnal, Haryana",
    farmerName: "Rajesh Kumar"
  },
  {
    id: "2",
    name: "Organic Sharbati Wheat",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop",
    quantity: "200 Quintals",
    price: 2800,
    location: "Sehore, Madhya Pradesh",
    farmerName: "Suresh Patel"
  },
  {
    id: "3",
    name: "Golden Hybrid Maize",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop",
    quantity: "150 Quintals",
    price: 2100,
    location: "Guntur, Andhra Pradesh",
    farmerName: "Venkatesh Rao"
  },
  {
    id: "4",
    name: "Sona Masoori Paddy",
    image: "https://images.unsplash.com/photo-1534951474654-87823058c487?q=80&w=600&auto=format&fit=crop",
    quantity: "800 Quintals",
    price: 2450,
    location: "Raichur, Karnataka",
    farmerName: "Mohammed Ali"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* About Company Section */}
      <section id="about" className="relative py-20 bg-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4">About Grain Saathi</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6" />
            <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto">
              We are revolutionizing agricultural trading by bridging the gap between farmers and buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Users, title: "Direct Connect", desc: "Eliminating middlemen to ensure farmers get better margins and buyers get better prices." },
              { icon: ShieldCheck, title: "Verified Quality", desc: "Every listing goes through strict quality checks to ensure you get exactly what you pay for." },
              { icon: TrendingUp, title: "Live Market Pricing", desc: "Access real-time commodity prices to make informed buying and selling decisions." },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-green-600/8 transition-all duration-300 border border-green-100/60 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/50 group-hover:to-emerald-50/30 transition-all duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="mx-auto h-16 w-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-emerald-500 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                    <item.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Section */}
      <LoginSection />

      {/* Featured Grains Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-green-50/30 to-white overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-green-100/50 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Featured Grains</h2>
              <p className="mt-3 text-lg text-slate-500">Fresh listings from verified farmers across the country</p>
            </div>
            <Link
              href="/marketplace"
              className="mt-4 md:mt-0 text-green-600 font-medium hover:text-green-700 flex items-center gap-2 group transition-colors duration-200"
            >
              View all grains
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-10 -right-20 w-72 h-72 bg-green-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4">How It Works</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Register Account", desc: "Sign up as a farmer, wholesaler, or agro company with verified credentials." },
              { step: "02", title: "List or Browse", desc: "Farmers list their produce. Buyers browse categories and compare prices." },
              { step: "03", title: "Connect directly", desc: "Use our platform to initiate contact and negotiate terms seamlessly." },
              { step: "04", title: "Secure Trade", desc: "Complete the transaction with trust, powered by Grain Saathi verification." }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="text-6xl font-black text-green-100/80 mb-4 group-hover:text-green-200/80 transition-colors duration-300">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 relative z-10">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2689&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="h-16 w-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-5xl mb-6">
            Ready to grow your agricultural business?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of verified farmers and buyers already trading on Grain Saathi. Experience transparent pricing and secure transactions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-4 bg-white text-green-700 hover:bg-green-50 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started Today
            </Link>
            <Link
              href="/marketplace"
              className="px-8 py-4 bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}