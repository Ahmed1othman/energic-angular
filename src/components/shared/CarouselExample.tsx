'use client';

import Carousel from './Carousel';
import Image from 'next/image';

interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

// بيانات تجريبية - يمكن استبدالها بـ API
const sampleCards: CardItem[] = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the first card with some description',
    image: '/sec_real_time_1.png',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the second card with some description',
    image: '/sec_real_time_2.png',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is the third card with some description',
    image: '/sec_real_time_3.png',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'This is the fourth card with some description',
    image: '/sec_real_time_4.png',
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'This is the fifth card with some description',
    image: '/sec_real_time_1.png',
  },
];

export default function CarouselExample() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Carousel Example
        </h2>

        <Carousel
          items={sampleCards}
          renderCard={(item, isActive) => (
            <div className="relative rounded-xl overflow-hidden shadow-lg group bg-gradient-to-r from-[#00A79D] to-[#1A3B39] h-64">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-90"
                width={400}
                height={300}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
              {isActive && (
                <div className="absolute top-2 right-2 bg-[#00A79D] text-white text-xs px-2 py-1 rounded-full">
                  Active
                </div>
              )}
            </div>
          )}
          showArrows={true}
          autoPlay={false}
          className="mb-8"
        />
      </div>
    </div>
  );
}
