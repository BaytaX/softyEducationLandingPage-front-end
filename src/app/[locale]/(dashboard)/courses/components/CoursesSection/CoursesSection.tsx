"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import FilterCourseBoxes from "./FilterCourseBoxes";
import SearchInput from "@/app/[locale]/(dashboard)/components/SearchInput";
import CoursesPagination from "../CoursesPagination";
import ArabicWrapper from "@/app/[locale]/(dashboard)/components/ArabicWrapper";
import { getAllCourses } from "@/api/courses/getAllCourses";
import Loader from "@/app/[locale]/(dashboard)/components/Loader";
import { getFilteredCourses } from "@/api/courses/getFilteredCourses";
import { Skeleton } from "@/app/[locale]/(dashboard)/components/Skeleton";
import { SkeletonCard } from "@/app/[locale]/(dashboard)/components/SkeletonCard";
import NoResultFound from "@/app/[locale]/(dashboard)/components/NoResultFound";
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

  // const items = [
  //   {
  //     id: 1,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 2,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 3,
  //     title: "Get started with React fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 4,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 5,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 6,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 7,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 8,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 9,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 10,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 11,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 12,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 13,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 14,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 15,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  //   {
  //     id: 16,
  //     title: "Get started with Angular fundamentals",
  //     description:
  //       "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
  //     time: "08 : 30 PM - 12 : 00 PM",
  //     starting_date: "Oct 21, 2023",
  //     where: "on-site",
  //     img: "/courses_imgs/courses_img.jpg",
  //     link: "",
  //   },
  // ];
  return (
    <ArabicWrapper>
      <div className="mt-40 ml-0">
        <SearchInput searchValue={searchCourse} handleChange={handleChange} />

        <div className="flex gap-8 w-full mt-20 relative h-[140rem]">
          <div className="w-[24%]">
            <FilterCourseBoxes
              handleFilter={handleFilter}
              handleRemoveFilter={handleRemoveFilter}
            />
          </div>
          <div className="w-[76%] flex gap-x-6 h-fit gap-y-20 flex-wrap [direction:ltr]">
            {isLoading ? (
              <div className="flex gap-20 flex-wrap">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            ) : allCourses?.length ? (
              <CoursesPagination numItems={12} items={allCourses} />
            ) : (
              <NoResultFound />
            )}
          </div>
        </div>
      </div>
    </ArabicWrapper>
  );
}
