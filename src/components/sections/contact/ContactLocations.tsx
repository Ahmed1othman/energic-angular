'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone } from 'lucide-react';

interface Location {
  key: string;
  name: string;
  address: string;
  phone: string;
}

export default function ContactLocations() {
  const t = useTranslations('contactUs.locations');

  const locations: Location[] = [
    {
      key: 'saudiArabia',
      name: 'Saudi Arabia',
      address: '123 Main St, Riyadh, Saudi Arabia',
      phone: '+966 123 456 789',
    },
    {
      key: 'shanghai',
      name: 'Shanghai',
      address: '123 Main St, Shanghai, China',
      phone: '+86 123 456 789',
    },
    {
      key: 'india',
      name: 'India',
      address: '123 Main St, India',
      phone: '+91 123 456 789',
    },
    {
      key: 'egypt',
      name: 'Egypt',
      address: '123 Main St, Egypt',
      phone: '+20 123 456 789',
    },
  
  ];

  return (
    <section className="pt-5 pb-30">
      <div className="w-[1280px] mx-auto px-4">
        <div className="flex items-center text-gray-400 mb-3">
        <h2 className="text-[24px] font-semibold text-primary me-3">
          {t('title')}
        </h2>
        <div className="flex-1 h-[1px] bg-[#E9E9E9] translate-y-[0.3em]"></div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-35">
          {locations.map((location) => (
            <div
              key={location.key}
              className="bg-white"
            >
              <h3 className="text-lg font-medium text-[#212529]">
                {location.name}
              </h3>

              <div className="space-y-3">
                <p className='text-[16px] text-[#7B7B7B]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                {/* <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {location.address}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="text-gray-900 font-medium hover:text-teal-600 transition-colors"
                  >
                    {location.phone}
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
