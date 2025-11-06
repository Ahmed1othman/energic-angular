import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/home/HeroSection';
import StatsSection from '@/components/sections/home/StatsSection';
import EnergicControlSection from '@/components/sections/home/EnergicControlSection';
import ChargerEcosystemSection from '@/components/sections/home/ChargerEcosystemSection';
import OptimizeNetworkSection from '@/components/sections/home/OptimizeNetworkSection';
import ChargeXSection from '@/components/sections/home/ChargeXSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import { useTranslations } from 'next-intl';
import LastEventsSection from '@/components/sections/home/LastEventsSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <div className="relative ">
        <HeroSection
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          description={t('hero.description')}
          buttonText={t('hero.buttonText')}
          image="/home/hero_section/hero_1.png"
          secondaryImage="/home/hero_section/hero_2.png"
          communityText={t('hero.communityText')}
        />
        <StatsSection />
      </div>
      <EnergicControlSection />
      <ChargeXSection/>
      <TestimonialsSection/>
      <ChargerEcosystemSection />
      <OptimizeNetworkSection />
     
      
      
      <LastEventsSection/>
      <Footer/>
    </main>
  );
}
