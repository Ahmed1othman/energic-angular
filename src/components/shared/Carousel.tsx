'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderCard: (item: T, isActive: boolean) => React.ReactNode;
  className?: string;
  cardClassName?: string;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayDelay?: number;
}

export default function Carousel<T extends { id: number | string }>({
  items,
  renderCard,
  className = '',
  cardClassName = '',
  showArrows = true,
  autoPlay = false,
  autoPlayDelay = 3000,
}: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || !emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayDelay, emblaApi]);

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
        <div className="flex items-center gap-2">
          {items.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={item.id}
                className={`flex-[0_0_90%] sm:flex-[0_0_65%] lg:flex-[0_0_50%] min-w-0 transition-all duration-700 ${cardClassName}`}
              >
                <div
                  className={`transition-all duration-700 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-85 opacity-70'
                  }`}
                >
                  {renderCard(item, isActive)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'w-8 bg-[#00A79D]'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
