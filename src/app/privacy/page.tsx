import React from "react";
import Link from "next/link";

export const metadata = { title: "Privacy Policy | Dr. Apple Kano" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-silver-100 dark:bg-black pt-24 pb-20 transition-colors">
      <div className="container-app">
        <div className="max-w-[900px] mx-auto bg-white dark:bg-zinc-900 p-8 md:p-16 rounded-3xl border border-silver-200 dark:border-white/10 shadow-sm">
          <Link href="/" className="text-deep-orange-500 text-sm font-semibold hover:underline mb-6 inline-block">&larr; Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-silver-900 dark:text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-silver-500 mb-10">Last Updated: October 2026</p>
          
          <div className="space-y-6 text-silver-700 dark:text-silver-300 leading-relaxed text-[15px] md:text-base">
            <p>Dr. Apple ("we", "our", or "us") respects your privacy and is committed to protecting personal information you share with us. This Privacy Policy outlines our practices regarding collection, use, processing, and disclosure of your personal data when you visit our website, use our services, or visit our retail branches in Kano, Nigeria. We adhere to the Nigerian Data Protection Regulation (NDPR) and applicable data protection laws.</p>
            
            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">1. Information We Collect</h2>
            <p>We may collect several types of information from users of our website and customers at our retail stores, including:</p>
            <ul className="list-disc pl-5 space-y-2 my-4">
              <li><strong>Personal Identification Data:</strong> Name, email address, physical address, phone number, and identification documents (e.g., when participating in Trade-In).</li>
              <li><strong>Financial Data:</strong> Payment card details, bank account details, and transaction history. Credit card information is processed by secure third-party payment gateways and is not stored directly on our servers.</li>
              <li><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types, operating system, platform, and device identifiers.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, products, and services, including pages visited, time spent, and clickstream data.</li>
              <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
            </ul>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">2. How We Collect Your Data</h2>
            <p><strong>Direct Interactions:</strong> You may give us Identity, Contact, and Financial Data by filling forms or corresponding by phone, email, or in-person at our Kano branches. This includes data provided when you purchase a product, subscribe to our newsletter, request marketing, or give feedback.</p>
            <p><strong>Automated Technologies:</strong> As you interact with our website, we automatically collect Technical Data about your equipment, browsing actions, and patterns using cookies, server logs, and similar technologies.</p>
            <p><strong>Third Parties:</strong> We may receive personal data about you from analytics providers (e.g., Google Analytics), advertising networks, and search information providers.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">3. How We Use Your Personal Data</h2>
            <p>We use your personal data where we need to perform the contract we are about to enter into with you (processing orders, delivery, technical support, warranty services); where it is necessary for our legitimate interests (preventing fraud, ensuring network security, studying how customers use our products); and where we need to comply with a legal or regulatory obligation.</p>
            <p>We may use your data to form a view on what products and offers may be relevant for you. You will receive marketing communications if you have requested information or purchased goods and have not opted out. You can opt out at any time by contacting Info@drapple.com.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">4. Disclosure of Your Personal Data</h2>
            <p>We may share your personal data with: Internal staff across our five Kano branches who need access to fulfill orders or provide support; External service providers acting as processors for IT administration, payment processing, fraud prevention, and logistics; Professional advisers including lawyers, bankers, auditors, and insurers in Nigeria; Regulators and government agencies who require reporting under Nigerian law.</p>
            <p>We require all third parties to respect the security of your personal data and treat it in accordance with the law. We do not allow third-party service providers to use your personal data for their own purposes.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">5. Data Security and Retention</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to those employees, agents, and contractors who have a business need to know. They process data only on our instructions and are subject to confidentiality.</p>
            <p>We retain personal data only as long as reasonably necessary to fulfill the purposes we collected it for, including legal, regulatory, tax, accounting, or reporting requirements. We may retain data longer in the event of a complaint or prospect of litigation.</p>

            <h2 className="text-2xl font-bold text-silver-900 dark:text-white mt-10">6. Your Legal Rights</h2>
            <p>Under the Nigerian Data Protection Regulation (NDPR), you have rights regarding your personal data including the right to request access, correction, erasure, restriction, transfer, to object to processing, to data portability, and (where lawful ground is consent) to withdraw consent.</p>
            <p>If you wish to exercise any of these rights, contact us at Info@drapple.com. You will not have to pay a fee to access your personal data. However, we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive, or refuse to comply in those circumstances.</p>

            <p className="pt-8 text-sm border-t border-silver-200 dark:border-white/10 mt-10">For all privacy-related inquiries, data deletion requests, or concerns, contact our Data Protection Officer at Info@drapple.com. Powered by Yalerima Technologies Limited — www.yalerima.com.ng</p>
          </div>
        </div>
      </div>
    </main>
  );
}
