"use client";
import React from "react";
import { useSwiper } from "swiper/react";

import SwiperComponent from "../../../components/swiper/Swiper";
import TeamBox from "./TeamBox";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import useArabic from "@/helpers/useArabic";

function OurTeamSwiperBtns() {
  const swiper = useSwiper();
  const isArabic = useArabic();

  return (
    <div
      className={`absolute flex items-center gap-8 top-0 ${
        isArabic ? "right-10" : ""
      }`}
    >
      <div
        className="bg-gray-200 p-4 lg:p-8 lg:rounded-[2rem] rounded-xl  transition-all [&>svg]:hover:text-white cursor-pointer hover:bg-color-blue-1  hover:shadow-[0_2px_10px_2px_#5590f5] "
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowLeft
          className={`text-black text-[2.4rem] 2xl:text-[3.2rem] 1/2xl:text-[4rem] lg:!text-[6rem]`}
        />
      </div>

      <div
        className="bg-gray-200 p-4 lg:p-8 lg:rounded-[2rem]  rounded-xl  transition-all [&>svg]:hover:text-white cursor-pointer hover:bg-color-blue-1  hover:shadow-[0_2px_10px_2px_#5590f5] "
        onClick={() => swiper.slideNext()}
      >
        <GoArrowRight
          className={`text-black text-[2.4rem] 2xl:text-[3.2rem] 1/2xl:text-[4rem] lg:!text-[6rem] `}
        />
      </div>
    </div>
  );
}

export default function OurTeamSwiper({ data, handleSetMember, member }: any) {
  return (
    <SwiperComponent
      data={data}
      Component={TeamBox}
      SwiperButtons={OurTeamSwiperBtns}
      className="relative [direction:ltr] !h-fit !p-10 !pt-32 !w-full  1/2xl:!pt-36 lg:!h-[42rem] "
      classNameSlide="!w-max !mr-20 !pt-6 lg:!mt-24 lg:!mr-32"
      handleClick={handleSetMember}
      additionalData={member}
    />
  );
}
