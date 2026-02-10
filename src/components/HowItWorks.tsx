'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { steps } from '@/lib/constants';

const stepVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-wider mb-4 flame-glow-sm">
          <span className="bg-gradient-to-r from-flame to-ember-red bg-clip-text text-transparent">
            HOW IT WORKS
          </span>
        </h2>
        <p className="text-center text-muted text-lg mb-16 max-w-xl mx-auto">
          From image to stencil in four simple steps.
        </p>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-px">
              <svg width="100%" height="2" className="overflow-visible">
                <line
                  x1="0" y1="1" x2="100%" y2="1"
                  stroke="#FF6B35"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  opacity="0.3"
                  className="dash-animate"
                />
              </svg>
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={stepVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center w-1/4 px-4"
              >
                {/* Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full flame-gradient flex items-center justify-center mb-6 shadow-lg shadow-flame/20">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold tracking-wider text-soft-white mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={stepVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-5 items-start"
            >
              {/* Circle + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flame-gradient flex items-center justify-center shrink-0 shadow-lg shadow-flame/20">
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-12 bg-flame/20 mt-2" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold tracking-wider text-soft-white mb-1">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
