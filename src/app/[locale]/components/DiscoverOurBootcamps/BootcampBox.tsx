import Image from "next/image";
import React, { useTransition } from "react";
import testImg from "../../../../../public/imgs/discover_1.png";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BASE_URL } from "@/constants/backend";
import transformStringtoArr from "@/helpers/transformStringtoArr";
import { Link } from "@/navigation/navigation";
import ArabicWrapper from "../ArabicWrapper";
import { useTranslations } from "use-intl";

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
  } = data.attributes;
  const bootcamp_img = img?.data?.attributes?.url;
  return (
    <div
      className={`rounded-2xl ml-[11rem]   w-10/12  h-[64rem] relative ${bootcampClassName}`}
    >
      <div
        style={{
          backgroundImage: `url(${BASE_URL}${bootcamp_img})`,
        }}
        className={`bg-cover w-full h-[26rem] rounded-t-2xl `}
      ></div>
      <div className="text-white text-[1.8rem] font-light py-4 rounded-b-3xl px-10 bg-color-yellow-2 absolute top-0 right-32">
        {level}
      </div>
      <ArabicWrapper>
        <div className="flex bg-white p-12 gap-10 h-[30rem]  rounded-b-2xl shadow-md">
          <div className="flex w-5/12  ">
            <div className="  flex flex-col justify-between">
              <div className="flex flex-col gap-8">
                <p className="text-[2.5rem] font-medium">{title}</p>
                <p className="text-[1.6rem] text-gray-1 w-10/12 font-light">
                  <span className="text-black font-medium">
                    {t("about_bootcamp")}
                  </span>
                  {description}
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <RiExpandLeftRightLine className="fill-color-blue-2 text-[2.6rem]" />
                  <p className="text-color-blue-2 text-[1.6rem] font-light">
                    {field}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineStatusOnline className="stroke-color-blue-2 text-[2.6rem]" />
                  <p className="text-color-blue-2 text-[1.6rem] font-light">
                    {where}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineCalendarMonth className="fill-color-blue-2 text-[2.6rem]" />
                  <p className="text-color-blue-2 text-[1.6rem] font-light">
                    {duration}
                  </p>
                </div>
              </div>
            </div>
            <hr className=" bg-gray-300 w-[0.1rem] h-full" />
          </div>

          <div className="w-5/12 flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <p className="text-[2.4rem] font-medium">{t("what_learn")}</p>
              <p className="text-[1.5rem] text-gray-1 w-10/12 font-light">
                {learningProgram}
              </p>
            </div>
            <div className="flex items-center gap-8">
              <Link href={`bootcamps/${id}`}>
                <button className="text-[1.8rem] py-4 px-6 bg-color-blue-2 hover:opacity-80 text-white rounded-2xl border border-transparent cursor-pointer">
                  {t("unbeatable_prices")}{" "}
                  <strong>
                    {price} {t("TD")}
                  </strong>
                </button>
              </Link>
              <Link href={`bootcamps/${id}`}>
                <button className="cursor-pointer rounded-2xl text-[1.8rem] py-4 px-8 border border-color-blue-2 text-color-blue-2 bg-transparent hover:opacity-80">
                  {t("learn_more")}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-2/12">
            <p className="text-[2.2rem] font-medium ">{t("skills_gain")}</p>
            <div className="flex flex-col gap-8 mt-10">
              {transformStringtoArr(skills)?.map((skill: string) => (
                <div
                  key={skill}
                  className="bg-color-blue-3 py-3 px-6 rounded-full w-fit text-[1.2rem] "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ArabicWrapper>
    </div>
  );
}
