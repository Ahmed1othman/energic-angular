import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const locationLinks = [
  { name: 'Saudi Arabia', href: '#' },
  { name: 'Shenzhen', href: '#' },
  { name: 'India', href: '#' },
  { name: 'Egypt', href: '#' },
];

const links = [
  { name: 'About Energic', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Resources', href: '#' },
];

const languages = [
  { name: 'English', href: '#' },
  { name: 'Arabic', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Resources', href: '#' },
];

const Footer = () => {
  return (
    <footer 
      className="relative w-full text-white overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #00A79D 0%, #1A3B39 70%,#0B1B1A 90%, #000000 100%)',
        minHeight: '453px',
      }}
    >
      {/* Grid background image */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 z-0"
        style={{
          backgroundImage: `url('/spider_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-4 relative z-10">
        {/* Top Section - Two Equal Halves */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/20">
          {/* Left Half: Logo, Description, Social Icons */}
          <div className="flex flex-col">
            <div className="mb-4 sm:mb-6">
              <Image src="/logos/energic_dark.svg" alt="Energic Logo" width={204} height={36} className="w-[150px] sm:w-[180px] lg:w-[204px] h-auto"/>
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 w-full lg:w-[80%]">
              Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 sm:gap-4">
              <Link href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </Link>
            </div>
          </div>

          {/* Right Half: Three Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
            {/* Location Column */}
            <div>
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl">Location</h3>
              <ul className="space-y-2 sm:space-y-[10px]">
                {locationLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm sm:text-base font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl">Links</h3>
              <ul className="space-y-2 sm:space-y-[10px]">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm sm:text-base font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Column */}
            <div>
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl">Languages</h3>
              <ul className="space-y-2 sm:space-y-[10px]">
                {languages.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm sm:text-base font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section - Left Side Only */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">Business Enquiry</p>
              <p className="text-white/70 text-xs sm:text-sm font-normal">sample@energic.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">Customer Support</p>
              <p className="text-white/70 text-xs sm:text-sm font-normal">sample@energic.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative py-6">
          {/* Horizontal Line with Copyright in Center - Separated Lines */}
          <div className="relative flex items-center justify-center mb-4 sm:mb-6">
            <div className="hidden sm:block flex-1 border-t border-white"></div>
            <div className="px-4 sm:px-6">
              <p className="text-white font-semibold text-xs sm:text-sm text-center">&copy; 2025 Energic. All rights reserved.</p>
            </div>
            <div className="hidden sm:block flex-1 border-t border-white"></div>
          </div>
          
          {/* Links Below */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-white">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Condition</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
