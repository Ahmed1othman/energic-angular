import React from 'react';

const statsData = [
  { value: '10k', label: 'Facilities we have in our platform' },
  { value: '23k', label: 'Stations we have in our platform' },
  { value: '44k', label: 'Chargers we have in our platform' },
  { value: '20k', label: 'Consumers we have in our platform' },
];

const Stats = () => {
  return (
    <div className="mx-auto w-full max-w-[1240px] mt-3 mb-3 [filter:drop-shadow(2px_4px_12px_#00000033)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-transparent rounded-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_-1px_1px_rgba(0,0,0,0.2)] border-b border-[#37D8CE]/30">
        {statsData.map((stat, index) => (
          <div key={stat.value} className="relative px-6 md:px-12 py-4 text-white text-start">
            <p className="text-[26px] font-[600] text-white">{stat.value}</p>
            <p className="text-white text-[16px] font-[400]">{stat.label}</p>

            {/* Vertical Divider */}
            {index < 3 && (
              <div className="absolute top-1/2 right-0 hidden h-1/2 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent lg:block" />
            )}
            {index % 2 === 0 && (
              <div className="absolute top-1/2 right-0 hidden h-1/2 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent md:block lg:hidden" />
            )}

            {/* Horizontal Divider for Mobile */}
            {index < statsData.length - 1 && (
              <div className="absolute bottom-0 left-1/2 block h-px w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent md:hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

