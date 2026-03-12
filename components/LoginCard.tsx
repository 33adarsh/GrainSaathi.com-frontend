import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface LoginCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  icon: LucideIcon;
}

export default function LoginCard({ title, description, buttonText, href, icon: Icon }: LoginCardProps) {
  return (
    <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-green-600/8 transition-all duration-300 border border-green-100/60 group flex flex-col h-full hover:-translate-y-1.5">
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/50 group-hover:to-emerald-50/30 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon circle */}
        <div className="mx-auto h-16 w-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-emerald-500 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
          <Icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-500 mb-8 flex-grow leading-relaxed">{description}</p>

        <Link
          href={href}
          className="w-full inline-block px-6 py-3 bg-green-50 text-green-700 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-500 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-green-600/20"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
