"use client";
import React from "react";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";

import { getAllCourses } from "@/api/courses/getAllCourses";

import ExploreCourseBox from "./ExploreCourseBox";
import SwiperComponent from "../swiper/Swiper";
import ExploreCoursesRightBtn from "./ExploreCoursesRightBtn";
import ExploreCoursesLeftBtn from "./ExploreCoursesLeftBtn";
import MiniLoader from "../MiniLoader";

function ExploreSwiperBtns() {
  return (
    <div className="xl:hidden">
      <ExploreCoursesLeftBtn />
      <ExploreCoursesRightBtn />
    </div>
  );
}

export default function ExploreCoursesSwiper() {
  const locale = useLocale();
  const {
    isLoading,
    data: allCourses,
    error,
  } = useQuery({
    queryKey: ["courses", locale],
    queryFn: async () => await getAllCourses({ locale }),
  });
  return (
    <>
      {isLoading ? (
        <div className="w-full h-[50rem] flex justify-center items-center">
          <MiniLoader />
        </div>
      ) : (
        <SwiperComponent
          data={allCourses}
          Component={ExploreCourseBox}
          SwiperButtons={ExploreSwiperBtns}
          className="relative rounded-[2rem] [direction:ltr] xl:!h-[110rem]"
          classNameSlide="!w-1/3  xl:!w-full   "
          isPaginated={screen.width <= 1000}
        />
      )}
    </>
  );
}
