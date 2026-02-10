'use client';

import { motion } from 'framer-motion';

const pipeline = [
  { step: 'ANALYZE', icon: '◉', desc: 'Shade regions detected' },
  { step: 'TRACE', icon: '◎', desc: 'Contours generated' },
  { step: 'SMOOTH', icon: '○', desc: 'Paths simplified' },
  { step: 'EXPORT', icon: '◇', desc: 'PNG for printer' },
];

export default function StencilExplainer() {
  return (
    <div className="snap-page ember-gradient px-6 md:px-12 lg:px-20" id="stencil">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-wider mb-4 flame-glow-sm">
            <span className="bg-gradient-to-r from-flame to-ember-red bg-clip-text text-transparent">
              STENCIL GENERATION
            </span>
          </h2>
          <p className="text-center text-muted text-lg mb-12 max-w-2xl mx-auto">
            Turn shade analysis into thermal printer-ready stencils. Each shade layer
            gets its own contour paths with independent controls.
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 md:gap-4 mb-14"
        >
          {pipeline.map((p, i) => (
            <div key={p.step} className="flex items-center gap-2 md:gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-flame/30 bg-ember/80 flex items-center justify-center mb-2">
                  <span className="text-2xl text-flame">{p.icon}</span>
                </div>
                <span className="text-[10px] md:text-xs font-bold tracking-wider text-flame">{p.step}</span>
                <span className="text-[9px] md:text-[10px] text-muted mt-0.5">{p.desc}</span>
              </motion.div>
              {i < pipeline.length - 1 && (
                <div className="w-6 md:w-12 h-px bg-flame/20 mb-8" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Control highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              title: 'PER-SHADE CONTROLS',
              desc: 'Simplification, stroke width, blur, and region size — independently adjustable for each shade.',
            },
            {
              title: 'SMART BOUNDARIES',
              desc: 'Duplicate boundary elimination prevents overlapping contours where shade regions meet.',
            },
            {
              title: 'HIGH-RES EXPORT',
              desc: 'Export full-resolution PNG stencils sized for thermal printers. Print and transfer directly.',
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="text-sm font-bold tracking-wider text-flame mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
