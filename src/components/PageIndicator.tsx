'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Welcome' },
  { id: 'shades', label: 'Shades' },
  { id: 'stencil', label: 'Stencil' },
  { id: 'how-it-works', label: 'How' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'download', label: 'Download' },
];

export default function PageIndicator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.snap-container');
    if (!container) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const viewportH = container.clientHeight;
      // Which page are we closest to?
      const page = Math.round(scrollTop / viewportH);
      setActive(Math.min(page, sections.length - 1));
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (index: number) => {
    const container = document.querySelector('.snap-container');
    const target = document.getElementById(sections[index].id);
    if (container && target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      {sections.map((section, i) => (
        <button
          key={section.id}
          onClick={() => handleClick(i)}
          className="group flex items-center gap-2"
          aria-label={section.label}
        >
          {/* Label (shows on hover) */}
          <span className="text-[10px] tracking-wider text-flame opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {section.label.toUpperCase()}
          </span>
          {/* Dot */}
          <span
            className={`block rounded-full transition-all duration-300 ${
              i === active
                ? 'w-2.5 h-2.5 bg-flame shadow-[0_0_8px_rgba(255,107,53,0.6)]'
                : 'w-1.5 h-1.5 bg-muted/50 hover:bg-flame/50'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
