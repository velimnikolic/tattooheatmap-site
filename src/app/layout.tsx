import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HEAT — Tattoo Shade Analyzer',
  description:
    'Analyze shade intensities. Generate professional stencils. Tattoo with confidence. Available on Mac, Windows, Linux, Android & iOS.',
  keywords: ['tattoo', 'heatmap', 'shade analyzer', 'stencil generator', 'tattoo tool', 'thermal printer'],
  openGraph: {
    title: 'HEAT — Tattoo Shade Analyzer',
    description: 'Analyze shade intensities. Generate professional stencils. Tattoo with confidence.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rajdhani.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
