// components/BusinessSection.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import CtaButton from '../ui/CtaButton';
import Container from '../layout/Container';

const tabs = [
  {
    id: "station",
    label: "Remote Station Control",
    content: (
      <p className="text-gray-600 leading-relaxed text-[13px] font-regular line-height-[24px]">
        With Energic’s <span className="font-bold text-teal-700">Remote Station Control</span>, 
        you gain complete command over your charging stations—whenever and wherever you need it. 
        You can <span className="font-semibold text-teal-700">minimize downtime, boost efficiency, 
        and deliver a seamless charging experience</span> to your customers.  
        This intuitive dashboard gives you instant access to vital station data, 
        helping you make informed decisions and take swift action.  
        With Energic, your charging infrastructure stays <span className="font-semibold text-teal-700">
        reliable, responsive, and always ready to power the future of mobility</span>.
        Optimize your charging operations with <span className="font-semibold text-teal-700">Dynamic Tariff Scheduling</span>. 
        Adjust pricing based on demand, time of day, or energy costs to maximize revenue 
        and improve customer satisfaction.
        With Energic’s <span className="font-bold text-teal-700">Remote Station Control</span>, 
        you gain complete command over your charging stations—whenever and wherever you need it. 
        You can <span className="font-semibold text-teal-700">minimize downtime, boost efficiency, 
        and deliver a seamless charging experience</span> to your customers.  
        This intuitive dashboard gives you instant access to vital station data, 
        helping you make informed decisions and take swift action.  
        With Energic, your charging infrastructure stays <span className="font-semibold text-teal-700">
        reliable, responsive, and always ready to power the future of mobility</span>.
        Optimize your charging operations with .
      </p>
    ),
  },
  {
    id: "tariff",
    label: "Dynamic Tariff Scheduling",
    content: (
      <p className="text-gray-600 leading-relaxed text-[13px] font-regular line-height-[24px]">
        Optimize your charging operations with <span className="font-semibold text-teal-700">Dynamic Tariff Scheduling</span>. 
        Adjust pricing based on demand, time of day, or energy costs to maximize revenue 
        and improve customer satisfaction.
      </p>
    ),
  },
  {
    id: "analytics",
    label: "Advanced Analytics",
    content: (
      <p className="text-gray-600 leading-relaxed text-[13px] font-regular line-height-[24px]">
        Get powerful insights with <span className="font-semibold text-teal-700">Advanced Analytics</span>. 
        Track usage patterns, monitor performance, and identify opportunities 
        for growth and optimization with real-time data.
      </p>
    ),
  },
  {
    id: "device",
    label: "Remote Device Control",
    content: (
      <p className="text-gray-600 leading-relaxed text-[13px] font-regular line-height-[24px]">
        Manage your devices with ease using <span className="font-semibold text-teal-700">Remote Device Control</span>. 
        Restart, configure, and troubleshoot devices without being on-site, 
        ensuring smooth and uninterrupted operations.
      </p>
    ),
  },
];

export default function Power() {
  const [activeTab, setActiveTab] = useState("station");

  return (
    <section className="bg-[#e6f7f6] py-16 " >
      <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start w-full gap-5 ">
        
        {/* Image Column */}
        <div className="rounded-xl p-8 bg-[#DCEDEC] min-h-[522px] flex justify-center items-center">
          <Image 
            src="/screen.png" 
            alt="Dashboard Screenshot" 
            className="rounded-lg"
            width={500}
            height={400}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Text & Tabs Column */}
        <div className="lg:col-span-2">
          <h2 className="text-[#00A79D] text-[24px] font-semibold">
            Power Your Business
          </h2>
          <h3 className="text-[#1A3B39] text-[18px] font-medium">
            Manage Your Charging Network with Ease
          </h3>
          <p className="text-[#1A3B39] text-[16px] font-regular mt-3">
            Monitor, control, and optimize all your EV stations in real time. 
            Simplify operations with smart tools and dynamic insights.
          </p>

          {/* Tabs */}
          <div className="flex gap-3 mt-8 flex-wrap">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  className={`rounded-full p-0.5 transition-all duration-300 ${
                    isActive
                      ? 'bg-[linear-gradient(92.65deg,_#1A3B39_0%,_#6EC282_50%,_#00A79D_100%)] shadow-lg'
                      : ''
                  }`}
                >
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full px-4 py-4 rounded-full font-medium text-[11px] transition-all duration-300 ${
                      isActive
                        ? 'bg-[linear-gradient(180deg,_#1A3B39_0%,_#6EC282_50%,_#00A79D_100%)] text-white'
                        : 'bg-[#DCEDEC] text-[#00A79D] hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-transparent rounded-xl shadow-lg p-6 mt-6 border border-gray-100">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <CtaButton className="justify-end"> Request a Free Demo</CtaButton>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}
