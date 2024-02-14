"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import lectureIcon from "../../../../../../../public/bootcamps_imgs/lectureIcon.png";
import clockIcon from "../../../../../../../public/bootcamps_imgs/clockCircle.png";

type CollapseCurriculumPropsType = {
  Component: any;
  data: {
    title: string;
    numLectures: number;
    duration: string;
    lectures: {
      title: string;
      type: string;
      propriety: string;
    }[];
  };
};

export default function CollapseCurriculum({
  Component,
  data,
}: CollapseCurriculumPropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, numLectures, duration, lectures } = data;
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className={`w-full    bg-white`}>
      <div
        className="flex justify-between  w-full items-center p-8 cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex gap-4 items-center">
          {isOpen ? (
            <IoIosArrowUp
              className={`text-[2rem]  ${
                isOpen ? "text-color-blue-2" : "text-gray-500"
              } `}
            />
          ) : (
            <IoIosArrowDown
              className={`text-[2rem]  ${
                isOpen ? "text-color-blue-2" : "text-gray-500"
              } `}
            />
          )}
          <p
            className={`text-[1.6rem]  tracking-wide ${
              isOpen ? "text-color-blue-2" : ""
            }`}
          >
            {title}
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={lectureIcon}
              alt={"play lecture icon"}
              width={20}
              height={20}
            />
            <p className="text-[1.4rem] text-gray-1 font-light">
              {`${numLectures} lectures`}{" "}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={clockIcon} alt={"clock icon"} width={20} height={20} />
            <p className="text-[1.4rem] text-gray-1 font-light">{duration}</p>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="  transition-all ml-10 rounded-b-3xl p-2 ">
          {lectures.map((ele, i) => (
            <Component data={ele} key={i} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
