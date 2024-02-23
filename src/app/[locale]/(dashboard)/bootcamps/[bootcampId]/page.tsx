"use client";
import React from "react";
import { useParams } from "next/navigation";

import { useQuery } from "@tanstack/react-query";

import { getBootcampById } from "@/api/bootcamp/getBootcampById";

import BootcampHero from "./components/BootcampHero/BootcampHero";
import BootcampPreRequirements from "./components/BootcampPreRequirements/BootcampPreRequirements";
import BootcampCourses from "./components/BootcampCourses/BootcampCourses";
import BootcampRelated from "./components/BootcampRelated/BootcampRelated";
import FrequentlyAskedQuestionsSection from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestionsSection";
import Testimonials from "../../components/_ui/Testimonials";
import ObjectivesBootcamp from "./components/BootcampObjectives/ObjectivesBootcamp";
import Loader from "../../components/Loader";
import NotFoundPage from "../../components/notFound/NotFound";
import ArabicWrapper from "../../components/ArabicWrapper";

export default function Page() {
  const params = useParams();
  const { bootcampId } = params;
  const {
    isLoading,
    data: bootcamp,
    error,
  } = useQuery({
    queryKey: ["bootcamp", bootcampId],
    queryFn: async () => await getBootcampById(+bootcampId),
  });
  if (bootcamp === null) return <NotFoundPage />;
  return (
    <div className="ml-16">
      {isLoading ? (
        <div className="flex items-center justify-center h-[100rem]">
          <Loader />
        </div>
      ) : (
        <ArabicWrapper className="-ml-10 mr-4">
          <BootcampHero data={bootcamp?.attributes} />
          <BootcampPreRequirements
            data={bootcamp?.attributes?.pre_requirements}
          />
          <BootcampCourses data={bootcamp?.attributes?.courses} />
          <ObjectivesBootcamp data={bootcamp?.attributes} />
          <Testimonials />
          <BootcampRelated
            categoryId={bootcamp?.attributes?.category?.data?.id}
            bootcampId={+bootcampId}
          />
          <FrequentlyAskedQuestionsSection boxClassName="!w-[98%] !ml-2" />
        </ArabicWrapper>
      )}
    </div>
  );
}
