import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import InteriorShowcaseHero from '@/components/sections/InteriorShowcaseHero';
import MasterplanSection from '@/components/sections/MasterplanSection';
import CommercialLeasing from '@/components/sections/CommercialLeasing';
import Location from '@/components/sections/Location';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A0D] text-[#F5F3EA] overflow-x-hidden selection:bg-[#FFE9A3] selection:text-[#080A0D]">
      <Header />
      <Hero />
      <InteriorShowcaseHero />
      <MasterplanSection />
      <CommercialLeasing />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
