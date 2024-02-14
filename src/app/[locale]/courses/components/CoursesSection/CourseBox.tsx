import Image from "next/image";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClock8 } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";

type CourseBoxPropsType = {
  data: {
    title: string;
    description: string;
    time: string;
    starting_date: string;
    img: string;
    status: string;
    link: string;
  };
};

export default function CourseBox({ data }: CourseBoxPropsType) {
  const { title, description, time, starting_date, img, status, link } = data;
  return (
    <div className="flex flex-col h-fit rounded-2xl  justify-between w-full shadow-lg z-40  cursor-pointer">
      <div
        style={{
          backgroundImage: `linear-gradient(#0000304a,#00003040),url(${img})`,
        }}
        className={`bg-cover [border-top-left-radius:1rem] [border-top-right-radius:1rem] !h-[18rem]`}
      ></div>
      <div className="flex flex-col gap-4 p-6 bg-white [border-bottom-left-radius:1rem] [border-bottom-right-radius:1rem]">
        <p className="text-[1.6rem] ">{title}</p>
        <p className="text-gray-500 text-[1.3rem] font-light ">{description}</p>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <LuClock8 className="text-gray-500 text-[1.6rem]" />
            <p className="text-[1.1rem] font-light text-gray-500">{time}</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineCalendarMonth className="text-gray-500 text-[1.6rem]" />
            <p className="text-[1.1rem] font-light text-gray-500">
              {starting_date}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineLocationMarker className="text-gray-500 text-[1.6rem]" />
            <p className="text-[1.1rem] font-light text-gray-500">{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
