"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import CoursesSwiper from "./CoursesSwiper";
import TechnologiesSwiper from "./TechnologiesSwiper";

import HeroBg from "@/../../public/courses_imgs/herocoursesbg.webp";

export default function HeroSectionCourses() {
  const t = useTranslations("Courses.hero");
  return (
    <div className="mt-72 ml-24 _xl:ml-56 _1/2xl:ml-64">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-[10%] right-0 w-full -ml-52 -z-10 opacity-20 _lg:!hidden"
        draggable={false}
        priority
      />
      <div className="flex items-center flex-col justify-center gap-8 _2xl:hidden">
        <h1 className="text-[4.4rem] font-medium">{t("title")}</h1>

        <CoursesSwiper />
        <TechnologiesSwiper />
      </div>
      <div className="hidden items-center flex-col justify-center gap-8 _2xl:flex ">
        <h1 className="text-[4.4rem] font-medium  _1/2xl:text-[5rem] _xl:-ml-[16rem]">
          {t("title")}
        </h1>
        <div className=" _1/2xl:ml-20 w-full">
          <TechnologiesSwiper />
        </div>
        <div className="mt-16 w-full ">
          <CoursesSwiper />
        </div>
      </div>
    </div>
  );
}
