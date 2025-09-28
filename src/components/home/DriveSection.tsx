import React from 'react';
import Image from 'next/image';
import Container from '../layout/Container';

const DriveSection = () => {
  return (
    <section className="py-16 bg-[#e6f7f6]">
      <Container>
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-[#00A79D] text-[24px] font-semibold">Drive with Energic</h2>
          <h3 className="text-[#1A3B39] text-[18px] font-medium mt-1">Find Your charge point easy</h3>
          <p className="text-[#1A3B39] text-[16px] font-regular mt-2 max-w-[1240px]">
            Locate nearby EV stations in seconds with real-time availability. Start charging instantly with just a tap on your screen.
          </p>
        </div>

        {/* Main Content Flex Container */}
        <div className="">
          <Image src="/drive_sec_image.png" alt="Drive Section" width={1240} height={600}/>
        </div>
      </Container>
      <div className="w-full flex justify-center mx-auto">
        <Image className="w-full h-auto" src="/drive_sec_image_2.png" alt="Drive Section" width={1440} height={600}/>
      </div>
      
    </section>
    
  );
};

export default DriveSection;
