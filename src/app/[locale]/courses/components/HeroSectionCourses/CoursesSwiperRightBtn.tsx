"use client";
import React from "react";
import { useSwiper } from "swiper/react";

import { GoArrowRight } from "react-icons/go";

export default function CoursesSwiperRightBtn() {
  const swiper = useSwiper();

  return (
    <div
      className=" bg-color-blue-6 rounded-full w-[5rem] h-[5rem] flex justify-center items-center cursor-pointer hover:opacity-90 transition-all  absolute top-1/2 -translate-y-1/2 right-0 z-50 "
      onClick={() => swiper.slideNext()}
    >
      <GoArrowRight className="text-[2.8rem] fill-color-blue-2 opacity-100 z-50" />
    </div>
  );
}
