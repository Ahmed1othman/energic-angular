'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../layout/Container';

const values = [
  { icon: '/core_sec_icon_1.png', title: 'Innovation', description: 'We foster a culture of creativity and forward-thinking to pioneer the future of electric mobility.' },
  { icon: '/core_sec_icon_2.png', title: 'Passion', description: 'Our passion for a sustainable future drives us to deliver our best work every day.' },
  { icon: '/core_sec_icon_3.png', title: 'Collaboration', description: 'We believe in the power of teamwork and partnership to achieve shared goals.' },
  { icon: '/core_sec_icon_4.png', title: 'Sustainability', description: 'We are committed to environmentally friendly practices in all aspects of our business.' },
  { icon: '/core_sec_icon_5.png', title: 'Customer-Centricity', description: 'Our customers are at the heart of everything we do; their satisfaction is our top priority.' },
];

const CoreValueSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#E6F7F6]">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[#00A79D] text-[24px] font-semibold text-start">Our Core Values</h2>
          <p className="text-[#1A3B39] text-[16px] font-regular mt-2 text-start max-w-4xl">
            At Energic, our values drive innovation, sustainability, and exceptional customer service. These core principles shape our mission to lead the electric mobility revolution with passion and collaboration.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly items-center gap-4">
          {/* Left Column: Image */}
          <div className="flex justify-center items-center">
            <Image src="/core_sec_image.png" alt="Energic Core Values Diagram" width={512} height={502} />
          </div>

          {/* Right Column: Accordion */}
                    <div className="w-full max-w-xl mx-auto flex flex-col justify-center gap-4">
            {values.map((value, index) => (
              <div key={index} className="rounded-2xl overflow-hidden bg-[#004D4A]">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center p-4 text-white font-medium"
                >
                  <div className=" flex items-center gap-3">
                    <Image src={value.icon} alt={value.title} width={24} height={24} />
                    <span className="text-[20px] font-medium">{value.title}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="w-full p-4 pt-0 text-white/80">
                    <p>{value.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoreValueSection;
