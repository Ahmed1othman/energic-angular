import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  slantWidth?: number;
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  children, 
  className = '', 
  leftClassName = '', 
  rightClassName = '',
  slantWidth = 24 // Default slant width in pixels
}) => {
  return (
    <div 
      className={`flex items-center cursor-pointer group ${className}`}
      style={{ '--slant-width': `${slantWidth}px` } as React.CSSProperties}
    >
      <div 
        className={`flex items-center justify-center pl-6 pr-8 h-[46px] text-white bg-[linear-gradient(90deg,#00A79D_0%,#1A3B39_89.69%)] shadow-md rounded-lg ${leftClassName}`}
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, calc(100% - var(--slant-width)) 100%, 0% 100%)' }}
      >
        <span>{children}</span>
      </div>
      <div 
        className={`flex items-center justify-center px-5 h-[46px] text-white bg-[linear-gradient(-90deg,#00A79D_0%,#1A3B39_100%)] shadow-md rounded-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2 ${rightClassName}`}
        style={{
          clipPath: 'polygon(var(--slant-width) 0%, 100% 0%, 100% 100%, 0% 100%)',
          marginLeft: `calc(-1 * var(--slant-width) + 2px)` // Adjust overlap relative to slant
        }}
      >
        <ArrowRightIcon className="w-[24px] h-[24px] text-white ps-2" />
      </div>
    </div>
  );
};

export default CtaButton;
