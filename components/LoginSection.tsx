import LoginCard from './LoginCard';
import { Tractor, Building2, Store, Briefcase } from 'lucide-react';

export default function LoginSection() {
  const loginOptions = [
    {
      title: "Farmer Login",
      description: "Farmers can sell wheat, rice, paddy and other crops.",
      buttonText: "Farmer Login",
      href: "/login/farmer",
      icon: Tractor
    },
    {
      title: "Wholesaler Login",
      description: "Wholesalers can purchase grains in bulk.",
      buttonText: "Wholesaler Login",
      href: "/login/wholesaler",
      icon: Building2
    },
    {
      title: "Micro-Entrepreneur Login",
      description: "Small agro businesses and traders.",
      buttonText: "Micro-Entrepreneur Login",
      href: "/login/microentrepreneur",
      icon: Store
    },
    {
      title: "Company Login",
      description: "Food processing companies and exporters.",
      buttonText: "Company Login",
      href: "/login/company",
      icon: Briefcase
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-green-50/30 to-white border-t border-green-100/40 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4">Access Your GrainSathi Account</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Choose your account type below to securely log into the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loginOptions.map((option, idx) => (
            <LoginCard key={idx} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
}
