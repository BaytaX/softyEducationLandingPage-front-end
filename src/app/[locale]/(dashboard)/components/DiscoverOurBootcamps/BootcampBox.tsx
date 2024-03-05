import React from "react";
import { useTranslations } from "use-intl";
import { Link } from "@/navigation/navigation";

import ArabicWrapper from "../ArabicWrapper";

import { RiExpandLeftRightLine } from "react-icons/ri";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";

import transformStringtoArr from "@/helpers/transformStringtoArr";

import { BASE_URL } from "@/constants/backend";

type BootcampBoxPropsType = {
  data: {
    id: number;
    attributes: {
      img: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      title: string;
      description: string;
      field: string;
      where: string;
      duration: string;
      learningProgram: string;
      price: string;
      skills: string;
      level: string;
      slug: string;
    };
  };
  bootcampClassName?: string;
};

export default function BootcampBox({
  data,
  bootcampClassName,
}: BootcampBoxPropsType) {
  const t = useTranslations("Bootcamp");
  const { id } = data;
  const {
    img,
    title,
    description,
    field,
    where,
    duration,
    learningProgram,
    price,
    skills,
    level,
    slug,
  } = data.attributes;
  const bootcamp_img = img?.data?.attributes?.url;
  return (
    <div
      className={`rounded-2xl ml-[10.5rem]   w-[84%]  h-[64rem] 2xl:h-fit relative 2xl:ml-[7rem]  md:!ml-[4rem] ${bootcampClassName}`}
    >
      <div
        style={{
          backgroundImage: `url(${BASE_URL}${bootcamp_img})`,
        }}
        className={`bg-cover w-full h-[26rem] rounded-t-2xl 2xl:h-[40rem] `}
      ></div>
      <div className="text-white text-[1.8rem] font-light py-4 rounded-b-3xl px-10 bg-color-yellow-2 absolute top-0 right-32 2xl:text-[2.2rem] 1/2xl:text-[2.6rem] lg:!text-[3rem]">
        {level}
      </div>
      <ArabicWrapper>
        <div className="flex bg-white p-12 gap-10 h-[30rem] rounded-b-2xl shadow-md 2xl:flex-col 2xl:h-fit">
          <div className="flex w-5/12 2xl:w-full ">
            <div className="  flex flex-col justify-between 2xl:gap-8">
              <div className="flex flex-col gap-8">
                <p className="text-[2.5rem] font-medium 2xl:text-[3rem] 1/2xl:text-[3.6rem] lg:!text-[4.2rem]">
                  {title}
                </p>
                <p className="text-[1.6rem] text-gray-1 w-10/12 font-light 2xl:text-[2rem] 2xl:w-full 1/2xl:text-[2.6rem] lg:!text-[3rem]">
                  <span className="text-black font-medium">
                    {t("about_bootcamp")}
                  </span>
                  {description}
                </p>
              </div>
              <div className="flex items-center gap-12 flex-wrap">
                <div className="flex items-start gap-2">
                  <div>
                    <RiExpandLeftRightLine className="fill-color-blue-2 text-[2.6rem] 2xl:text-[3.2rem]  1/2xl:text-[4rem] lg:!text-[5rem]" />
                  </div>
                  <p className="text-color-blue-2 text-[1.6rem] font-light 2xl:text-[2rem] 1/2xl:text-[2.4rem] lg:!text-[2.8rem]">
                    {field}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div>
                    <HiOutlineStatusOnline className="stroke-color-blue-2 text-[2.6rem] 2xl:text-[3.2rem]  1/2xl:text-[4rem] lg:!text-[5rem]" />
                  </div>
                  <p className="text-color-blue-2 text-[1.6rem] font-light 2xl:text-[2rem] 1/2xl:text-[2.4rem] lg:!text-[2.8rem]">
                    {where}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div>
                    <MdOutlineCalendarMonth className="fill-color-blue-2 text-[2.6rem] 2xl:text-[3.2rem]  1/2xl:text-[4rem] lg:!text-[5rem]" />
                  </div>
                  <p className="text-color-blue-2 text-[1.6rem] font-light 2xl:text-[2rem] 1/2xl:text-[2.4rem] lg:!text-[2.8rem]">
                    {duration}
                  </p>
                </div>
              </div>
            </div>
            <hr className=" bg-gray-300 w-[0.1rem] h-full" />
          </div>

          <div className="w-5/12 flex flex-col justify-between 2xl:gap-8 2xl:w-full">
            <div className="flex flex-col gap-8">
              <p className="text-[2.4rem] font-medium 2xl:text-[2.6rem] 1/2xl:text-[2.8rem] lg:!text-[3.4rem]">
                {t("what_learn")}
              </p>
              <p className="text-[1.5rem] text-gray-1 w-10/12 font-light 2xl:text-[2rem] 2xl:w-full 1/2xl:text-[2.4rem] lg:!text-[2.8rem]">
                {learningProgram}
              </p>
            </div>
            <div className="flex items-center gap-4 5xl:flex-col 5xl:mt-4 5xl:items-start lg:hidden">
              <button className="text-[1.8rem] min-w-max py-4 px-6 bg-color-blue-2 hover:opacity-80 text-white rounded-2xl border border-transparent cursor-pointer 2xl:text-[2.2rem] 1/2xl:text-[2.6rem] lg:!text-[3.2rem]">
                {t("unbeatable_prices")}{" "}
                <strong>
                  {price} {t("DT")}
                </strong>
              </button>
              <Link
                href={`/bootcamps/${slug}`}
                prefetch={false}
                className="cursor-pointer min-w-max rounded-2xl text-[1.8rem] py-4 px-8 border border-color-blue-2 text-color-blue-2 bg-transparent hover:opacity-80 2xl:text-[2.2rem] 1/2xl:text-[2.6rem] lg:!text-[3.2rem]"
              >
                {t("learn_more")}
              </Link>
            </div>
          </div>
          <div className="w-2/12 2xl:w-full">
            <p className="text-[2.2rem] font-medium 2xl:text-[2.6rem] 1/2xl:text-[2.8rem] lg:!text-[3.2rem] ">
              {t("skills_gain")}
            </p>
            <div className="flex flex-col gap-8 mt-10 2xl:flex-row 2xl:flex-wrap">
              {transformStringtoArr(skills)?.map((skill: string) => (
                <div
                  key={skill}
                  className="bg-color-blue-3 py-3 px-6 rounded-full w-fit text-[1.2rem] 2xl:text-[1.8rem] 2xl:px-10 2xl:py-4 1/2xl:text-[2.2rem] lg:!text-[2.8rem]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className=" flex-col items-center gap-4 hidden lg:flex w-full">
            <button className=" w-full py-10 min-w-max bg-color-blue-2 hover:opacity-80 text-white rounded-[2rem] border border-transparent cursor-pointer  text-[3.2rem]">
              {t("unbeatable_prices")}{" "}
              <strong>
                {price} {t("DT")}
              </strong>
            </button>
            <Link
              href={`/bootcamps/${slug}`}
              prefetch={false}
              className="cursor-pointer min-w-max rounded-2xl text-[1.8rem] py-4 px-8   text-color-blue-2 bg-transparent hover:opacity-80 2xl:text-[2.2rem] 1/2xl:text-[2.6rem] lg:!text-[3.2rem]"
            >
              {t("learn_more")}
            </Link>
          </div>
        </div>
      </ArabicWrapper>
    </div>
  );
}
