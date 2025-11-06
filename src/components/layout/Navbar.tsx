"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import CtaButton from '../ui/CtaButton';


import { Globe, ChevronDown } from 'lucide-react';

const navLinks = [
  { key: 'solutions', href: '/solutions/energic-control' },
  { key: 'resources', href: '#' },
  { key: 'about', href: '/about-us' },
  { key: 'contact', href: '/contact-us' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = useTranslations('navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'en', name: t('language.english') },
    { code: 'ar', name: t('language.arabic') },
  ];
  return (
      // Set positioning and full-width container for the fixed header
      <header className="fixed top-[24px] left-0 right-0 rounded-[12px] max-w-[1280px] z-50 px-4 lg:px-8 mx-auto">
        <div className="container mx-auto">
          <nav 
          className="bg-white/20 backdrop-blur-sm h-[60px] rounded-[12px] p-[12px] shadow-[0px_0px_12px_0px_#00000014] flex items-center justify-between"
        >
          {/* Left side: Logo + Navigation Links */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex-shrink-0">
              <Image src="/logos/energic_logo_nav.svg" alt="Logo" width={150} height={26} />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a key={link.key} href={link.href} className="text-gray-600 hover:text-primary transition-colors font-medium">
                    {t(link.key)}
                  </a>
                ) : (
                  <Link key={link.key} href={`/${locale}${link.href}`} className="text-gray-600 hover:text-primary transition-colors font-medium">
                    {t(link.key)}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="relative items-center">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Globe size={20} />
                <span className="ms-2 font-medium">{t(`language.${locale}`)}</span>
                <ChevronDown size={16} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Language Dropdown Menu */}
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setIsLangMenuOpen(false);
                        const normalized = pathname.replace(/^\/([a-z]{2})(\/|$)/, '/');
                        router.push(`/${lang.code}${normalized}`);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        locale === lang.code ? 'text-primary font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Enquire Now Button */}
            <CtaButton>{t('enquire')}</CtaButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>


        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-[0px_0px_12px_0px_#00000014] p-4 mt-2">
            <div className="flex flex-col items-start space-y-4">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a key={link.key} href={link.href} className="text-gray-600 hover:text-primary transition-colors font-medium">
                    {t(link.key)}
                  </a>
                ) : (
                  <Link key={link.key} href={`/${locale}${link.href}`} className="text-gray-600 hover:text-primary transition-colors font-medium">
                    {t(link.key)}
                  </Link>
                )
              ))}
              <div className="border-t w-full my-2"></div>
              <div className="relative w-full">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center text-gray-600 hover:text-primary w-full text-left"
                >
                  <Globe size={20} />
                  <span className="ml-2 font-medium">{t(`language.${locale}`)}</span>
                  <ChevronDown size={16} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mobile Language Dropdown Menu */}
                {isLangMenuOpen && (
                  <div className="mt-2 w-full bg-gray-50 rounded-lg py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setIsLangMenuOpen(false);
                          const normalized = pathname.replace(/^\/([a-z]{2})(\/|$)/, '/');
                          router.push(`/${lang.code}${normalized}`);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                          locale === lang.code ? 'text-primary font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <CtaButton>{t('enquire')}</CtaButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

