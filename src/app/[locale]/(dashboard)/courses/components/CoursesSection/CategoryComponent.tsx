"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CheckTitleBox from "./CheckTitleBox";
import { getAllCategories } from "@/api/courses/getAllCategories";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";
import useLocale from "@/helpers/useLocale";

export function CategoryComponent({ handleFilter, handleRemoveFilter }: any) {
  const locale = useLocale();
  const {
    isLoading,
    data: allCategories,
    error,
  } = useQuery({
    queryKey: ["categories", locale],
    queryFn: async () => await getAllCategories(),
  });
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <MiniLoader />
        </div>
      ) : (
        allCategories
          ?.map((category: any) => ({
            id: category?.id,

            title: category?.attributes?.title,
            numCourses: category?.attributes?.courses?.data?.filter(
              (course: any) => course?.attributes?.locale === locale
            )?.length,
          }))
          ?.map((ele: { title: string; numCourses: number; id: number }) => (
            <CheckTitleBox
              id={ele.id}
              title={ele.title}
              numCourses={ele.numCourses}
              key={ele.title}
              handleFilter={handleFilter}
              handleRemoveFilter={handleRemoveFilter}
              filterType={"category"}
            />
          ))
      )}
    </div>
  );
}
