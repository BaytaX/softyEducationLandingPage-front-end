"use client";
import React from "react";

type CheckTitleBoxPropsType = {
  id: number;
  title: string;
  numCourses: number;
  handleFilter: any;
  handleRemoveFilter: any;
  filterType: string;
  value: Number[];
};

export default function CheckTitleBox({
  id,
  title,
  numCourses,
  handleFilter,
  handleRemoveFilter,
  filterType,
  value,
}: CheckTitleBoxPropsType) {
  return (
    <div className="w-full flex justify-between px-4 py-3 items-center">
      <div className="flex gap-4 items-center _1/2xl:!gap-10">
        <input
          type="checkbox"
          aria-label="check filter"
          className="cursor-pointer h-[1.6rem] w-[2rem] _1/2xl:!h-[3rem] _1/2xl:!w-[3rem]"
          checked={value?.includes(id)}
          onChange={() => {
            if (!value?.includes(id)) handleFilter(id, filterType);
            else handleRemoveFilter(id, filterType);
          }}
        />
        <p
          className={`text-[1.4rem] _2xl:text-[1.8rem]  _1/2xl:text-[2.4rem] _lg:!text-[3rem] ${
            value?.includes(id) ? "text-color-blue-1" : "text-gray-500"
          }`}
        >
          {title}
        </p>
      </div>
      <p
        className={`text-[1.2rem] _2xl:text-[1.8rem] _1/2xl:text-[2.4rem] _lg:!text-[2.8rem] ${
          value?.includes(id) ? "text-color-blue-4" : "text-gray-400"
        }`}
      >
        {numCourses}
      </p>
    </div>
  );
}
