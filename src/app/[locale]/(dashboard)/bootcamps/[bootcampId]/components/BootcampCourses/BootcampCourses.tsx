"use client";
import React from "react";
import { useTranslations } from "next-intl";
import CollapseCourses from "./CollapseCourses";
import transformNumtoLabel from "@/helpers/transformNumtoLabel";
import useLocale from "@/helpers/useLocale";
import CourseCollapsedBox from "./CourseCollapsedBox";

export default function BootcampCourses({ data }: any) {
  const t = useTranslations("Bootcamp.courses");
  const locale = useLocale();

  const courses = data?.data?.map((course: any) => course.attributes);
  return (
    <div className="mt-44 flex flex-col gap-4 w-[96%]">
      <h2 className="text-[3.6rem] font-medium _2xl:text-[4.4rem]  _1/2xl:text-[4.8rem] _lg:!text-[5.6rem] ">
        {t("title")}
      </h2>
      <p className="text-[1.6rem] text-gray-1 font-extralight _2xl:text-[2rem]  _1/2xl:text-[2.4rem] _lg:!text-[3rem] ">
        {t("subtitle")}
      </p>
      <div className=" px-4 border-gray-200 border rounded-[1.8rem] mt-4">
        {courses?.map((ele: any, i: number) => (
          <div key={i}>
            <CollapseCourses
              title={transformNumtoLabel(i + 1, locale)}
              Component={CourseCollapsedBox}
              data={ele}
            />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
