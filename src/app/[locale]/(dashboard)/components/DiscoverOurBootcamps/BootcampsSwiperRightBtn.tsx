"use client";
import React from "react";
import { useSwiper } from "swiper/react";

import { GoArrowRight } from "react-icons/go";

export default function BootcampsSwiperRightBtn() {
  const swiper = useSwiper();

  return (
    <div
      className=" absolute hover:opacity-80 transition-all top-1/2 -translate-y-1/2 right-0 z-40   w-[5.8rem] h-[5.8rem] flex justify-center items-center cursor-pointer"
      onClick={() => swiper.slideNext()}
    >
      <div className="w-full h-full bg-gray-2  opacity-90 absolute rounded-full z-20  "></div>
      <GoArrowRight className="text-[2.4rem] fill-white opacity-100 z-40" />
    </div>
  );
}
