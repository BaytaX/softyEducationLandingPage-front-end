import React from "react";
import Image from "next/image";
import testImg from "../../../../../../../public/imgs/discover_1.png";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import Button from "@/app/[locale]/components/Button";

type RelatedBootcampBoxPropsType = {
  data: {
    img: string;
    title: string;
    description: string;
    field: string;
    status: string;
    duration: string;
    learningProgram: string;
    price: string;
    link: string;
    skills: string[];
    level: string;
  };
  bootcampClassName?: string;
};

export default function RelatedBootcampBox({
  data,
}: RelatedBootcampBoxPropsType) {
  const {
    img,
    title,
    description,
    field,
    status,
    duration,
    learningProgram,
    price,
    link,
    skills,
    level,
  } = data;
  return (
    <div className="rounded-3xl h-[30rem] relative">
      {/* <Image src={testImg} alt={"test"} className="h-[20rem]" /> */}
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={`bg-cover  h-[20rem] rounded-t-xl `}
      ></div>
      <div className="flex flex-col bg-white p-8 gap-6   rounded-b-2xl shadow-md">
        <p className="text-[2rem] font-semibold">{title}</p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <HiOutlineStatusOnline className="stroke-color-blue-2 text-[2.2rem]" />
            <p className="text-color-blue-2 text-[1.6rem] ">{status}</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineCalendarMonth className="fill-color-blue-2 text-[2.2rem]" />
            <p className="text-color-blue-2 text-[1.6rem] ">{duration}</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[1.6rem] font-medium">
            What you’ll learn:
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
            <div className="flex items-center gap-3 px-4 py-1 bg-color-blue-9 rounded-xl">
              <FaDatabase className="fill-color-blue-2 text-[1.8rem]" />
              <p className="text-color-blue-2 text-[1.6rem] ">{field}</p>
            </div>
          </div>
          <button className="bg-color-blue-11 text-white py-4 px-8 text-[1.4rem] hover:opacity-80 cursor-pointer !rounded-xl">
            Enroll now !
          </button>
        </div>
      </div>
    </div>
  );
}
