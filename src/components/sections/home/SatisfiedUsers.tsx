"use client";

// components/TestimonialsSection.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Card = {
  title: string;
  text: string;
  author: string;
};

const cards: Card[] = [
  {
    title: "Wonderful Web App",
    text:
      "ENERGIC offers a wide range of charging products and provides integrated solutions for planning, designing, and installing charging stations according to customer needs.",
    author: "Jerrin",
  },
  {
    title: "Best EV Platform",
    text:
      "ENERGIC offers a wide range of charging products and provides integrated solutions for planning, designing, and installing charging stations according to customer needs.",
    author: "William",
  },
  {
    title: "Amazing !",
    text:
      "ENERGIC offers a wide range of charging products and provides integrated solutions for planning, designing, and installing charging stations according to customer needs.",
    author: "Jackson",
  },
  {
    title: "Great Service",
    text:
      "ENERGIC offers a wide range of charging products and provides integrated solutions for planning, designing, and installing charging stations according to customer needs.",
    author: "Sophia",
  },
  {
    title: "Highly Recommended",
    text:
      "ENERGIC offers a wide range of charging products and provides integrated solutions for planning, designing, and installing charging stations according to customer needs.",
    author: "Michael",
  },
  {
    title: "User-Friendly",
    text:
      "ENERGIC offers a wide range of charging products and provides integrated solutions for planning, designing, and installing charging stations according to customer needs.",
    author: "Emily",
  },
];

export default function SatisfiedUsers() {
  const [active, setActive] = useState<number>(1); // start with center card highlighted

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % cards.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const getVisibleCards = () => {
    const len = cards.length;
    const prevIndex = (active - 1 + len) % len;
    const nextIndex = (active + 1) % len;
    return [cards[prevIndex], cards[active], cards[nextIndex]];
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="relative py-5 overflow-hidden bg-[url('/testimonial.png')]">
      {/* خلفية منقطة / textured */}
      <div className="noise-bg absolute inset-0 -z-10"/>

      {/* عنوان أعلى */}
      <div className="max-w-6xl mx-auto text-center pt-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
          Here From Our Satisfied Users
        </h3>
      </div>

      {/* شعار كبير كـ watermark */}
      <div className="absolute inset-x-0 top-20 pointer-events-none flex justify-center -z-20">
        {/* ضع ملف الشعار في public/images/energic-logo-white.png */}
        <div className="opacity-10 select-none">
          <Image
            src="/images/energic-logo-white.png"
            alt="ENERGIC logo watermark"
            width={1600}
            height={220}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* الكرة (globe) في الوسط فوق البطاقات */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[220px] z-20 pointer-events-none">
        {/* ضع صورة الكرة في public/images/globe.png */}
        <div className="w-48 h-48 md:w-60 md:h-60 relative">
          <Image
            src="/images/globe.png"
            alt="globe"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* البطاقات */}
      <div className="relative z-30 mt-[340px] md:mt-[300px]">
        <div className="flex items-center justify-center gap-5 md:gap-[10px]">
          {visibleCards.map((c, i) => {
            const isCenter = i === 1;
            return (
              <article
                key={c.author}
                className={`transform transition-all duration-500 ease-in-out flex-shrink-0
                  ${isCenter
                    ? "scale-100 md:scale-110 z-10"
                    : `scale-90 opacity-70 hidden md:block ${i === 0 ? "-translate-x-4" : "translate-x-4"}`}
                  w-10/12 md:w-[540px] h-[213px] rounded-xl overflow-hidden shadow-[2px_4px_12px_0px_rgba(0,0,0,0.15)]`}
                aria-hidden={!isCenter}
              >
                <div
                  className="relative h-full p-3 flex flex-col justify-between"
                  style={{
                    background: "rgba(210, 250, 246, 0.5)", // Semi-transparent background
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <header className="text-center">
                    <h4 className="text-lg md:text-xl font-semibold text-slate-900">
                      {c.title}
                    </h4>
                  </header>

                  <div className="mt-4 text-xs md:text-sm text-slate-700 leading-relaxed px-2">
                    {c.text}
                  </div>

                  {/* Decorative Gradient Line */}
                  <div
                    className="mx-auto my-4 w-20 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0, 167, 157, 0) 0%, #00A79D 50%, rgba(0, 167, 157, 0) 100%)",
                    }}
                  />

                  <footer className="text-center text-slate-800 font-medium pb-1">
                    {c.author}
                  </footer>
                </div>
              </article>
            );
          })}
        </div>
        {/* نقاط التنقّل */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${i === active ? "scale-125 bg-slate-800" : "bg-white/80 border border-slate-600/20"}`}
            />
          ))}
        </div>
      </div>

      {/* بعض الـ CSS الخاصة (noise background) */}
      <style jsx>{`
        .noise-bg {
          background-color: #35d2c5; /* القاعدة اللونية */
          background-image: radial-gradient(rgba(0, 0, 0, 0.035) 1px, transparent 1px),
            radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 6px 6px, 3px 3px;
          filter: saturate(95%);
        }

        /* تحسين الارتفاع على الشاشات الصغيرة */
        @media (max-width: 768px) {
          .noise-bg {
            background-size: 5px 5px, 3px 3px;
          }

          /* نخفض المسافة للـ globe والبطاقات */
          section :global(.mt-\[340px\]) {
            margin-top: 220px;
          }
        }
      `}</style>
    </section>
  );
}
