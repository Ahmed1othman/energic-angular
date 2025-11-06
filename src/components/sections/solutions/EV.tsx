
import Image from 'next/image';

export default function SolutionsHero() {
  return (

    <section className="pt-15 pb-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] items-start gap-12 md:gap-18">
          <div className="relative">
            <Image
              src="/solution/ev/ev_charging.png"
              alt="Hero Image"
              width={549}
              height={366}
              className="object-cover"
            />
          </div>
            <div>
              <div>
                <h2 className="text-[26px] font-semibold text-primary mb-4">
                  EV Charging Management Software That Helps You
                </h2>
                <p className="text-[16px] text-[#7B7B7B] leading-relaxed">
                  Energic Control is a next-generation EV charging management
                  software built for operators, utilities, and enterprises
                  managing modern charging networks. The platform provides a
                  real-time, OCPP-compliant system for monitoring chargers,
                  analyzing performance, managing energy flow, and optimizing
                  utilization.
                </p>
              </div>
            </div>
        </div>

        <div className="text-center md:mt-20 mt-12 py-8 md:px-12 px-6 border border-[#D0D0D0] rounded-2xl md:max-w-[60%] max-w-[100%] mx-auto">
          <p className="text-[24px] font-semibold italic bg-gradient-to-r from-[#00A79D] to-[#1A3B39] bg-clip-text text-transparent">
            "A unified platform for intelligent EV network management."
          </p>
        </div>
      </div>
    </section>
  );
}
