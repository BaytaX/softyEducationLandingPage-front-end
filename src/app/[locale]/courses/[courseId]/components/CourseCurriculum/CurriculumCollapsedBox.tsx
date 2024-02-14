import React from "react";
import Image from "next/image";

import bookIcon from "../../../../../../../public/courses_imgs/bookIcon.png";
import playIcon from "../../../../../../../public/courses_imgs/lectureIcon.png";
import networkIcon from "../../../../../../../public/courses_imgs/networkIcon.png";

type CurriculumCollapsedBoxPropsType = {
  data: {
    title: string;
    type: string;
    propriety: string;
  };
};

export default function CurriculumCollapsedBox({
  data,
}: CurriculumCollapsedBoxPropsType) {
  const { title, type, propriety } = data;
  return (
    <div className="flex justify-between px-8 pb-8">
      <div className="flex gap-4 items-center">
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
        />
        <p className="text-[1.4rem] text-gray-1 ">{title}</p>
      </div>
      <p className="text-[1.4rem] text-gray-1 font-extralight">{propriety}</p>
    </div>
  );
}
