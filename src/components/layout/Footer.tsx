import React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { BRANCHES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-black border-t border-silver-200 dark:border-white/10 text-silver-600 dark:text-silver-400 text-[12px] pt-12 pb-8 relative z-20 text-center">
      <div className="container-app flex flex-col items-center text-center">

        {/* 5 Branches - Center Aligned */}
        <div className="mb-10 w-full">
          <h4 className="font-semibold text-silver-900 dark:text-white text-[13px] mb-4 tracking-wide uppercase text-center">
            Our 5 Branches in Kano
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRANCHES.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-xl bg-silver-100 dark:bg-white/5 border border-silver-200 dark:border-white/10 text-center flex flex-col items-center justify-center"
              >
                <p className="font-semibold text-silver-900 dark:text-white text-[12px] leading-tight mb-1 text-center">
                  {b.name}
                </p>
                <p className="text-[11px] leading-relaxed mb-1 text-center">{b.address}</p>
                <p className="text-[11px] text-silver-900 dark:text-white font-medium text-center">{b.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation Columns - Center Aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 w-full text-center">
          <div className="flex flex-col items-center text-center">
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Shop</h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li><Link href="/products" className="hover:text-deep-orange-500 transition-colors">All Products</Link></li>
              <li><Link href="/iphone" className="hover:text-deep-orange-500 transition-colors">iPhone</Link></li>
              <li><Link href="/mac" className="hover:text-deep-orange-500 transition-colors">Mac</Link></li>
              <li><Link href="/ipad" className="hover:text-deep-orange-500 transition-colors">iPad</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Support</h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li><Link href="/faq" className="hover:text-deep-orange-500 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-deep-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/branches" className="hover:text-deep-orange-500 transition-colors">Branches</Link></li>
              <li><Link href="/trade-in" className="hover:text-deep-orange-500 transition-colors">Trade-In</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Legal</h4>
            <ul className="space-y-2 flex flex-col items-center">
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

          <div className="flex flex-col items-center text-center">
            <h4 className="font-semibold text-silver-900 dark:text-white mb-3">Contact</h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li className="text-silver-900 dark:text-white font-semibold">+234 813 784 3328</li>
              <li>Info@drapple.com</li>
            </ul>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-deep-orange-500 transition-colors"><Icons.Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-deep-orange-500 transition-colors"><Icons.Instagram size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-deep-orange-500 transition-colors"><Icons.Youtube size={18} /></a>
              <a href="#" aria-label="TikTok" className="hover:text-deep-orange-500 transition-colors"><Icons.Tiktok size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-deep-orange-500 transition-colors"><Icons.LinkedIn size={18} /></a>
            </div>
          </div>
        </div>

        {/* Center Bottom Bar — Company Credit & Legal */}
        <div className="pt-6 border-t border-silver-200 dark:border-white/10 w-full flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-[12px] text-silver-600 dark:text-silver-400 text-center">
            Copyright &copy; {year} Dr. Apple Kano. All rights reserved.
          </p>

          <p className="text-[13px] text-silver-800 dark:text-silver-200 font-medium text-center">
            Powered by{" "}
            <a
              href="https://www.yalerima.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-deep-orange-500 hover:text-deep-orange-600 underline underline-offset-2"
            >
              Yalerima Technologies Limited
            </a>{" "}
            (
            <a
              href="https://www.yalerima.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-500 dark:text-silver-400 hover:text-deep-orange-500 underline underline-offset-2"
            >
              www.yalerima.com.ng
            </a>
            )
          </p>

          <div className="flex justify-center items-center gap-6 text-[12px] pt-1">
            <Link href="/privacy" className="font-semibold text-silver-800 dark:text-silver-200 hover:text-deep-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-silver-300 dark:text-silver-700">|</span>
            <Link href="/terms" className="font-semibold text-silver-800 dark:text-silver-200 hover:text-deep-orange-500 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
