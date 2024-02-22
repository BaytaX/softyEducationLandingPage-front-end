import React from "react";
import { Link } from "@/navigation/navigation";

import { LuClock8 } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

import CheckSentenceBox from "./CheckSentenceBox";
import transformStringtoArr from "@/helpers/transformStringtoArr";
import { BASE_URL } from "@/constants/backend";
import ArabicWrapper from "@/app/[locale]/components/ArabicWrapper";
import { formatDate } from "@/helpers/formatDate";
import useArabic from "@/helpers/useArabic";
import { useTranslations } from "next-intl";

type CourseBoxSwiperPropsType = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      starting_date: string;
      time_from: string;
      time_to: string;
      img: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      where: string;
      learn: string;
    };
  };
};

export default function CourseBoxSwiper({ data }: CourseBoxSwiperPropsType) {
  const t = useTranslations("Bootcamp.related_bootcamps");
  const isArabic = useArabic();
  const { id } = data;
  const {
    title,
    description,
    starting_date,
    time_from,
    time_to,
    img,
    where,
    learn,
  } = data?.attributes;
  const courseImg = img?.data?.attributes?.url;
  const what_learn = transformStringtoArr(learn);
  return (
    <Link href={`/courses/${id}`}>
      <div className="flex cursor-pointer h-[36rem] w-10/12 ml-40  shadow-xl">
        <ArabicWrapper className="flex">
          <div className="flex flex-col justify-between w-7/12 shadow-[0_0_2rem_0.1rem_#b9b9b9] z-40 rounded-l-2xl">
            <div
              style={{
                backgroundImage: `linear-gradient(#0000304a,#00003040),url(${BASE_URL}${courseImg})`,
              }}
              className={`bg-cover  h-[56rem] [border-top-left-radius:1rem]`}
            ></div>
            <div className="flex flex-col justify-between h-full p-6 bg-white [border-bottom-left-radius:1rem]">
              <p className="text-[2.2rem] ">{title}</p>
              <p className="text-gray-2 text-[1.4rem] font-light w-8/12">
                {description.split(" ").slice(0, 20).join(" ")}...
              </p>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <LuClock8 className="text-gray-1 text-[1.6rem]" />
                  <p className="text-[1.2rem] font-light text-gray-1">
                    {time_from.slice(0, 5)} - {time_to.slice(0, 5)}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <MdOutlineCalendarMonth className="text-gray-1 text-[1.6rem]" />
                  <p className="text-[1.2rem] font-light text-gray-1">
                    {formatDate(starting_date, isArabic)}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <HiOutlineLocationMarker className="text-gray-1 text-[1.6rem]" />
                  <p className="text-[1.2rem] font-light text-gray-1">
                    {where}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/12 p-10 bg-white flex flex-col gap-12">
            <p className="text-[2.2rem] font-medium"> {t("what_learn")}</p>
            <div className="flex flex-col gap-12">
              {what_learn.slice(0, 3)?.map((ele, i) => (
                <CheckSentenceBox width="w-full" title={ele} key={i} />
              ))}
            </div>
          </div>
        </ArabicWrapper>
      </div>
    </Link>
  );
}
