"use client";
import React from "react";
import ExploreCourseBox from "./ExploreCourseBox";
import SwiperComponent from "../swiper/Swiper";
import ExploreCoursesRightBtn from "./ExploreCoursesRightBtn";
import ExploreCoursesLeftBtn from "./ExploreCoursesLeftBtn";

function ExploreSwiperBtns() {
  return (
    <>
      <ExploreCoursesLeftBtn />
      <ExploreCoursesRightBtn />
    </>
  );
}

export default function ExploreCoursesSwiper() {
  const data = [
    {
      title: "Web Design",
      description: "Craft stunning websites with Web Design courses",
      link: "",
    },
    {
      title: "Web Design",
      description: "Craft stunning websites with Web Design courses",
      link: "",
    },
    {
      title: "Web Design",
      description: "Craft stunning websites with Web Design courses",
      link: "",
    },
    {
      title: "Web Design",
      description: "Craft stunning websites with Web Design courses",
      link: "",
    },
  ];
  return (
    <SwiperComponent
      data={data}
      Component={ExploreCourseBox}
      SwiperButtons={ExploreSwiperBtns}
      className="relative rounded-[2rem]"
      width="!w-[44rem]"
    />
  );
}
