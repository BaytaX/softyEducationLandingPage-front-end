import React from "react";
import Image from "next/image";

import { LuClock8 } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import CheckSentenceBox from "./CheckSentenceBox";

type CourseBoxSwiperPropsType = {
  data: {
    title: string;
    description: string;
    time: string;
    starting_date: string;
    img: string;
    status: string;
    link: string;
    learn: string[];
  };
};

export default function CourseBoxSwiper({ data }: CourseBoxSwiperPropsType) {
  const { title, description, time, starting_date, img, status, link, learn } =
    data;
  return (
    <div className="flex  h-[36rem] w-10/12 ml-40  shadow-xl">
      <div className="flex flex-col justify-between w-7/12 shadow-[0_0_2rem_0.1rem_#b9b9b9] z-40 rounded-l-2xl">
        <Image
          src={img}
          alt={"a picture of studies"}
          height={200}
          width={580}
          className=" h-[20rem] [border-top-left-radius:1rem]"
        />
        <div className="flex flex-col justify-between h-full p-6 bg-white [border-bottom-left-radius:1rem]">
          <p className="text-[2.2rem] ">{title}</p>
          <p className="text-gray-2 text-[1.4rem] font-light w-7/12">
            {description}
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <LuClock8 className="text-gray-1 text-[1.6rem]" />
              <p className="text-[1.2rem] font-light text-gray-1">{time}</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineCalendarMonth className="text-gray-1 text-[1.6rem]" />
              <p className="text-[1.2rem] font-light text-gray-1">
                {starting_date}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-gray-1 text-[1.6rem]" />
              <p className="text-[1.2rem] font-light text-gray-1">{status}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/12 p-10 bg-white flex flex-col gap-12">
        <h3 className="text-[2.2rem] font-medium">What you'll learn</h3>
        <div className="flex flex-col gap-12">
          {learn?.map((ele) => (
            <CheckSentenceBox title={ele} />
          ))}
        </div>
      </div>
    </div>
  );
}
