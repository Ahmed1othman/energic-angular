import React from 'react';
import Image from 'next/image';
import Container from '../layout/Container';

const features = [
  {
    title: "Effortless Control, Optimal Performance",
    description: "Effortlessly control charging stations from anywhere. Monitor and manage charging operations in real-time for efficiency, scalability, and reliability. Oversee multiple stations and optimize performance.",
    image: "/why_sec_dashboard_control.png",
  },
  {
    title: "Seamless Charging Control",
    description: "Experience effortless charging control, anywhere, anytime. Monitor, schedule, and adjust your charging sessions with ease. Enjoy convenient, flexible, and worry-free charging.",
    image: "/why_sec_charge.png",
  },
  {
    title: "Smart And Efficient EV Charging",
    description: "Take control with smart charge scheduling. Plan ahead, optimize for off-peak hours, and ensure your EV is ready when needed. Convenient and energy-efficient!",
    image: "/why_sec_mobile.png",
  }
];

export default function WhyEnergicSection() {
  return (
    <section className="py-5 bg-[#e6f7f6]">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#00A79D] text-[32px] font-bold mb-6">Why Energic</h2>
          <p className="text-[#1A3B39] text-[16px] font-regular leading-relaxed mx-auto">
            ENERGIC is building the EV charging platform for the new generation of operators. Not just hardware. Not just software. We deliver the infrastructure backbone for smarter, faster, and more scalable electrification-where it matters most. With nearly 200,000 chargers connected across North America, MENA, and India, ENERGIC proves that scale and reliability can go hand in hand from day one. We empower the builders of tomorrow&apos;s EV networks operators, developers, fleets, cities, and innovators.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden min-h-[374] w-full group flex flex-col bg-[linear-gradient(180deg,_#00A79D_0%,_#00413D_100%)]`}
            >
              {/* Image Container (Top 70%) */}
              <div className="relative w-full h-[70%] flex justify-center items-center">
                <div className="relative w-full h-full max-w-md max-h-64">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute top-[10%] bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent"></div>

              {/* Content Container (Bottom 30%) */}
              <div className="relative h-[30%] flex -mt-20 flex-col justify-center p-6 text-white">
                <h3 className="text-[31px] font-semibold mb-2 leading-tight text-start">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-relaxed opacity-90 text-start">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
