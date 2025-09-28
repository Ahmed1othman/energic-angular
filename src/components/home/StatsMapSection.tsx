import React from 'react';
import Image from 'next/image';
import Container from '../layout/Container';

const StatsMapSection = () => {
  return (
<section className="relative bg-black text-white py-20 xl:flex xl:items-center">
      <div className="absolute inset-0">
        <Image src="/map_sec_background.png" alt="Background waves" className="w-full h-full object-cover opacity-80" width={1440} height={824}/>
      </div>

      <Container>
        <div className="relative">

        
        <div className="relative grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="space-y-4 xl:col-span-1">
            <h2 className="font-semibold text-[24px] text-[#CDCDCD]">Active Users<br/>
            <span className="font-semibold text-[44px] text-[#fff]">23,56,000</span></h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-teal-600 rounded-lg">
                  <Image src="/sec_map_icon_1.png" alt="Station" width={58} height={58}/>
                </div>
                <div>
                  <p className="font-medium text-[18px] text-[#CDCDCD]">Total Stations</p>
                  <p className="font-semibold text-[24px] text-[#fff]">43,000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-teal-600 rounded-lg">
                  <Image src="/sec_map_icon_2.png" alt="Station" width={58} height={58}/>
                </div>
                <div>
                  <p className="font-medium text-[18px] text-[#CDCDCD]">Total Device</p>
                  <p className="font-semibold text-[24px] text-[#fff]">10,40,000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-teal-600 rounded-lg">
                  <Image src="/sec_map_icon_3.png" alt="Station" width={58} height={58}/>
                </div>
                <div>
                  <p className="font-medium text-[18px] text-[#CDCDCD]">Total Connectors</p>
                  <p className="font-semibold text-[24px] text-[#fff]">56,12,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative xl:col-span-2">
                        <Image src="/map_sec_map.png" alt="World map" width={856} height={547} className="w-full h-auto"/>

                        <div className="hidden xl:block absolute top-[25%] left-[20%] bg-white text-black rounded-lg shadow-lg p-3">
              <div className="flex items-center gap-2">
                <Image src="/flag_usa.png" alt="US flag" className="w-5 h-5" width={1000} height={1000}/>
                <span className="font-semibold">Miami Florida</span>
              </div>
              <p className="text-sm">14,333</p>
            </div>

                        <div className="hidden xl:block absolute top-[45%] left-[35%] bg-white text-black rounded-lg shadow-lg p-3">
              <div className="flex items-center gap-2">
                <Image src="/flag_egypt.png" alt="Egypt flag" className="w-5 h-5" width={1000} height={1000}/>
                <span className="font-semibold">Cairo</span>
              </div>
              <p className="text-sm">14,333</p>
            </div>

                        <div className="hidden xl:block absolute top-[40%] left-[60%] bg-white text-black rounded-lg shadow-lg p-3">
              <div className="flex items-center gap-2">
                <Image src="/flag_saudi.png" alt="Saudi flag" className="w-5 h-5" width={1000} height={1000}/>
                <span className="font-semibold">Riyadh</span>
              </div>
              <p className="text-sm">14,333</p>
            </div>
          </div>
        </div>
        <div className="mt-12 xl:mt-0 xl:absolute xl:bottom-10 xl:left-0 xl:right-0">
          <p className="text-2xl font-medium text-white text-center xl:text-left">
            We’ve provided over 1 Million<br />Devices across the US & Saudi.
          </p>
        </div>
        </div>
      </Container>
    </section>

  );
};

export default StatsMapSection;
