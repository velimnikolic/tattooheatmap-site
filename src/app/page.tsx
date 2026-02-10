import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ShadeAnalysis from '@/components/ShadeAnalysis';
import StencilExplainer from '@/components/StencilExplainer';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Platforms from '@/components/Platforms';
import Footer from '@/components/Footer';
import FireParticles from '@/components/FireParticles';
import PageIndicator from '@/components/PageIndicator';

export default function Home() {
  return (
    <>
      <FireParticles />
      <Navbar />
      <PageIndicator />
      <main className="relative z-10 snap-container">
        <Hero />
        <ShadeAnalysis />
        <StencilExplainer />
        <HowItWorks />
        <Pricing />
        <div className="snap-page-end">
          <Platforms />
          <Footer />
        </div>
      </main>
    </>
  );
}
