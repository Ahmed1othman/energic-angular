import React from 'react';
import Image from 'next/image';
import Container from '../layout/Container';

const VissionSection = () => {
  return (
    <section className="py-20 text-black">
      <Container>
        <div>
          {/* Row 1: Text Content */}
          <div className="text-start max-w-full mx-auto mb-16">
                        <h2 className="text-[24px] font-[600] mb-4 text-[#00A79D]">What&apos;s our vision?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At ENERGIC, we envision becoming the global leader in electric vehicle charging solutions — a force driving innovation, sustainability, and smarter energy access. Aligned with Saudi Arabia’s Vision 2030, we champion clean energy adoption and reimagine the future of mobility worldwide. We deliver the infrastructure backbone for smarter, faster, and infinitely scalable electrification — where it matters most. With nearly 200,000 chargers connected across North America, MENA, and India, we prove that scale and reliability can go hand in hand from day one. We empower the builders of tomorrow’s EV networks — developers, fleets, cities, innovators, and operators — enabling them to create future-ready, sustainable mobility ecosystems that transform the way the world moves.
            </p>
          </div>

          {/* Row 2: Image Content */}
          <div className="relative w-full h-[500px]">
            <Image src="/dashboard_laptop.jpg" alt="Energic Dashboard on Laptop" layout="fill" objectFit="contain" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VissionSection;
