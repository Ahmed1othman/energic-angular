"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import CtaButton from '../ui/CtaButton';
import Container from './Container';


const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Products', href: '#' },
  { name: 'Software', href: '#' },
  { name: 'About us', href: '#' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
      // Set positioning and full-width container for the fixed header
      <header className="fixed top-[48px] left-0 right-0 z-50">
        <Container>
          <nav 
          className="w-full h-[70px] p-3 bg-[#FFFFFF70] backdrop-blur-lg rounded-xl border border-[#2dd4bf]/50 drop-shadow-[0px_0px_12px_#00000014]"
        >
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="text-black font-bold text-2xl">
              <Image src="/logo.png" alt="Logo" width={204} height={36} />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-black/80 text-[14px] font-[500] py-2 px-2 border-b border-transparent hover:text-white hover:border-white transition-colors ${link.name === 'Home' ? 'text-white font-semibold' : ''}`}>
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact Us Button */}
            <div className="hidden md:flex">
              <CtaButton>Contact us</CtaButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden w-full bg-[#FFFFFF70] backdrop-blur-lg rounded-xl border border-[#2dd4bf]/50 p-4 mt-2">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-black/80 text-[14px] font-[500] py-2 px-2 border-b border-transparent hover:text-white hover:border-white transition-colors ${link.name === 'Home' ? 'text-white font-semibold' : ''}`}>
                  {link.name}
                </a>
              ))}
              <CtaButton>Contact us</CtaButton>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;

