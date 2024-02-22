import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/app/[locale]/components/Button";
import BootcampHeroTitleBox from "./BootcampHeroTitleBox";

import HeroBg from "../../../../../../../public/imgs/herobg.webp";
import clockIcon from "../../../../../../../public/bootcamps_imgs/clockIcon.png";
import mapIcon from "../../../../../../../public/bootcamps_imgs/mapIcon.png";
import calendarIcon from "../../../../../../../public/bootcamps_imgs/calendarIcon.png";
import certifiedIcon from "../../../../../../../public/bootcamps_imgs/certifiedIcon.png";
import bootcampPropsType from "@/types/bootcampPropsType";
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
    <div className="mt-72 w-[96%] ">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-0 right-0 w-full -ml-52 -z-10 "
        draggable={false}
        priority
      />
      <BootcampHeroTitleBox />
      <div className="flex gap-12 items-center mt-10">
        <div className="rounded-[2rem] h-[46rem] bg-white w-1/2 p-14 flex flex-col justify-between shadow-lg">
          <h2 className="text-[3rem] font-medium">{title}</h2>
          <p className="text-[1.6rem] font-light text-gray-1 w-11/12">
            {description}
          </p>
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
                  {t("learnMore")}
                </a> */}
              </div>
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
            </div>
          </div>
          <div className="flex gap-12">
            <Button className=" w-[18rem] px-6 bg-color-yellow-2 text-white font-normal border-[0.3rem] border-transparent py-2 ">
              {t("enroll")}
            </Button>
            <div className=" flex gap-6 rounded-full px-6 bg-bg-color-bootcamps font-medium border-[0.3rem] border-transparent py-3 text-[1.6rem]   ">
              <p>
                {t("next_session")}{" "}
                <span>{transformStringtoArr(nextSession)[0]} </span> &#8212;
                <span> {transformStringtoArr(nextSession)[1]}</span>
              </p>
              <div className="w-[2.4rem] bg-white rounded-full p-[0.2rem] border border-gray-300  ">
                <div className=" bg-color-green-1 rounded-full  h-full w-full "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          {
            /* eslint-disable-next-line @next/next/no-img-element*/
            <img
              src={`${BASE_URL}${bootcamp_img}`}
              alt={"a lapton on the desk"}
              height={600}
              width={900}
              className="h-[46rem] rounded-[3rem] w-full"
              draggable={false}
            />
          }
        </div>
      </div>
    </div>
  );
}
