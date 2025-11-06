import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
// Create and import a ChargeXHero component for the hero section.
import ChargeXHero from '@/components/sections/solutions/EnergicChargeX/ChargeXHero';

import EV from '@/components/sections/solutions/EV';
import EnergicChargeXFeatures from '@/components/sections/solutions/EnergicChargeX/EnergicChargeXFeatures';
// Optionally add ChargeXFeatures, ChargeXBenefits, etc. here if you plan to split them.

export default function EnergicChargeXPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      
      <ChargeXHero />
      <EV />
      <EnergicChargeXFeatures />
      <Footer />
    </main>
  );
}
