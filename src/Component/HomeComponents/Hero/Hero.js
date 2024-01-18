"use client";
import React from "react";
import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import imag1 from "../../../../public/images/Voting.jpg";
import imag2 from "../../../../public/images/logo-vote.jpg";

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
        // navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className=" grid lg:grid-cols-2 gap-6 lg:gap-4 items-center">
            <div className="text-center lg:text-left w-5/6 mx-auto lg:w-full space-y-3">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white">
                Democracy is a design problem.
              </h2>
              <p>
                Elections should work for everyone. We are here to make that
                happen.
              </p>
              <button className="px-[12px] py-[6px] lg:py-[10px]  lg:px-[18px] text-gray-800 rounded-md bg-white hover:bg-gray-800 font-medium hover:text-white hover:transition">
                Organize voting
              </button>
            </div>
            <div className="">
              <Image
                src={imag1}
                className=" lg:rounded-lg"
                alt="banner Image"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" grid lg:grid-cols-2 gap-6 lg:gap-4 items-center">
            <div className="text-center lg:text-left w-5/6 mx-auto lg:w-full space-y-3">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white">
                An online secret ballot system for digital voting.
              </h2>
              <p className="lg:w-4/6">
                Elections should work for everyone. We are here to make that
                happen.
              </p>
            </div>
            <div className="">
              <Image
                src={imag2}
                className=" lg:rounded-lg"
                alt="banner Image"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
