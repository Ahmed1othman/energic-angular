"use client";
import Image from "next/image";

interface ValueItem {
  title: string;
  description: string;
}

interface OurValuesSectionProps {
  title: string;
  description: string;
  images : string[];
}

export default function OurValuesSection({
  title,
  description,
  images,
}: OurValuesSectionProps) {

  return (
    <section className="relative w-full py-16 md:py-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/about_us/our_value/bg.png"
          alt="Our Values Background"
          fill
          className="w-[1440px] mx-auto object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-8">
        
        {/* Mobile Layout */}
        <div className="flex flex-col gap-8 lg:hidden">
          {/* Title */}
          <h2 className="text-primary font-semibold text-center md-text-start text-[40px] md:text-[48px] leading-tight">
            {title}
          </h2>

          {/* Diamond */}
          <div className="flex items-center justify-center">
            <div className="relative w-[250px] h-[200px]">
              <Image
                src={images[1]}
                alt="Diamond"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Description Text */}
          <div className="text-center">
            <p className="text-primary text-lg md:text-xl">
              {description}
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
              <Image
                src={images[0]}
                alt="Value 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
              <Image
                src={images[2]}
                alt="Value 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Section - Title and Image */}
          <div className="flex flex-col gap-25">
            {/* Title */}
            <h2 className="text-primary font-semibold text-[54px] w-[20%]">
              {title}
            </h2>
            
            {/* Left Image */}
            <div className="relative w-[362px] h-[239px] rounded-xl overflow-hidden">
              <Image
                src={images[0]}
                alt="Value 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center Section - Diamond */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-[365px] h-[235px] animate-diamond-pulse z-10">
              <Image
                src={images[1]}
                alt="Diamond"
                fill
                className="object-contain"
              />
            </div>
            {/* Shadow underneath */}
            <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 animate-shadow-pulse"></div>
          </div>

          <style jsx>{`
            @keyframes diamond-pulse {
              0%, 100% {
                transform: scale(.90);
              }
              50% {
                transform: scale(1.08);
              }
            }
            @keyframes shadow-pulse {
              0%, 100% {
                width: 240px;
                height: 35px;
                opacity: 0.15;
                background: radial-gradient(ellipse, rgba(0, 167, 157, 0.3) 0%, transparent 70%);
                transform: translateY(10px);
              }
              50% {
                width: 200px;
                height: 30px;
                opacity: 0.4;
                background: radial-gradient(ellipse, rgba(0, 167, 157, 0.6) 0%, transparent 70%);
                transform: translateY(0px);
              }
            }
            .animate-diamond-pulse {
              animation: diamond-pulse 3s ease-in-out infinite;
            }
            .animate-shadow-pulse {
              animation: shadow-pulse 3s ease-in-out infinite;
              border-radius: 50%;
              filter: blur(10px);
            }
          `}</style>

          {/* Right Section - Image and Text */}
          <div className="flex flex-col gap-25">
            {/* Right Image */}
            <div className="relative w-[362px] h-[239px] rounded-xl overflow-hidden">
              <Image
                src={images[2]}
                alt="Value 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Text*/}
            <div className="relative">
              {/* Description Text */}
              <div className="pt-8">
                <p className="text-primary text-xl">
                  {description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
