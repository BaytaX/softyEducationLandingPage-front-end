"use client";
import React from "react";
import { useSwiper } from "swiper/react";

import { GoArrowLeft } from "react-icons/go";

export default function ExploreCoursesLeftBtn() {
  const swiper = useSwiper();
  return (
    <div
      className=" absolute top-1/2 -translate-y-1/2 left-6 z-50 hover:opacity-80 transition-all  w-[5.8rem] h-[5.8rem] flex justify-center items-center cursor-pointer"
      onClick={() => swiper.slidePrev()}
    >
      <div className="w-full h-full bg-white  opacity-30 absolute rounded-full  "></div>
      <GoArrowLeft className="text-[2.4rem] fill-white opacity-100" />
    </div>
  );
}
