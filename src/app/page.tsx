import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import VissionSection from "@/components/home/VissionSection";
import StatsMapSection from "@/components/home/StatsMapSection";
import Power from "@/components/home/Power";
import DriveSection from "@/components/home/DriveSection";
import WhyEnergicSection from "@/components/home/WhyEnergicSection";
import ProvideSection from "@/components/home/ProvideSection";
import CoreValueSection from "@/components/home/CoreValueSection";
import Footer from "@/components/layout/Footer";
import SatisfiedUsers from "@/components/home/SatisfiedUsers";

export default function Home() {
  return (
    <main className="font-[Montserrat] bg-[#E6F7F6] max-w-[2440px] mx-auto">
      <Navbar />
      <Hero />
      <VissionSection />
      <StatsMapSection />
      <Power />
      <DriveSection />
      <WhyEnergicSection />
      <CoreValueSection />
      <ProvideSection />
      <SatisfiedUsers />
      <Footer />
    </main>
  );
}
