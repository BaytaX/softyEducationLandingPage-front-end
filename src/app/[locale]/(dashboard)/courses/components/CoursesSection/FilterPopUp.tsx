"use client";
import React, { useState } from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

import FilterCourseBoxes from "./FilterCourseBoxes";

import LogoImg from "@/../../public/imgs/biglogo.png";
import { LuSettings2 } from "react-icons/lu";
import { MdClose } from "react-icons/md";

export default function FilterPopUp({ handleFilter, handleRemoveFilter }: any) {
  const t = useTranslations("Courses.filters");
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="hidden 1/2xl:block ">
      <div className=" gap-4 flex items-center ml-8" onClick={handleOpen}>
        <p className="text-[2.4rem] font-medium text-gray-1">
          {t("all_filters")}
        </p>
        <LuSettings2 className=" text-[4rem] text-gray-1" />
      </div>

      <div
        className={`fixed inset-0 bg-white w-full duration-500 z-50 transition-transform transform [direction:ltr] ${
          isOpen ? "" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between ">
          <div className="p-32">
            <Image
              src={LogoImg}
              alt="Softy Education Logo"
              width={150}
              height={100}
              draggable={false}
              className=""
            />
          </div>{" "}
          <div className="[background:linear-gradient(30deg,#52abf7,#2860d7)] h-[140px] w-[160px] [border-bottom-left-radius:50rem] flex justify-center items-center">
            <button className="text-white" onClick={handleClose}>
              <MdClose className="text-[5rem]" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center h-[80%] py-10">
          <FilterCourseBoxes
            handleFilter={handleFilter}
            handleRemoveFilter={handleRemoveFilter}
            boxClassName="!h-full overflow-y-scroll !w-[70%] "
          />
        </div>
      </div>
    </div>
  );
}
