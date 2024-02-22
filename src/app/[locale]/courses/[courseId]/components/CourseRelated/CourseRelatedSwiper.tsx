"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import SwiperComponent from "@/app/[locale]/components/swiper/Swiper";
import CourseBox from "../../../components/CoursesSection/CourseBox";
import { getRelatedCourses } from "@/api/courses/getRelatedCourses";
import MiniLoader from "@/app/[locale]/components/MiniLoader";
import NoResultFound from "@/app/[locale]/components/NoResultFound";
import { useLocale } from "next-intl";

type CourseRelatedSwiperPropsType = {
  categoryId: number;
  courseId: number;
};

export default function CourseRelatedSwiper({
  categoryId,
  courseId,
}: CourseRelatedSwiperPropsType) {
  const locale = useLocale();
  const {
    isLoading,
    data: related_courses,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await getRelatedCourses(categoryId),
  });
  const wantedData = related_courses?.attributes?.courses?.data?.filter(
    (course: any) =>
      course?.id !== courseId && course?.attributes?.locale === locale
  );
  console.log(wantedData);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[40rem]">
          <MiniLoader />
        </div>
      ) : wantedData?.length ? (
        <SwiperComponent
          className="h-[36rem] !w-full "
          data={wantedData}
          Component={CourseBox}
          classNameSlide="!w-[34rem]"
          spaceBetween={50}
        />
      ) : (
        <NoResultFound />
      )}
    </>
  );
}
