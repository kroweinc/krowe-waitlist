import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/KroweIcon.svg" className="h-7 w-7" alt="" />
            <span className="font-bold text-lg text-gray-900 font-display">Krowe</span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500 text-sm">Privacy Policy</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-serif mb-4 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: March 27, 2026</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Overview</h2>
            <p>
              Krowe Technologies Inc. ("Krowe", "we", "us", or "our") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard information when you visit our website or
              create an account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect only what is necessary to operate our service:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li><span className="text-gray-700">Email address</span> — to notify you when Krowe launches.</li>
              <li><span className="text-gray-700">Startup status</span> — to understand where you are in your journey.</li>
              <li><span className="text-gray-700">Referral source</span> — to learn how you found us.</li>
              <li><span className="text-gray-700">Job application data</span> — if you apply for a role, we collect the information submitted in the form (name, resume, links, etc.).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li>Send product updates and launch announcements.</li>
              <li>Evaluate job applications and follow up with candidates.</li>
              <li>Improve our product and understand our audience.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p className="mt-3">We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Storage</h2>
            <p>
              Your data is stored securely in Supabase (PostgreSQL), hosted on AWS infrastructure. Access is
              restricted to authorized Krowe personnel only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies & Tracking</h2>
            <p>
              We do not use tracking cookies or third-party analytics at this time. Basic server logs (IP address,
              browser type) may be retained for security and debugging purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
            <p className="mb-3">You may request at any time:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li>Access to the personal data we hold about you.</li>
              <li>Correction of inaccurate data.</li>
              <li>Deletion of your data from our systems.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:kroweinc@gmail.com" className="text-orange-500 hover:text-orange-400 transition-colors">
                kroweinc@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. When we do, we'll update the date at the top of this
              page. Continued use of our site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact</h2>
            <p>
              Questions about this policy? Reach us at{' '}
              <a href="mailto:kroweinc@gmail.com" className="text-orange-500 hover:text-orange-400 transition-colors">
                kroweinc@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
