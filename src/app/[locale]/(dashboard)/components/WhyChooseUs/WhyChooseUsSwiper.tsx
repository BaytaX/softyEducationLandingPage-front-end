"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { useSwiper } from "swiper/react";

import SwiperComponent from "../swiper/Swiper";
import WhyChooseUsBox from "./WhyChooseUsBox";

import logo from "@/../../public/imgs/logo.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function WhyChooseUsSwiperRightBtn() {
  const t = useTranslations("Home.WhyChooseUs");

  const swiper = useSwiper();

  return (
    <div className="   absolute top-8 right-20 z-40 flex flex-col items-center">
      <p className="text-[2rem] font-medium _xl:text-[3.2rem] _lg:!text-[3.6rem]">
        {" "}
        {t("otherSolutions")}
      </p>
      <div
        className=" bg-color-blue-2 rounded-full w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer hover:opacity-80 transition-all  _lg:!w-[6rem] _lg:!h-[6rem] "
        onClick={() => swiper.slideNext()}
      >
        <GoArrowRight className="text-[2.4rem] fill-white opacity-100 z-40 _lg:text-[4rem]" />
      </div>{" "}
    </div>
  );
}
function WhyChooseUsSwiperLeftBtn() {
  const swiper = useSwiper();

  return (
    <div className="   absolute top-4 left-0 z-40 flex flex-col gap-4 items-center">
      <Image
        src={logo}
        alt={"logo of softy education "}
        width={100}
        height={100}
      />
      <div
        className=" bg-color-blue-2 rounded-full w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer hover:opacity-80 transition-all  _lg:!w-[6rem] _lg:!h-[6rem]  "
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowLeft className="text-[2.4rem] fill-white opacity-100 z-40 _lg:text-[4rem]" />
      </div>{" "}
    </div>
  );
}

export default function WhyChooseUsSwiper({ data: args }: any) {
  const data = [{ isSofty: true }, { isSofty: false }];
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  function handleChange() {
    setIsFirstSlide((prev) => !prev);
  }
  return (
    <SwiperComponent
      data={data}
      Component={WhyChooseUsBox}
      SwiperButtons={
        isFirstSlide ? WhyChooseUsSwiperRightBtn : WhyChooseUsSwiperLeftBtn
      }
      className="relative [direction:ltr] !h-fit _lg:!pb-20"
      onChange={handleChange}
      additionalData={args}
      isPaginated={false}
    />
  );
}
