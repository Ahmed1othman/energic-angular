import React from 'react';
import Stats from './hero/Stats';
import HeroContent from './hero/HeroContent';
import CentralSection from './CentralSection';
import BottomFeatures from './hero/BottomFeatures';
import Container from '../layout/Container';

const Hero = () => {
  return (
    <main className="relative bg-cover bg-center pt-35 pb-5 lg:pb-20" style={{ backgroundImage: "url('/hero_bg.png')" }}>
      {/* Grid background image */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/6 z-0"
        style={{
          backgroundImage: `url('/spider_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Container className="relative z-10">
        <HeroContent />
        <Stats />
        <CentralSection />
        <BottomFeatures />
      </Container>
    </main>
  );
};

export default Hero;
