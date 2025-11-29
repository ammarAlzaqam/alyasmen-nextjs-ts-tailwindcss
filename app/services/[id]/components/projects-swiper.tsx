"use client";

import Image from "next/image";
import { useRef } from "react";

export default function ProjectsSwiper() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 310, behavior: "smooth" });
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -310, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      {/*//! Title */}
      <div className="flex justify-center">
        <h3 className="service-title z-15">أعمالنا</h3>
      </div>

      {/*//! Swiper */}
      <div className="relative">
        {/*//* Overlay images */}
        <>
          <Image
            src="/assets/service/value/vector-t.png"
            alt="vector-swiper"
            width={1220}
            height={500}
            className="absolute z-10 max-sm:h-[40px] top-0 sm:-top-10 left-0 w-full"
          />

          <Image
            src="/assets/service/value/vector-b.png"
            alt="vector-swiper"
            width={1220}
            height={500}
            className="absolute z-10 max-sm:h-[50px] -bottom-7 sm:-bottom-16 left-0 w-full"
          />
        </>

        {/*//* Arrows */}
        <>
          <button
            onClick={scrollNext}
            className="absolute right-2 sm:right-4 top-[50%] z-10 translate-y-[-50%] bg-black/40 text-white p-3 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={scrollPrev}
            className="absolute left-2 sm:left-4 top-[50%] z-10 translate-y-[-50%] bg-black/40 text-white p-3 rounded-full"
          >
            ›
          </button>
        </>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-2 sm:gap-5 overflow-x-auto no-scrollbar"
        >
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <Image
                key={index + 1}
                src={`/favorite/${index + 1}.jpg`}
                alt="project-img"
                width={310}
                height={500}
                className="object-cover max-sm:w-1/2 snap-start rounded-[30px]! aspect-square"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
