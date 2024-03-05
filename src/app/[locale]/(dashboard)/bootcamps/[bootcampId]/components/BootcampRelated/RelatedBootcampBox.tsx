import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation/navigation";

import { RiExpandLeftRightLine } from "react-icons/ri";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";

import { BASE_URL } from "@/constants/backend";

type RelatedBootcampBoxPropsType = {
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
      field: string;
      where: string;
      duration: string;
      learningProgram: string;
      slug: string;
    };
  };
  bootcampClassName?: string;
};

export default function RelatedBootcampBox({
  data,
}: RelatedBootcampBoxPropsType) {
  const t = useTranslations("Bootcamp.related_bootcamps");
  const { img, title, field, where, duration, learningProgram, slug } =
    data?.attributes;

  const bootcamp_img = img?.data?.attributes?.url;
  return (
    <div className="rounded-3xl w-full h-fit relative">
      <div
        style={{
          backgroundImage: `url(${BASE_URL}${bootcamp_img})`,
        }}
        className={`bg-cover  h-[22rem] rounded-t-xl lg:h-[26rem] lg:rounded-t-[3rem]`}
      ></div>
      <div className="flex flex-col bg-white p-8 gap-4   rounded-b-2xl shadow-md">
        <p className="text-[2rem] font-semibold 2xl:text-[2.4rem] 1/2xl:text-[2.6rem] lg:!text-[3rem]">
          {title}
        </p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div>
              <HiOutlineStatusOnline className="stroke-color-blue-2 text-[2.2rem]  1/2xl:text-[2.6rem] lg:!text-[3.6rem]" />
            </div>
            <p className="text-color-blue-2 text-[1.6rem]  1/2xl:text-[2rem] lg:!text-[2.6rem] ">
              {where}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <MdOutlineCalendarMonth className="fill-color-blue-2 text-[2.2rem]  1/2xl:text-[2.6rem] lg:!text-[3.6rem]" />
            </div>
            <p className="text-color-blue-2 text-[1.6rem] 1/2xl:text-[2rem] lg:!text-[2.6rem] ">
              {duration}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[1.6rem] font-medium 2xl:text-[1.8rem] 1/2xl:text-[2.2rem] lg:!text-[2.6rem]">
            {t("what_learn")}
            <span className=" text-gray-1 w-10/12 font-light">
              {learningProgram}
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 px-4 py-1 bg-color-blue-9 rounded-xl">
              <RiExpandLeftRightLine className="fill-color-blue-2 text-[2.2rem] 1/2xl:text-[2.6rem] lg:!text-[3.6rem]" />
              <p className="text-color-blue-2 text-[1.6rem] 1/2xl:text-[2rem] lg:!text-[2.6rem] ">
                {field}
              </p>
            </div>
          </div>
          <Link href={`/bootcamps/${slug}`} prefetch={false}>
            <button className="bg-color-blue-11 text-white py-4 px-8 text-[1.4rem] hover:opacity-80 cursor-pointer !rounded-2xl 1/2xl:text-[2rem] lg:!text-[2.6rem] ">
              {t("enroll_now")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
