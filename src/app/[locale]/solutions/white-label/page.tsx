import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhiteLabelHero ''
// Optionally add ChargeXFeatures, ChargeXBenefits, etc. here if you plan to split them.

export default function WhiteLabel() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      
      <WhitLabelHero />
    
      <Footer />
    </main>
  );
}
