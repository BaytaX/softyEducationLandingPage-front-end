import React from "react";
import HeroBg from "../../../../../../public/imgs/herobg.png";
import Image from "next/image";
import CoursesSwiper from "./CoursesSwiper";

export default function HeroSectionCourses() {
  return (
    <div className="mt-72">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-[4%] right-0 w-full -ml-52 -z-10"
        priority
      />
      <div className="flex items-center flex-col justify-center gap-8">
        <h1 className="text-[4.4rem] font-medium">Popular Courses</h1>
        <CoursesSwiper />
      </div>
    </div>
  );
}
