"use client";
import Image from "next/image";

interface AboutCompanySectionProps {
  title: string;
  description: string;
  visionTitle: string;
  visionDescription: string;
  missionTitle: string;
  missionDescription: string;
}

export default function AboutCompanySection({
  title,
  description,
  visionTitle,
  visionDescription,
  missionTitle,
  missionDescription,
}: AboutCompanySectionProps) {
  return (
    <section className="relative w-full py-16 md:pt-2 pb-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Part 1: Title, Description & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center mb-16 md:mb-24">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-8">
            {/* Title */}
            <h2 className="text-primary font-semibold text-[44px]">
              {title}
            </h2>

            {/* Description */}
            <p className="text-gray-custom-text-2 text-base">
              {description}
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/home/about_us/about_company/image.png"
              alt="About Company"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Part 2: Vision & Mission Cards - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Vision Card */}
          <div className="relative">
            {/* Vision Icon - Positioned at top-right corner of border */}
            <div className="absolute -top-[60px] right-8 w-[120px] h-[120px] z-10">
              <Image
                src="/home/about_us/about_company/eye.svg"
                alt="Vision"
                fill
                className="object-contain"
              />
            </div>
            <div className="border-2 border-primary rounded-xl px-10 py-20 flex flex-col gap-4 h-full">
              <h3 className="text-primary font-semibold text-2xl">
                {visionTitle}
              </h3>
              <p className="text-gray-custom-text-2 text-lg">
                {visionDescription}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative mt-15 md:mt-0">
            {/* Mission Icon - Positioned at top-right corner of border */}
            <div className="absolute -top-[60px] right-8 w-[120px] h-[120px] z-10">
              <Image
                src="/home/about_us/about_company/rocket.svg"
                alt="Mission"
                fill
                className="object-contain"
              />
            </div>
            <div className="border-2 border-primary rounded-xl px-10 py-20 flex flex-col gap-8 h-full mx-auto">
              <h3 className="text-primary font-semibold text-2xl">
                {missionTitle}
              </h3>
              <p className="text-gray-custom-text-2 text-lg">
                {missionDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
