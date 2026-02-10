'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { platforms } from '@/lib/constants';

function PlatformIcon({ icon }: { icon: string }) {
  const size = 32;
  const common = { width: size, height: size, viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };

  switch (icon) {
    case 'apple':
      return (
        <svg {...common}>
          <path d="M22.5 27c-1.2 1.2-2.5 1-3.8.5-1.4-.6-2.6-.6-4.1 0-1.8.7-2.8.5-3.9-.5C5.5 21.5 6.3 13 12 12.7c1.6.1 2.7.9 3.6.9 1.4-.3 2.7-1 4.1-.9 1.7.1 3 .8 3.8 2.1-3.5 2.1-2.6 6.7.5 8-.6 1.7-1.4 3.3-2.5 4.7zM16.3 12.5c-.2-2.8 2.1-5.1 4.7-5.5.4 3.2-2.8 5.7-4.7 5.5z" fill="#FF6B35" />
        </svg>
      );
    case 'windows':
      return (
        <svg {...common}>
          <path d="M5 8.5L14 7v8H5V8.5z" fill="#FF6B35" />
          <path d="M15 6.8L27 5v10H15V6.8z" fill="#FF6B35" />
          <path d="M5 16.5H14v8L5 23.5v-7z" fill="#FF6B35" />
          <path d="M15 16.5H27v10L15 25.2v-8.7z" fill="#FF6B35" />
        </svg>
      );
    case 'linux':
      return (
        <svg {...common}>
          <ellipse cx="16" cy="12" rx="5" ry="6" stroke="#FF6B35" strokeWidth="2" />
          <circle cx="14" cy="11" r="1" fill="#FF6B35" />
          <circle cx="18" cy="11" r="1" fill="#FF6B35" />
          <path d="M13 14c0 0 1.5 1.5 3 1.5s3-1.5 3-1.5" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 18c-2 2-3 6-1 8h4l1-3" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 18c2 2 3 6 1 8h-4l-1-3" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'android':
      return (
        <svg {...common}>
          <path d="M8 16v7a2 2 0 004 0v-7h8v7a2 2 0 004 0v-7" stroke="#FF6B35" strokeWidth="2" />
          <rect x="8" y="13" width="16" height="10" rx="2" stroke="#FF6B35" strokeWidth="2" />
          <circle cx="13" cy="10" r="1" fill="#FF6B35" />
          <circle cx="19" cy="10" r="1" fill="#FF6B35" />
          <path d="M10 13a6 6 0 0112 0" stroke="#FF6B35" strokeWidth="2" />
          <line x1="11" y1="5" x2="13" y2="8" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="21" y1="5" x2="19" y2="8" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export default function Platforms() {
  return (
    <SectionWrapper id="download">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-wider mb-4 flame-glow-sm">
          <span className="bg-gradient-to-r from-flame to-ember-red bg-clip-text text-transparent">
            DOWNLOAD
          </span>
        </h2>
        <p className="text-center text-muted text-lg mb-16 max-w-xl mx-auto">
          Free trial available. Subscribe to unlock all features.
        </p>

        {/* Desktop */}
        <div className="mb-12">
          <h3 className="text-sm font-bold tracking-[0.3em] text-muted mb-6 text-center uppercase">
            Desktop
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {platforms.desktop.map((p, i) => (
              <motion.a
                key={p.name}
                href="#"
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="card-glow flex items-center gap-4 bg-ember/60 border border-flame/10 rounded-lg px-6 py-4 hover:border-flame/40 transition-all group"
              >
                <PlatformIcon icon={p.icon} />
                <div>
                  <div className="font-bold tracking-wider text-soft-white group-hover:text-flame transition-colors">
                    {p.name}
                  </div>
                  <div className="text-xs text-muted">{p.ext}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div>
          <h3 className="text-sm font-bold tracking-[0.3em] text-muted mb-6 text-center uppercase">
            Mobile
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            {platforms.mobile.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i + 3}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative flex items-center gap-4 bg-ember/40 border border-flame/5 rounded-lg px-6 py-4 opacity-60"
              >
                <PlatformIcon icon={p.icon} />
                <div>
                  <div className="font-bold tracking-wider text-soft-white/70">
                    {p.name}
                  </div>
                  <div className="text-xs text-muted">{p.store}</div>
                </div>
                <span className="absolute -top-2 right-3 px-2 py-0.5 bg-warm-dark border border-flame/20 text-[10px] font-bold tracking-wider text-gold rounded-full">
                  COMING SOON
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
