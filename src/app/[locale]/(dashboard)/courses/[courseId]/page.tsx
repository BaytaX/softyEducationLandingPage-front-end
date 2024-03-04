"use client";
import React from "react";

import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { getCourseById } from "@/api/courses/getCourseById";

import CourseHero from "./components/CourseHero/CourseHero";
import CourseCurriculum from "./components/CourseCurriculum/CourseCurriculum";
import Testimonials from "../../components/_ui/Testimonials";
import CourseRelated from "./components/CourseRelated/CourseRelated";
import CourseObjectives from "./components/CourseObjectives/CourseObjectives";
import Loader from "../../components/Loader";
import NotFoundPage from "../../components/notFound/NotFound";
import ArabicWrapper from "../../components/ArabicWrapper";

export default function Page() {
  const params = useParams();
  const { courseId } = params;
  const locale = useLocale();
  const {
    isLoading,
    data: course,
    error,
  } = useQuery({
    queryKey: ["course", courseId, locale],
    queryFn: async () => await getCourseById({ courseId, locale }),
  });
  if (course === null) return <NotFoundPage />;

  return (
    <div className="ml-10">
      {isLoading ? (
        <div className="flex items-center justify-center h-[100rem]">
          <Loader />
        </div>
      ) : course?.length ? (
        <ArabicWrapper className="-ml-10 mr-10">
          <CourseHero data={course?.[0]?.attributes} />
          <CourseObjectives data={course?.[0]?.attributes} />
          <CourseCurriculum data={course?.[0]?.attributes} />
          <Testimonials />
          <CourseRelated
            categoryId={course?.[0]?.attributes?.category?.data?.id}
            courseId={+course?.[0]?.id}
          />
        </ArabicWrapper>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
}

{
  /* <CourseSchedule /> */
}
