import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import InteriorShowcaseHero from '@/components/sections/InteriorShowcaseHero';
import LifestyleHero from '@/components/sections/LifestyleHero';
import Location from '@/components/sections/Location';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A0D] text-[#F5F3EA] overflow-x-hidden selection:bg-[#FFE9A3] selection:text-[#080A0D]">
      <Header />
      <Hero />
      <InteriorShowcaseHero />
      <LifestyleHero />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
