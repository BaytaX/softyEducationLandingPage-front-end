"use client";
import React from "react";
import { useSwiper } from "swiper/react";

import { GoArrowRight } from "react-icons/go";

export default function SwipeNextButton() {
  const swiper = useSwiper();

  return (
    <div
      className="bg-color-blue-6 rounded-full w-[5.6rem] h-[5.6rem] flex justify-center items-center cursor-pointer hover:opacity-80 transition-all"
      onClick={() => swiper.slideNext()}
    >
      <GoArrowRight className="text-[2.8rem] fill-color-blue-2" />
    </div>
  );
}
