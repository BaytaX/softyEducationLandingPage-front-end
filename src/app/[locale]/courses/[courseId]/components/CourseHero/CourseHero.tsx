"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";

import Button from "@/app/[locale]/components/Button";
import CourseHeroVideoPlayer from "./CourseHeroVideoPlayer";

import { BASE_URL } from "@/constants/backend";

import HeroBg from "../../../../../../../public/courses_imgs/herocoursesbg.webp";
import clockIcon from "../../../../../../../public/bootcamps_imgs/clockIcon.png";
import mapIcon from "../../../../../../../public/bootcamps_imgs/mapIcon.png";
import calendarIcon from "../../../../../../../public/bootcamps_imgs/calendarIcon.png";
import certifiedIcon from "../../../../../../../public/bootcamps_imgs/certifiedIcon.png";
import calendarMark from "../../../../../../../public/courses_imgs/calendarMark.png";
import tagPrice from "../../../../../../../public/courses_imgs/tagPrice.png";
import { getCourseById } from "@/api/courses/getCourseById";
import CourseAttributes from "@/types/coursePropsType";
import transformStringtoArr from "@/helpers/transformStringtoArr";
import { formatDate_3 } from "@/helpers/formatDate";
import useArabic from "@/helpers/useArabic";

export default function CourseHero({ data }: any) {
  const t = useTranslations("Course.hero");
  const isArabic = useArabic();
  const {
    title,
    description,
    duration,
    howManyTimes,
    where,
    pre_requirements,
    new_session,
    original_price,
    discount_price,
    img,
    video_link,
    instructor,
  } = data;
  const courseImg = img?.data?.attributes?.url;
  const { full_name, job, avatar } = instructor?.data?.attributes;
  const avatarImg = avatar?.data?.attributes?.url;

  return (
    <div className="mt-72 w-[98%]">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-48 right-0 w-full -ml-52 -z-10 opacity-25"
        draggable={false}
        priority
      />
      <div className="flex gap-20 items-center mt-32">
        <CourseHeroVideoPlayer img={courseImg} video_link={video_link} />
        <div className="rounded-[2rem] bg-white w-[48%] h-[58rem] justify-around px-12 pb-12 pt-6  flex flex-col  shadow-lg">
          <div className="flex flex-col gap-4">
            <h2 className="text-[2.6rem] font-semibold">{title}</h2>
            <p className="text-[1.6rem] font-light text-gray-1 w-11/12">
              {description}
            </p>
          </div>
          <div>
            <h4 className="text-[1.8rem] font-medium">{t("requirements")}</h4>
            <p className="text-[1.6rem] font-light text-gray-1 w-11/12">
              {transformStringtoArr(pre_requirements).join(",")}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-2">
                <Image
                  src={clockIcon}
                  alt={"clock Icon"}
                  width={25}
                  height={25}
                  draggable={false}
                />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {duration}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={calendarIcon}
                  alt={"calendar Icon"}
                  width={25}
                  height={25}
                  draggable={false}
                />

                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {howManyTimes}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-2">
                <Image
                  src={mapIcon}
                  alt={"map Icon"}
                  width={25}
                  height={25}
                  draggable={false}
                />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {where}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={certifiedIcon}
                  alt={" certified Icon"}
                  width={25}
                  height={25}
                  draggable={false}
                />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {t("certified_course")}
                </p>
                {/* <a
                  href="#"
                  className="text-gray-400  text-[1.2rem] hover:underline font-extralight"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            {
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={`${BASE_URL}${avatarImg}`}
                alt={"avatar"}
                width={60}
                height={60}
                className="rounded-full w-[7rem] h-[7rem]"
                draggable={false}
              />
            }
            <div className="flex flex-col gap-1">
              <p className="text-[1.6rem] font-light text-gray-1">
                {t("instructor")}
              </p>
              <p className="text-[1.8rem] font-medium">{full_name}</p>
              <p className="text-[1.2rem] font-extralight text-gray-1">{job}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={calendarMark}
                alt={"calendar Icon"}
                width={25}
                height={25}
                draggable={false}
              />
              <p className="  text-[1.6rem] font-medium">
                {t("new_session")}
                <span className=" font-light text-gray-1 ml-2">
                  {formatDate_3(new_session, isArabic)}
                </span>
              </p>
            </div>
            <div className="flex justify-between items-end">
              <Button className=" w-[34rem]  px-6 bg-color-blue-2 text-white font-normal border-[0.3rem] border-transparent py-3 ">
                {t("enroll")}
              </Button>

              <div className="flex flex-col items-end pr-8">
                <p className="text-[1.8rem] tracking-wide text-color-green-1 line-through font-semibold">
                  {original_price} {t("TND")}
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={tagPrice}
                    alt={"tag price Icon"}
                    width={35}
                    height={35}
                    draggable={false}
                  />
                  <p className=" text-[3.2rem] tracking-wide font-semibold">
                    {discount_price} {t("TND")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
