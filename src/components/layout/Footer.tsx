import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

const solutionsLinks = [
  { name: 'Charging Point Operator (CPO)', href: '#' },
  { name: 'Residential Property', href: '#' },
  { name: 'Workplace & Government', href: '#' },
  { name: 'Petrol Station', href: '#' },
  { name: 'Fleet Charging', href: '#' },
  { name: 'Commercial Parking', href: '#' },
];

const aboutLinks = [
  { name: 'About Energic', href: '#' },
  { name: 'Contact', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B1B1A] text-white pt-16 pb-8 relative">
      {/* Grid background image */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/4 z-0"
        style={{
          backgroundImage: `url('/spider_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Container className="relative z-10 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 pb-25 gap-30">
          {/* Column 1: Logo, Description, App Buttons (50%) */}
          <div className="flex flex-col text-[#7E7E7E]">
            <div className="ms-4 flex flex-col mb-6 text-center mx-auto">
              <Image src="/black_logo.png" alt="Energic Logo" width={266.42} height={24.25} className="mb-2"/>
              <p className="text-medium text-[#7E7E7E] text-[12px]">EV Charger</p>
            </div>
            <p className="text-[#7E7E7E]  text-regular text-[16px] leading-relaxed mb-6 max-full">
              Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#">
                <Image src="/google_play.png" alt="Get it on Google Play" width={135} height={40} />
              </Link>
              <Link href="#">
                <Image src="/app_store.png" alt="Download on the App Store" width={120} height={40} />
              </Link>
            </div>

            {/* Bottom Bar - Now under Column 1 */}
            <div className="mt-2 pt-3 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm w-full">
              <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} Energic. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Delete Account</Link>
              </div>
            </div>
          </div>

          {/* Column 2 & 3 Wrapper (50%) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-15">
            {/* Solutions Links (25%) */}
            <div>
              <h3 className="font-semibold text-[#00A79D] mb-4 text-lg">Solutions</h3>
              <ul className="space-y-3">
                {solutionsLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links (25%) */}
            <div>
              <h3 className="font-semibold text-[#00A79D] mb-4 text-lg">About</h3>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
