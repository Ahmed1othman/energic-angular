'use client';

import Container from '../../layout/Container';
import Image from 'next/image';
import Carousel from '../../shared/Carousel';

interface SlideItem {
  id: number;
  image: string;
  alt: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    image: '/power_slider_1.png',
    alt: 'QR Code Scan',
  },
  {
    id: 2,
    image: '/power_slider_1.png',
    alt: 'No Setup Needed'
  },
  {
    id: 3,
    image: '/power_slider_1.png',
    alt: 'Personalized Charging',
  },
];

export default function ATapAwayFromPower() {
  return (
    <main className="relative bg-cover bg-center pt-5 pb-16 lg:pb-20 bg-[#C8F1EF]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">A Tap Away from Power</h2>
          <p className="text-[#6A6A6A] font-medium text-base lg:text-lg max-w-[85%] mx-auto">
            No need to enter lengthy details or set up connections manually. 
            Energic's smart QR technology makes it all automatic — connecting drivers 
            to a personalized charging experience in seconds.
          </p>
        </div>

        <Carousel
          items={slides}
          renderCard={(item) => (
            <div className="w-full h-full">
              <Image
                src={item.image}
                alt={item.alt}
                width={636.94}
                height={390.82}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          showArrows={true}
          autoPlay={true}
          autoPlayDelay={4000}
          className="w-full"
        />
      </Container>
    </main>
  );
}
