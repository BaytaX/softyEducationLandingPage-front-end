import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/app/[locale]/(dashboard)/components/Button";
import BootcampHeroTitleBox from "./BootcampHeroTitleBox";

import HeroBg from "@/../../public/imgs/herobg.webp";
import clockIcon from "@/../../public/bootcamps_imgs/clockIcon.png";
import mapIcon from "@/../../public/bootcamps_imgs/mapIcon.png";
import calendarIcon from "@/../../public/bootcamps_imgs/calendarIcon.png";
import certifiedIcon from "@/../../public/bootcamps_imgs/certifiedIcon.png";

import transformStringtoArr from "@/helpers/transformStringtoArr";

import { BASE_URL } from "@/constants/backend";

export default function BootcampHero({ data }: any) {
  const t = useTranslations("Bootcamp");

  const {
    title,
    description,
    img,
    duration,
    howManyTimes,
    where,
    nextSession,
  } = data;
  const bootcamp_img = img?.data?.attributes?.url;
  return (
    <div className="mt-72 w-[96%] _lg:w-full">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-0 right-0 w-full -ml-52 -z-10 "
        draggable={false}
        priority
      />
      <BootcampHeroTitleBox />
      <div className="flex gap-12 items-center mt-10 _2xl:flex-col _lg:items-start">
        <div className="rounded-[2rem] h-fit gap-16 bg-white w-1/2 p-14 flex flex-col justify-between shadow-lg _2xl:w-11/12 _2xl:py-20  _lg:!gap-20 _lg:!py-32">
          <h2 className="text-[3rem] font-medium _2xl:text-[3.2rem] _1/2xl:text-[4rem] _lg:!text-[4.8rem]">
            {title}
          </h2>
          <p className="text-[1.6rem] font-light text-gray-1 w-11/12 _2xl:text-[2rem] _1/2xl:text-[2.6rem] _1/2xl:!w-full _lg:!text-[3.2rem]">
            {description}
          </p>
          <div className="flex flex-col gap-6 _xs:gap-16">
            <div className="flex items-center gap-16 flex-wrap _xs:flex-col _xs:items-start">
              <div className="flex items-start gap-2">
                <Image
                  src={clockIcon}
                  alt={"clock Icon"}
                  width={25}
                  height={25}
                  className={
                    "min-w-[2.6rem] _2xl:min-w-[3.2rem] _1/2xl:min-w-[4.4rem] _lg:!min-w-[5.6rem]"
                  }
                  draggable={false}
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
                  className={
                    "min-w-[2.6rem] _2xl:min-w-[3.2rem] _1/2xl:min-w-[4.4rem] _lg:!min-w-[5.6rem]"
                  }
                  draggable={false}
                />

                <p className="text-gray-1  text-[1.6rem] font-medium _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem]">
                  {howManyTimes}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-16 flex-wrap _xs:flex-col _xs:items-start">
              <div className="flex items-start gap-2">
                <Image
                  src={certifiedIcon}
                  alt={" certified Icon"}
                  width={25}
                  height={25}
                  className={
                    "min-w-[2.6rem] _2xl:min-w-[3.2rem] _1/2xl:min-w-[4.4rem] _lg:!min-w-[5.6rem]"
                  }
                  draggable={false}
                />
                <p className="text-gray-1  text-[1.6rem] font-medium _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem]">
                  {t("certified_course")}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src={mapIcon}
                  alt={"map Icon"}
                  width={25}
                  height={25}
                  className={
                    "min-w-[2.6rem] _2xl:min-w-[3.2rem] _1/2xl:min-w-[4.4rem] _lg:!min-w-[5.6rem]"
                  }
                  draggable={false}
                />
                <p className="text-gray-1  text-[1.6rem] font-medium _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem]">
                  {where}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-12 _2xl:flex-wrap _lg:justify-center">
            <Button className=" min-w-max w-[36%] px-6 bg-color-yellow-2 text-white font-normal border-[0.3rem] border-transparent py-2 _2xl:text-[2.2rem] _1/2xl:text-[2.8rem] _lg:!text-[4rem] _lg:!py-4 _lg:w-[70%]">
              {t("enroll")}
            </Button>
            <div className=" flex  gap-6 items-center  rounded-full px-12 bg-bg-color-bootcamps font-medium border-[0.3rem] border-transparent py-3 text-[1.6rem] _2xl:text-[2.2rem] _1/2xl:text-[2.8rem] _1/2xl:py-5 _lg:!text-[3.6rem] _lg:!gap-12 _lg:!w-full _lg:!justify-center">
              <p className="min-w-max flex flex-wrap">
                {t("next_session")}{" "}
                <span>
                  <span>{transformStringtoArr(nextSession)[0]} </span> &#8212;
                  <span> {transformStringtoArr(nextSession)[1]}</span>
                </span>
              </p>
              <div>
                <div className="w-[2.4rem] h-[2.4rem]  bg-white rounded-full p-[0.2rem] border border-gray-300  _2xl:w-[3.5rem] _2xl:h-[3.5rem] _2xl:p-1 _lg:!w-[5.3rem] _lg:!h-[5.3rem]">
                  <div className=" bg-color-green-1 rounded-full  h-full w-full "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 _2xl:w-11/12">
          {
            /* eslint-disable-next-line @next/next/no-img-element*/
            <img
              src={`${BASE_URL}${bootcamp_img}`}
              alt={"a lapton on the desk"}
              height={600}
              width={900}
              className="h-[46rem] rounded-[3rem] w-full "
              loading="lazy"
              draggable={false}
            />
          }
        </div>
      </div>
    </div>
  );
}
