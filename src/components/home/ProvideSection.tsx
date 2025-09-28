import React from 'react';
import Image from 'next/image';
import Container from '../layout/Container';

const ProvideSection = () => {
  return (
    <section className="py-16 bg-[#E6F7F6]">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[#00A79D] text-[24px] font-semibold text-start">What does ENERGIC Provide?</h2>
          <p className="text-[#1A3B39] text-[16px] font-regular mt-2 text-start max-w-4xl">
            ENERGIC offers a wide range of charging products and provides integrated solutions for planning, designing, and installing charging stations according to customer needs. Leveraging its independently developed charging cloud platform and connected charging stations, Energic delivers network operation services to various users, including vehicle charging services, SaaS platform services, and other value-added services.
          </p>
        </div>

        {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Dashboard Card 1 */}
          <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/screen.png" alt="Dashboard Chart" layout="responsive" width={1200} height={500} />
          </div>

          {/* Dashboard Card 2 */}
          <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/why_sec_dashboard_control.png" alt="Dashboard Control" layout="responsive" width={1200} height={500} />
          </div>

          {/* Mobile App Column */}
          <div className="flex justify-center items-center">
            <Image src="/mobile.png" alt="Mobile App" width={250} height={500} className="object-contain" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProvideSection;
