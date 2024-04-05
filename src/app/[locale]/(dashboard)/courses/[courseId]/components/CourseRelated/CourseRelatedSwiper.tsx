"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import SwiperComponent from "@/app/[locale]/(dashboard)/components/swiper/Swiper";
import CourseBox from "../../../components/CoursesSection/CourseBox";
import { getRelatedCourses } from "@/api/courses/getRelatedCourses";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";
import NoResultFound from "@/app/[locale]/(dashboard)/components/NoResultFound";
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
    queryKey: ["category", categoryId, locale],
    queryFn: async () => await getRelatedCourses(categoryId),
  });
  const wantedData = related_courses?.attributes?.courses?.data?.filter(
    (course: any) =>
      course?.id !== courseId && course?.attributes?.locale === locale
  );

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[40rem]">
          <MiniLoader />
        </div>
      ) : wantedData?.length ? (
        <SwiperComponent
          className="!h-fit !pb-12 !w-full  "
          data={wantedData}
          Component={CourseBox}
          classNameSlide="!w-[34rem] _2xl:!w-[40rem] _1/2xl:!w-[80%] _sm:!w-[90%]   !shadow-lg"
          spaceBetween={50}
          isPaginated={false}
        />
      ) : (
        <NoResultFound />
      )}
    </>
  );
}
