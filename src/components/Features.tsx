'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { features } from '@/lib/constants';

function FeatureIcon({ icon }: { icon: string }) {
  const size = 48;
  const common = { width: size, height: size, viewBox: '0 0 48 48', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };

  switch (icon) {
    case 'shades':
      return (
        <svg {...common}>
          <rect x="8" y="8" width="32" height="6" rx="2" fill="#FF6B35" opacity="0.3" />
          <rect x="8" y="17" width="32" height="6" rx="2" fill="#FF6B35" opacity="0.5" />
          <rect x="8" y="26" width="32" height="6" rx="2" fill="#FF6B35" opacity="0.7" />
          <rect x="8" y="35" width="32" height="6" rx="2" fill="#FF6B35" />
        </svg>
      );
    case 'printer':
      return (
        <svg {...common}>
          <rect x="10" y="6" width="28" height="12" rx="2" stroke="#FF6B35" strokeWidth="2" />
          <rect x="6" y="18" width="36" height="16" rx="3" stroke="#FF6B35" strokeWidth="2" />
          <rect x="12" y="34" width="24" height="8" rx="2" stroke="#FF6B35" strokeWidth="2" />
          <circle cx="34" cy="24" r="2" fill="#FF6B35" />
        </svg>
      );
    case 'sliders':
      return (
        <svg {...common}>
          <line x1="12" y1="14" x2="36" y2="14" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
          <circle cx="22" cy="14" r="4" fill="#0A0505" stroke="#FF6B35" strokeWidth="2" />
          <line x1="12" y1="24" x2="36" y2="24" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="24" r="4" fill="#0A0505" stroke="#FF6B35" strokeWidth="2" />
          <line x1="12" y1="34" x2="36" y2="34" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="34" r="4" fill="#0A0505" stroke="#FF6B35" strokeWidth="2" />
        </svg>
      );
    case 'devices':
      return (
        <svg {...common}>
          <rect x="6" y="8" width="24" height="18" rx="2" stroke="#FF6B35" strokeWidth="2" />
          <line x1="6" y1="22" x2="30" y2="22" stroke="#FF6B35" strokeWidth="2" />
          <rect x="14" y="26" width="8" height="2" rx="1" fill="#FF6B35" />
          <rect x="32" y="12" width="12" height="22" rx="2" stroke="#FF6B35" strokeWidth="2" />
          <circle cx="38" cy="30" r="1.5" fill="#FF6B35" />
        </svg>
      );
    default:
      return null;
  }
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <SectionWrapper id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-wider mb-4 flame-glow-sm">
          <span className="bg-gradient-to-r from-flame to-ember-red bg-clip-text text-transparent">
            FEATURES
          </span>
        </h2>
        <p className="text-center text-muted text-lg mb-16 max-w-xl mx-auto">
          Everything a tattoo artist needs to analyze and prepare designs with precision.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="card-glow bg-ember/60 border border-flame/10 rounded-xl p-8 backdrop-blur-sm"
            >
              <div className="mb-5">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-bold tracking-wider text-soft-white mb-3">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
