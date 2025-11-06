import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EnergicControlHero from '@/components/sections/solutions/EnergiControlHero';
import EnergicControlFeatures from '@/components/sections/solutions/EnergicControlFeatures';
import EnergicControlBenefits from '@/components/sections/solutions/EnergicControlBenefits';
import EnergicControlCTA from '@/components/sections/solutions/EnergicControlCTA';
import EV from '@/components/sections/solutions/EV';

export default function EnergicControlPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      
      <EnergicControlHero />
      <EV />
      <EnergicControlFeatures />
      <Footer />
    </main>
  );
}
