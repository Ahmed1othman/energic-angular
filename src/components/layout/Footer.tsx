import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-[#003330] text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-start">
            <Image src="/logo.png" alt="Energic Logo" width={120} height={40} className="mb-4" />
            <p className="text-white/70 text-sm">
              Leading the charge in electric mobility with innovative and sustainable solutions.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#00A79D] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#00A79D] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#00A79D] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#00A79D] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 mt-1 text-[#00A79D]" />
                <span>123 Electric Ave, Silicon Valley, CA 94000</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="w-5 h-5 mr-3 mt-1 text-[#00A79D]" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="w-5 h-5 mr-3 mt-1 text-[#00A79D]" />
                <span>contact@energic.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-[#00A79D] transition-colors"><FaFacebook size={24} /></Link>
              <Link href="#" className="text-white/70 hover:text-[#00A79D] transition-colors"><FaTwitter size={24} /></Link>
              <Link href="#" className="text-white/70 hover:text-[#00A79D] transition-colors"><FaLinkedin size={24} /></Link>
              <Link href="#" className="text-white/70 hover:text-[#00A79D] transition-colors"><FaInstagram size={24} /></Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Energic. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
