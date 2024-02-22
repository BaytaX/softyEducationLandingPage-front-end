"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import SwiperComponent from "../swiper/Swiper";
import ReviewBox from "./ReviewBox";
import { getAllReviews } from "@/api/reviews/getAllReviews";
import MiniLoader from "../MiniLoader";

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
          className="h-[34rem] w-full !p-4 "
          data={allReviews}
          Component={ReviewBox}
          classNameSlide="!w-[40rem]"
        />
      )}
    </>
  );
}
