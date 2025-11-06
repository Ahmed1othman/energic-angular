'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EnergicControlFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const tabs = [
    { id: 0, label: 'Go With Energic Charge App' },
    { id: 1, label: 'Map' },
    { id: 2, label: 'Schedule Charge' },
    { id: 3, label: 'Live Monitoring' },
    { id: 4, label: 'Vehicle Management' },
    { id: 5, label: 'Personal Charger' },
    { id: 6, label: 'RFID' },
    { id: 7, label: 'Plan Trip' },
    { id: 8, label: 'Wallet' },
  ];

  const tabContent = [
    {
      image: '/solution/features/command-center.png',
      features: [
        {
          title: 'Where to Charge?',
          description: 'Find the nearest charging station easily on your map and customize filters for the best option.',
        },
        {
          title: 'Scheduling',
          description: 'Set charging times to optimize energy use and cost during off peak hours.',
        },
        {
          title: 'Frictionless Authentication & Payment After',
          description: 'Initial setup, use plug & charge, scan, or tap to charge. Pay via mobile or terminal based on your preference.',
        },
        {
          title: 'Checking the charging status without staying in your car',
          description: "Get your coffee and snacks while checking your EV's real-time charging status.",
        },
      ],
    },
    {
      image: '/solution/features/energic charge x/Map.png',
      title: 'Map',
      description: 'Locate And Navigate To Nearby Charging Stations Effortlessly Using Real-Time GPS Integration. With ChargeX, You Can:',
      points: [
        'Discover available chargers near your current location or destination',
        'Filter stations based on charger type, power output, or availability',
        'Get turn-by-turn directions via your preferred navigation app'
      ]
    },
    {
      image: '/solution/features/energic charge x/Schedule Charge.png',
      title: 'Schedule Charge',
      description: 'Avoid Wait Times And Optimize Your Travel Schedule By Pre-Booking Charging Slots In Advance. With This Feature, You Can:',
      points: [
        'Choose a preferred time slot based on station availability',
        'Book a session for a specific date, time, and charger',
        'Receive reminders and updates for upcoming schedules'
      ]
    },
    {
      image: '/solution/chargex/live-monitoring.png',
      title: 'Live Monitoring',
      description: 'Monitor Your Ongoing Charging Session In Real Time—No Matter Where You Are. ChargeX Empowers You With:',
      points: [
        'Live updates on charging status, time elapsed, and energy consumed',
        'Instant notifications on session progress or completion',
        'Remote stop functionality for added control and safety'
      ]
    },
    {
      image: '/solution/chargex/vehicle-management.png',
      title: 'Vehicle Management',
      description: 'Keep Your Vehicle Details Organized And Up To Date. The Vehicle Management Module Allows You To:',
      points: [
        'Select your EV model from an extensive list',
        'Add custom vehicles if not listed',
        'Save multiple vehicles for seamless switching'
      ]
    },
    {
      image: '/solution/chargex/personal-charger.png',
      title: 'Personal Charger',
      description: 'Charge At Home With Ease. Manage Your Personal Charging Setup Directly From The App With Features Like:',
      points: [
        'Add and configure personal chargers',
        'Schedule recurring charging sessions',
        'Auto-start charging based on your schedule—just plug and forget'
      ]
    },
    {
      image: '/solution/chargex/rfid.png',
      title: 'RFID',
      description: 'Prefer Charging Without Opening The App? Add And Manage RFID Cards To Initiate Sessions Easily At Your Personal Charger:',
      points: [
        'Link multiple RFID cards to your account',
        'Assign cards to specific vehicles or users',
        'Start charging by simply tapping your RFID card'
      ]
    },
    {
      image: '/solution/chargex/plan-trip.png',
      title: 'Plan Trip',
      description: 'Say Goodbye To Range Anxiety. With Trip Planning, ChargeX Helps You Map Your Journey And Stay Charged Throughout:',
      points: [
        'Plan routes with multiple charging stops',
        'Pre-book slots at stations along your route',
        'View estimated energy consumption and travel time'
      ]
    },
    {
      image: '/solution/chargex/wallet.png',
      title: 'Wallet',
      description: 'Stay Powered Up, Not Just Your Car But Your Payments Too. The ChargeX Wallet Enables:',
      points: [
        'Secure and instant wallet recharges via UPI, card, or net banking',
        'Real-time balance tracking',
        'One-tap payments at public and personal charging stations'
      ]
    },
    {
      image: '/solution/features/Charging Session Management.png',
      title: 'Charging Session Management',
      description: 'Charging session managers can create, update, and manage charging sessions. This module enables:',
      points: [
        'Adding new charging sessions to a facility',
        'Creating charging sessions under specific facilities',
        'Managing charging session-specific attributes like name, email, and phone number.'
      ]
    },
    {
      image: '/solution/features/Charging Schedule Management.png',
      title: 'Charging Schedule Management',
      description: 'Charging schedule managers can create, update, and manage charging schedules. This module enables:',
      points: [
        'Adding new charging schedules to a facility',
        'Creating charging schedules under specific facilities',
        'Managing charging schedule-specific attributes like name, email, and phone number.'
      ]
    },
    {
      image: '/solution/features/Maintenance  Scheduling.png',
      title: 'Maintenance Scheduling',
      description: 'Maintenance schedule managers can create, update, and manage maintenance schedules. This module enables:',
      points: [
        'Adding new maintenance schedules to a facility',
        'Creating maintenance schedules under specific facilities',
        'Managing maintenance schedule-specific attributes like name, email, and phone number.'
      ]
    },
    {
      image: '/solution/features/Reports.png',
      title: 'Reports',
      description: 'Reports managers can create, update, and manage reports. This module enables:',
      points: [
        'Adding new reports to a facility',
        'Creating reports under specific facilities',
        'Managing report-specific attributes like name, email, and phone number.'
      ]
    },
    {
      image: '/solution/features/VLB.png',
      title: 'Virtual Load Balancer (VLB)',
      description: 'Virtual load balancer managers can create, update, and manage virtual load balancers. This module enables:',
      points: [
        'Adding new virtual load balancers to a facility',
        'Creating virtual load balancers under specific facilities',
        'Managing virtual load balancer-specific attributes like name, email, and phone number.'
      ]
    },
    {
      image: '/solution/features/Virtual Load Balancer (VLB).png',
      title: 'Virtual Load Balancer (VLB)',
      description: 'Virtual load balancer managers can create, update, and manage virtual load balancers. This module enables:',
      points: [
        'Adding new virtual load balancers to a facility',
        'Creating virtual load balancers under specific facilities',
        'Managing virtual load balancer-specific attributes like name, email, and phone number.'
      ]
    },
    {
      image: '/solution/features/virtual-load-balancer.png',
      title: 'Virtual Load Balancer (VLB)',
      description: 'Virtual load balancer managers can create, update, and manage virtual load balancers. This module enables:',
      points: [
        'Adding new virtual load balancers to a facility',
        'Creating virtual load balancers under specific facilities',
        'Managing virtual load balancer-specific attributes like name, email, and phone number.'
      ]
    },
  ];

  const handleTabClick = (id: number) => {
    if (id === activeTab) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(id);
      setIsFading(false);
    }, 180); // Fade duration (ms) should match CSS duration
  };

  return (
    <section className="pt-8 pb-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Title in between horizontal line */}
        <div className="relative py-6 mb-12">
          <div className="relative flex items-center justify-center">
            <div className="hidden sm:block flex-1 border-t border-[#D9D9D9]"></div>
            <div className="px-4 sm:px-10">
              <p className="text-primary font-semibold text-[26px] text-center bg-[#00A79D1A] px-6 py-2 rounded-[14px]">
                Core Features
              </p>
            </div>
            <div className="hidden sm:block flex-1 border-t border-[#D9D9D9]"></div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1px_1fr] gap-6 lg:gap-10 relative">
          {/* Mobile Tabs (visible only on small screens) */}
          <div className="lg:hidden -mt-2">
            <div className="flex items-end justify-start gap-6 overflow-x-auto no-scrollbar border-b border-[#E5E5E5] pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex-shrink-0 text-[16px] pb-1 transition-colors ${
                    activeTab === tab.id ? 'text-primary' : 'text-[#9E9E9E]'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span>{tab.label}</span>
                    <span
                      className={`${activeTab === tab.id ? 'bg-primary' : 'bg-transparent'} h-[2px] w-full mt-1 rounded`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tabs - Left Side (hidden on mobile) */}
          <div className="hidden lg:block space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left px-0 py-1 transition-colors flex items-center gap-3 cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-primary font-medium'
                    : 'text-[#9E9E9E] hover:text-primary'
                }`}
              >
                <span className="flex items-center w-14">
                  {activeTab === tab.id ? (
                    <>
                      <span className="h-[1.5px] bg-primary flex-1" />
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="8" height="8" rx="2" transform="rotate(45 8 8)" fill="#18504A" />
                      </svg>
                    </>
                  ) : (
                    <span className="h-[2px] bg-[#727272] w-8" />
                  )}
                </span>
                <span className={`text-[16px] transition-all ${activeTab === tab.id ? 'ml-2' : ''}`}>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Vertical Divider - Between Tabs and Content */}
          <div className="hidden lg:block bg-[#D9D9D9] w-px h-auto" style={{ minHeight: "100%" }}></div>

          {/* Content - Right Side */}
          <div className={`lg:pl-12 transition-opacity duration-200 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {/* Image */}
            <div className="mb-10 flex justify-center items-center" >
                <Image
                  src={tabContent[activeTab]?.image || '/solution/features/command-center.png'}
                  alt="Feature preview"
                  width={525}
                  height={328.5}
                  className="w-auto h-[506.5px] object-cover"/>
            </div>
            {activeTab === 0 ? (
              // Grid Features (تبويب EV Charging Command Center)
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tabContent[activeTab]?.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-primary hover:border-primary hover:shadow-md transition-all"
                  >
                    <h3 className="text-[16px] font-semibold text-primary mb-3">{feature.title}</h3>
                    <p className="text-[14px] text-[#7B7B7B] leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              // باقي التابات
              <div className="">
                <p className="text-[14px] text-[#727272] mb-4">{tabContent[activeTab]?.description}</p>
                <ul className="space-y-3">
                  {tabContent[activeTab]?.points?.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 min-w-[18px] h-[18px] flex items-center justify-center">
                        {/* Star icon */}
                        <Image src="/star.svg" alt="star" width={18} height={18} />
                      </span>
                      <span className="text-[14px] text-[#000] font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
