"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { IoArrowBack } from "react-icons/io5";
import Popup from "@/components/shared/Popup";

export default function Projects() {
  return (
    <div className="flex justify-center pt-9 pb-12 bg-primary-800">
      <div className="container grid grid-cols-5 gap-8">
        {/* head title */}
        <div className="col-span-5 md:col-span-2 flex flex-col gap-4 px-5 md:px-0">
          <div className="flex items-center gap-5">
            <h1 className="title text-white">أعمالنا</h1>
            <Image
              src="/assets/decor/line.png"
              alt="decor-line-img"
              width={32}
              height={32}
              className="w-16 h-0.5 invert-100"
            />
          </div>
          <h3 className="head-title text-primary-500 mb-0! text-white">
            نماذج من أعمالنا
          </h3>
          <div className="flex flex-col mt-6 gap-6">
            <p className="max-w-110 leading-[180%] text-primary-100">
              نفخر بكل مشروع ننفذه. حيث نحول الأفكار إلى واقع ملموس من خلال
              خبرتنا في تنفيذ أعمال التشطيبات الداخلية والخارجية بأعلى معايير
              الجودة والاحترافية.
            </p>
            <div className="w-fit">
              <Popup />
            </div>
          </div>
        </div>
        {/* project swiper */}
        <div className="col-span-5 md:col-span-3">
          <WorksSwiper />
        </div>
      </div>
    </div>
  );
}

const detailList = [
  {
    title: "عصري",
    icon: "/assets/home/projects/design.png",
  },
  {
    title: "فاخر",
    icon: "/assets/home/projects/finish.png",
  },
  {
    title: "مودرن",
    icon: "/assets/home/projects/modern.png",
  },
  {
    title: "راقي",
    icon: "/assets/home/projects/high.png",
  },
  {
    title: "متكامل",
    icon: "/assets/home/projects/completely.png",
  },
  {
    title: "أنيق",
    icon: "/assets/home/projects/design.png",
  },
  {
    title: "فخم",
    icon: "/assets/home/projects/finish.png",
  },
  {
    title: "مميز",
    icon: "/assets/home/projects/modern.png",
  },
  {
    title: "إبداعي",
    icon: "/assets/home/projects/high.png",
  },
  {
    title: "مثالي",
    icon: "/assets/home/projects/completely.png",
  },
  {
    title: "معاصر",
    icon: "/assets/home/projects/design.png",
  },
  {
    title: "متميز",
    icon: "/assets/home/projects/finish.png",
  },
  {
    title: "متألق",
    icon: "/assets/home/projects/modern.png",
  },
  {
    title: "متطور",
    icon: "/assets/home/projects/high.png",
  },
  {
    title: "فريد",
    icon: "/assets/home/projects/completely.png",
  },
  {
    title: "فني",
    icon: "/assets/home/projects/design.png",
  },
  {
    title: "متقن",
    icon: "/assets/home/projects/finish.png",
  },
  {
    title: "مبتكر",
    icon: "/assets/home/projects/modern.png",
  },
  {
    title: "استثنائي",
    icon: "/assets/home/projects/high.png",
  },
  {
    title: "شامل",
    icon: "/assets/home/projects/completely.png",
  },
];

const works = Array.from({ length: 68 }, (_, index) => ({
  id: index + 1,
  image: `/selected/${index + 1}.jpg`,
  ...detailList[index % detailList.length],
}));

function WorksSwiper() {
  return (
    <div className="works-swiper relative w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        slidesPerView={1.3}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={900}
        grabCursor={true}
        navigation={{
          nextEl: ".works-next",
          prevEl: ".works-prev",
        }}
        pagination={{
          clickable: true,
          el: ".works-pagination",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.8,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 4,
          },
          1280: {
            slidesPerView: 2.6,
            spaceBetween: 0,
          },
        }}
        className="!overflow-visible"
      >
        {works.map((work) => (
          <SwiperSlide key={work.id} className="h-70!">
            <div className="work-slide relative overflow-hidden rounded-[28px]">
              <Image
                src={work.image}
                alt="design-img"
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 60vw"
                className="object-cover"
              />

              <div className="absolute right-4 bottom-4 w-fit">
                <div className="flex items-center gap-4 rounded-2xl bg-black/40 px-8 py-2 backdrop-blur-md">
                  <Image
                    src={work.icon}
                    alt={work.title}
                    width={32}
                    height={32}
                    className="w-8 invert-100"
                  />
                  <p className="text-[#f5efe4]">{work.title}</p>
                  <Image
                    src="/assets/decor/line.png"
                    alt="decor-line"
                    width={32}
                    height={32}
                    className="w-8 invert-100"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* arrows */}
      <button
        type="button"
        className="works-prev absolute right-4 top-1/2 z-20
                   flex h-12 w-12 -translate-y-1/2 items-center
                   justify-center rounded-full border border-white/30
                   bg-black/40 text-2xl text-[#f5efe4]
                   backdrop-blur-md transition hover:bg-black/70"
      >
        <IoIosArrowForward />
      </button>

      <button
        type="button"
        className="works-next absolute left-4 top-1/2 z-20
                   flex h-12 w-12 -translate-y-1/2 items-center
                   justify-center rounded-full border border-white/30
                   bg-black/40 text-2xl text-[#f5efe4]
                   backdrop-blur-md transition hover:bg-black/70"
      >
        <IoIosArrowBack />
      </button>

      {/* pagination */}
      {/* <div className="works-pagination mt-7 flex justify-center" /> */}
    </div>
  );
}
