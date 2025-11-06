"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CtaButton from '../../ui/CtaButton';

const cards = [
  {
    id: 1,
    icon: '💡',
    title: 'HeadLine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    id: 2,
    icon: '💡',
    title: 'HeadLine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    id: 3,
    icon: '💡',
    title: 'HeadLine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    id: 4,
    icon: '💡',
    title: 'HeadLine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    id: 5,
    icon: '💡',
    title: 'HeadLine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    id: 6,
    icon: '💡',
    title: 'HeadLine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    id: 7,
    icon: '💡',
    title: 'HeadLine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
  {
    id: 8,
    icon: '💡',
    title: 'HeadLine',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
  },
];

const OptimizeNetworkSection = () => {
  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">
        
        {/* Main Content Grid */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-[43px] font-semibold text-primary leading-tight">
              Optimize, monitor, and grow your EV network
            </h2>
            
            <p className="text-gray-400 text-[16px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <CtaButton>
              Get a Demo
            </CtaButton>
          </div>

          {/* Right Side - 3D Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 flex items-center justify-center">
              {/* Placeholder for 3D charger image */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                <Image src= "/home/optimize_section/1.png" alt="" width ={360} height={430}></Image>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Slider - Full Width with Swiper */}
        <div className="relative py-12">
          <div className="max-w-[1880px] mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView="auto"
              grabCursor={true}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-primary',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
              }}
              watchSlidesProgress={false}
              centeredSlides={false}
              breakpoints={{
                320: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2.75,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 4.5,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 5.5,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 5.75,
                  spaceBetween: 20,
                },
              }}
              className="!pb-12"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id} style={{ width: '239px' }}>
                  <div
                    className="relative"
                    style={{
                      width: '239px',
                      height: '250px',
                      
                    }}
                  >
                    {/* Inner Rectangle (Background Layer - Card 2) */}
                    <div
                      className="absolute"
                      style={{
                        width: '239px',
                        height: '191px',
                        top: '18px',
                        left: '0',
                        borderRadius: '11.3px',
                        background: 'linear-gradient(90deg, #00A79D 0%, #1A3B39 100%)',
                      }}
                    />
                    
                    {/* Outer Rectangle (Main Card - Card 1) with Border */}
                    <div
                      className="absolute"
                      style={{
                        width: '203px',
                        height: '226px',
                        left: '18px',
                        borderRadius: '7.53px',
                        padding: '0.94px',
                        background: 'linear-gradient(270deg, #00A79D 0%, #00413D 100%)',
                      }}
                    >
                      <div
                        className="flex flex-col w-full h-full"
                        style={{
                          borderRadius: '6.59px',
                          paddingTop: '14px',
                          paddingRight: '12px',
                          paddingBottom: '0',
                          paddingLeft: '12px',
                          background: 'linear-gradient(90deg, #00A79D 0%, #1A3B39 100%)',
                        }}
                      >
                      {/* Content Section */}
                      <div className="flex-1 flex flex-col">
                        {/* Icon and Title Row */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Image
                              src="/home/icons/lighting.svg"
                              alt="Flash Icon"
                              width={24}
                              height={24}
                              className="w-6 h-6"
                            />
                          </div>
                          <h3 className="text-white font-semibold text-base">
                            {card.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-white/90 text-xs text-regular leading-relaxed mb-[10px]">
                          {card.description}
                        </p>
                      </div>

                      {/* Bottom Animated Strip */}
                      <div 
                        className="relative overflow-hidden -mx-3 mb-3"
                        style={{
                          background: '#FFFFFF85',
                          width: '201px',
                          height: '21px',
                        }}
                      >
                        <div className="flex whitespace-nowrap animate-scroll h-full items-center">
                          <span className="text-black text-xs font-regular tracking-[0.2em] uppercase">
                            ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC
                          </span>
                          <span className="text-black text-xs font-bold tracking-[0.2em] uppercase ml-10">
                            ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC ENERGIC
                          </span>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>


      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          width: 8px !important;
          height: 8px !important;
          opacity: 1 !important;
        }
        .swiper-slide {
          opacity: 1 !important;
        }
        .swiper-slide-active,
        .swiper-slide-next,
        .swiper-slide-prev {
          opacity: 1 !important;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OptimizeNetworkSection;
