import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const ccRedAlert = localFont({
  src: '../../public/cc_red_alert_inet.ttf',
  display: 'swap',
  variable: '--font-cc-red-alert',
});

export const metadata: Metadata = {
  title: 'HEAT — Tattoo Shade Analyzer',
  description:
    'Analyze shade intensities. Generate professional stencils. Tattoo with confidence. Available on Mac, Windows, Android & iOS.',
  keywords: ['tattoo', 'heatmap', 'shade analyzer', 'stencil generator', 'tattoo tool', 'thermal printer'],
  icons: { icon: '/favicon.svg' },
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
    <html lang="en" className={ccRedAlert.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
