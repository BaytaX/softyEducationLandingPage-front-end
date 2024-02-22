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
    <>
      <BootcampsSwiperLeftBtn />
      <BootcampsSwiperRightBtn />
    </>
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
  console.log(allBootcamps);
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
          className="relative [direction:ltr] !w-[135rem]"
        />
      )}
    </>
  );
}
