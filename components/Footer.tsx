import Link from 'next/link';
import { Facebook, Instagram, Leaf, MapPin, Phone, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-400 overflow-hidden">
      {/* Decorative green glow */}
      <div className="absolute top-0 left-1/4 w-96 h-40 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-9 w-9 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">Grain Saathi</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Connecting farmers, wholesale buyers, and agro companies directly. Empowering agriculture through transparent commodity trading.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-500 hover:bg-green-500/15 hover:text-green-400 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
              <div className="h-0.5 w-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mt-2" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-green-400 transition-colors duration-200">Home</Link></li>
              <li><Link href="/marketplace" className="hover:text-green-400 transition-colors duration-200">Marketplace</Link></li>
              <li><Link href="/products" className="hover:text-green-400 transition-colors duration-200">All Products</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Categories
              <div className="h-0.5 w-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mt-2" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products?category=rice" className="hover:text-green-400 transition-colors duration-200">Rice & Paddy</Link></li>
              <li><Link href="/products?category=wheat" className="hover:text-green-400 transition-colors duration-200">Wheat</Link></li>
              <li><Link href="/products?category=maize" className="hover:text-green-400 transition-colors duration-200">Maize</Link></li>
              <li><Link href="/products?category=pulses" className="hover:text-green-400 transition-colors duration-200">Pulses</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact Us
              <div className="h-0.5 w-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mt-2" />
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                <span>123 Agri Business Park, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-500 shrink-0" />
                <span>support@grainsaathi.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Grain Saathi. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-green-400 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-green-400 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
