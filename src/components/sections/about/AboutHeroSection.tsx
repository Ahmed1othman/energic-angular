"use client";
import Image from "next/image";

interface AboutHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function AboutHeroSection({
  title,
  subtitle,
  description,
}: AboutHeroProps) {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[788px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/about_us/hero/bg.png"
          alt="About Us Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay with Blur */}
        <div 
          className="absolute inset-0"
          style={{
            // background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) -27.26%, rgba(255, 255, 255, 0.92) 73.89%)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start gap-6 w-full lg:w-[65%]">
            {/* Title Badge */}
            <div className="bg-[#00A79D33] rounded-md px-[10px] py-[10px] inline-block">
              <p className="text-sm font-medium text-primary uppercase tracking-wide font-sans">
                {title}
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-primary font-semibold text-[56px] leading-[100%] font-sans">
              {subtitle}
            </h1>

            {/* Description */}
            <p className="text-gray-custom-text-2 text-base leading-[22px] font-sans">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
