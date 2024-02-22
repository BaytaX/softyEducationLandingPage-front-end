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
    <div className={`flex gap-8 items-center ${width}`}>
      <IoCheckmarkDoneOutline className="text-color-blue-1 text-[3rem]" />
      <p className="text-[1.6rem] text-gray-1 font-normal ">{title}</p>
    </div>
  );
}
