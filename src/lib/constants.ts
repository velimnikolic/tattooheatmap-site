export const colors = {
  charcoal: '#0A0505',
  ember: '#120808',
  warmDark: '#1A0A05',
  flame: '#FF6B35',
  emberRed: '#FF4500',
  gold: '#FFD700',
  white: '#F5F0EB',
  muted: '#8A7A6A',
} as const;

export const features = [
  {
    title: 'PRECISE SHADE ANALYSIS',
    description:
      'Analyze any design into 2–10 distinct shades using luminosity analysis with gamma correction. See exactly which areas need which ink density.',
    icon: 'shades',
  },
  {
    title: 'THERMAL PRINTER READY',
    description:
      'Generate stencils with per-shade control — simplification, stroke width, region size — and export as high-res PNG for thermal printers.',
    icon: 'printer',
  },
  {
    title: 'YOUR INK, YOUR RULES',
    description:
      'Match any ink palette, toggle individual shade layers, adjust transparency, and fine-tune every parameter to your workflow.',
    icon: 'sliders',
  },
  {
    title: 'WORKS EVERYWHERE',
    description:
      'Mac, Windows, Android, iOS — the same powerful analysis engine on every platform you use.',
    icon: 'devices',
  },
] as const;

export const steps = [
  { number: 1, title: 'Load Image', description: 'Import any tattoo design or reference image' },
  { number: 2, title: 'Analyze Shades', description: 'AI-powered luminosity analysis splits your design into distinct shade layers' },
  { number: 3, title: 'Generate Stencil', description: 'Fine-tune per-shade contours with professional controls' },
  { number: 4, title: 'Print & Tattoo', description: 'Export high-res stencils for thermal printers and tattoo with confidence' },
] as const;

export const pricing = {
  monthly: {
    price: '$14.99',
    period: '/month',
    badge: null,
  },
  annual: {
    price: '$79.99',
    period: '/year',
    badge: 'SAVE 55%',
  },
  features: [
    'Unlimited shade analysis',
    'Professional stencil export',
    'All platforms included',
    'Per-shade stencil controls',
    'High-res PNG export',
    'Cancel anytime',
  ],
} as const;

export const platforms = {
  desktop: [
    { name: 'macOS', ext: '.dmg', icon: 'apple', available: true },
    { name: 'Windows', ext: '.msi', icon: 'windows', available: true },
  ],
  mobile: [
    { name: 'Android', store: 'Google Play', icon: 'android', available: false },
    { name: 'iOS', store: 'App Store', icon: 'apple', available: false },
  ],
} as const;

export const navLinks = [
  { label: 'Shades', href: '#shades' },
  { label: 'Stencil', href: '#stencil' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Download', href: '#download' },
] as const;

export const APP_NAME = 'HEAT';
export const APP_TAGLINE = 'Tattoo Shade Analyzer';
export const COMPANY_NAME = 'HEAT - Tattoo Heatmap Analyzer';
export const CONTACT_EMAIL = 'velimnikolic@gmail.com';
export const CURRENT_YEAR = 2026;
