"use client";
import React from "react";
import Image from "next/image";
import CollapseCurriculum from "./CollapseCurriculum";
import CourseCollapsedBox from "@/app/[locale]/bootcamps/[bootcampId]/components/BootcampCourses/CourseCollapsedBox";
import lectureIcon from "../../../../../../../public/courses_imgs/lectureIcon.png";
import clockIcon from "../../../../../../../public/courses_imgs/clockCircle.png";
import folderIcon from "../../../../../../../public/courses_imgs/folderIcon.png";
import CurriculumCollapsedBox from "./CurriculumCollapsedBox";
import { useTranslations } from "next-intl";
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
      <div className="flex justify-between items-center">
        <h2 className="text-[3.6rem] font-medium">{t("title")}</h2>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={folderIcon}
              alt={"folder icon"}
              width={20}
              height={20}
              draggable={false}
            />
            <p className="text-[1.4rem] text-gray-1 font-light">
              <span>
                {isArabic ? numSections.toLocaleString("ar-eg") : numSections}{" "}
              </span>{" "}
              {t("sections")}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={lectureIcon}
              alt={"play lecture icon"}
              width={20}
              height={20}
              draggable={false}
            />
            <p className="text-[1.4rem] text-gray-1 font-light">
              {isArabic ? numLectures.toLocaleString("ar-eg") : numLectures}{" "}
              {t("lectures")}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={clockIcon}
              alt={"clock icon"}
              width={20}
              height={20}
              draggable={false}
            />
            <p className="text-[1.4rem] text-gray-1 font-light">{duration}</p>
          </div>
        </div>
      </div>
      <div className=" px-4 border-gray-200 border  rounded-[1.8rem] mt-4">
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
