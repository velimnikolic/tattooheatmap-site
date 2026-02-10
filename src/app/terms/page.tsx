import { COMPANY_NAME, CONTACT_EMAIL, APP_NAME } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Terms of Service — ${APP_NAME}`,
  description: `Terms of Service for ${APP_NAME} Tattoo Shade Analyzer.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen ember-gradient">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <a href="/" className="inline-block text-sm text-flame hover:text-flame/80 tracking-wider mb-8">
          &larr; BACK TO HOME
        </a>

        <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">
          <span className="bg-gradient-to-r from-flame to-ember-red bg-clip-text text-transparent">
            TERMS OF SERVICE
          </span>
        </h1>
        <p className="text-muted mb-12">Last updated: February 2026</p>

        <div className="space-y-10 text-soft-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using {APP_NAME} (&ldquo;the App&rdquo;), you agree to be bound by these
              Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">2. Description of Service</h2>
            <p>
              {APP_NAME} is a tattoo shade analysis and stencil generation application. The App analyzes images to
              identify different shade intensities and generates stencils suitable for thermal printers. The App is
              available on macOS, Windows, Linux, Android, and iOS platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">3. Subscription & Billing</h2>
            <p>
              {APP_NAME} requires an active subscription for full access,
              available on monthly or annual billing cycles. Subscriptions are billed through the respective platform&apos;s
              app store (Apple App Store, Google Play Store) or directly for desktop platforms.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the current period ends.</li>
              <li>You can manage and cancel your subscription through your platform&apos;s account settings.</li>
              <li>Price changes will be communicated in advance and require your consent to continue.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">4. Refund Policy</h2>
            <p>
              Refund eligibility depends on the platform through which you purchased the subscription. For Apple App Store
              and Google Play purchases, refund policies of those stores apply. For direct purchases, you may request a
              refund within 14 days of purchase if the service does not function as described.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">5. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for the images you analyze with the App.</li>
              <li>You must have the right to use any images you load into the App.</li>
              <li>You agree not to reverse-engineer, decompile, or disassemble the App.</li>
              <li>You agree not to distribute or share your subscription with others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">6. Intellectual Property</h2>
            <p>
              The App, including its code, design, graphics, and documentation, is the intellectual property of {COMPANY_NAME}.
              Your subscription grants you a non-exclusive, non-transferable license to use the App for personal or
              professional tattoo-related work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">7. Limitation of Liability</h2>
            <p>
              The App is provided &ldquo;as is&rdquo; without warranties of any kind. {COMPANY_NAME} shall not be liable for any
              indirect, incidental, or consequential damages arising from the use of the App. The App is a tool to assist
              tattoo artists — final results depend on the artist&apos;s skill and materials used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">8. Termination</h2>
            <p>
              We may terminate or suspend your access to the App if you violate these Terms. Upon termination,
              your license to use the App ceases immediately. Sections regarding intellectual property, limitation of
              liability, and governing law survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an
              updated date. Continued use of the App after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to
              conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-soft-white tracking-wider mb-3">11. Contact Information</h2>
            <p>
              If you have questions about these Terms, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-flame hover:text-flame/80 transition-colors">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
