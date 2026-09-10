"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import clsx from "clsx";

const testimonialsList = [
  {
    img: "/assets/testimonials/1.jpeg",
    name: "",
    city: "",
    userImg: "/assets/testimonials/1.jpeg",
  },
  {
    img: "/assets/testimonials/1.jpeg",
    name: "",
    city: "",
    userImg: "/assets/testimonials/1.jpeg",
  },
  {
    img: "/assets/testimonials/1.jpeg",
    name: "",
    city: "",
    userImg: "/assets/testimonials/1.jpeg",
  },
  {
    img: "/assets/testimonials/1.jpeg",
    name: "",
    city: "",
    userImg: "/assets/testimonials/1.jpeg",
  },
  {
    img: "/assets/testimonials/1.jpeg",
    name: "",
    city: "",
    userImg: "/assets/testimonials/1.jpeg",
  },
  {
    img: "/assets/testimonials/1.jpeg",
    name: "",
    city: "",
    userImg: "/assets/testimonials/1.jpeg",
  },
];

const testimonialsAdvList = [
  {
    title: "خبرة",
    label: "experience",
    des: "خبرة هندسية",
    icon: "/assets/testimonials/icons/experience.png",
  },
  {
    title: "جودة",
    label: "quality",
    des: "خامات مميزة",
    icon: "/assets/testimonials/icons/quality.png",
  },
  {
    title: "دقة",
    label: "precision",
    des: "تنفيذ متقن",
    icon: "/assets/testimonials/icons/precision.png",
  },
  {
    title: "التزام",
    label: "commitment",
    des: "مواعيد دقيقة",
    icon: "/assets/testimonials/icons/commitment.png",
  },
];

export default function Testimonials() {
  return (
    <div className="relative flex justify-center py-12 bg-primary-800">
      <div className="container flex flex-col gap-6 sm:gap-12 px-5 md:px-0">
        {/* Head Title */}
        <div
          data-aos="fade-in"
          className="z-3 flex flex-col items-center gap-3"
        >
          {/* Title */}
          <div className="flex items-center gap-4">
            <Image
              src="/assets/decor/stars.png"
              alt="wave-decor-icon"
              width={28}
              height={28}
              className="w-7 invert-100"
            />

            <h3 className="text-[20px] text-white font-bold">آراء عملائنا</h3>

            <Image
              src="/assets/decor/stars.png"
              alt="wave-decor-icon"
              width={28}
              height={28}
              className="w-7 invert-100"
            />
          </div>

          {/* Sub Title */}
          <h2 className="text-center text-[32px] text-white font-bold">
            ما يقوله عملاؤنا عن إطلالة
          </h2>

          {/* Description */}
          <p className="max-w-md text-center leading-[200%] text-primary-100">
            نفخر بثقة عملائنا ورضاهم عن تجربتهم معنا، إليكم بعض من آرائهم بعد
            قضاء أوقات مميزة في بورتو مطروح
          </p>
        </div>

        {/* Swiper */}
        <div className="relative z-3" data-aos="fade-down">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            speed={700}
            grabCursor
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1399: {
                slidesPerView: 4,
              },
            }}
            className="py-5! sm:mx-10! sm:px-3!"
          >
            {testimonialsList.map(({ img, name, city, userImg }, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={clsx(
                      "flex! flex-col! gap-4! rounded-xl border bg-white p-4 shadow-lg shadow-primary-400/30 transition-colors duration-300",
                      isActive ? "border-primary-400" : "border-transparent",
                    )}
                  >
                    {/* Quote & Stars */}
                    <div className="flex items-end justify-between">
                      <div className="flex items-center gap-2">
                        {Array(5)
                          .fill(null)
                          .map((_, index) => (
                            <IoStar key={index} className="text-amber-400" />
                          ))}
                      </div>

                      <div
                        className={clsx(
                          "rounded-full p-2 transition-colors duration-300",
                          isActive ? "bg-primary-400" : "bg-primary-100/80",
                        )}
                      >
                        <RiDoubleQuotesL
                          className={clsx(
                            "text-2xl transition-colors duration-300",
                            isActive ? "text-white" : "text-primary-400",
                          )}
                        />
                      </div>
                    </div>

                    {/* Testimonial Image */}
                    <Image
                      src={img}
                      alt="testimonial"
                      width={500}
                      height={300}
                      className="h-auto w-full"
                    />

                    {/* Divider */}
                    <div className="h-0.5 w-full rounded-[100%] bg-secondary-300/30" />

                    {/* Company Info */}
                    <div className="flex items-center gap-4">
                      <Image
                        src="/assets/footer/logo.png"
                        alt="logo-img"
                        width={44}
                        height={44}
                        className="h-11 w-11 object-contain invert-100"
                      />

                      <div className="flex flex-col gap-px">
                        <h3 className="text-lg font-medium text-primary-500!">
                          الياسمين
                        </h3>

                        <p className="text-xs text-primary-400">
                          للاعمال الهندسية
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous */}
          <button
            onDoubleClick={(e) => e.stopPropagation()}
            className="swiper-next absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition hover:scale-110 sm:bg-white"
          >
            <FaChevronLeft />
          </button>

          {/* Next */}
          <button
            onDoubleClick={(e) => e.stopPropagation()}
            className="swiper-prev absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 sm:bg-white"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Advantages */}
        <div
          data-aos="zoom-in"
          className="relative z-10 grid w-full grid-cols-2 gap-6 rounded-3xl bg-white px-4 py-8 shadow md:grid-cols-4 md:p-10 xl:mx-auto xl:max-w-10/12"
        >
          {testimonialsAdvList.map(({ title, label, des, icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6"
            >
              <Image
                src={icon}
                alt="adv-icon"
                width={40}
                height={40}
                className="w-10 dark-img-filter"
              />

              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="whitespace-nowrap text-[18px] font-semibold text-primary-500">
                  {title}
                </h3>

                <p className="text-[14px] text-primary-600">{des}</p>
              </div>
            </div>
          ))}

          {/* Dividers */}
          <div className="absolute bottom-1/2 right-0 h-px w-1/3 -translate-x-1/4 translate-y-1/2 bg-secondary-700/30 md:right-1/4 md:h-[30%] md:w-px md:translate-x-3/4" />

          <div className="absolute right-1/2 top-0 h-[31%] w-px translate-x-1/2 translate-y-1/3 bg-secondary-700/30 md:top-auto md:bottom-1/2 md:h-[30%] md:translate-y-1/2" />

          <div className="absolute bottom-0 right-1/2 h-[31%] w-px -translate-x-1/2 -translate-y-1/3 bg-secondary-700/30 md:hidden" />

          <div className="absolute bottom-1/2 left-0 h-px w-1/3 translate-x-1/4 translate-y-1/2 bg-secondary-700/30 md:left-auto md:right-3/4 md:h-[30%] md:w-px md:translate-x-3/4" />
        </div>
      </div>

      {/* Background */}
      <Image
        src="/assets/testimonials/bottom-bg.png"
        alt="testimonials-background"
        width={1920}
        height={500}
        className="absolute bottom-0 left-0 z-1 hidden w-full opacity-50 sm:block"
      />

      <Image
        src="/assets/testimonials/bottom-bg.png"
        alt="testimonials-background"
        width={768}
        height={500}
        className="absolute bottom-0 left-0 z-1 h-150 w-full object-cover opacity-80 sm:hidden"
      />

      <div className="absolute bottom-0 left-0 z-2 h-20 w-full bg-linear-to-t from-primary-500 to-transparent sm:h-50" />
    </div>
  );
}
