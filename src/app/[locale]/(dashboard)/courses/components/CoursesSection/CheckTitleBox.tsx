"use client";
import React, { useState } from "react";

type CheckTitleBoxPropsType = {
  id: number;
  title: string;
  numCourses: number;
  handleFilter: any;
  handleRemoveFilter: any;
  filterType: string;
};

export default function CheckTitleBox({
  id,
  title,
  numCourses,
  handleFilter,
  handleRemoveFilter,
  filterType,
}: CheckTitleBoxPropsType) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full flex justify-between px-4 py-3 items-center">
      <div className="flex gap-4 items-center 1/2xl:!gap-10">
        <input
          type="checkbox"
          aria-label="check filter"
          className="cursor-pointer h-[1.6rem] w-[2rem] 1/2xl:!h-[3rem] 1/2xl:!w-[3rem]"
          checked={isChecked}
          onChange={() => {
            setIsChecked((prev) => !prev);
            if (!isChecked) handleFilter(id, filterType);
            else handleRemoveFilter(id, filterType);
          }}
        />
        <p
          className={`text-[1.4rem] 2xl:text-[1.8rem]  1/2xl:text-[2.4rem] lg:!text-[3.2rem]${
            isChecked ? "text-color-blue-1" : "text-gray-500"
          }`}
        >
          {title}
        </p>
      </div>
      <p
        className={`text-[1.2rem] 2xl:text-[1.8rem] 1/2xl:text-[2.4rem] lg:!text-[2.8rem] ${
          isChecked ? "text-color-blue-4" : "text-gray-400"
        }`}
      >
        {numCourses}
      </p>
    </div>
  );
}
