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
    <div className="_3xl:hidden">
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
        <div className="h-[40rem] flex justify-center items-center  _xl:-ml-[10rem]">
          <MiniLoader />
          {/* <SkeletonPopularCourse /> */}
        </div>
      ) : (
        <SwiperComponent
          data={popularCourses}
          Component={CourseBoxSwiper}
          SwiperButtons={CoursesSwiperBtns}
          className="relative h-fit min-h-[40rem]  w-11/12 !pl-4 !pb-16 _xl:!-ml-10   _xl:!px-8   _1/2xl:!w-[120%] _1/2xl:!-ml-[14rem] "
          classNameSlide="_xl:!w-[100%]"
          isPaginated={screen.width <= 1000}
          spaceBetween={20}
        />
      )}
    </>
  );
}
