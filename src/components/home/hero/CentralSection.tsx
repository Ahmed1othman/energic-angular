import React from 'react';
import Image from 'next/image';
import CtaButton from '@/components/ui/CtaButton';

const CentralSection = () => {
  return (
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 mt-12 lg:mt-20">

      {/* Left Side: QR Code and Download Buttons */}
      <div className="flex flex-col items-center text-center lg:w-1/4">
        <div className="mb-4">
          <div className="rounded-lg flex items-center justify-center mb-4">
            <Image src="/qr_code.png" alt="QR Code" width={119} height={119} />
          </div>
          <p className="text-[13px] font-[500]">Scan to download</p>
        </div>
        <div className="flex gap-4">
          <div className="rounded-lg flex items-center justify-center">
            <Image src="/google_play.png" alt="Google Play" width={135} height={40} />
          </div>
          <div className="rounded-lg flex items-center justify-center">
            <Image src="/app_store.png" alt="App Store" width={121} height={40} />
          </div>
        </div>
      </div>

      {/* Center: Device Mockups */}
      <div className="relative lg:w-1/2">
        <Image src="/lap_mobile.png" alt="Device Mockup" width={628} height={366.5} className="w-full h-auto" />
      </div>

      {/* Right Side: Get a Demo */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/4">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex -space-x-4">
            <div className="w-10 h-10 rounded-full bg-red-400 border-2 border-white">
              <Image src="/user_icon_1.png" alt="Avatar" width={46} height={46} />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white">
              <Image src="/user_icon_2.png" alt="Avatar" width={46} height={46} />
            </div>
            <div className="w-10 h-10 rounded-full bg-green-400 border-2 border-white">
              <Image src="/user_icon_3.png" alt="Avatar" width={46} height={46} />
            </div>
          </div>
          <p className="text-sm text-white/80 ">Join 2000+ others who get a quotation</p>
        </div>
        <CtaButton className="text-start" leftClassName="w-[200px]">Get a Demo</CtaButton>
      </div>

    </div>
  );
};

export default CentralSection;
