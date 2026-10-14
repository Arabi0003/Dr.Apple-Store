import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Dr. Apple Kano",
  description: "Privacy Policy for Dr. Apple Kano in line with NDPR.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-silver-100 dark:bg-black pt-24 pb-20">
      <div className="container-app">
        <article className="max-w-[900px] mx-auto bg-white dark:bg-zinc-900 p-8 md:p-14 rounded-3xl border border-silver-200 dark:border-white/10">
          <Link href="/" className="text-deep-orange-500 text-sm font-semibold hover:underline mb-6 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white mb-3 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-silver-500 mb-8">Last Updated: October 2026 · Dr. Apple Kano</p>

          <div className="space-y-5 text-[15px] leading-relaxed text-silver-700 dark:text-silver-300">
            <p>
              Dr. Apple (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and protects personal information you share
              with us. This Privacy Policy explains how we collect, use, process, and disclose personal data when you
              visit our website, use our services, or visit our retail branches in Kano, Nigeria. We follow the Nigerian
              Data Protection Regulation (NDPR) and applicable law.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">1. Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Identity &amp; Contact:</strong> Name, email, phone, address, and ID documents (e.g. for Trade-In).</li>
              <li><strong>Financial:</strong> Payment and transaction details. Card data is handled by secure payment providers and is not stored on our servers.</li>
              <li><strong>Technical:</strong> IP address, browser type, device info, OS, and similar diagnostics.</li>
              <li><strong>Usage:</strong> Pages visited, time on site, and interaction patterns.</li>
              <li><strong>Marketing preferences:</strong> Your choices about receiving offers and communications.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">2. How We Collect Data</h2>
            <p>
              <strong>Directly:</strong> When you buy products, fill forms, call or email us, visit a branch, subscribe
              to updates, or request support. <strong>Automatically:</strong> Via cookies, logs, and similar tools while
              you use the website. <strong>From third parties:</strong> Analytics and payment partners where lawful.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">3. How We Use Data</h2>
            <p>
              We use personal data to perform contracts (orders, delivery, warranty, support); for legitimate interests
              (security, fraud prevention, improving services); to comply with Nigerian law; and, with your consent or
              as allowed by law, for relevant marketing. You may opt out of marketing at any time by emailing
              Info@drapple.com.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">4. Sharing</h2>
            <p>
              We may share data with branch staff who need it to serve you; IT, payment, logistics, and fraud-prevention
              processors under contract; professional advisers; and regulators when required by law. We do not sell your
              personal data. Processors may only use data on our instructions.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">5. Security and Retention</h2>
            <p>
              We apply appropriate technical and organizational measures to protect personal data against unauthorized
              access, loss, or alteration. Access is limited to people who need it for their role. We keep data only as
              long as needed for the purposes collected, including legal, tax, and dispute-related retention, then delete
              or anonymize it where practicable.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">6. Your Rights (NDPR)</h2>
            <p>
              You may request access, correction, erasure, restriction, objection, and data portability where applicable,
              and withdraw consent where processing is consent-based. Contact Info@drapple.com to exercise these rights.
              We may need to verify your identity. Unfounded or excessive requests may attract a reasonable fee or refusal
              as permitted by law.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-silver-900 dark:text-white pt-4">7. Contact</h2>
            <p>
              For privacy questions or requests, email Info@drapple.com or visit our flagship store at No. 15, Murtala
              Mohammed Way, Kano.
            </p>

            <p className="pt-6 border-t border-silver-200 dark:border-white/10 text-sm">
              Powered by{" "}
              <a href="https://www.yalerima.com.ng" className="text-deep-orange-500 font-semibold underline" target="_blank" rel="noopener noreferrer">
                Yalerima Technologies Limited — www.yalerima.com.ng
              </a>
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
