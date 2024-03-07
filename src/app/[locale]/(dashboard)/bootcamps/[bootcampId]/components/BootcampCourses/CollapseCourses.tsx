"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import useArabic from "@/helpers/useArabic";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import lectureIcon from "@/../../public/bootcamps_imgs/lectureIcon.png";
import clockIcon from "@/../../public/bootcamps_imgs/clockCircle.png";

type CollapseBoxPropsType = {
  title: string;
  Component: any;
  data: any;
};

export default function CollapseCourses({
  title,
  Component,
  data,
}: CollapseBoxPropsType) {
  const t = useTranslations("Course.curriculum");
  const isArabic = useArabic();
  const { duration } = data;
  const numLectures = data?.sub_courses?.data
    ?.map(
      (ele: any) =>
        ele.attributes.contents?.data?.filter(
          (ele: any) => ele?.attributes?.type !== "project"
        )?.length
    )
    .reduce((ele: number, acc: number) => ele + acc, 0);

  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className={`w-full    bg-white`}>
      <div
        className="flex justify-between  w-full items-start p-8 cursor-pointer _sm:!flex-col _sm:!gap-4 _sm:!items-start"
        onClick={handleToggle}
      >
        <div className="flex gap-4 items-start">
          {isOpen ? (
            <IoIosArrowUp
              className={`text-[2rem]  _2xl:text-[2.4rem]  _1/2xl:text-[2.8rem] _lg:!text-[3.2rem] ${
                isOpen ? "text-color-blue-2" : "text-gray-500"
              } `}
            />
          ) : (
            <IoIosArrowDown
              className={`text-[2rem]  _2xl:text-[2.4rem]  _1/2xl:text-[2.8rem] _lg:!text-[3.2rem] ${
                isOpen ? "text-color-blue-2" : "text-gray-500"
              } `}
            />
          )}

          {isOpen ? (
            <p
              className={`text-[1.6rem]  tracking-wide _2xl:text-[2rem]  _1/2xl:text-[2.4rem] _lg:!text-[2.8rem] ${
                isOpen ? "text-color-blue-2" : ""
              }`}
            >
              {t("course_title")}
            </p>
          ) : (
            <div className="flex [direction:ltr] gap-2">
              <p
                className={`text-[1.6rem]  tracking-wide _2xl:text-[2rem]  _1/2xl:text-[2.4rem] _lg:!text-[2.8rem] ${
                  isOpen ? "text-color-blue-2" : ""
                }`}
              >
                {title}
              </p>
              <p
                className={`text-[1.6rem]  tracking-wide _2xl:text-[2rem]  _1/2xl:text-[2.4rem] _lg:!text-[2.8rem] ${
                  isOpen ? "text-color-blue-2" : ""
                }`}
              >
                {t("course")}
              </p>
            </div>
          )}
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={lectureIcon}
              alt={"play lecture icon"}
              width={20}
              height={20}
              className="min-w-[2rem] _2xl:min-w-[2.6rem]  _1/2xl:min-w-[3.2rem] _lg:!min-w-[3.8rem]"
              draggable={false}
            />
            <p className="text-[1.4rem] text-gray-1 font-light _2xl:text-[1.6rem]  _1/2xl:text-[2rem] _lg:!text-[2.6rem]">
              {`  ${
                isArabic ? numLectures.toLocaleString("ar-eg") : numLectures
              }
 ${t("lectures")}`}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={clockIcon}
              alt={"clock icon"}
              width={20}
              height={20}
              className="min-w-[2rem] _2xl:min-w-[2.6rem]  _1/2xl:min-w-[3.2rem] _lg:!min-w-[3.8rem]"
              draggable={false}
            />
            <p className="text-[1.4rem] text-gray-1 font-light _2xl:text-[1.6rem]  _1/2xl:text-[2rem] _lg:!text-[2.6rem]">
              {duration}
            </p>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="  transition-all  rounded-b-3xl p-2 ">
          <Component data={data} />
        </div>
      ) : null}
    </div>
  );
}
