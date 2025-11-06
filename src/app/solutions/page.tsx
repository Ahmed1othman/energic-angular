import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/Sections/solutions/SolutionsHero";
import HowItWorks from "@/components/Sections/solutions/HowItWorks";
import ATapAwayFromPower from "@/components/Sections/solutions/ATapAwayFromPower";
import RealTimeUpdates from "@/components/Sections/solutions/RealTimeUpdates";

export default function SolutionsPage() {
  return (
    <main className="font-[Montserrat] bg-[#E6F7F6]">
      <Navbar />
      <SolutionsHero />
      <HowItWorks />
      <ATapAwayFromPower />
      <RealTimeUpdates />
      <Footer />
    </main>
  );
}
