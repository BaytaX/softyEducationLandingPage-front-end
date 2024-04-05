import { BASE_URL } from "@/constants/backend";
import { formatDate_2 } from "@/helpers/formatDate";
import React from "react";
import ArabicWrapper from "../ArabicWrapper";
import useArabic from "@/helpers/useArabic";

type EentBoxPropsType = {
  data: {
    id: number;
    attributes: {
      eventCategory: string;
      title: string;
      img: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      date: string;
      where: string;
    };
  };
};

export default function EventBox({ data }: EentBoxPropsType) {
  const isArabic = useArabic();
  const { title, eventCategory, where, date, img } = data?.attributes;
  const event_img = img?.data?.attributes?.url;
  return (
    <ArabicWrapper>
      <div className="w-full h-fit flex flex-col gap-4 ">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${BASE_URL}${event_img}`}
            alt="an event image"
            className="rounded-xl w-full h-[20rem] _1/2xl:h-[35rem]"
            loading="lazy"
            draggable={false}
          />
        }
        <p className="text-[1.5rem] _1/2xl:text-[2.4rem] _lg:!text-[2.8rem] text-gray-600 font-light">
          {eventCategory}
        </p>
        <p className="text-[2.1rem] _1/2xl:text-[3.2rem] _lg:!text-[3.6rem]">
          {title}
        </p>
        <p className="text-[1.4rem] font-normal text-gray-1 _1/2xl:text-[2.4rem] _lg:!text-[2.8rem]">
          {formatDate_2(date, isArabic)} <span className="mx-4 ">&#x2022;</span>
          <span> {where}</span>
        </p>
      </div>
    </ArabicWrapper>
  );
}
