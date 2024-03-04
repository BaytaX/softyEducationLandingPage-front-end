import React from "react";
import Image from "next/image";

import bookIcon from "@/../../public/courses_imgs/bookIcon.png";
import playIcon from "@/../../public/courses_imgs/lectureIcon.png";
import networkIcon from "@/../../public/courses_imgs/networkIcon.png";

type CurriculumCollapsedBoxPropsType = {
  data: {
    id: number;
    attributes: {
      title: string;
      type: string;
      propriety: string;
    };
  };
};

export default function CurriculumCollapsedBox({
  data,
}: CurriculumCollapsedBoxPropsType) {
  const { title, type, propriety } = data?.attributes;
  return (
    <div className="flex justify-between px-8 pb-8 lg:pb-12">
      <div className="flex gap-4 items-start">
        <Image
          src={
            type === "document"
              ? bookIcon
              : type === "lecture"
              ? playIcon
              : networkIcon
          }
          alt={`${
            type === "document"
              ? "book Icon"
              : type === "lecture"
              ? "play Icon"
              : "network Icon"
          }`}
          width={20}
          height={20}
          className="w-[2rem] 2xl:w-[2.6rem] 1/2xl:w-[3.4rem] lg:!min-w-[4.4rem]"
          draggable={false}
        />
        <p className="text-[1.4rem] text-gray-1 2xl:text-[1.8rem]  1/2xl:text-[2.2rem] lg:!text-[2.8rem]">
          {title}
        </p>
      </div>
      <p className="text-[1.4rem] text-gray-1 font-extralight 2xl:text-[1.8rem]  1/2xl:text-[2.2rem] lg:!text-[2.8rem] ">
        {propriety}
      </p>
    </div>
  );
}
