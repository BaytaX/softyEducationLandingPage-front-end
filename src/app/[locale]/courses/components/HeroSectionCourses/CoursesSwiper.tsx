"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";

import SwiperComponent from "@/app/[locale]/components/swiper/Swiper";
import CourseBoxSwiper from "./CourseBoxSwiper";
import CoursesSwiperLeftBtn from "./CoursesSwiperLeftBtn";
import CoursesSwiperRightBtn from "./CoursesSwiperRightBtn";
import { getPopularCourses } from "@/api/courses/getPopularCourses";
import MiniLoader from "@/app/[locale]/components/MiniLoader";
import useLocale from "@/helpers/useLocale";
import { SkeletonPopularCourse } from "../CoursesSection/SkeletonPopularCourse";

function CoursesSwiperBtns() {
  return (
    <>
      <CoursesSwiperLeftBtn />
      <CoursesSwiperRightBtn />
    </>
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
        <div className="h-[40rem] flex justify-center items-center">
          <MiniLoader />
          {/* <SkeletonPopularCourse /> */}
        </div>
      ) : (
        <SwiperComponent
          data={popularCourses}
          Component={CourseBoxSwiper}
          SwiperButtons={CoursesSwiperBtns}
          className="relative h-[40rem] w-11/12 "
        />
      )}
    </>
  );
}
