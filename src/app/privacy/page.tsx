import { COMPANY_NAME, CONTACT_EMAIL, APP_NAME } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description: `Privacy Policy for ${APP_NAME} Tattoo Shade Analyzer.`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen ember-gradient">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <a href="/" className="inline-block text-sm text-flame hover:text-flame/80 tracking-wider mb-8">
          &larr; BACK TO HOME
        </a>

        <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">
          <span className="bg-gradient-to-r from-flame to-ember-red bg-clip-text text-transparent">
            PRIVACY POLICY
          </span>
        </h1>
        <p className="text-muted mb-12">Last updated: February 2026</p>

        <div className="space-y-10 text-soft-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">1. Information We Collect</h2>
            <p className="mb-3">
              {APP_NAME} is designed with privacy in mind. We collect minimal data necessary to provide the service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Images:</strong> Images you load are processed entirely on your device. We never upload, store, or transmit your images to any server.</li>
              <li><strong>Subscription Data:</strong> Subscription status is managed through RevenueCat and your platform&apos;s app store. We receive only subscription validity status, not payment details.</li>
              <li><strong>Analytics:</strong> We collect anonymous usage analytics (feature usage, crash reports) to improve the App. No personally identifiable information is included.</li>
              <li><strong>Preferences:</strong> App settings (shade counts, display preferences) are stored locally on your device.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">2. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain the App&apos;s functionality</li>
              <li>To verify subscription status and manage access to premium features</li>
              <li>To improve the App through aggregated, anonymous usage analytics</li>
              <li>To diagnose and fix bugs via crash reports</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">3. Data Storage & Security</h2>
            <p>
              All image processing occurs locally on your device. No images or analysis results are transmitted to
              external servers. App preferences are stored using your platform&apos;s secure local storage mechanism
              (Preferences API on desktop, SharedPreferences on Android, NSUserDefaults on iOS).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">4. Third-Party Services</h2>
            <p className="mb-3">The App uses the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>RevenueCat:</strong> Subscription management. Processes subscription status only. <a href="https://www.revenuecat.com/privacy" className="text-flame hover:text-flame/80 transition-colors">RevenueCat Privacy Policy</a></li>
              <li><strong>Platform App Stores:</strong> Apple App Store and Google Play handle all payment processing according to their respective privacy policies.</li>
              <li><strong>Analytics Provider:</strong> Anonymous usage analytics for app improvement. No personally identifiable data is collected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">5. User Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request information about what data we hold about you.</li>
              <li><strong>Deletion:</strong> Request deletion of any data associated with your account.</li>
              <li><strong>Portability:</strong> Since images are processed locally, your data is already in your possession.</li>
              <li><strong>Opt-out:</strong> Disable analytics collection in the App settings.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-flame hover:text-flame/80 transition-colors">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">6. Children&apos;s Privacy</h2>
            <p>
              {APP_NAME} is not directed at children under 13 (or under 16 in the EEA). We do not knowingly collect
              personal information from children. If you believe a child has provided us with personal information,
              please contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">7. Cookie Policy</h2>
            <p>
              The {APP_NAME} website may use essential cookies for basic functionality. No tracking cookies are used.
              The App itself does not use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
              date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">9. Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-flame hover:text-flame/80 transition-colors">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </section>

          <section className="pb-8">
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">10. Compliance</h2>
            <p>
              This Privacy Policy is designed to comply with applicable data protection regulations including the
              General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). If you are
              a resident of the European Economic Area or California, you have additional rights as described in
              Section 5 above.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
