import { COMPANY_NAME, CURRENT_YEAR, CONTACT_EMAIL } from '@/lib/constants';
import basePath from '@/lib/basePath';

export default function Footer() {
  return (
    <footer className="border-t border-flame/10 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Product */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-flame mb-4 uppercase">Product</h4>
            <ul className="space-y-3">
              <li><a href="#shades" className="text-muted hover:text-soft-white transition-colors">Shade Analysis</a></li>
              <li><a href="#stencil" className="text-muted hover:text-soft-white transition-colors">Stencil</a></li>
              <li><a href="#how-it-works" className="text-muted hover:text-soft-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-muted hover:text-soft-white transition-colors">Pricing</a></li>
              <li><a href="#download" className="text-muted hover:text-soft-white transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-flame mb-4 uppercase">Support</h4>
            <ul className="space-y-3">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="text-muted hover:text-soft-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted hover:text-soft-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-flame mb-4 uppercase">Legal</h4>
            <ul className="space-y-3">
              <li><a href={`${basePath}/terms/`} className="text-muted hover:text-soft-white transition-colors">Terms of Service</a></li>
              <li><a href={`${basePath}/privacy/`} className="text-muted hover:text-soft-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-flame/5 text-center">
          <p className="text-muted text-sm">
            &copy; {CURRENT_YEAR} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
