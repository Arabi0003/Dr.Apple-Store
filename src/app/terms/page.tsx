import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Dr. Apple",
  description: "Terms of Use for Dr. Apple retail stores and website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-silver-100 dark:bg-black pt-24 pb-20">
      <div className="container-app">
        <article className="max-w-[900px] mx-auto bg-white dark:bg-zinc-900 p-8 md:p-14 rounded-3xl border border-silver-200 dark:border-white/10">
          <Link href="/" className="text-deep-orange-500 text-sm font-semibold hover:underline mb-6 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white mb-3 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-sm text-silver-500 mb-8">Last Updated: October 2026 · Dr. Apple</p>

          <div className="space-y-5 text-[15px] leading-relaxed text-silver-700 dark:text-silver-300">
            <p>
              Welcome to Dr. Apple. These Terms of Use (&quot;Terms&quot;) govern your access to and use of our website,
              retail locations across Kano State, and related services (collectively, the &quot;Services&quot;). By accessing
              or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree,
              please do not use our Services.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">1. Introduction and Scope</h2>
            <p>
              Dr. Apple is a premier retail establishment in Kano, Nigeria, specializing in the sale, service, and
              distribution of authentic consumer electronics including iPhones, MacBooks, iPads, Apple Watches, AirPods,
              and related accessories. These Terms apply to all visitors, users, and customers who access our five
              physical branches in Kano as well as our digital platforms.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Changes take effect immediately upon posting on
              this website. Your continued use of the Services after revised Terms are posted means you accept those
              changes. You should review this page regularly.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">2. Product Authenticity</h2>
            <p>
              Dr. Apple delivers 100% genuine products. Items sold through our branches and website are authentic,
              factory-sealed (unless stated otherwise for pre-owned or trade-in stock), and sourced through authorized
              channels. We strive for accuracy in descriptions, pricing, and availability, but we do not warrant that
              all content is completely error-free. If a product is listed at an incorrect price due to typographical
              error, we may refuse or cancel orders placed at that price. Product images are illustrative; actual
              appearance may vary slightly by display.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">3. Pricing and Payments</h2>
            <p>
              Prices are in Nigerian Naira (₦) and include VAT unless stated otherwise. Prices may change without notice
              due to market and exchange-rate conditions. Payment must be completed in full at purchase. We accept bank
              transfers, in-store POS, and secure online gateways. Goods are released only after payment is confirmed.
              We may modify or discontinue services without notice and are not liable for resulting inconvenience.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">4. Warranties and Support</h2>
            <p>
              New products carry the manufacturer&apos;s standard warranty. Coverage follows OEM terms. Warranty does not
              cover physical damage, liquid damage, unauthorized repairs, cosmetic wear, or damage from non-original
              accessories. Unauthorized third-party repairs void warranty. Complimentary setup and data migration may be
              offered at purchase. Dr. Apple is not liable for data loss during migration or service—customers must back
              up devices before service.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">5. Trade-In Program</h2>
            <p>
              Trade-in valuations given online or by phone are estimates only and are subject to physical inspection at
              a Kano branch. We may reject devices for reasons including suspected theft, severe damage, activation locks
              (including iCloud lock), or non-functional hardware. You warrant you own the device free of liens. Once a
              trade-in is finalized and credit applied, the transaction is final and the device becomes property of
              Dr. Apple.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted under the laws of the Federal Republic of Nigeria, Dr. Apple and its
              directors, staff, affiliates, and suppliers shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including lost profits, lost data, or replacement costs, arising from
              use of the Services or products, whether in contract, tort, or otherwise.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">7. Conduct</h2>
            <p>
              You agree to behave lawfully and respectfully in our stores and on our platforms. Harassment, abuse,
              fraud, or disruption of operations will not be tolerated and may result in removal from premises and denial of future service. You
              must not use our products or Services for illegal purposes.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria, with particular reference to
              Kano State. Disputes should first be addressed through good-faith negotiation. If unresolved within thirty
              (30) days, disputes fall under the exclusive jurisdiction of competent courts in Kano, Nigeria.
            </p>

            <p className="pt-6 border-t border-silver-200 dark:border-white/10 text-sm">
              Questions? Email Info@drapple.com or visit No. 15, Murtala Mohammed Way, Kano.
              Powered by{" "}
              <a href="https://www.yalerima.com.ng" className="text-deep-orange-500 font-semibold underline" target="_blank" rel="noopener noreferrer">
                Yalerima Technologies Limited
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}

