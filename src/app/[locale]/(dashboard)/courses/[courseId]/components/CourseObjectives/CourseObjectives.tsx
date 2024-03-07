"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";

import CheckSentenceBox from "../../../components/HeroSectionCourses/CheckSentenceBox";

import PythonLogo from "@/../../public/imgs/python-original.png";
import JsLogo from "@/../../public/imgs/javascript-original.png";
import NodeLogo from "@/../../public/imgs/nodejs-original.png";
import CssLogo from "@/../../public/imgs/css3-original.png";

import transformStringtoArr from "@/helpers/transformStringtoArr";
import ArabicWrapper from "@/app/[locale]/(dashboard)/components/ArabicWrapper";

export default function CourseObjectives({ data }: any) {
  const t = useTranslations("Course.objectives");

  const { objectives_description, learn } = data;

  const what_learn = transformStringtoArr(learn);
  return (
    <div className="mt-44 flex flex-col gap-16 ">
      <h2 className="text-[3.2rem] font-medium _2xl:text-[4rem] _1/2xl:text-[4.8rem] _lg:!text-[5.6rem] _lg:w-11/12">
        {t("title")}
      </h2>
      <div className=" bg-bg-color-bootcamps-2 shadow-lg rounded-[2rem] flex justify-between relative  w-[98%] px-16 pb-12 _2xl:flex-col _2xl:!pr-0">
        <div className="flex flex-col gap-9 py-16 w-[80%] _2xl:w-11/12">
          <h4 className="text-[2.2rem] font-medium _2xl:text-[2.8rem] _1/2xl:text-[3.6rem] _lg:!text-[4.4rem]">
            {t("about")}
          </h4>
          <p className="text-[1.6rem] text-gray-500 font-light w-[76%] _2xl:text-[2rem] _2xl:w-full _1/2xl:text-[2.6rem] _lg:!text-[3.2rem]">
            {objectives_description}
          </p>
          <h4 className="text-[2rem] font-medium _2xl:text-[2.6rem] _1/2xl:text-[3.2rem] _lg:!text-[3.8rem]">
            {t("whatYouLearn")}
          </h4>
          <div className="flex gap-8 flex-wrap _2xl:flex-col _2xl:gap-12">
            {what_learn?.map((ele, i) => (
              <CheckSentenceBox
                width="!w-[36rem] _2xl:!w-full"
                title={ele}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="relative w-[18%]  _2xl:h-[20rem] _2xl:self-end _2xl:w-[25rem] ">
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
