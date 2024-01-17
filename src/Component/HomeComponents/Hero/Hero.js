"use client";
import React from "react";
import {
  Navigation,
  Autoplay,
  Pagination,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mb-10">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Navigation, Autoplay, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="min-h-screen bg-slate-500">
            <div className="text-center">
              <div className="flex gap-4 items-center ">
                <Image src="" width={500} height={500} alt="" />
                <p className="text-3xl lg:text-5xl font-semibold text-white">
                  BMW 3 Series
                </p>
              </div>
              <button className="px-[12px] py-[6px] lg:py-[10px]  lg:px-[18px] text-white rounded-md hover:bg-white font-medium hover:text-gray-800 hover:transition">
                Buy Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-screen bg-slate-500">
            <div className="text-center">
              <div className="flex gap-4 items-center ">
                <Image src="" width={500} height={500} alt="" />
                <p className="text-3xl lg:text-5xl font-semibold text-white">
                  BMW 3 Series
                </p>
              </div>
              <button className="px-[12px] py-[6px] lg:py-[10px]  lg:px-[18px] text-white rounded-md hover:bg-white font-medium hover:text-gray-800 hover:transition">
                Buy Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
