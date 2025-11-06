"use client";
import React from 'react';

const statsData = [
  { value: '10k', label: 'Facilities we have in our platform' },
  { value: '23k', label: 'Stations we have in our platform' },
  { value: '44k', label: 'Chargers we have in our platform' },
  { value: '20k', label: 'Consumers we have in our platform' },
];

const StatsSection = () => {
  return (
    <section className="relative w-full mt-6 sm:-mt-12 md:-mt-22 mb-12 sm:-mb-12 md:-mb-16 z-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-4 lg:px-8">
        {/* Glass morphism container with subtle transparency */}
        <div 
          className="relative border border-white overflow-hidden bg-white/40 backdrop-blur-sm h-full rounded-[12px] sm:rounded-[16px] md:rounded-[18px] shadow-[2px_4px_24px_0px_#00000033]"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, index) => (
              <div 
                key={stat.value} 
                className="relative px-4 sm:px-6 md:px-10 py-6 sm:py-5 md:py-6 group hover:bg-white/40 transition-all duration-300"
              >
                {/* Stat Value */}
                <p className="text-3xl sm:text-3xl md:text-[34px] text-center sm:text-start italic font-semibold text-primary mb-3 sm:mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </p>
                
                {/* Stat Label */}
                <p className="text-[15px] sm:text-[15px] md:text-[16px] text-center sm:text-start font-medium text-gray-700 max-w-[200px] mx-auto sm:mx-0 leading-relaxed">
                  {stat.label}
                </p>

                {/* Vertical Divider - Desktop */}
                {index < statsData.length - 1 && (
                  <div className="absolute top-1/2 right-0 hidden lg:block h-32 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                )}

                {/* Vertical Divider - Tablet */}
                {index % 2 === 0 && index < statsData.length - 1 && (
                  <div className="absolute top-1/2 right-0 hidden sm:block lg:hidden h-32 w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                )}

                {/* Horizontal Divider - Mobile */}
                {index < statsData.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 block sm:hidden h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
