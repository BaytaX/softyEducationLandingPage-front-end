"use client";
import React, { useState } from "react";

type CheckTitleBoxPropsType = {
  title: string;
  numCourses: number;
};

export default function CheckTitleBox({
  title,
  numCourses,
}: CheckTitleBoxPropsType) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full flex justify-between px-4 py-3 items-center">
      <div className="flex gap-4 items-center">
        <input
          type="checkbox"
          aria-label="check filter"
          className="cursor-pointer h-[1.6rem] w-[2rem]"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <p
          className={`text-[1.4rem]  ${
            isChecked ? "text-color-blue-1" : "text-gray-1"
          }`}
        >
          {title}
        </p>
      </div>
      <p
        className={`text-[1.2rem]  ${
          isChecked ? "text-color-blue-4" : "text-gray-400"
        }`}
      >
        {numCourses}
      </p>
    </div>
  );
}
