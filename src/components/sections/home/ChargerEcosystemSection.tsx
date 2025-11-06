"use client";
import React from 'react';
import Image from 'next/image';

const processSteps = [
  { 
    title: 'Total Electricity Consumed', 
    value: '34,000', 
    unit: '(KWh)',
    devices: '50 Active Devices',
  },
  { 
    title: 'Total Revenue', 
    value: '34,000', 
    unit: '(SAR)',
    devices: '45 Active Devices',
  },
  { 
    title: 'Total Users', 
    value: '3000', 
    unit: '',
    devices: '100+ Active Users',
  },
];

const ChargerEcosystemSection = () => {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="relative min-h-[600px] md:min-h-[700px]">
          
          {/* 1. Center - Main Charger Image - First in Mobile */}
          <div className="relative md:absolute left-0 md:left-1/2 top-0 md:top-1/4 md:-translate-x-1/2 md:-translate-y-1/2 z-10 mb-6 md:mb-0 order-1">
            <Image
              src="/home/charger_section/charger.png"
              alt="Energic Charger"
              width={341}
              height={512}
              className="w-auto h-[300px] md:h-[350px] lg:h-[450px] object-contain drop-shadow-2xl mx-auto"
              priority
            />
          </div>

          {/* 2. Text Content - Second in Mobile */}
          <div className="relative md:absolute left-0 md:left-[2%] lg:left-[5%] bottom-0 md:bottom-[2%] lg:bottom-[8%] z-20 max-w-full md:max-w-[200px] lg:max-w-xs shadow-xl rounded-xl p-4 mb-6 md:mb-0 order-2" style={{ boxShadow: '4px 4px 12px 0px #00000017' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Headline
            </h2>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </p>
          </div>

          {/* 3. Top Left - Statistics Circle */}
          <div className="relative md:absolute left-0 md:left-[5%] lg:left-[15%] top-0 md:-top-[1%] z-[6] mb-6 md:mb-0 order-3">
            <div className="relative bg-white mx-auto w-fit">
              <Image
                src="/home/charger_section/statistics.png"
                alt="Statistics"
                width={105.13}
                height={140.4}
                className="w-[160px] md:w-[105px] lg:w-[140px] h-auto"
              />
              
            </div>
            {/* Connecting Line to Center */}
            <svg className="hidden md:block absolute top-1/2 left-[100%] w-[200px] sm:w-[280px] h-1 pointer-events-none" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="0" x2="280" y2="0" stroke="#E41010" strokeWidth="2" strokeDasharray="8,8" opacity="0.4" />
            </svg>
          </div>

          {/* 4. Middle Left - Dashboard on Laptop */}
          <div className="relative md:absolute left-0 md:left-[2%] top-0 md:top-[25%] z-[5] mb-6 md:mb-0 order-4">
            <div className="relative p-2 flex gap-2 justify-center">
              <Image
                src="/home/charger_section/dashboard2.png"
                alt="Dashboard"
                width={275}
                height={160}
                className="rounded-lg w-[220px] md:w-[275px] h-auto"
              />
              <Image
                src="/home/charger_section/statistics2.png"
                alt="Statistics Bar"
                width={142}
                height={114}
                className="rounded-lg w-[130px] md:w-[142px] h-auto"
              />
            </div>
            {/* Connecting Line to Center */}
            <svg className="hidden md:block absolute top-1/2 left-full w-[110px] sm:w-[230px] h-1 pointer-events-none" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="0" x2="230" y2="0" stroke="#E41010" strokeWidth="2" strokeDasharray="8,8" opacity="0.4" />
            </svg>
          </div>

          {/* 5. Top Right - Control Dashboard */}
          <div className="relative md:absolute right-0 md:right-[2%] lg:right-[10%] top-0 md:-top-[10%] z-[8] mb-6 md:mb-0 order-5">
            <div className="relative bg-white rounded-xl shadow-2xl p-2 border border-gray-200 mx-auto w-fit">
              <Image
                src="/home/charger_section/dashbord.png"
                alt="Control Dashboard"
                width={240}
                height={160}
                className="rounded-lg w-[280px] md:w-[240px] h-auto"
              />
            </div>
            {/* Connecting Line to Center */}
            <svg className="hidden md:block absolute top-1/2 right-full w-[180px] sm:w-[220px] h-1 pointer-events-none" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="0" x2="220" y2="0" stroke="#E41010" strokeWidth="2" strokeDasharray="8,8" opacity="0.4" />
            </svg>
          </div>

          {/* 6. Middle Right - Charger Devices */}
          <div className="relative md:absolute right-0 md:right-[2%] lg:right-[10%] top-0 md:top-[20%] lg:top-[18%] z-[9] mb-6 md:mb-0 order-6">
            <div className="relative bg-white rounded-[8px] shadow-xl p-3 sm:p-3 border border-gray-100">
              <div className="text-sm sm:text-xs font-semibold text-gray-700 mb-3 flex justify-between">
                <span>Device</span>
                <span>All Devices</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-3 sm:p-1.5 bg-[#E9ECEF] rounded-lg">
                    <div className="flex items-center gap-1 sm:gap-1 self-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2E9E3A]"></div>
                      <span className="text-[9px] font-bold sm:text-[6px] text-[#2E9E3A]">Online</span>
                    </div>
                    <div className="w-16 h-16 sm:w-10 sm:h-10 bg-gradient-to-br rounded-lg flex items-center justify-center">
                      <Image src="/home/charger_ecosystem_section/charge_point.png" alt="Charge Point" width={70} height={65} className="w-12 sm:w-8" /> 
                    </div>
                    <div className="text-sm sm:text-[10px] font-medium text-gray-600">Device {i}</div>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <span className="text-xs sm:text-[8px] text-red-600 font-semibold">ID26517</span>
                    </div>

                    <div className='bg-[#CFE7D4] w-full h-auto rounded-[6px] p-2 sm:p-1.5'>
                      {/* icon in start value in center badge with number in end */}
                      <div className="flex items-center justify-between gap-1.5">
                        <Image src="/home/charger_ecosystem_section/CCS 2.svg" alt="Charge Point" width={12} height={10} className="flex-shrink-0" /> 
                        <span className="text-[9px] sm:text-[7px] text-gray-700 flex-1 text-center">CCS 2</span>
                        <span className="text-[9px] sm:text-[7px] font-semibold text-white bg-[#2E9E3A] rounded-[4px] px-2 py-1 flex-shrink-0">5</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Connecting Line to Center */}
            <svg className="hidden md:block absolute top-1/2 right-full w-[80px] sm:w-[220px] h-1 pointer-events-none" style={{ transform: 'translateY(-50%)' }}>
              <line x1="0" y1="0" x2="220" y2="0" stroke="#E41010" strokeWidth="2" strokeDasharray="8,8" opacity="0.4" />
            </svg>
          </div>

          {/* 7. Bottom Right - Map with Cards Below */}
          <div className="relative md:absolute right-0 md:right-[5%] lg:right-[0%] bottom-0 md:bottom-[5%] lg:bottom-[3%] z-[10] mb-6 md:mb-0 order-7">
            <div className="relative rounded-xl p-2 mb-4">
              <Image
                src="/home/charger_section/map.png"
                alt="Map"
                width={292}
                height={184}
                className="rounded-[12px] w-full md:w-[180px] lg:w-[292px] h-auto mx-auto"
              />
            </div>
            
            {/* Stats Cards Below Map */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2">
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
                      minHeight: '140px',
                    }}
                  >
                    <div className="px-5 md:px-4 lg:px-5 py-4 md:py-3 lg:py-4 pe-14 md:pe-12 lg:pe-14 flex flex-col justify-between" style={{ minHeight: '140px' }}>
                      {/* Top Section - Title */}
                      <div>
                        <h3 className="text-sm md:text-[11px] lg:text-[12px] font-semibold text-gray-700 mb-2 w-[85%]">
                          {step.title}
                        </h3>
                        
                        {/* Value and Unit */}
                        <div className="flex items-baseline gap-1.5 mb-3">
                          <p className="text-xl md:text-[10px] lg:text-[11px] font-bold text-primary">
                            {step.value}
                          </p>
                          {step.unit && (
                            <span className="text-xs md:text-[7px] lg:text-[8px] text-gray-500">
                              {step.unit}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Bottom Section - Devices and Toggle */}
                      <div className="flex items-center justify-between">
                        {/* Devices Info */}
                        <div className="flex items-center gap-2 md:gap-1.5">
                          <div className="w-2 h-2 md:w-1.5 md:h-1.5 rounded-full bg-primary"></div>
                          <span className="text-xs md:text-[7px] lg:text-[8px] text-gray-700 font-medium">{step.devices}</span>
                        </div>
                      </div>

                      <div className="flex items-end justify-between mt-3 md:mt-2">
                        {/* Toggle Switch */}
                        <div className="flex items-center gap-2 md:gap-1 text-xs md:text-[8px] lg:text-[10px]">
                          <span className="text-gray-600">Personal</span>
                          <div className="relative inline-flex h-5 w-9 md:h-3.5 md:w-7 lg:h-4 lg:w-8 items-center rounded-full bg-primary">
                            <span className="inline-block h-4 w-4 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 transform rounded-full bg-white shadow-sm transition translate-x-0.5"></span>
                          </div>
                          <span className="text-gray-600">Commercial</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cutout overlay to create the notch effect */}
                  <div 
                    className="absolute bg-white"
                    style={{
                      top: '0px',
                      right: '0px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                    }}
                  />
                  
                  {/* Floating Icon Box - Top Right Corner */}
                  <div 
                    className="absolute w-12 h-12 md:w-10 md:h-10 lg:w-11 lg:h-11 flex items-center justify-center z-10"
                    style={{
                      top: '4px',
                      right: '4px',
                      borderRadius: '12px',
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
                      className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6"
                    />
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargerEcosystemSection;
