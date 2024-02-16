"use client";
import React from "react";
import { useSwiper } from "swiper/react";

import { GoArrowRight } from "react-icons/go";

export default function ExploreCoursesRightBtn() {
  const swiper = useSwiper();

  return (
    <div
      className=" absolute top-1/2 -translate-y-1/2 right-6 z-50 hover:opacity-80 transition-all  w-[5.8rem] h-[5.8rem] flex justify-center items-center cursor-pointer"
      onClick={() => swiper.slideNext()}
    >
      <div className="w-full h-full bg-white  opacity-30 absolute rounded-full  "></div>
      <GoArrowRight className="text-[2.4rem] fill-white opacity-100" />
    </div>
  );
}
