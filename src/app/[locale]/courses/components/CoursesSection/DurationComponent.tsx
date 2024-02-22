"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CheckTitleBox from "./CheckTitleBox";
import { getAllDurations } from "@/api/courses/getAllDurations";
import MiniLoader from "@/app/[locale]/components/MiniLoader";
import useLocale from "@/helpers/useLocale";

export function DurationComponent({ handleFilter, handleRemoveFilter }: any) {
  const locale = useLocale();
  const {
    isLoading,
    data: allDurations,
    error,
  } = useQuery({
    queryKey: ["between-durations", locale],
    queryFn: async () => await getAllDurations(),
  });
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <MiniLoader />
        </div>
      ) : (
        allDurations
          ?.map((duration: any) => ({
            id: duration?.id,
            title: duration?.attributes?.title,
            numCourses: duration?.attributes?.courses?.data?.filter(
              (course: any) => course?.attributes?.locale === locale
            )?.length,
          }))
          .map((ele: { title: string; numCourses: number; id: number }) => (
            <CheckTitleBox
              id={ele.id}
              title={ele.title}
              numCourses={ele.numCourses}
              key={ele.title}
              handleFilter={handleFilter}
              handleRemoveFilter={handleRemoveFilter}
              filterType={"duration"}
            />
          ))
      )}
    </div>
  );
}
