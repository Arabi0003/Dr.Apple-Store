import React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { BRANCHES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-black border-t border-silver-200 dark:border-white/10 text-silver-600 dark:text-silver-400 text-[12px] pt-12 pb-8 relative z-20">
      <div className="container-app">

        {/* Branches */}
        <div className="mb-10">
          <h4 className="font-semibold text-silver-900 dark:text-white text-[13px] mb-4 tracking-wide uppercase">
            Our 5 Branches in Kano
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRANCHES.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-xl bg-silver-100 dark:bg-white/5 border border-silver-200 dark:border-white/10"
              >
                <p className="font-semibold text-silver-900 dark:text-white text-[12px] leading-tight mb-1">
                  {b.name}
                </p>
                <p className="text-[11px] leading-relaxed mb-1">{b.address}</p>
                <p className="text-[11px] text-silver-900 dark:text-white font-medium">{b.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-deep-orange-500 transition-colors">All Products</Link></li>
              <li><Link href="/iphone" className="hover:text-deep-orange-500 transition-colors">iPhone</Link></li>
              <li><Link href="/mac" className="hover:text-deep-orange-500 transition-colors">Mac</Link></li>
              <li><Link href="/ipad" className="hover:text-deep-orange-500 transition-colors">iPad</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-deep-orange-500 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-deep-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/branches" className="hover:text-deep-orange-500 transition-colors">Branches</Link></li>
              <li><Link href="/trade-in" className="hover:text-deep-orange-500 transition-colors">Trade-In</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-deep-orange-500 transition-colors font-medium text-silver-800 dark:text-silver-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-deep-orange-500 transition-colors font-medium text-silver-800 dark:text-silver-200">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Contact</h4>
            <ul className="space-y-2">
              <li className="text-silver-900 dark:text-white font-semibold">+234 813 784 3328</li>
              <li>Info@drapple.com</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-deep-orange-500"><Icons.Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-deep-orange-500"><Icons.Instagram size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-deep-orange-500"><Icons.Youtube size={18} /></a>
              <a href="#" aria-label="TikTok" className="hover:text-deep-orange-500"><Icons.Tiktok size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-deep-orange-500"><Icons.LinkedIn size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar — Yalerima */}
        <div className="pt-6 border-t border-silver-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left text-[12px] text-silver-600 dark:text-silver-400">
            Copyright &copy; {year} Dr. Apple Kano. All rights reserved.
          </p>

          <p className="text-center text-[13px] text-silver-800 dark:text-silver-200">
            Powered by{" "}
            <a
              href="https://www.yalerima.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-deep-orange-500 hover:text-deep-orange-600 underline underline-offset-2"
            >
              Yalerima Technologies Limited
            </a>
            {" "}
            <a
              href="https://www.yalerima.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-500 hover:text-deep-orange-500 underline underline-offset-2"
            >
              www.yalerima.com.ng
            </a>
          </p>

          <div className="flex gap-5 text-[12px]">
            <Link href="/privacy" className="font-semibold text-silver-800 dark:text-silver-200 hover:text-deep-orange-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-semibold text-silver-800 dark:text-silver-200 hover:text-deep-orange-500">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
