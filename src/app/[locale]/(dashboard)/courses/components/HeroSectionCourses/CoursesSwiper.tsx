"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";

import { getPopularCourses } from "@/api/courses/getPopularCourses";

import useLocale from "@/helpers/useLocale";

import SwiperComponent from "@/app/[locale]/(dashboard)/components/swiper/Swiper";
import CourseBoxSwiper from "./CourseBoxSwiper";
import CoursesSwiperLeftBtn from "./CoursesSwiperLeftBtn";
import CoursesSwiperRightBtn from "./CoursesSwiperRightBtn";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";

function CoursesSwiperBtns() {
  return (
    <div className="5xl:hidden">
      <CoursesSwiperLeftBtn />
      <CoursesSwiperRightBtn />
    </div>
  );
}

export default function CoursesSwiper() {
  const locale = useLocale();
  const {
    isLoading,
    data: popularCourses,
    error,
  } = useQuery({
    queryKey: ["course", locale],
    queryFn: async () => await getPopularCourses({ locale }),
  });

  return (
    <>
      {isLoading ? (
        <div className="h-[40rem] flex justify-center items-center  xl:-ml-[10rem]">
          <MiniLoader />
          {/* <SkeletonPopularCourse /> */}
        </div>
      ) : (
        <SwiperComponent
          data={popularCourses}
          Component={CourseBoxSwiper}
          SwiperButtons={CoursesSwiperBtns}
          className="relative h-[40rem] w-11/12  xl:!-ml-10   xl:!px-8 2xl:!h-fit 2xl:!pb-24 1/2xl:!w-[120%] 1/2xl:!-ml-[14rem] md:!h-[124rem]"
          classNameSlide="xl:!w-[100%]"
          isPaginated={screen.width <= 1000}
          spaceBetween={20}
        />
      )}
    </>
  );
}
