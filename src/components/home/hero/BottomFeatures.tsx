import React from 'react';
import Image from 'next/image';
import Container from '../../layout/Container';

const features = [
  {
    icon: '/sec_2_ben.png',
    title: 'CPMS',
    description: 'Charge Point Management System.',
  },
  {
    icon: '/sec_2_setting.png',
    title: 'EMSP',
    description: 'E-Mobility Service Provider',
  },
];

const BottomFeatures = () => {
  return (
    <div className="lg:w-[55%] mx-auto my-8 lg:my-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2">
        <div className="flex flex-col lg:flex-row items-evenly justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-xl bg-white bg-opacity-80 flex-1"
            >
              <div className="flex-shrink-0">
                <div className="bg-[#00A79D] rounded-lg">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={69}
                    height={69}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-[#00A79D]">{feature.title}</h3>
                <p className="font-regular text-[16px] text-[#00A79D]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default BottomFeatures;
