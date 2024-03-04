"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";

import CheckSentenceBox from "@/app/[locale]/(dashboard)/courses/components/HeroSectionCourses/CheckSentenceBox";

import PythonLogo from "@/../../public/imgs/python-original.png";
import JsLogo from "@/../../public/imgs/javascript-original.png";
import NodeLogo from "@/../../public/imgs/nodejs-original.png";
import CssLogo from "@/../../public/imgs/css3-original.png";

import transformStringtoArr from "@/helpers/transformStringtoArr";

export default function ObjectivesBootcamp({ data }: any) {
  const t = useTranslations("Bootcamp.objectives");

  const { objectives_description, what_learn } = data;
  return (
    <div className="mt-44 flex flex-col gap-16">
      <h2 className="text-[3.2rem] font-medium 2xl:text-[4rem] 1/2xl:text-[4.8rem] lg:!text-[5.6rem] lg:w-11/12">
        {t("title")}
      </h2>
      <div className=" bg-bg-color-bootcamps-2 shadow-lg rounded-[2rem] relative w-[98%] justify-between flex px-16 pb-12 2xl:flex-col 2xl:!pr-0">
        <div className="flex flex-col gap-9 py-16 w-[80%] 2xl:w-11/12">
          <h4 className="text-[2rem] font-medium 2xl:text-[2.8rem] 1/2xl:text-[3.6rem] lg:!text-[4.4rem]">
            {t("about")}
          </h4>
          <p className="text-[1.6rem] text-gray-500 font-light w-[76%] 2xl:text-[2rem] 2xl:w-full 1/2xl:text-[2.6rem] lg:!text-[3.2rem]">
            {objectives_description}
          </p>
          <h4 className="text-[2rem] font-medium 2xl:text-[2.6rem] 1/2xl:text-[3.2rem] lg:!text-[3.8rem]">
            {t("whatYouLearn")}
          </h4>
          <div className="flex gap-8 flex-wrap 2xl:flex-col 2xl:gap-12">
            {transformStringtoArr(what_learn)?.map((ele: string, i: number) => (
              <CheckSentenceBox
                width="!w-[36rem] 2xl:!w-full"
                title={ele}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="relative w-[18%] 2xl:w-[25rem]   2xl:h-[20rem] 2xl:self-end ">
          <Image
            src={PythonLogo}
            alt={"Python Logo"}
            width={60}
            height={60}
            className=" w-[6rem] rotate-[20deg] opacity-50 absolute top-12 right-56 "
            draggable={false}
          />
          <Image
            src={JsLogo}
            alt={"Javascript Logo"}
            width={75}
            height={75}
            className=" w-[7.5rem] rotate-[-80deg] opacity-50 absolute top-10 right-12 "
            draggable={false}
          />
          <Image
            src={NodeLogo}
            alt={"Node Js Logo"}
            width={60}
            height={60}
            className="w-[6rem] opacity-50 absolute top-48 right-28"
            draggable={false}
          />
          <Image
            src={CssLogo}
            alt={"CSS Logo"}
            width={40}
            height={40}
            className="w-[4rem] rotate-[-50deg] opacity-50 absolute top-48 right-72 "
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
