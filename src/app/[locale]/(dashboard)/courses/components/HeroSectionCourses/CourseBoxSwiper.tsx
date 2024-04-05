import React from "react";
import { Link } from "@/navigation/navigation";

import { LuClock8 } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

import CheckSentenceBox from "./CheckSentenceBox";
import transformStringtoArr from "@/helpers/transformStringtoArr";
import { BASE_URL } from "@/constants/backend";
import ArabicWrapper from "@/app/[locale]/(dashboard)/components/ArabicWrapper";
import { formatDate } from "@/helpers/formatDate";
import useArabic from "@/helpers/useArabic";
import { useTranslations } from "next-intl";
import { GoArrowRight } from "react-icons/go";

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
      slug: string;
    };
  };
};

export default function CourseBoxSwiper({ data }: CourseBoxSwiperPropsType) {
  const t = useTranslations("Bootcamp.related_bootcamps");
  const isArabic = useArabic();
  const {
    title,
    description,
    starting_date,
    time_from,
    time_to,
    img,
    where,
    learn,
    slug,
  } = data?.attributes;
  const courseImg = img?.data?.attributes?.url;
  const what_learn = transformStringtoArr(learn);
  return (
    <Link href={`/courses/${slug}`} prefetch={false}>
      <div className="flex cursor-pointer w-[88%] h-[92%] ml-24 _2xl:!ml-10  shadow-xl _2xl:flex-col  _xl:w-[94%] _2xl:!rounded-b-[10rem] ">
        <ArabicWrapper className="flex _2xl:flex-col">
          <div className="flex h-auto flex-col gap-4 w-7/12 shadow-[0_0_2rem_0.1rem_#b9b9b9] z-40 rounded-l-2xl _2xl:w-full  _2xl:shadow-[0_0_2rem_0.1rem_#b9b9b969] ">
            <div
              style={{
                backgroundImage: `linear-gradient(#0000304a,#00003040),url(${BASE_URL}${courseImg})`,
              }}
              className={`bg-cover  min-h-[22rem] [border-top-left-radius:1rem] _2xl:min-h-[40rem] _2xl:rounded-t-[2rem]`}
            ></div>
            <div className="flex flex-col gap-6 h-full justify-between p-6 bg-white [border-bottom-left-radius:1rem] _2xl:gap-10 _lg:!h-[60%]">
              <div className="flex flex-col gap-4">
                <p className="text-[2.2rem] _2xl:text-[2.6rem] _1/2xl:text-[3.2rem] _lg:!text-[4rem]">
                  {title}
                </p>
                <p className="text-gray-2 text-[1.4rem] font-light w-8/12 _2xl:w-11/12 _2xl:text-[2rem]  _1/2xl:text-[2.6rem] _lg:!text-[3rem]">
                  {description.split(" ").length > 26
                    ? `${description.split(" ").slice(0, 25).join(" ")}...`
                    : description}
                </p>
              </div>
              <div className="flex gap-4 items-center _2xl:gap-8 flex-wrap _lg:!gap-8">
                <div className="flex gap-2 items-center _2xl:gap-4">
                  <LuClock8 className="text-gray-1 text-[1.6rem] _2xl:text-[2.4rem] _xl:text-[2.8rem] _lg:!text-[4.4rem]" />
                  <p className="text-[1.2rem] _2xl:text-[1.6rem] _xl:text-[2rem] _1/2xl:text-[2.2rem] _lg:!text-[3rem] font-light text-gray-1">
                    {time_from.slice(0, 5)} - {time_to.slice(0, 5)}
                  </p>
                </div>
                <div className="flex gap-2 items-center _2xl:gap-4">
                  <MdOutlineCalendarMonth className="text-gray-1 text-[1.6rem] _2xl:text-[2.4rem] _xl:text-[2.8rem] _lg:!text-[4.4rem]" />
                  <p className="text-[1.2rem] _2xl:text-[1.6rem] _xl:text-[2rem] _1/2xl:text-[2.2rem] _lg:!text-[3rem] font-light text-gray-1">
                    {formatDate(starting_date, isArabic)}
                  </p>
                </div>
                <div className="flex gap-2 items-center _2xl:gap-4">
                  <HiOutlineLocationMarker className="text-gray-1 text-[1.6rem] _2xl:text-[2.4rem] _xl:text-[2.8rem] _lg:!text-[4.4rem]" />
                  <p className="text-[1.2rem] _2xl:text-[1.6rem] _xl:text-[2rem] _1/2xl:text-[2.2rem] _lg:!text-[3rem] font-light text-gray-1">
                    {where}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/12 p-10 _1/2xl:pt-20 bg-white flex flex-col gap-12 _2xl:!w-full _1/2xl:!h-fit ">
            <p className="text-[2.2rem] font-medium _xl:text-[2.8rem] _lg:!text-[4rem]">
              {" "}
              {t("what_learn")}
            </p>
            <div className="flex flex-col gap-12">
              {what_learn.slice(0, 3)?.map((ele, i) => (
                <CheckSentenceBox
                  width="w-full"
                  title={
                    ele.split(" ").length > 16
                      ? `${ele.split(" ").slice(0, 16).join(" ")}...`
                      : ele
                  }
                  key={i}
                />
              ))}
            </div>
            <div className="hidden _2xl:flex _2xl:gap-4 self-end _2xl:items-center hover:opacity-80">
              <p className="text-[1.8rem] font-medium text-color-blue-1 _1/2xl:text-[2.4rem] _lg:!text-[3rem]">
                {t("more_details")}
              </p>
              <GoArrowRight
                className={`text-color-blue-1 text-[3.6rem] _md:!text-[4.4rem] ${
                  isArabic ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </ArabicWrapper>
      </div>
    </Link>
  );
}
