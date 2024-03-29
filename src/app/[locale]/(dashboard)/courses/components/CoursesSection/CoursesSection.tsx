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
import { useLocale } from "next-intl";

import { MAX_PRICE, MIN_PRICE } from "@/constants/priceRange";

export default function CoursesSection() {
  const locale = useLocale();
  const [searchCourse, setSearchCourse] = useState("");

  function handleChange(searchValue: string) {
    setSearchCourse(searchValue);
  }

  const [isFilterCatgory, setIsfilterCatgory] = useState([]);
  const [isFilterTech, setIsfilterTech] = useState([]);
  const [isFilterDuration, setIsfilterDuration] = useState([]);
  const [isFilterPrice, setIsfilterPrice] = useState([MIN_PRICE, MAX_PRICE]);

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
      <div className="mt-40 mx-10 4xl">
        <div className="flex justify-between items-center">
          <FilterPopUp
            handleFilter={handleFilter}
            handleRemoveFilter={handleRemoveFilter}
            isFilterCatgory={isFilterCatgory}
            isFilterTech={isFilterTech}
            isFilterDuration={isFilterDuration}
            isFilterPrice={isFilterPrice}
          />

          <SearchInput searchValue={searchCourse} handleChange={handleChange} />
        </div>

        <div className="flex gap-8 w-full mt-20 relative h-fit min-h-[144rem] _4xl:min-h-[177rem] _2xl:!min-h-[226rem] _2xl:!gap-36">
          <div className="w-[34rem]  _xl:hidden">
            <FilterCourseBoxes
              handleFilter={handleFilter}
              handleRemoveFilter={handleRemoveFilter}
              isFilterCatgory={isFilterCatgory}
              isFilterTech={isFilterTech}
              isFilterDuration={isFilterDuration}
              isFilterPrice={isFilterPrice}
            />
          </div>

          {isLoading ? (
            <>
              <div className="h-fit w-[76%] flex gap-x-8 gap-y-20 flex-wrap _xl:justify-center _xl:w-full _4xl:hidden">
                {Array.apply(null, Array(9))?.map((ele, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
              <div className=" h-fit w-[76%] gap-x-16 ml-10 gap-y-20  flex-wrap _xl:justify-center _xl:w-full hidden _4xl:flex">
                {Array.apply(null, Array(6))?.map((ele, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            </>
          ) : allCourses?.length ? (
            <>
              <div className="w-[76%] h-fit flex gap-x-6  gap-y-20 flex-wrap [direction:ltr] _4xl:!gap-x-16 _xl:!w-full _xl:justify-center _4xl:hidden">
                <CoursesPagination numItems={12} items={allCourses} />
              </div>
              <div className="w-[76%] h-fit  gap-x-6  gap-y-20 flex-wrap [direction:ltr] _4xl:!gap-x-16 _xl:!w-full _xl:justify-center hidden _4xl:flex _2xl:!hidden">
                <CoursesPagination numItems={8} items={allCourses} />
              </div>
              <div className="w-[76%] h-fit  gap-x-6  gap-y-20 flex-wrap [direction:ltr] _4xl:!gap-x-16 _xl:!w-full _xl:justify-center hidden _2xl:flex">
                <CoursesPagination numItems={5} items={allCourses} />
              </div>
            </>
          ) : (
            <div className="w-[76%]">
              <NoResultFound />
            </div>
          )}
        </div>
      </div>
    </ArabicWrapper>
  );
}
