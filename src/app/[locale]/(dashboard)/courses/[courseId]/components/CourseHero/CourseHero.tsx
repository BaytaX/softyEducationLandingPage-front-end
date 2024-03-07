"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";

import Button from "@/app/[locale]/(dashboard)/components/Button";
import CourseHeroVideoPlayer from "./CourseHeroVideoPlayer";

import HeroBg from "@/../../public/courses_imgs/herocoursesbg.webp";
import clockIcon from "@/../../public/bootcamps_imgs/clockIcon.png";
import mapIcon from "@/../../public/bootcamps_imgs/mapIcon.png";
import calendarIcon from "@/../../public/bootcamps_imgs/calendarIcon.png";
import certifiedIcon from "@/../../public/bootcamps_imgs/certifiedIcon.png";
import calendarMark from "@/../../public/courses_imgs/calendarMark.png";
import tagPrice from "@/../../public/courses_imgs/tagPrice.png";

import transformStringtoArr from "@/helpers/transformStringtoArr";
import { formatDate_3 } from "@/helpers/formatDate";
import useArabic from "@/helpers/useArabic";

import { BASE_URL } from "@/constants/backend";

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
      <div className="flex gap-20 items-center mt-32 _2xl:flex-col">
        <CourseHeroVideoPlayer img={courseImg} video_link={video_link} />
        <div className="rounded-[2rem] bg-white w-[48%] h-fit gap-8 px-12 pb-12 pt-6  flex flex-col  shadow-lg _2xl:w-11/12 _2xl:py-20 _2xl:gap-16 _lg:!gap-20 _lg:!py-32">
          <div className="flex flex-col gap-4">
            <h2 className="text-[2.6rem] font-semibold _2xl:text-[3.2rem] _1/2xl:text-[4rem] _lg:!text-[4.8rem]">
              {title}
            </h2>
            <p className="text-[1.6rem] font-light text-gray-1 w-11/12 _2xl:text-[2rem] _1/2xl:text-[2.6rem] _1/2xl:!w-full _lg:!text-[3.2rem]">
              {description}
            </p>
          </div>
          <div>
            <h4 className="text-[1.8rem] font-medium _2xl:text-[2.4rem] _1/2xl:text-[3.2rem] _lg:!text-[4rem]">
              {t("requirements")}
            </h4>
            <p className="text-[1.6rem] font-light text-gray-1 w-11/12 _2xl:text-[2rem] _1/2xl:text-[2.6rem] _1/2xl:!w-full _lg:!text-[3.2rem] ">
              {transformStringtoArr(pre_requirements).join(",")}
            </p>
          </div>
          <div className="flex flex-col gap-6 _xs:gap-16">
            <div className="flex items-center flex-wrap gap-16 _xs:flex-col _xs:items-start">
              <div className="flex items-start gap-2 ">
                <Image
                  src={clockIcon}
                  alt={"clock Icon"}
                  width={25}
                  height={25}
                  draggable={false}
                  className={
                    "min-w-[2.6rem] _2xl:min-w-[3.2rem] _1/2xl:min-w-[4.4rem] _lg:!min-w-[5.6rem]"
                  }
                />
                <p className="text-gray-1  text-[1.6rem] font-medium _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem]">
                  {duration}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src={calendarIcon}
                  alt={"calendar Icon"}
                  width={25}
                  height={25}
                  draggable={false}
                  className={
                    "min-w-[2.6rem] _2xl:min-w-[3.2rem] _1/2xl:min-w-[4.4rem] _lg:!min-w-[5.6rem]"
                  }
                />

                <p className="text-gray-1  text-[1.6rem] font-medium _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem]">
                  {howManyTimes}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-16 _xs:flex-col _xs:items-start">
              <div className="flex items-start gap-2">
                <Image
                  src={mapIcon}
                  alt={"map Icon"}
                  width={25}
                  height={25}
                  draggable={false}
                  className={
                    "min-w-[2.6rem] _2xl:min-w-[3.2rem] _1/2xl:min-w-[4.4rem] _lg:!min-w-[5.6rem]"
                  }
                />
                <p className="text-gray-1  text-[1.6rem] font-medium _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem]">
                  {where}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src={certifiedIcon}
                  alt={" certified Icon"}
                  width={25}
                  height={25}
                  draggable={false}
                  className={
                    "min-w-[2.6rem] _2xl:min-w-[3.2rem] _1/2xl:min-w-[4.4rem] _lg:!min-w-[5.6rem]"
                  }
                />
                <p className="text-gray-1  text-[1.6rem] font-medium _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem]">
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
          <div className="flex gap-6 items-center _sm:gap-12">
            {
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={`${BASE_URL}${avatarImg}`}
                alt={"avatar"}
                width={60}
                height={60}
                className="rounded-full w-[7rem] h-[7rem] _2xl:w-[9rem] _2xl:h-[9rem] _1/2xl:w-[12rem] _1/2xl:h-[12rem] _lg:!w-[16rem] _lg:!h-[16rem]"
                loading="lazy"
                draggable={false}
              />
            }
            <div className="flex flex-col gap-1">
              <p className="text-[1.6rem] font-light text-gray-1 _2xl:text-[2rem] _1/2xl:text-[2.6rem] _lg:!text-[3.6rem]">
                {t("instructor")}
              </p>
              <p className="text-[1.8rem] font-medium _2xl:text-[2.2rem] _1/2xl:text-[2.8rem] _lg:!text-[4rem]">
                {full_name}
              </p>
              <p className="text-[1.2rem] font-extralight text-gray-1 _2xl:text-[1.6rem] _1/2xl:text-[2.2rem] _lg:!text-[2.8rem]">
                {job}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2">
              <Image
                src={calendarMark}
                alt={"calendar Icon"}
                width={25}
                height={25}
                className="min-w-[2.6rem] _2xl:min-w-[3.2rem] _1/2xl:min-w-[4.4rem] _lg:!min-w-[5.6rem]"
                draggable={false}
              />
              <p className="  text-[1.6rem] font-medium _2xl:text-[2rem] _1/2xl:text-[2.6rem] _lg:!text-[3.2rem]">
                {t("new_session")}
                <span className=" font-light text-gray-1 ml-2">
                  {formatDate_3(new_session, isArabic)}
                </span>
              </p>
            </div>
            <div className="flex justify-between items-end _lg:flex-col-reverse _lg:gap-8 _lg:mt-10">
              <Button className=" w-[56%]  px-6 bg-color-blue-2 text-white font-normal border-[0.3rem] border-transparent py-3 _2xl:text-[2.2rem] _1/2xl:text-[2.8rem] _lg:!text-[4rem] _lg:!py-4 _lg:w-full">
                {t("enroll")}
              </Button>

              <div className="flex flex-col items-end pr-8 _lg:flex-row-reverse _lg:self-start _lg:gap-8 _lg:items-center _sm:flex-wrap _sm:!gap-1">
                <p className="text-[1.8rem] tracking-wide text-color-green-1 line-through font-semibold _2xl:text-[2.4rem] _1/2xl:text-[3rem] _lg:!text-[4rem]">
                  {original_price} {t("TND")}
                </p>
                <div className="flex items-center gap-2 w-max">
                  <Image
                    src={tagPrice}
                    alt={"tag price Icon"}
                    width={35}
                    height={35}
                    draggable={false}
                    className="min-w-[3.6rem] _2xl:min-w-[5rem] _1/2xl:min-w-[6rem] _lg:!min-w-[7.2rem]"
                  />
                  <p className=" text-[3.2rem] tracking-wide font-semibold _2xl:text-[4.4rem] _1/2xl:text-[5rem] _lg:!text-[6.4rem]">
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
