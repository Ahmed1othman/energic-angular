"use client";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-end"
            >
              {/* Image Container */}
              <div className="relative w-full md:w-[298px] h-[416px] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                
                {/* Name and Role Badge */}
                <div 
                  className="absolute bottom-0 left-0 px-3 py-2 rounded-tr-[31px] w-[75%]"
                  style={{
                    background: 'linear-gradient(90deg, #00A79D 0%, #1A3B39 100%)'
                  }}
                >
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {member.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <p className="text-[#727272] text-xl">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
