import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import FiveWorlds from '@/components/sections/FiveWorlds';
import SpaceSection from '@/components/sections/SpaceSection';
import Experiences from '@/components/sections/Experiences';
import Tenants from '@/components/sections/Tenants';
import OutdoorSection from '@/components/sections/OutdoorSection';
import Gallery from '@/components/sections/Gallery';
import Location from '@/components/sections/Location';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3EA] text-[#080A0D] overflow-x-hidden selection:bg-[#FFE9A3] selection:text-[#080A0D]">
      <Header />
      <Hero />
      <Introduction />
      <FiveWorlds />
      <SpaceSection />
      <Experiences />
      <Tenants />
      <OutdoorSection />
      <Gallery />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
