"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import SwiperComponent from "../swiper/Swiper";
import ReviewBox from "./ReviewBox";
import MiniLoader from "../MiniLoader";

import { getAllReviews } from "@/api/reviews/getAllReviews";

export default function ReviewsSwiper() {
  const {
    isLoading,
    data: allReviews,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => await getAllReviews(),
  });
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[40rem] w-full">
          <MiniLoader />
        </div>
      ) : (
        <SwiperComponent
          className="!h-fit w-full !p-4 lg:w-[95%]"
          data={allReviews}
          Component={ReviewBox}
          classNameSlide="!w-[40rem]  2xl:!min-w-[60%] 1/2xl:!w-full  "
          spaceBetween={40}
        />
      )}
    </>
  );
}
