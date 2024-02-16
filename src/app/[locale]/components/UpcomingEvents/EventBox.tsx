import React from "react";

type EentBoxPropsType = {
  data: {
    eventCategory: string;
    title: string;
    img: string;
    date: string;
    status: string;
  };
};

export default function EventBox({ data }: EentBoxPropsType) {
  const { title, eventCategory, status, date, img } = data;
  return (
    <div className="w-[40rem] h-[30rem] flex flex-col gap-4">
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={`bg-cover rounded-xl w-full h-[26rem] `}
      ></div>
      <p className="text-[1.5rem]">{eventCategory}</p>
      <p className="text-[2.1rem]">{title}</p>
      <p className="text-[1.4rem] font-normal text-gray-1">
        {date} <span className="mx-4 ">&#x2022;</span>
        <span> {status}</span>
      </p>
    </div>
  );
}
