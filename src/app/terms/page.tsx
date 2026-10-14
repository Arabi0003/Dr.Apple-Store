import React from "react";
import Link from "next/link";

export const metadata = { title: "Terms of Use | Dr. Apple Kano" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-silver-100 dark:bg-black pt-24 pb-20 transition-colors">
      <div className="container-app">
        <div className="max-w-[900px] mx-auto bg-white dark:bg-zinc-900 p-8 md:p-16 rounded-3xl border border-silver-200 dark:border-white/10 shadow-sm">
          <Link href="/" className="text-deep-orange-500 text-sm font-semibold hover:underline mb-6 inline-block">&larr; Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-silver-900 dark:text-white mb-4 tracking-tight">Terms of Use</h1>
          <p className="text-sm text-silver-500 mb-10">Last Updated: October 2026</p>
          
          <div className="space-y-6 text-silver-700 dark:text-silver-300 leading-relaxed text-[15px] md:text-base">
            <p>Welcome to Dr. Apple Kano. These Terms of Use ("Terms") govern your access to and use of our website, retail locations across Kano, and services. By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please refrain from using our Services.</p>
            
            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">1. Introduction and Scope</h2>
            <p>Dr. Apple is a premier retail establishment located in Kano, Nigeria, specializing in the sale, service, and distribution of authentic consumer electronics including iPhones, MacBooks, iPads, Apple Watches, AirPods, and related accessories. These Terms apply to all visitors, users, and customers who access our five physical branches in Kano as well as our digital platforms at this website.</p>
            <p>We reserve the right to modify these Terms at any time. Changes are effective immediately upon posting. Your continued use of the Services following revised Terms means you accept the changes. You are expected to check this page frequently.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">2. Product Authenticity and Descriptions</h2>
            <p>Dr. Apple prides itself on delivering 100% genuine products. All items sold through our physical branches and online platform are guaranteed authentic, factory-sealed (unless stated otherwise for pre-owned or trade-in stock), and sourced from authorized distribution channels. We attempt to be as accurate as possible in product descriptions, pricing, and availability.</p>
            <p>However, we do not warrant that product descriptions or pricing are entirely error-free. In the event a product is listed at an incorrect price due to typographical error, we reserve the right to refuse or cancel orders placed at the incorrect price. Images are for illustrative purposes; actual products may vary slightly in color appearance across different screens.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">3. Pricing, Payments, and Billing</h2>
            <p>All prices displayed are in Nigerian Naira (₦) and inclusive of Value Added Tax (VAT) unless stated otherwise. Prices are subject to change without notice due to market volatility and exchange rate fluctuations. Payment must be made in full at time of purchase. We accept bank transfers, POS payments in-store, and secure online payment gateways. Goods are handed over only once payment is confirmed and cleared.</p>
            <p>We reserve the right to modify or discontinue any Service without notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Service.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">4. Warranties and Technical Support</h2>
            <p>New products carry the standard manufacturer warranty provided by the original equipment manufacturer (OEM). Duration and coverage are dictated by OEM terms. Dr. Apple facilitates warranty claims but the warranty does not cover physical damage, liquid damage, unauthorized repairs, cosmetic wear, or damage from non-original accessories. Unauthorized third-party repairs void warranty immediately.</p>
            <p>Our technical support provides complimentary setup and data migration at purchase. Dr. Apple assumes no liability for loss of data or software corruption during migration or repair. Customers must back up data before handing over devices for service.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">5. Trade-In Program Conditions</h2>
            <p>Dr. Apple offers Trade-In allowing customers to exchange eligible used devices for store credit. All valuations provided online or by phone are estimates subject to physical inspection at our Kano branches. We reserve the right to reject any trade-in for reasons including suspicion of theft, severe liquid damage, activation locks (iCloud Lock), or non-functional hardware.</p>
            <p>By participating, you warrant you are the sole lawful owner and the device is free of liens. Once a trade-in is finalized and credit applied, the transaction is irreversible. The traded device becomes sole property of Dr. Apple.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by Nigerian law, Dr. Apple, its directors, officers, employees, affiliates, agents, contractors, and suppliers shall not be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including lost profits, lost revenue, lost data, or replacement costs, whether based in contract, tort, strict liability or otherwise, arising from your use of the Service or any products procured.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">7. User Conduct and Store Etiquette</h2>
            <p>When visiting our Kano locations or digital platforms, you agree to conduct yourself respectfully and lawfully. Harassment of staff, abusive language, fraudulent activity, or disruption of operations will not be tolerated and may result in a ban from premises and services. You agree not to use our products for illegal purposes or violate any applicable laws including copyright laws.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">8. Governing Law and Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, specifically within the jurisdiction of Kano State. Disputes shall first be attempted to be resolved amicably through good-faith negotiations. If unresolved within thirty (30) days, disputes are subject to exclusive jurisdiction of competent courts in Kano, Nigeria.</p>
            
            <p className="pt-8 text-sm border-t border-silver-200 dark:border-white/10 mt-10">For questions regarding these Terms, contact Info@drapple.com or visit our flagship store at No. 15, Murtala Mohammed Way, Kano. Powered by Yalerima Technologies Limited — www.yalerima.com.ng</p>
          </div>
        </div>
      </div>
    </main>
  );
}
