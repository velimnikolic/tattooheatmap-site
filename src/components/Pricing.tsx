'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { pricing } from '@/lib/constants';

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <circle cx="9" cy="9" r="8" stroke="#FF6B35" strokeWidth="1.5" opacity="0.5" />
      <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-wider mb-4 flame-glow-sm">
          <span className="bg-gradient-to-r from-flame to-ember-red bg-clip-text text-transparent">
            PRICING
          </span>
        </h2>
        <p className="text-center text-muted text-lg mb-16 max-w-xl mx-auto">
          Start with a free trial. Unlock the full power of HEAT with a subscription.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Monthly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-ember/60 border border-flame/10 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold tracking-wider text-muted mb-6 uppercase">Monthly</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold text-soft-white">{pricing.monthly.price}</span>
              <span className="text-muted text-lg">{pricing.monthly.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-soft-white/80">
                  <CheckIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="block text-center px-6 py-3 border border-flame/40 text-flame font-semibold tracking-wider rounded-lg hover:bg-flame/10 transition-colors"
            >
              GET STARTED
            </a>
          </motion.div>

          {/* Annual (highlighted) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative bg-ember/80 border-2 border-flame/50 rounded-xl p-8 backdrop-blur-sm pricing-highlight"
          >
            {/* Badge */}
            <div className="absolute -top-3 right-6 px-3 py-1 flame-gradient text-xs font-bold tracking-wider text-white rounded-full">
              {pricing.annual.badge}
            </div>

            <h3 className="text-lg font-bold tracking-wider text-flame mb-6 uppercase">Annual</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold text-soft-white">{pricing.annual.price}</span>
              <span className="text-muted text-lg">{pricing.annual.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-soft-white/80">
                  <CheckIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="block text-center px-6 py-3 flame-gradient text-white font-semibold tracking-wider rounded-lg hover:opacity-90 transition-opacity"
            >
              GET STARTED
            </a>
          </motion.div>
        </div>

        <p className="text-center text-muted text-sm mt-8">
          Free trial available. Subscription billed through your platform&apos;s app store.
          <br />
          <a href="/terms/" className="text-flame/70 hover:text-flame transition-colors">Terms of Service</a>
          {' '}&middot;{' '}
          <a href="/privacy/" className="text-flame/70 hover:text-flame transition-colors">Privacy Policy</a>
        </p>
      </div>
    </SectionWrapper>
  );
}
