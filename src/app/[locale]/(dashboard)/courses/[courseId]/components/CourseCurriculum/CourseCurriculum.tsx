"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import CollapseCurriculum from "./CollapseCurriculum";
import CurriculumCollapsedBox from "./CurriculumCollapsedBox";

import lectureIcon from "@/../../public/courses_imgs/lectureIcon.png";
import clockIcon from "@/../../public/courses_imgs/clockCircle.png";
import folderIcon from "@/../../public/courses_imgs/folderIcon.png";

import useArabic from "@/helpers/useArabic";

export default function CourseCurriculum({ data }: any) {
  const t = useTranslations("Course.curriculum");
  const isArabic = useArabic();

  const { duration, sub_courses } = data;
  const numLectures = sub_courses?.data
    ?.map(
      (ele: any) =>
        ele.attributes.contents?.data?.filter(
          (ele: any) => ele?.attributes?.type !== "project"
        )?.length
    )
    .reduce((ele: number, acc: number) => ele + acc, 0);
  const numSections = sub_courses?.data?.length;

  return (
    <div className="mt-44 flex flex-col gap-4 w-[98%]">
      <div className="flex justify-between items-center 1/2xl:flex-col 1/2xl:gap-8 ">
        <h2 className="text-[3.6rem] font-medium 2xl:text-[4.4rem]  1/2xl:text-[4.8rem] lg:!text-[5.6rem] ">
          {t("title")}
        </h2>
        <div className="flex gap-8 items-center 1/2xl:gap-12 sm:flex-wrap sm:justify-center">
          <div className="flex gap-2 items-center 1/2xl:gap-4">
            <Image
              src={folderIcon}
              alt={"folder icon"}
              width={20}
              height={20}
              className="w-[2rem] 2xl:w-[3rem]  1/2xl:w-[4rem] lg:!w-[5rem]"
              draggable={false}
            />
            <p className="text-[1.4rem] text-gray-1 font-light 2xl:text-[1.8rem]  1/2xl:text-[2.4rem] lg:!text-[3rem]">
              <span>
                {isArabic ? numSections.toLocaleString("ar-eg") : numSections}{" "}
              </span>{" "}
              {t("sections")}
            </p>
          </div>
          <div className="flex gap-2 items-center 1/2xl:gap-4">
            <Image
              src={lectureIcon}
              alt={"play lecture icon"}
              width={20}
              height={20}
              className="w-[2rem] 2xl:w-[3rem]  1/2xl:w-[4rem] lg:!w-[5rem]"
              draggable={false}
            />
            <p className="text-[1.4rem] text-gray-1 font-light 2xl:text-[1.8rem]  1/2xl:text-[2.4rem] lg:!text-[3rem]">
              {isArabic ? numLectures.toLocaleString("ar-eg") : numLectures}{" "}
              {t("lectures")}
            </p>
          </div>
          <div className="flex gap-2 items-center 1/2xl:gap-4">
            <Image
              src={clockIcon}
              alt={"clock icon"}
              width={20}
              height={20}
              className="w-[2rem] 2xl:w-[3rem]  1/2xl:w-[4rem] lg:!w-[5rem]"
              draggable={false}
            />
            <p className="text-[1.4rem] text-gray-1 font-light 2xl:text-[1.8rem]  1/2xl:text-[2.4rem] lg:!text-[3rem]">
              {duration}
            </p>
          </div>
        </div>
      </div>
      <div className=" px-4 border-gray-200 border  rounded-[1.8rem] mt-4 1/2xl:mt-12">
        {sub_courses?.data?.map(
          (ele: {
            id: number;
            attributes: {
              title: string;
              numLectures: number;
              duration: string;
              contents: {
                data: {
                  id: number;
                  attributes: {
                    title: string;
                    type: string;
                    propriety: string;
                  };
                }[];
              };
            };
          }) => (
            <>
              <CollapseCurriculum
                Component={CurriculumCollapsedBox}
                data={ele?.attributes}
              />
              <hr />
            </>
          )
        )}
      </div>
    </div>
  );
}
