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
      slug: string;
    };
  };
};

export default function CourseBox({ data }: CourseBoxPropsType) {
  const isArabic = useArabic();
  const { id } = data;
  const {
    title,
    description,
    duration_hours,
    starting_date,
    img,
    where,
    slug,
  } = data.attributes;

  const courseImg = img?.data?.attributes?.url;

  return (
    <Link href={`/courses/${slug}`} prefetch={false}>
      <div className="flex flex-col    h-fit justify-between w-full  z-40   ">
        <div
          style={{
            backgroundImage: `linear-gradient(#0000304a,#00003040),url(${BASE_URL}${courseImg})`,
          }}
          className={`bg-cover rounded-t-[1rem] h-[18rem] _4xl:h-[20rem] _xl:!h-[38rem]  _lg:!rounded-t-[3rem]`}
        ></div>
        <div className="flex flex-col gap-4 justify-between p-6 bg-white h-fit min-h-[14rem] [border-bottom-left-radius:1rem] [border-bottom-right-radius:1rem] _xl:!gap-12 ">
          <p className="text-[1.6rem] _4xl:text-[2rem] _xl:text-[2.6rem] _lg:!text-[3rem]">
            {title}
          </p>
          <p className="text-gray-500 text-[1.4rem] font-light _4xl:text-[1.6rem] _3xl:text-[1.8rem] _xl:text-[2.2rem] _lg:text-[2.6rem]">
            {description.split(" ").slice(0, 13).join(" ")}...
          </p>
          <div className="flex gap-4 items-center flex-wrap _4xl:!gap-x-8">
            <div className="flex gap-2 items-start">
              <div>
                <LuClock8 className="text-gray-500 text-[1.6rem] _4xl:text-[2.2rem] _xl:text-[2.6rem] _lg:!text-[3.6rem]" />
              </div>
              <p className="text-[1.2rem] _4xl:text-[1.6rem] _xl:text-[2rem] _lg:!text-[2.6rem] font-light text-gray-500 ">
                {duration_hours}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <div>
                <MdOutlineCalendarMonth className="text-gray-500 text-[1.6rem] _4xl:text-[2.2rem] _xl:text-[2.6rem] _lg:!text-[3.6rem]" />
              </div>
              <p className="text-[1.2rem] _4xl:text-[1.6rem] _xl:text-[2rem] _lg:!text-[2.6rem] font-light text-gray-500">
                {formatDate(starting_date, isArabic)}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <div>
                <HiOutlineLocationMarker className="text-gray-500 text-[1.6rem] _4xl:text-[2.2rem] _xl:text-[2.6rem] _lg:!text-[3.6rem]" />
              </div>
              <p className="text-[1.2rem] _4xl:text-[1.6rem] _xl:text-[2rem] _lg:!text-[2.6rem] font-light text-gray-500">
                {where}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
