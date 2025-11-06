"use client";
import Image from "next/image";
import CtaButton from '@/components/ui/CtaButton';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
  secondaryImage?: string;
  communityText?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  buttonText,
  communityText,
}: HeroProps) {
  return (
    <section className="relative w-full bg-white pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-35 rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[100px] z-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-8 md:mt-15">
          {/* Grid Layout - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-6 items-start">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
              {/* Subtitle */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base md:text-lg font-medium color-black uppercase tracking-widest">
                  {subtitle}
                </p>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-primary leading-tight">
                {title}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-custom-text leading-relaxed">
                {description}
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <CtaButton className="">
                 {buttonText}
                </CtaButton>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-4">
                <div className="flex -space-x-4">
                  {/* Avatar Placeholders */}
                  <div className="w-8 h-8 rounded-full">
                    <Image src="/home/hero_section/users/user_icon_1.png" alt="Logo" width={36} height={36} />
                  </div>
                  <div className="w-8 h-8 rounded-full">
                    <Image src="/home/hero_section/users/user_icon_2.png" alt="Logo" width={36} height={36} />
                  </div>
                  <div className="w-8 h-8 rounded-full">
                    <Image src="/home/hero_section/users/user_icon_3.png" alt="Logo" width={36} height={36} />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[black] italic">{communityText}</p>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative w-full h-auto">
              <Image
                src="/home/hero_section/hero.png"
                alt="EV Charging Platform"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
    </section>
  );
}

