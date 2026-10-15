import React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { BRANCHES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-black border-t border-silver-200 dark:border-white/10 text-silver-600 dark:text-silver-400 text-[13px] pt-14 pb-24 md:pb-32 relative z-30 text-center">
      <div className="container-app flex flex-col items-center text-center">

        <div className="mb-12 w-full">
          <h4 className="font-bold text-silver-900 dark:text-white text-[14px] mb-5 tracking-wide uppercase text-center">Our 5 Branches in Kano</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRANCHES.map((b) => (
              <div key={b.id} className="p-4 rounded-2xl bg-silver-100 dark:bg-white/5 border border-silver-200 dark:border-white/10 text-center flex flex-col items-center justify-center shadow-sm">
                <p className="font-bold text-silver-900 dark:text-white text-[13px] leading-tight mb-1 text-center">{b.name}</p>
                <p className="text-[11px] text-silver-600 dark:text-silver-400 leading-relaxed mb-1 text-center">{b.address}</p>
                <p className="text-[11px] text-deep-orange-500 font-bold text-center">{b.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 w-full text-center">
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-silver-900 dark:text-white mb-3 text-[14px]">Shop</h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li><Link href="/products" className="hover:text-deep-orange-500 transition-colors">All Products</Link></li>
              <li><Link href="/iphone" className="hover:text-deep-orange-500 transition-colors">iPhone</Link></li>
              <li><Link href="/mac" className="hover:text-deep-orange-500 transition-colors">Mac</Link></li>
              <li><Link href="/ipad" className="hover:text-deep-orange-500 transition-colors">iPad</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-silver-900 dark:text-white mb-3 text-[14px]">Support</h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li><Link href="/faq" className="hover:text-deep-orange-500 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-deep-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/trade-in" className="hover:text-deep-orange-500 transition-colors">Trade-In</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-silver-900 dark:text-white mb-3 text-[14px]">Legal</h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li><Link href="/privacy" className="hover:text-deep-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-deep-orange-500 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-silver-900 dark:text-white mb-3 text-[14px]">Contact</h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li className="text-silver-900 dark:text-white font-bold text-[14px]">+234 813 784 3328</li>
              <li className="text-silver-600 dark:text-silver-400">Info@drapple.com</li>
            </ul>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-silver-600 dark:text-silver-400 hover:text-deep-orange-500 transition-colors"><Icons.Facebook size={20} /></a>
              <a href="#" className="text-silver-600 dark:text-silver-400 hover:text-deep-orange-500 transition-colors"><Icons.Instagram size={20} /></a>
              <a href="#" className="text-silver-600 dark:text-silver-400 hover:text-deep-orange-500 transition-colors"><Icons.Youtube size={20} /></a>
              <a href="#" className="text-silver-600 dark:text-silver-400 hover:text-deep-orange-500 transition-colors"><Icons.Tiktok size={20} /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-silver-200 dark:border-white/10 w-full flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-[13px] text-silver-600 dark:text-silver-400 text-center">
            Copyright &copy; {year} <span className="font-bold text-silver-900 dark:text-white">Dr. Apple</span>. All rights reserved.
          </p>

          {/* Cleaned up Yalerima Credit (URL hidden) */}
          <div className="p-4 rounded-2xl bg-silver-100/90 dark:bg-white/5 border border-silver-200 dark:border-white/10 max-w-2xl w-full text-center shadow-sm">
            <p className="text-[14px] text-silver-900 dark:text-white font-medium text-center">
              Powered by{" "}
              <a href="https://www.yalerima.com.ng" target="_blank" rel="noopener noreferrer" className="font-bold text-deep-orange-500 hover:text-deep-orange-600 underline underline-offset-4 transition-colors">
                Yalerima Technologies Limited
              </a>
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 text-[13px] pt-2">
            <Link href="/privacy" className="font-semibold text-silver-800 dark:text-silver-200 hover:text-deep-orange-500 underline underline-offset-2">Privacy Policy</Link>
            <span className="text-silver-300 dark:text-silver-700">•</span>
            <Link href="/terms" className="font-semibold text-silver-800 dark:text-silver-200 hover:text-deep-orange-500 underline underline-offset-2">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

