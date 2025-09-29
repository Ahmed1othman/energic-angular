import React from 'react';

type SectionHeaderOneProps = {
  title: string;
  description?: string;
  titleColor?: string;
  textColor?: string;
  alignment?: 'text-start' | 'text-center' | 'text-end';
  className?: string;
};

const SectionHeaderOne: React.FC<SectionHeaderOneProps> = ({
  title,
  description,
  titleColor = 'text-[#00A79D]',
  textColor = 'text-[#1A3B39]',
  alignment = 'text-start',
  className = '',
}) => {
  return (
    <div className={`${alignment} ${className}`}>
      <h2 className={`${titleColor} text-2xl md:text-3xl font-semibold mb-4`}>
        {title}
      </h2>
      {description && (
        <p className={`${textColor} text-base md:text-lg leading-relaxed max-w-4xl`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeaderOne;
