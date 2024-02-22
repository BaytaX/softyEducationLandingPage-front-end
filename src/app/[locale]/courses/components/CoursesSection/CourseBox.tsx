import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/constants/backend";
import { formatDate } from "@/helpers/formatDate";
import { Link } from "@/navigation/navigation";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClock8 } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import useArabic from "@/helpers/useArabic";

type CourseBoxPropsType = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      duration_hours: string;
      starting_date: string;
      img: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      where: string;
    };
  };
};

export default function CourseBox({ data }: CourseBoxPropsType) {
  const isArabic = useArabic();
  const { id } = data;
  const { title, description, duration_hours, starting_date, img, where } =
    data.attributes;

  const courseImg = img?.data?.attributes?.url;

  return (
    <Link href={`/courses/${id}`}>
      <div className="flex flex-col  rounded-2xl  h-[30rem] justify-between w-full shadow-lg z-40  cursor-pointer">
        <div
          style={{
            backgroundImage: `linear-gradient(#0000304a,#00003040),url(${BASE_URL}${courseImg})`,
          }}
          className={`bg-cover [border-top-left-radius:1rem] [border-top-right-radius:1rem] !h-[18rem]`}
        ></div>
        <div className="flex flex-col justify-between p-6 bg-white h-[15rem] [border-bottom-left-radius:1rem] [border-bottom-right-radius:1rem]">
          <p className="text-[1.6rem] ">{title}</p>
          <p className="text-gray-500 text-[1.3rem] font-light ">
            {description.split(" ").slice(0, 20).join(" ")}...
          </p>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <LuClock8 className="text-gray-500 text-[1.6rem]" />
              <p className="text-[1.1rem] font-light text-gray-500">
                {duration_hours}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineCalendarMonth className="text-gray-500 text-[1.6rem]" />
              <p className="text-[1.1rem] font-light text-gray-500">
                {formatDate(starting_date, isArabic)}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <HiOutlineLocationMarker className="text-gray-500 text-[1.6rem]" />
              <p className="text-[1.1rem] font-light text-gray-500">{where}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
