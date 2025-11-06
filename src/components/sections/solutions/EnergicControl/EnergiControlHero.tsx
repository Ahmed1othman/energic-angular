"use client";
import Image from "next/image";
import React from "react";

export default function EnergicHero() {
  return (
    <section className="relative pt-30 pb-15 md:py-32 lg:py-40 bg-[#F4F4F4]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-1 ">
          
          {/* النصوص */}
          <div className="order-2 md:order-1">
            <p className="text-[24px] md:text-[46px] text-primary font-light mb-3 md:mb-4">
              Energy powers the world, Control defines its direction.
            </p>
            <h1 className="text-[36px] md:text-[46px] lg:text-[70px] font-semibold text-primary">
              Energic Control
            </h1>
          </div>

          {/* الصورة + الدائرة */}
          <div className="order-1 md:order-2 w-full max-w-[613px] mx-auto md:mx-0">
            <div className="relative overflow-visible w-full aspect-[613/420]">
              {/* الدائرة في الخلفية */}
              <div className="absolute w-[100%] h-[100%]  z-0 bg-transparent">
                <Image
                  src="/solution/hero/circule.svg"
                  alt="background circle"
                  fill
                  className="object-contain pt-2"
                />
              </div>

              {/* الصورة الداخلية - Dashboard */}
              <div className="relative border-[3px] border-white rounded-[16px] md:rounded-[24px] overflow-hidden shadow-md bg-transparent w-full h-full pt-[10%] pl-[10%] z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/solution/hero/dashboard.png"
                    alt="Energic Dashboard"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
