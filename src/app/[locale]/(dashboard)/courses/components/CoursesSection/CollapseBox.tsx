"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type CollapseBoxPropsType = {
  title: string;
  Component: any;
  handleFilter?: any;
  handleRemoveFilter?: any;
};

export default function CollapseBox({
  title,
  Component,
  handleFilter,
  handleRemoveFilter,
}: CollapseBoxPropsType) {
  const [isOpen, setIsOpen] = useState(true);
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div
      className={`w-full border border-gray-300 shadow-lg  bg-white ${
        isOpen ? "rounded-3xl" : "rounded-t-3xl"
      }`}
    >
      <div
        className="flex justify-between  w-full items-center p-6 cursor-pointer"
        onClick={handleToggle}
      >
        <p className="text-[1.8rem] font-medium uppercase tracking-wide">
          {title}
        </p>
        {isOpen ? (
          <IoIosArrowUp className="text-[2.4rem]" />
        ) : (
          <IoIosArrowDown className="text-[2.4rem]" />
        )}
      </div>
      {isOpen ? (
        <div className="border-t border-gray-300 transition-all  rounded-b-3xl p-2 ">
          {handleFilter && handleRemoveFilter ? (
            <Component
              handleFilter={handleFilter}
              handleRemoveFilter={handleRemoveFilter}
            />
          ) : (
            <Component />
          )}
        </div>
      ) : null}
    </div>
  );
}
