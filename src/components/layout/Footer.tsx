import React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { BRANCHES, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-white/90 dark:bg-black/70 backdrop-blur-xl border-t border-silver-200 dark:border-white/10 text-silver-500 dark:text-silver-400 text-[12px] pt-12 pb-6 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        {/* 5 Branches row */}
        <div className="mb-10">
          <h4 className="font-semibold text-silver-900 dark:text-white text-[13px] mb-4 tracking-wide uppercase">
            Our 5 Branches in Kano
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRANCHES.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-xl bg-silver-100/80 dark:bg-white/5 border border-silver-200 dark:border-white/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-semibold text-silver-900 dark:text-white text-[12px] leading-tight">
                    {b.name}
                  </p>
                  {b.isFlagship && (
                    <span className="text-[9px] uppercase tracking-wider font-bold text-deep-orange-500 bg-deep-orange-500/10 px-1.5 py-0.5 rounded">
                      Flagship
                    </span>
                  )}
                </div>
                <p className="text-[11px] leading-relaxed mb-1">{b.address}</p>
                <p className="text-[11px] text-silver-900 dark:text-white font-medium">{b.phone}</p>
                <p className="text-[10px] mt-1 opacity-70">{b.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/iphone" className="hover:text-deep-orange-500 transition-colors">iPhone</Link></li>
              <li><Link href="/mac" className="hover:text-deep-orange-500 transition-colors">Mac</Link></li>
              <li><Link href="/ipad" className="hover:text-deep-orange-500 transition-colors">iPad</Link></li>
              <li><Link href="/watch" className="hover:text-deep-orange-500 transition-colors">Watch</Link></li>
              <li><Link href="/accessories" className="hover:text-deep-orange-500 transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/trade-in" className="hover:text-deep-orange-500 transition-colors">Trade-In</Link></li>
              <li><Link href="/faq" className="hover:text-deep-orange-500 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-deep-orange-500 transition-colors">Contact</Link></li>
              <li><Link href="/branches" className="hover:text-deep-orange-500 transition-colors">All Branches</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Contact</h4>
            <ul className="space-y-2">
              <li className="text-silver-900 dark:text-white font-semibold">+234 813 784 3328</li>
              <li>Info@drapple.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-deep-orange-500 transition-colors"><Icons.Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-deep-orange-500 transition-colors"><Icons.Instagram size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-deep-orange-500 transition-colors"><Icons.Youtube size={18} /></a>
              <a href="#" aria-label="TikTok" className="hover:text-deep-orange-500 transition-colors"><Icons.Tiktok size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-deep-orange-500 transition-colors"><Icons.LinkedIn size={18} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-silver-200 dark:border-white/10">
          <p>Copyright &copy; {new Date().getFullYear()} Dr. Apple Kano. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-deep-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-deep-orange-500 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
