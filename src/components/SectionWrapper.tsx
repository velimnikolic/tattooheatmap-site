'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  snap?: boolean;
}

export default function SectionWrapper({ id, children, className = '', snap = true }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`px-6 md:px-12 lg:px-20 ember-gradient ${snap ? 'snap-page' : 'snap-page-end'} ${className}`}
    >
      {children}
    </motion.section>
  );
}
