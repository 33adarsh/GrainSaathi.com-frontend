import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  quantity: string;
  price: number;
  location: string;
  farmerName?: string;
}

export default function ProductCard({
  name,
  image,
  quantity,
  price,
  location,
  farmerName
}: ProductCardProps) {
  return (
    <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl border border-green-100/60 overflow-hidden hover:shadow-xl hover:shadow-green-600/8 transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5">
      {/* Product Image */}
      <div className="relative h-48 w-full bg-green-50/50 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Green gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Verified badge */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-green-700 shadow-sm border border-green-100/60">
          ✓ Verified
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow relative">
        {/* Subtle glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/40 group-hover:to-emerald-50/20 transition-all duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-slate-800 line-clamp-1">{name}</h3>
            <div className="text-right shrink-0 ml-3">
              <span className="block text-lg font-bold text-green-600">₹{price.toLocaleString('en-IN')}</span>
              <span className="text-xs text-slate-400">per quintal</span>
            </div>
          </div>

          <div className="space-y-2 mt-auto pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Available Qty:</span>
              <span className="font-medium text-slate-700">{quantity}</span>
            </div>

            <div className="flex items-start gap-1.5 text-sm text-slate-500">
              <MapPin className="h-4 w-4 shrink-0 text-green-500 mt-0.5" />
              <span className="line-clamp-1">{location}</span>
            </div>

            {farmerName && (
              <div className="text-sm text-slate-500 mt-2 pt-2 border-t border-green-100/50">
                <span className="text-slate-400">Listed by: </span>
                <span className="font-medium text-slate-700">{farmerName}</span>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button className="w-full mt-5 bg-green-50 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-500 text-green-700 hover:text-white font-semibold py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md hover:shadow-green-600/20 cursor-pointer">
            <Phone className="h-4 w-4" />
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
}
