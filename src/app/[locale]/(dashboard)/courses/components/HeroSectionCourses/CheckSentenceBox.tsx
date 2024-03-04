import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function CheckSentenceBox({
  title,
  width,
}: {
  title: string;
  width?: string;
}) {
  return (
    <div className={`flex gap-8 items-start ${width}`}>
      <div>
        <IoCheckmarkDoneOutline className="text-color-blue-1 text-[3rem] 1/2xl:text-[4rem]   lg:!text-[5rem]" />
      </div>
      <p className="text-[1.6rem] text-gray-1 font-normal 2xl:text-[2rem] xl:text-[2.2rem] 1/2xl:text-[2.8rem]  lg:!text-[3.2rem]">
        {title}
      </p>
    </div>
  );
}
