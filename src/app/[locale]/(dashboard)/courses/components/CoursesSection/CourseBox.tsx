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
      uuid: string;
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
    uuid,
  } = data.attributes;

  const courseImg = img?.data?.attributes?.url;

  return (
    <Link href={`/courses/${uuid}`} prefetch={false}>
      <div className="flex flex-col  rounded-2xl  h-fit justify-between w-full shadow-lg z-40  cursor-pointer ">
        <div
          style={{
            backgroundImage: `linear-gradient(#0000304a,#00003040),url(${BASE_URL}${courseImg})`,
          }}
          className={`bg-cover rounded-t-[1rem] h-[18rem] 6xl:h-[20rem] 1/2xl:h-[32rem] lg:!h-[28rem] lg:!rounded-t-[3rem]`}
        ></div>
        <div className="flex flex-col gap-2 justify-between p-10 bg-white h-fit min-h-[19rem] [border-bottom-left-radius:1rem] [border-bottom-right-radius:1rem] xl:!gap-12 ">
          <p className="text-[1.6rem] 6xl:text-[2rem] 1/2xl:text-[2.6rem] lg:!text-[3rem]">
            {title}
          </p>
          <p className="text-gray-500 text-[1.3rem] font-light 6xl:text-[1.6rem] 1/2xl:text-[2.2rem] lg:!text-[2.6rem]">
            {description.split(" ").slice(0, 20).join(" ")}...
          </p>
          <div className="flex gap-2 items-center flex-wrap 6xl:!gap-x-8">
            <div className="flex gap-2 items-start">
              <div>
                <LuClock8 className="text-gray-500 text-[1.6rem] 6xl:text-[2.2rem] 1/2xl:text-[2.6rem] lg:!text-[3.6rem]" />
              </div>
              <p className="text-[1.1rem] 6xl:text-[1.6rem] 1/2xl:text-[2rem] lg:!text-[2.6rem] font-light text-gray-500 ">
                {duration_hours}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <div>
                <MdOutlineCalendarMonth className="text-gray-500 text-[1.6rem] 6xl:text-[2.2rem] 1/2xl:text-[2.6rem] lg:!text-[3.6rem]" />
              </div>
              <p className="text-[1.1rem] 6xl:text-[1.6rem] 1/2xl:text-[2rem] lg:!text-[2.6rem] font-light text-gray-500">
                {formatDate(starting_date, isArabic)}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <div>
                <HiOutlineLocationMarker className="text-gray-500 text-[1.6rem] 6xl:text-[2.2rem] 1/2xl:text-[2.6rem] lg:!text-[3.6rem]" />
              </div>
              <p className="text-[1.1rem] 6xl:text-[1.6rem] 1/2xl:text-[2rem] lg:!text-[2.6rem] font-light text-gray-500">
                {where}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
