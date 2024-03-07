"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CheckTitleBox from "./CheckTitleBox";
import { getAllTechnologies } from "@/api/courses/getAllTechnologies";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";
import useLocale from "@/helpers/useLocale";

export function TechComponent({
  handleFilter,
  handleRemoveFilter,
  value,
}: any) {
  const locale = useLocale();
  const {
    isLoading,
    data: allTechnologies,
    error,
  } = useQuery({
    queryKey: ["technologies"],
    queryFn: async () => await getAllTechnologies(),
  });
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <MiniLoader />
        </div>
      ) : (
        allTechnologies
          ?.map((tech: any) => ({
            id: tech?.id,

            title: tech?.attributes?.title,
            numCourses: tech?.attributes?.courses?.data?.filter(
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
              filterType={"technology"}
              value={value}
            />
          ))
      )}
    </div>
  );
}
