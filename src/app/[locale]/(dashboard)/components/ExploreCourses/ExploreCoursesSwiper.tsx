"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import ExploreCourseBox from "./ExploreCourseBox";
import SwiperComponent from "../swiper/Swiper";
import ExploreCoursesRightBtn from "./ExploreCoursesRightBtn";
import ExploreCoursesLeftBtn from "./ExploreCoursesLeftBtn";
import { getAllCourses } from "@/api/courses/getAllCourses";
import { useLocale } from "next-intl";
import MiniLoader from "../MiniLoader";

function ExploreSwiperBtns() {
  return (
    <>
      <ExploreCoursesLeftBtn />
      <ExploreCoursesRightBtn />
    </>
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
          className="relative rounded-[2rem] [direction:ltr]"
          classNameSlide="!w-[43.3rem]"
        />
      )}
    </>
  );
}
