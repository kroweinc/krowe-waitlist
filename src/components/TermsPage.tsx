import { Link } from 'react-router-dom';

export default function TermsPage() {
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
          <span className="text-gray-500 text-sm">Terms of Service</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-serif mb-4 text-gray-900">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: March 27, 2026</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Krowe website (krowe.co) or any of our services, you agree to be bound by
              these Terms of Service. If you do not agree, please do not use our site or services. These terms apply
              to all visitors, account holders, and job applicants.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Description of Service</h2>
            <p>
              Krowe Technologies Inc. ("Krowe", "we", "us", or "our") is building an AI-powered operations platform
              for startups. The current site is an account creation and informational resource. Features and
              functionality described are subject to change prior to launch.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Accounts and Access</h2>
            <p className="mb-3">
              Creating an account does not guarantee immediate access to every Krowe platform feature. By submitting your information, you
              agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li>Receive updates and announcements from Krowe via email.</li>
              <li>Have your submission information stored and processed as described in our <Link to="/privacy" className="text-orange-500 hover:text-orange-400 transition-colors">Privacy Policy</Link>.</li>
            </ul>
            <p className="mt-3">You may unsubscribe from communications at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Job Applications</h2>
            <p>
              Submitting a job application does not create an employment relationship or any obligation on Krowe's
              part to hire. All application materials are reviewed at Krowe's sole discretion. We may retain
              application data for up to 12 months after submission unless you request deletion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p>
              All content on this site — including text, graphics, logos, and software — is owned by or licensed to
              Krowe Technologies Inc. and is protected by applicable intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Prohibited Conduct</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li>Use the site for any unlawful purpose or in violation of any regulations.</li>
              <li>Attempt to gain unauthorized access to our systems or infrastructure.</li>
              <li>Submit false, misleading, or fraudulent information.</li>
              <li>Scrape, crawl, or harvest data from this site without permission.</li>
              <li>Interfere with the proper functioning of the site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Disclaimers</h2>
            <p>
              This site is provided "as is" without warranties of any kind, express or implied. Krowe does not
              warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.
              Product descriptions and features are forward-looking and subject to change.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Krowe Technologies Inc. shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of or inability to use
              this site or our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, without regard to its conflict of law
              provisions. Any disputes shall be resolved exclusively in the courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we'll update the date at the top of this page.
              Continued use of our site after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contact</h2>
            <p>
              Questions about these Terms? Reach us at{' '}
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
