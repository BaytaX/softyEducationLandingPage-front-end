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
      <div className="w-[40rem] h-[30rem] flex flex-col gap-4">
        <div
          style={{
            backgroundImage: `url(${BASE_URL}${event_img})`,
          }}
          className={`bg-cover rounded-xl w-full h-[26rem] `}
        ></div>
        <p className="text-[1.5rem]">{eventCategory}</p>
        <p className="text-[2.1rem]">{title}</p>
        <p className="text-[1.4rem] font-normal text-gray-1">
          {formatDate_2(date, isArabic)} <span className="mx-4 ">&#x2022;</span>
          <span> {where}</span>
        </p>
      </div>
    </ArabicWrapper>
  );
}
