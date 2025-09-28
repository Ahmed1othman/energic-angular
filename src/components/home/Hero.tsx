import React from 'react';
import Stats from './hero/Stats';
import HeroContent from './hero/HeroContent';
import CentralSection from './CentralSection';
import BottomFeatures from './hero/BottomFeatures';
import Container from '../layout/Container';

const Hero = () => {
  return (
    <main className="relative bg-cover bg-center pt-40 pb-5 lg:pb-20" style={{ backgroundImage: "url('/hero_bg.png')" }}>
      <Container>
        <HeroContent />
        <Stats />
        <CentralSection />
        <BottomFeatures />
      </Container>
    </main>
  );
};

export default Hero;
