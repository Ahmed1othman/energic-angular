"use client";
import React from 'react';
import Image from 'next/image';
import CtaButton from '../../ui/CtaButton';

const ChargeXSection = () => {
  return (
    <section className="relative w-full bg-white py-20 sm:py-20 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid - 2 Equal Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12  items-center">
          
          {/* Left Side - Content (50%) */}
          <div className="space-y-6 flex flex-col justify-start">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-[54px] font-semibold text-primary leading-tight">
              Charge X
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-custom-text leading-relaxed max-w-2xl">
              We provide advanced EV charging solutions with comprehensive services, 
              secure access, and high-quality products to drive a greener future.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <CtaButton variant="outline">
                Know More
              </CtaButton>
            </div>
          </div>

          <div className="flex justify-end">
            <Image
              src="/home/charge_x_section/mobiles.png"
              alt="Charge X Mobile App"
              width={510.67}
              height={358.74}
              className=""
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargeXSection;
