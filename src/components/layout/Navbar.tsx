"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import CtaButton from '../ui/CtaButton';
import Container from './Container';


const navLinks = [
  { name: 'Home', href: '#' },
  {
    name: 'Solutions',
    href: '/solutions',
    submenu: [
      { name: 'Drive with Energic', href: '#' },
      { name: 'Power Your Business', href: '#' },
    ],
  },
  {
    name: 'Products',
    href: '#',
    submenu: [
      { name: 'Energic Control', href: '#' },
      { name: 'Energic ChargeX', href: '#' },
    ],
  },
  { name: 'Software', href: '#' },
  { name: 'About us', href: '#' },
];

import { useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
            <div ref={navRef} className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <button
                    onClick={() =>
                      link.submenu &&
                      setOpenDropdown(openDropdown === link.name ? null : link.name)
                    }
                    className={`flex items-center  gap-1 text-black/80 text-[14px] font-[500] py-2 px-2 border-b-2 border-transparent hover:text-white hover:border-white transition-colors ${openDropdown === link.name ? 'text-white border-white' : ''}`}
                  >
                    {link.name}
                    {link.submenu && (
                      <svg className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    )}
                  </button>
                  {/* Dropdown Panel - Now relative to the parent button */}
                  {link.submenu && openDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-60  bg-[#FFFFFF70] rounded-xl border-[#2dd4bf]/50 drop-shadow-[0px_0px_12px_#00000014] p-2 mt-5">
                      <div className="grid grid-cols-1 gap-1">
                        {link.submenu.map(item => (
                          <a key={item.name} href={item.href} className="text-start block px-4 py-2 border-l-3 border-l-transparent hover:border-l-[#2dd4bf]/70 text-gray-800 hover:bg-white/50 rounded-md font-medium">
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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

