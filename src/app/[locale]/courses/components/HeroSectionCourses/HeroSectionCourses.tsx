import React from "react";
import HeroBg from "../../../../../../public/courses_imgs/herocoursesbg.webp";
import Image from "next/image";
import CoursesSwiper from "./CoursesSwiper";
import TechnologiesButton from "./TechnologiesButton";

export default function HeroSectionCourses() {
  return (
    <div className="mt-72 ml-24">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-[10%] right-0 w-full -ml-52 -z-10 opacity-20"
        priority
      />
      <div className="flex items-center flex-col justify-center gap-8">
        <h1 className="text-[4.4rem] font-medium">Popular Courses</h1>
        <CoursesSwiper />
        <div className="flex gap-10">
          <TechnologiesButton title={"HTML 5"} numCourses={2730} />
          <TechnologiesButton title={"CSS 3"} numCourses={13500} />
          <TechnologiesButton title={"Javascript"} numCourses={1050} />
          <TechnologiesButton title={"Laravel"} numCourses={2400} />
          <TechnologiesButton title={"Django"} numCourses={3210} />
        </div>
      </div>
    </div>
  );
}
