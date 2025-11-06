import React from 'react';

const HeroContent = () => {
  return (
        <div className="text-center text-primary-light mx-auto">
      <p className="text-[16px] text-primary-light font-[400]">Power Our Partners, Power the Future</p>
      <h1 className="text-[44px] font-semibold mt-2 leading-tight text-white">
        "Charge Smarter. Drive Farther."
      </h1>
      <p className="text-[18px] text-primary-light font-[500] mt-2">
        Real-time analytics. Smart pricing. Power at your fingertips.
      </p>
      <div className="flex gap-4 justify-center mt-8">
        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all">
          Get Started
        </button>
        <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
