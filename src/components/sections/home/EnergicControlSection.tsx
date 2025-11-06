"use client";
import React from 'react';
import Image from 'next/image';
import CtaButton from '../../ui/CtaButton';

interface Point {
  id: number;
  label: string;
}

const points: Point[] = [
  { id: 1, label: 'Point 1' },
  { id: 2, label: 'Point 2' },
  { id: 3, label: 'Point 3' },
];

const processSteps = [
  { 
    title: 'Total Electricity Consumed', 
    value: '34,000', 
    unit: '(KWh)',
    devices: '50 Active Devices',
    icon: '⚡'
  },
  { 
    title: 'Total Revenue', 
    value: '34,000', 
    unit: '(SAR)',
    devices: '50 Active Devices',
    icon: '💰'
  },
  { 
    title: 'Total Users', 
    value: '3000', 
    unit: '',
    devices: '50 Active Devices',
    icon: '👥'
  },
];
  
const EnergicControlSection = () => {
  return (
    <section className="relative w-full bg-[#e7f7f6] pt-16 sm:pt-24 md:pt-80 pb-8 sm:pb-12 md:pb-8 -top-0 sm:-top-30 md:-top-50 -mb-0 sm:-mb-30 md:-mb-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 items-start">
          
          {/* Left Side - Dashboard Image */}
          <div className="">
              {/* Main Dashboard Image */}
              <div className="relative z-10">
                <Image
                  src="/home/energic_control_section/1.png"
                  alt="Energic Control Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>

            {/* Process Steps Bar - Stats Cards */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Container for both parts */}
                  <div className="relative">
                    {/* Main Card with notched corner */}
                    <div 
                      className="relative overflow-visible"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 167, 157, 0.22) 0%, rgba(110, 194, 130, 0.22) 100%)',
                        borderRadius: '12px',
                        border: '0.49px solid #E9ECEF',
                        minHeight: '90px',
                      }}
                    >
                      <div className="px-3 sm:px-4 py-2 pe-8 sm:pe-10 flex flex-col justify-between" style={{ minHeight: '90px' }}>
                        {/* Top Section - Title */}
                        <div>
                          <h3 className="text-[9px] sm:text-[10px] font-semibold text-gray-700 mb-1.5 sm:mb-2 w-[90%]">
                            {step.title}
                          </h3>
                          
                          {/* Value and Unit */}
                          <div className="flex items-baseline gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                            <p className="text-[8px] sm:text-[8.83px] font-bold text-primary">
                              {step.value}
                            </p>
                            {step.unit && (
                              <span className="text-[5.5px] sm:text-[6.38px] text-gray-500">
                                {step.unit}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Bottom Section - Devices and Toggle */}
                        <div className="flex items-center justify-between">
                          {/* Devices Info */}
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
                            <span className="text-[5.5px] sm:text-[6.38px] text-gray-700 font-medium">{step.devices}</span>
                          </div>
                        
                          
                        </div>

                        <div className="flex items-end justify-between">
                          {/* Toggle Switch */}
                          <div className="flex items-center gap-1 sm:gap-1.5 text-[7px] sm:text-[9px]">
                            <span className="text-gray-600">Personal</span>
                            <div className="relative inline-flex h-3 w-6 sm:h-4 sm:w-8 items-center rounded-full bg-primary">
                              <span className="inline-block h-2 w-2 sm:h-3 sm:w-3 transform rounded-full bg-white shadow-sm transition translate-x-0.5"></span>
                            </div>
                            <span className="text-gray-600">Commercial</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cutout overlay to create the notch effect */}
                    <div 
                      className="absolute bg-[#e7f7f6]"
                      style={{
                        top: '0px',
                        right: '0px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                      }}
                    />
                    
                    {/* Floating Icon Box - Top Right Corner (Separate Part) - Fully Rounded */}
                    <div 
                      className="absolute w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10"
                      style={{
                        top: '4px',
                        right: '4px',
                        borderRadius: '10px',
                        border: '0.49px solid #E9ECEF',
                        padding: '2px',
                        background: 'linear-gradient(180deg, rgba(0, 167, 157, 0.22) 0%, rgba(110, 194, 130, 0.22) 100%)',
                      }}
                    >
                      <Image 
                        src="/home/icons/card_icon.svg" 
                        alt="Card Icon" 
                        width={25} 
                        height={25}
                        className="w-4 h-4 sm:w-6 sm:h-6"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-first lg:order-2 space-y-4 sm:space-y-6 flex flex-col items-start lg:items-end">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-primary leading-tight text-start lg:text-end w-full mb-4 sm:mb-8 md:mb-15">
              Energic Control
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-custom-text leading-relaxed max-w-2xl text-start lg:text-end w-full">
              We provide advanced EV charging solutions with comprehensive services, 
              secure access, and high-quality products to drive a greener future.
            </p>

            {/* Points List */}
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4 w-full max-w-md">
              {points.map((point) => (
                <div 
                  key={point.id}
                  className="flex items-center justify-start lg:justify-end gap-2 sm:gap-3 group"
                >
                  {/* Point Label */}
                  <span className="text-sm sm:text-base text-gray-700 order-2 lg:order-1">
                    {point.label}
                  </span>

                  {/* Star Icon */}
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative order-1 lg:order-2">
                    <Image
                      src="/home/icons/star.png"
                      alt="star"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <CtaButton variant="outline" className="">
                Know More
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergicControlSection;
