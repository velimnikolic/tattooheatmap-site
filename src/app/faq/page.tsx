'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_NAME } from '@/lib/constants';
import basePath from '@/lib/basePath';

const faqs = [
  {
    category: 'GENERAL',
    questions: [
      {
        q: `What is ${APP_NAME}?`,
        a: `${APP_NAME} is a tattoo shade analysis tool that splits any design into 2–10 distinct shade layers using luminosity analysis. It helps tattoo artists see exactly which areas need which ink density and generates thermal printer-ready stencils.`,
      },
      {
        q: 'What platforms is it available on?',
        a: `${APP_NAME} is available on macOS (.dmg) and Windows (.msi). Android and iOS versions are coming soon.`,
      },
      {
        q: 'What image formats are supported?',
        a: 'PNG, JPG, and BMP. Images are automatically downscaled for fast analysis, with results mapped back to full resolution for export.',
      },
    ],
  },
  {
    category: 'SHADE ANALYSIS',
    questions: [
      {
        q: 'How does shade analysis work?',
        a: 'The app converts each pixel to a luminosity value using the ITU-R BT.709 standard with gamma correction. Pixels are then categorized into N shades (2–10), giving you a clear map of ink density across the design.',
      },
      {
        q: 'What do the shade numbers mean?',
        a: 'Shade 1 is the lightest gray, and higher numbers are progressively darker. Black and White are always present as boundary shades regardless of how many shades you choose.',
      },
      {
        q: 'Can I adjust the analysis?',
        a: 'Yes. You can control denoising, smoothing, local contrast enhancement, black/white cutoff points, and overall contrast. Each parameter updates the shade map in real time.',
      },
      {
        q: 'What are the view modes?',
        a: 'IMAGE shows the original photo. HEAT overlays a color-coded shade map. MONO shows a grayscale preview of shade distribution. You can combine IMAGE + HEAT to see the overlay on the original design.',
      },
    ],
  },
  {
    category: 'STENCIL',
    questions: [
      {
        q: 'How does stencil generation work?',
        a: 'Each shade layer is traced into smooth vector contours using Marching Squares algorithm, then simplified with Douglas-Peucker and smoothed with Chaikin\'s corner cutting. The result is clean, printer-ready outlines.',
      },
      {
        q: 'Can I control each shade independently?',
        a: 'Yes. Each shade has its own simplification tolerance, minimum region size, stroke width, blur, and visibility toggle. You can fine-tune exactly how each shade appears in the stencil.',
      },
      {
        q: 'What about overlapping boundaries?',
        a: `${APP_NAME} automatically eliminates duplicate contour lines where shade regions meet, preventing double-printed lines on your stencil.`,
      },
      {
        q: 'How do I export stencils?',
        a: 'Export as high-resolution PNG optimized for thermal transfer printers. Only visible and enabled shade layers are included in the export.',
      },
    ],
  },
  {
    category: 'SUBSCRIPTION',
    questions: [
      {
        q: 'How much does it cost?',
        a: `${APP_NAME} offers monthly ($14.99/mo) and annual ($79.99/yr — save 55%) subscription plans. Both include unlimited analysis, stencil export, and access on all platforms.`,
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. You can cancel your subscription at any time through your platform\'s account settings. Your access continues until the end of the current billing period.',
      },
      {
        q: 'How is billing handled?',
        a: 'Subscriptions are billed through the Apple App Store, Google Play Store, or directly for desktop platforms via RevenueCat.',
      },
    ],
  },
  {
    category: 'TOOLS & WORKFLOW',
    questions: [
      {
        q: 'What canvas tools are available?',
        a: 'Pan to move around, erase to remove pixels from shade regions, zoom 1x–5x for detailed work, and reset to return to default view. You can also rotate (90/180) and flip the image.',
      },
      {
        q: 'Are there keyboard shortcuts?',
        a: 'Hold H to quickly toggle the heatmap overlay. Press ESC to close dialogs and dismiss tutorials.',
      },
      {
        q: 'Is my data private?',
        a: 'All image processing happens locally on your device. No images are ever uploaded to any server. Only anonymous usage analytics are collected to improve the app.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-flame/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-soft-white group-hover:text-flame transition-colors pr-4">
          {q}
        </span>
        <span
          className={`text-flame text-xl shrink-0 transition-transform duration-200 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-muted text-sm leading-relaxed pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen ember-gradient">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <a
          href={`${basePath}/`}
          className="inline-block text-sm text-flame hover:text-flame/80 tracking-wider mb-8"
        >
          &larr; BACK TO HOME
        </a>

        <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-12">
          <span className="bg-gradient-to-r from-flame to-ember-red bg-clip-text text-transparent">
            FAQ
          </span>
        </h1>

        <div className="space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-sm font-bold tracking-[0.3em] text-flame mb-4">
                {section.category}
              </h2>
              <div>
                {section.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
