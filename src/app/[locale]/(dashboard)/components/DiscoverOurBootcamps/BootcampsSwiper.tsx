"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllBootcamps } from "@/api/bootcamp/getAllBootcamps";

import SwiperComponent from "../swiper/Swiper";
import BootcampBox from "./BootcampBox";
import BootcampsSwiperLeftBtn from "./BootcampsSwiperLeftBtn";
import BootcampsSwiperRightBtn from "./BootcampsSwiperRightBtn";
import MiniLoader from "../MiniLoader";
import { useLocale } from "next-intl";

function BootcampsSwiperBtns() {
  return (
    <div className="2xl:hidden">
      <BootcampsSwiperLeftBtn />
      <BootcampsSwiperRightBtn />
    </div>
  );
}

export default function BootcampsSwiper() {
  const locale = useLocale();
  const searchBootcamp = "";
  const sortValue = undefined;
  const {
    isLoading,
    data: allBootcamps,
    error,
  } = useQuery({
    queryKey: ["bootcamps", locale],
    queryFn: async () =>
      await getAllBootcamps({ searchBootcamp, sortValue, locale }),
  });
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[50rem]">
          <MiniLoader />
        </div>
      ) : (
        <SwiperComponent
          data={allBootcamps}
          Component={BootcampBox}
          SwiperButtons={BootcampsSwiperBtns}
          className="relative [direction:ltr] 2xl:!h-fit 2xl:!pb-44 "
          classNameSlide="xl:!pl-20 lg:!w-[120%] lg:!-ml-[6rem]"
          isPaginated={screen.width <= 1000}
        />
      )}
    </>
  );
}
