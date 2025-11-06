"use client";
import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
interface ImpactSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function ImpactSection({
  title,
  description,
  buttonText,
}: ImpactSectionProps) {
  const images = [
    "/home/about_us/impact_section/1.png",
    "/home/about_us/impact_section/2.png",
    "/home/about_us/impact_section/3.png",
    "/home/about_us/impact_section/4.png",
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Section - Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-primary font-semibold text-3xl md:text-4xl lg:text-[34px] leading-tight">
              {title}
            </h2>
            
            <p className="text-[#7B7B7B] text-base md:text-[17px] leading-relaxed">
              {description}
            </p>
            <CtaButton className="self-start w-auto">
              {buttonText}
            </CtaButton>
            
          </div>

          {/* Right Section - Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Top Row - Large image and small image */}
            <div className="relative h-[256px] rounded-md overflow-hidden">
              <Image
                src={images[0]}
                alt="Impact 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[166px] rounded-md overflow-hidden">
              <Image
                src={images[1]}
                alt="Impact 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Row - Two small images */}
            <div className="relative h-[166px] rounded-md overflow-hidden">
              <Image
                src={images[2]}
                alt="Impact 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[256px] rounded-md overflow-hidden -mt-[90px]">
              <Image
                src={images[3]}
                alt="Impact 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
