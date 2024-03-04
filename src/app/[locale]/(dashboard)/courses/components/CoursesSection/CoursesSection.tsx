"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import FilterCourseBoxes from "./FilterCourseBoxes";
import SearchInput from "@/app/[locale]/(dashboard)/components/SearchInput";
import CoursesPagination from "../CoursesPagination";
import ArabicWrapper from "@/app/[locale]/(dashboard)/components/ArabicWrapper";
import { SkeletonCard } from "@/app/[locale]/(dashboard)/components/SkeletonCard";
import NoResultFound from "@/app/[locale]/(dashboard)/components/NoResultFound";
import FilterPopUp from "./FilterPopUp";
import NotFoundPage from "../../../components/notFound/NotFound";

import { getFilteredCourses } from "@/api/courses/getFilteredCourses";

import useLocale from "@/helpers/useLocale";

export default function CoursesSection() {
  const locale = useLocale();
  const [searchCourse, setSearchCourse] = useState("");

  function handleChange(searchValue: string) {
    setSearchCourse(searchValue);
  }

  const [isFilterCatgory, setIsfilterCatgory] = useState([]);
  const [isFilterTech, setIsfilterTech] = useState([]);
  const [isFilterDuration, setIsfilterDuration] = useState([]);
  const [isFilterPrice, setIsfilterPrice] = useState([]);

  function handleFilter(id: number & number[] & never, whatFilter: string) {
    if (whatFilter === "category") setIsfilterCatgory((prev) => [...prev, id]);
    else if (whatFilter === "technology")
      setIsfilterTech((prev) => [...prev, id]);
    else if (whatFilter === "duration")
      setIsfilterDuration((prev) => [...prev, id]);
    else if (whatFilter === "price") setIsfilterPrice(id);
  }

  function handleRemoveFilter(id: number, whatFilter: string) {
    if (whatFilter === "category")
      setIsfilterCatgory((prev) => prev.filter((ele) => ele !== id));
    else if (whatFilter === "technology")
      setIsfilterTech((prev) => prev.filter((ele) => ele !== id));
    else if (whatFilter === "duration")
      setIsfilterDuration((prev) => prev.filter((ele) => ele !== id));
  }

  const {
    isLoading,
    data: allCourses,
    error,
  } = useQuery({
    queryKey: [
      "courses",
      isFilterCatgory,
      isFilterTech,
      isFilterDuration,
      isFilterPrice,
      searchCourse,
      locale,
    ],
    queryFn: async () =>
      await getFilteredCourses(
        searchCourse,
        isFilterCatgory,
        isFilterTech,
        isFilterDuration,
        isFilterPrice,
        locale
      ),
  });

  if (allCourses === null) return <NotFoundPage />;

  return (
    <ArabicWrapper>
      <div className="mt-40 mx-10 6xl">
        <div className="flex justify-between items-center">
          <FilterPopUp
            handleFilter={handleFilter}
            handleRemoveFilter={handleRemoveFilter}
          />
          <SearchInput searchValue={searchCourse} handleChange={handleChange} />
        </div>

        <div className="flex gap-8 w-full mt-20 relative h-fit min-h-[144rem] 6xl:min-h-[177rem] 2xl:!min-h-[226rem] 2xl:!gap-36">
          <div className="w-[24%] 6xl:!w-[40%] 1/2xl:hidden">
            <FilterCourseBoxes
              handleFilter={handleFilter}
              handleRemoveFilter={handleRemoveFilter}
            />
          </div>
          <div className="w-[76%] h-fit flex gap-x-6  gap-y-20 flex-wrap [direction:ltr] 6xl:!gap-x-16 1/2xl:!w-full 1/2xl:justify-center">
            {isLoading ? (
              <div className="flex gap-20 flex-wrap xl:justify-center">
                {Array.apply(null, Array(screen.width <= 1200 ? 6 : 9))?.map(
                  (ele, i) => (
                    <SkeletonCard key={i} />
                  )
                )}
              </div>
            ) : allCourses?.length ? (
              <CoursesPagination
                numItems={
                  (screen.width <= 1008 && 5) ||
                  (screen.width <= 1152 && 8) ||
                  12
                }
                items={allCourses}
              />
            ) : (
              <NoResultFound />
            )}
          </div>
        </div>
      </div>
    </ArabicWrapper>
  );
}
