import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  slantWidth?: number;
  variant?: 'solid' | 'outline';
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'solid',
}) => {
  const baseStyles = 'inline-flex items-center p-[10px] gap-[10px] text-[13px] font-medium rounded-[6px] transition-all duration-500 ease-in-out';
  
  const variantStyles = {
    solid: 'bg-primary text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default CtaButton;
