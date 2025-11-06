"use client";
import React from 'react';
import Image from 'next/image';
import CtaButton from '@/components/ui/CtaButton';

const events = [
    {
      id: 1,
      slug: "event1",
      image: "/home/lateast_events_section/1.png",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 2,
      slug: "event2",
      image: "/home/lateast_events_section/2.png",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 3,
      slug: "event3",
      image: "/home/lateast_events_section/3.png",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

const LastEventsSection = () => {
  return (
    <section className="w-full bg-[#e7f7f6] py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className='text-[43px] font-semibold text-primary leading-tight text-center mb-8'>Latest Events</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
            events.map((event) => (
              <div key={event.slug} className="bg-white px-3 py-4 rounded-xl">
                <Image src={event.image} alt={event.title} width={379} height={210} />
                <h2 className="text-[16px] font-semibold mt-4">{event.title}</h2>
                <p className="mt-2 text-[12px] font-normal text-[#727272] leading-[22px]">{event.description}</p>
                {/* justify-end & increament uni */}
                <div className='text-end font-medium text-[13px] mt-3' key={event.slug }>
                  <CtaButton>know more</CtaButton>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
    </section>
  );
};

export default LastEventsSection;
