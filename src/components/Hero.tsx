'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="snap-page relative overflow-hidden ember-gradient">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-8xl md:text-9xl font-bold tracking-wider flame-glow"
        >
          <span className="bg-gradient-to-r from-flame via-ember-red to-gold bg-clip-text text-transparent">
            HEAT
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl tracking-[0.3em] text-muted font-medium mt-4 uppercase"
        >
          Tattoo Shade Analyzer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-soft-white/70 mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          Analyze shade intensities. Generate professional stencils.
          <br className="hidden md:block" />
          Tattoo with confidence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="#download"
            className="flame-gradient px-8 py-4 text-lg font-semibold tracking-wider text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            DOWNLOAD
          </a>
          <a
            href="#shades"
            className="px-8 py-4 text-lg font-semibold tracking-wider text-flame border border-flame/40 rounded-lg hover:bg-flame/10 transition-colors"
          >
            LEARN MORE
          </a>
        </motion.div>

        {/* Platform icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center gap-6 mt-12 text-muted"
        >
          {['macOS', 'Windows', 'Android', 'iOS'].map((platform) => (
            <span key={platform} className="text-sm tracking-wider uppercase opacity-60">
              {platform}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
    </section>
  );
}
