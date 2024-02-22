import React from "react";
import Image from "next/image";
import testImg from "../../../../../../../public/imgs/discover_1.png";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import Button from "@/app/[locale]/components/Button";
import { BASE_URL } from "@/constants/backend";
import { Link } from "@/navigation/navigation";
import { useTranslations } from "next-intl";

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
    };
  };
  bootcampClassName?: string;
};

export default function RelatedBootcampBox({
  data,
}: RelatedBootcampBoxPropsType) {
  const t = useTranslations("Bootcamp.related_bootcamps");
  const { id } = data;
  const { img, title, field, where, duration, learningProgram } =
    data?.attributes;

  const bootcamp_img = img?.data?.attributes?.url;
  return (
    <div className="rounded-3xl h-[30rem] relative">
      <div
        style={{
          backgroundImage: `url(${BASE_URL}${bootcamp_img})`,
        }}
        className={`bg-cover  h-[22rem] rounded-t-xl `}
      ></div>
      <div className="flex flex-col bg-white p-8 gap-4   rounded-b-2xl shadow-md">
        <p className="text-[2rem] font-semibold">{title}</p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <HiOutlineStatusOnline className="stroke-color-blue-2 text-[2.2rem]" />
            <p className="text-color-blue-2 text-[1.6rem] ">{where}</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineCalendarMonth className="fill-color-blue-2 text-[2.2rem]" />
            <p className="text-color-blue-2 text-[1.6rem] ">{duration}</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[1.6rem] font-medium">
            {t("what_learn")}
            <span className="text-[1.6rem] text-gray-1 w-10/12 font-light">
              {learningProgram}
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 px-4 py-1 bg-color-blue-9 rounded-xl">
              <RiExpandLeftRightLine className="fill-color-blue-2 text-[2.2rem]" />
              <p className="text-color-blue-2 text-[1.6rem] ">{field}</p>
            </div>
          </div>
          <Link href={`/bootcamps/${id}`}>
            <button className="bg-color-blue-11 text-white py-4 px-8 text-[1.4rem] hover:opacity-80 cursor-pointer !rounded-xl">
              {t("enroll_now")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
