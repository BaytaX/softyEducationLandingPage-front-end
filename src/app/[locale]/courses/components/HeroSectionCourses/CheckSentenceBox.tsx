import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function CheckSentenceBox({ title }: any) {
  return (
    <div className="flex gap-8 items-center">
      <IoCheckmarkDoneOutline className="text-color-blue-1 text-[5rem]" />
      <p className="text-[1.6rem] text-gray-2 font-normal">{title}</p>
    </div>
  );
}
