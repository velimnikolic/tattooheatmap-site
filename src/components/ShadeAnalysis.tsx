'use client';

import { motion } from 'framer-motion';

const shades = [
  { label: 'BLACK', color: '#0A0505', border: '#333' },
  { label: 'SHADE 4', color: '#2A2020', border: '#4A3535' },
  { label: 'SHADE 3', color: '#5A4545', border: '#7A5555' },
  { label: 'SHADE 2', color: '#8A7070', border: '#AA8888' },
  { label: 'SHADE 1', color: '#B89999', border: '#D4BBBB' },
  { label: 'WHITE', color: '#F5F0EB', border: '#F5F0EB' },
];

export default function ShadeAnalysis() {
  return (
    <div className="snap-page ember-gradient px-6 md:px-12 lg:px-20" id="shades">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-wider mb-4 flame-glow-sm">
            <span className="bg-gradient-to-r from-flame to-ember-red bg-clip-text text-transparent">
              SHADE ANALYSIS
            </span>
          </h2>
          <p className="text-center text-muted text-lg mb-12 max-w-2xl mx-auto">
            Every tattoo design contains multiple shade intensities. HEAT separates them
            into distinct layers so you know exactly which ink density to use where.
          </p>
        </motion.div>

        {/* Shade spectrum visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 md:gap-4 mb-12"
        >
          {shades.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-10 h-10 md:w-14 md:h-14 rounded-lg border"
                style={{ backgroundColor: s.color, borderColor: s.border }}
              />
              <span className="text-[9px] md:text-[10px] tracking-wider text-muted">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              title: '2–10 SHADES',
              desc: 'Split any design into the exact number of shade layers your technique requires.',
            },
            {
              title: 'LUMINOSITY ENGINE',
              desc: 'ITU-R BT.709 standard with gamma correction for perceptually accurate shade separation.',
            },
            {
              title: 'TOGGLE & COMPARE',
              desc: 'Show or hide individual shade layers, adjust transparency, and see which areas overlap.',
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
