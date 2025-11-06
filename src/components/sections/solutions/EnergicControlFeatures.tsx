'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EnergicControlFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const tabs = [
    { id: 0, label: 'EV Charging Command Center' },
    { id: 1, label: 'Dashboard' },
    { id: 2, label: 'Facility Management' },
    { id: 3, label: 'Station Management' },
    { id: 4, label: 'Device Management' },
    { id: 5, label: 'Dynamic Pricing' },
    { id: 6, label: 'User Management' },
    { id: 7, label: 'Guest Charging' },
    { id: 8, label: 'Transaction Management' },
    { id: 9, label: 'Charging Session Management' },
    { id: 10, label: 'Charging Schedule Management' },
    { id: 11, label: 'Maintenance Scheduling' },
    { id: 12, label: 'Reports' },
    { id: 13, label: 'Virtual Load Balancer (VLB)' },
  ];

  const tabContent = [
    {
      image: '/solution/features/command-center.png',
      features: [
        {
          title: 'Real-time Monitor Dashboard',
          description: 'Equipment status, power consumed and income trend, etc. One dashboard, covers it all.',
        },
        {
          title: 'Multi-station Management',
          description: 'Manage all your charging stations at one place.',
        },
        {
          title: 'Remote Maintenance',
          description: 'Error statistics, fault report and handling, remote diagnostics & update, etc. Maintenance has never been easier!',
        },
        {
          title: 'Flexible Data Visualization',
          description: 'Extract income data, power consumed, fault history, from any station, any equipment, in any timeslot and generate intuitive chart for your report.',
        },
        {
          title: 'Various User Module',
          description: 'CPO (charging point operator), facility owner, Fleet, and so on.',
        },
      ],
    },
    {
      image: '/solution/features/Dashboard.png',
      title: 'Dashboard',
      description: 'The centralized interface offering a real-time overview of all operations. It provides quick access to essential metrics such as:',
      points: [
        'Total energy dispensed',
        'Station availability',
        'Ongoing charging sessions',
        'Revenue summaries',
        'Alerts or maintenance reminders'
      ]
    },
    {
      image: '/solution/features/Facility Management.png',
      title: 'Facility Management',
      description: 'Facility owners can create, update, and manage charging stations. This module enables:',
      points: [
        'Adding new stations to a facility',
        'Creating charging stations under specific facilities',
        'Managing facility-specific attributes like location, capacity, and energy limits.'
      ]
    },
    {
      image: '/solution/features/Station Management.png',
      title: 'Station Management',
      description: 'Station managers can create, update, and manage charging stations. This module enables:',
      points: [
        'Adding new stations to a facility',
        'Creating charging stations under specific facilities',
        'Managing facility-specific attributes like location, capacity, and energy limits.'
      ]
    },
    {
      image: '/solution/features/Device Management.png',
      title: 'Device Management',
      description: 'Device managers can create, update, and manage charging devices. This module enables:',
      points: [
        'Adding new devices to a station',
        'Creating charging devices under specific stations',
        'Managing device-specific attributes like location, capacity, and energy limits.'
      ]
    },
    {
      image: '/solution/features/Dynamic Pricing.png',
      title: 'Dynamic Pricing',
      description: 'Dynamic pricing allows you to adjust pricing based on demand, time of day, or energy costs. This module enables:',
      points: [
        'Adjusting pricing based on demand',
        'Adjusting pricing based on time of day',
        'Adjusting pricing based on energy costs'
      ]
    },
    {
      image: '/solution/features/User Management.png',
      title: 'User Management',
      description: 'User managers can create, update, and manage users. This module enables:',
      points: [
        'Adding new users to a facility',
        'Creating users under specific facilities',
        'Managing user-specific attributes like name, email, and phone number.'
      ]
    },
    {
      image: '/solution/features/Guest Charging.png',
      title: 'Guest Charging',
      description: 'Guest charging allows you to charge guests without creating a user account. This module enables:',
      points: [
        'Charging guests without creating a user account',
        'Managing guest-specific attributes like name, email, and phone number.',
        'Managing guest-specific attributes like name, email, and phone number.'
      ]
    },
    {
      image: '/solution/features/Transaction Management.png',
      title: 'Transaction Management',
      description: 'Transaction managers can create, update, and manage transactions. This module enables:',
      points: [
        'Adding new transactions to a facility',
        'Creating transactions under specific facilities',
        'Managing transaction-specific attributes like name, email, and phone number.'
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
          {/* Tabs - Left Side */}
          <div className="space-y-2">
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
                  className="w-[525px] h-[328.5px] object-cover"/>
            </div>
            {activeTab === 0 ? (
              // Grid Features (تبويب EV Charging Command Center)
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tabContent[activeTab]?.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-[#E5E5E5] hover:border-primary hover:shadow-md transition-all"
                  >
                    <h3 className="text-[18px] font-semibold text-primary mb-3">{feature.title}</h3>
                    <p className="text-[14px] text-[##727272] leading-relaxed">{feature.description}</p>
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
