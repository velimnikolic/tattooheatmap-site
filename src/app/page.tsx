import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Platforms from '@/components/Platforms';
import Footer from '@/components/Footer';
import FireParticles from '@/components/FireParticles';

export default function Home() {
  return (
    <>
      <FireParticles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Platforms />
      </main>
      <Footer />
    </>
  );
}
