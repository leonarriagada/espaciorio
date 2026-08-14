import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
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
    <main className="min-h-screen bg-[#F3F1EB] text-[#242624] overflow-x-hidden selection:bg-[#304638] selection:text-[#F3F1EB]">
      <Header />
      <Hero />
      <Introduction />
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
