"use client";
import Image from "next/image";

interface Location {
  name: string;
  value: string;
  flag: string;
}

interface StatItem {
  label: string;
  value: string;
}

interface GlobalStatsSectionProps {
  activeUsers: StatItem;
  totalStations: StatItem;
  totalDevices: StatItem;
  totalConnectors: StatItem;
  message: string;
  locations: Location[];
}

export default function GlobalStatsSection({
  activeUsers,
  totalStations,
  totalDevices,
  totalConnectors,
  message,
  locations,
}: GlobalStatsSectionProps) {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#E6F7F6]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Section - Stats */}
          <div className="flex flex-col gap-8">
            {/* Active Users - Large Box */}
            <div className="">
              <p className="text-[#898989] font-semibold text-[24px] mb-[2px] font-agdasima leading-relaxed">{activeUsers.label}</p>
              <h2 className="text-black font-bold text-[44px] font-agdasima leading-[44px]">
                {activeUsers.value}
              </h2>
            </div>

            {/* Other Stats - Grid */}
            <div className="grid grid-cols-1 gap-4">
              {/* Total Stations */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/home/about_us/global_stats_section/icons/gas_station.svg"
                    alt="Stations"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-lg font-medium">{totalStations.label}</p>
                  <p className="text-gray-900 font-bold text-xl">{totalStations.value}</p>
                </div>
              </div>

              {/* Total Devices */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/home/about_us/global_stats_section/icons/device.svg"
                    alt="Devices"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{totalDevices.label}</p>
                  <p className="text-gray-900 font-bold text-xl">{totalDevices.value}</p>
                </div>
              </div>

              {/* Total Connectors */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/home/about_us/global_stats_section/icons/connector.svg"
                    alt="Connectors"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{totalConnectors.label}</p>
                  <p className="text-gray-900 font-bold text-xl">{totalConnectors.value}</p>
                </div>
              </div>
            </div>

            {/* Message Box */}
            <div className="mt-10">
              <p 
                className="font-medium text-[34px]"
                style={{
                  background: 'linear-gradient(90deg, #00A79D 0%, #1A3B39 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {message}
              </p>
            </div>
          </div>

          {/* Right Section - Globe with Locations */}
          <div className="relative flex items-center justify-center">
            {/* Globe Image */}
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/home/about_us/global_stats_section/earth.png"
                alt="Global Reach"
                fill
                className="object-contain"
              />

              {/* Location Markers */}
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="absolute bg-white rounded-xl shadow-lg px-[12px] py-[6px] flex items-center gap-4 w-[45%] h-auto"
                  style={{
                    top: index === 0 ? '22%' : index === 1 ? '35%' : '50%',
                    left: index === 0 ? '45%' : index === 1 ? '5%' : '36%',
                  }}
                >
                  {/* Flag */}
                  <div className="relative p-[10px] bg-[#E8E8E8] rounded ">
                    <Image
                      src={location.flag}
                      alt={location.name}
                      width={41}
                      height={25}
                      className="object-contain"
                    />
                  </div>

                  {/* Location Info */}
                  <div>
                    <p className="text-primary text-[19px] whitespace-nowrap">
                      {location.name}
                    </p>
                    <p className="text-[21px] font-medium">
                      {location.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
