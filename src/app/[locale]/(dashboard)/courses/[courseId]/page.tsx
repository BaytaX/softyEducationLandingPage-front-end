"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { getCourseById } from "@/api/courses/getCourseById";

import CourseHero from "./components/CourseHero/CourseHero";
import CourseSchedule from "./components/CourseSchedule/CourseSchedule";
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
  const {
    isLoading,
    data: course,
    error,
  } = useQuery({
    queryKey: ["course", courseId],
    queryFn: async () => await getCourseById(+courseId),
  });

  if (course === null) return <NotFoundPage />;

  return (
    <div className="ml-10">
      {isLoading ? (
        <div className="flex items-center justify-center h-[100rem]">
          <Loader />
        </div>
      ) : (
        <ArabicWrapper>
          <CourseHero data={course?.attributes} />
          <CourseObjectives data={course?.attributes} />
          <CourseCurriculum data={course?.attributes} />
          <Testimonials />
          <CourseRelated
            categoryId={course?.attributes?.category?.data?.id}
            courseId={+courseId}
          />
        </ArabicWrapper>
      )}
    </div>
  );
}

{
  /* <CourseSchedule /> */
}
