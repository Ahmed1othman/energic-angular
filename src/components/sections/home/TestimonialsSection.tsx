"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import ArrowLeft from '@/components/icons/ArrowLeft';
import ArrowRight from '@/components/icons/ArrowRight';

const testimonials = [
  {
    logo: '/home/testimonials/logo.png',
    text: '"Energic helped us transform our mall parking into an EV-friendly hub, boosting customer visits and dwell time."',
    author: 'William',
    title: 'CEO',
    avatar: '/home/testimonials/testmonial_user.png',
  },
  {
    logo: '/home/testimonials/logo.png',
    text: '"Their smart charging solutions are top-notch. Our customers love the convenience and reliability."',
    author: 'Jerin',
    title: 'CEO',
    avatar: '/home/testimonials/testmonial_user.png',
  },
  {
    logo: '/home/testimonials/logo.png',
    text: '"A seamless integration process and excellent support from the Energic team. Highly recommended!"',
    author: 'Jane Doe',
    title: 'CTO',
    avatar: '/home/testimonials/testmonial_user.png',
  },
  {
    logo: '/home/testimonials/logo.png',
    text: '"Energic helped us transform our mall parking into an EV-friendly hub, boosting customer visits and dwell time."',
    author: 'William',
    title: 'CEO',
    avatar: '/home/testimonials/testmonial_user.png',
  },
  {
    logo: '/home/testimonials/logo.png',
    text: '"Their smart charging solutions are top-notch. Our customers love the convenience and reliability."',
    author: 'Jerin',
    title: 'CEO',
    avatar: '/home/testimonials/testmonial_user.png',
  },
];

const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-20 text-black bg-[#e7f7f6]">
      <div className="container mx-auto px-4 flex justify-between items-center mb-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 h-12 rounded-full bg-white/50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-white transition-colors shrink-0"
        >
          <ArrowLeft />
        </button>
        <h2 className="text-3xl font-bold px-4">Testimonials</h2>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 h-12 rounded-full bg-white/50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-white transition-colors shrink-0"
        >
          <ArrowRight />
        </button>
      </div>

      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        slidesPerView={1.25}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 34,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className="!py-4 max-w-[1880px] mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card min-h-[285px] h-auto rounded-xl p-3 sm:p-4 flex flex-col justify-between text-center shadow-[2px_4px_12px_0px_rgba(0,0,0,0.15)]">
              <div className="flex justify-center mb-4">
                <Image src={testimonial.logo} alt="Company Logo" width={140} height={40} />
              </div>
              <p className="text-base font-light leading-relaxed mb-4">
                {testimonial.text}
              </p>
              <div className="testimonial-divider mx-auto mb-4"></div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-left">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 text-left">{testimonial.title}</p>
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image src={testimonial.avatar} alt={testimonial.author} width={64} height={64} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
