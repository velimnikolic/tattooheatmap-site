import { ReactNode } from 'react';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  snap?: boolean;
}

export default function SectionWrapper({ id, children, className = '', snap = true }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`px-6 md:px-12 lg:px-20 ember-gradient ${snap ? 'snap-page' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
