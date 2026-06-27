"use client";

import Link from 'next/link';
import { Tractor } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FarmerLogin() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Tractor className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800">
            {t("login.farmerLogin")}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {t("login.farmerWelcome")}
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">{t("login.phone")}</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" required className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="+91 99999 99999" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">{t("login.password")}</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="••••••••" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="login-with-otp" name="login-with-otp" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded" />
              <label htmlFor="login-with-otp" className="ml-2 block text-sm text-slate-700">
                {t("login.otpInstead")}
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary/80">{t("login.forgotPassword")}</a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
              {t("login.signIn")}
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">&larr; {t("common.backToHome")}</Link>
        </div>
      </div>
    </div>
  );
}

