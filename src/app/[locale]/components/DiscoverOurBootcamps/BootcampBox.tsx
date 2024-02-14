import Image from "next/image";
import React from "react";
import testImg from "../../../../../public/imgs/discover_1.png";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";

type BootcampBoxPropsType = {
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

export default function BootcampBox({
  data,
  bootcampClassName,
}: BootcampBoxPropsType) {
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
    <div
      className={`rounded-2xl  w-10/12 ml-[12rem] h-[64rem] relative ${bootcampClassName}`}
    >
      {/* <Image src={testImg} alt={"test"} className="w-full h-3/12" /> */}
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={`bg-cover w-full h-[26rem] `}
      ></div>
      <div className="text-white text-[1.8rem] font-light py-4 rounded-b-3xl px-10 bg-color-yellow-2 absolute top-0 right-32">
        {level}
      </div>
      <div className="flex bg-white p-12 gap-10 h-[30rem]  rounded-b-2xl shadow-md">
        <div className="border-r border-gray-300 w-5/12 flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <p className="text-[2.5rem] font-medium">{title}</p>
            <p className="text-[1.6rem] text-gray-1 w-10/12 font-light">
              <span className="text-black font-medium">About Bootcamp :</span>
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
                {status}
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
        <div className="w-5/12 flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <p className="text-[2.4rem] font-medium">What you’ll learn</p>
            <p className="text-[1.5rem] text-gray-1 w-10/12 font-light">
              {learningProgram}
            </p>
          </div>
          <div className="flex items-center gap-8">
            <button className="text-[1.8rem] py-4 px-6 bg-color-blue-2 hover:opacity-90 text-white rounded-2xl border border-transparent cursor-pointer">
              Unbeatable prices : <strong>{price} DT</strong>
            </button>
            <button className="cursor-pointer rounded-2xl text-[1.8rem] py-4 px-8 border border-color-blue-2 text-color-blue-2 bg-transparent hover:opacity-90">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-2/12">
          <p className="text-[2.2rem] font-medium">{"Skills you'll gain"}</p>
          <div className="flex flex-col gap-8 mt-10">
            {skills?.map((skill: string) => (
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
    </div>
  );
}
