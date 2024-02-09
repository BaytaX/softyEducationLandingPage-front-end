import Image from "next/image";
import React from "react";
import testImg from "../../../../../public/imgs/upcoming_event_1.png";

export default function EventBox({ data }: any) {
  const { title, eventCategory, status, date } = data;
  return (
    <div className="w-[40rem] h-[30rem] flex flex-col gap-4">
      <Image
        src={testImg}
        alt={"test"}
        className="rounded-xl w-full h-[26rem] "
      />

      <p className="text-[1.5rem]">{eventCategory}</p>
      <p className="text-[2.1rem]">{title}</p>
      <p className="text-[1.4rem] font-normal text-gray-1">
        {date} <span className="mx-4 ">&#x2022;</span>
        <span> {status}</span>
      </p>
    </div>
  );
}
