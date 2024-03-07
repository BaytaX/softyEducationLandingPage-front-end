"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ReviewCardBox from "./ReviewCardBox";
import SwiperComponent from "@/app/[locale]/(dashboard)/components/swiper/Swiper";
import SwiperPrevButton from "@/app/[locale]/(dashboard)/components/UpcomingEvents/SwiperPrevButton";
import SwipeNextButton from "@/app/[locale]/(dashboard)/components/UpcomingEvents/SwipeNextButton";
import useArabic from "@/helpers/useArabic";
import { getAllBootcampsReviews } from "@/api/reviews/getAllBootcampsReviews";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";

function ReviewsBootcampsSwiperBtns() {
  const isArabic = useArabic();
  return (
    <div
      className={`flex gap-4 items-center [direction:ltr] absolute top-0 _2xl:hidden  z-40 ${
        isArabic ? "left-0 flex-row-reverse" : "right-0"
      }`}
    >
      <SwiperPrevButton
        btnClassName="!bg-color-blue-2 !w-[4.4rem] !h-[4.4rem] "
        arrowClassName={`!fill-white !text-[2.4rem]  ${
          isArabic ? "rotate-[180deg]" : ""
        }`}
      />
      <SwipeNextButton
        btnClassName="!bg-color-blue-2 !w-[4.4rem] !h-[4.4rem] "
        arrowClassName={`!fill-white !text-[2.4rem] ${
          isArabic ? "rotate-[180deg]" : ""
        }`}
      />
    </div>
  );
}
export default function ReviewsBootcampsSwiper() {
  const {
    isLoading,
    data: allBootcampsReviews,
    error,
  } = useQuery({
    queryKey: ["bootcamps-reviews"],
    queryFn: async () => await getAllBootcampsReviews(),
  });

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[40rem]">
          <MiniLoader />
        </div>
      ) : (
        <SwiperComponent
          data={allBootcampsReviews}
          Component={ReviewCardBox}
          SwiperButtons={ReviewsBootcampsSwiperBtns}
          className="relative _2xl:!pb-24"
          isPaginated={screen.width <= 1000}
        />
      )}
    </>
  );
}
