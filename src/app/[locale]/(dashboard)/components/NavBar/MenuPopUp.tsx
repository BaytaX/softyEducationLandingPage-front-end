"use client";
import React, { useState } from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation/navigation";

import SelectLang from "../Footer/SelectLang";

import LogoImg from "@/../../public/imgs/biglogo.png";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

import useArabic from "@/helpers/useArabic";

export default function MenuPopUp() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const isArabic = useArabic();

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="hidden 2xl:block ">
      <HiMenu
        className="text-[3rem] xl:text-[5rem] lg:!text-[6.4rem]"
        onClick={handleOpen}
      />
      <div
        className={`fixed inset-0 bg-white w-full duration-500  transition-transform transform [direction:ltr] ${
          isOpen ? "" : `${isArabic ? "-translate-x-full" : "translate-x-full"}`
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
        <div className="flex flex-col gap-[30px] lg:mt-[14rem]  items-center w-full h-full ">
          <Link
            href={"/"}
            className="text-[3rem] text-gray-500 font-extralight xl:text-[3.6rem] 1/2xl:text-[4.2rem] lg:!text-[4.8rem] "
            onClick={handleClose}
          >
            {t("Home")}
          </Link>
          <hr className="h-1 w-[50rem] bg-color-blue-3" />
          <Link
            href={"/courses"}
            className="text-[3rem] text-gray-500 font-extralight xl:text-[3.6rem] 1/2xl:text-[4.2rem] lg:!text-[4.8rem] "
            onClick={handleClose}
          >
            {t("Courses")}
          </Link>
          <hr className="h-1 w-[50rem] bg-color-blue-3" />

          <Link
            href={"/bootcamps"}
            className="text-[3rem] text-gray-500 font-extralight xl:text-[3.6rem] 1/2xl:text-[4.2rem] lg:!text-[4.8rem] "
            onClick={handleClose}
          >
            {t("Bootcamps")}
          </Link>
          <hr className="h-1 w-[50rem] bg-color-blue-3" />

          <Link
            href={"/blog"}
            className="text-[3rem] text-gray-500 font-extralight xl:text-[3.6rem] 1/2xl:text-[4.2rem] lg:!text-[4.8rem] "
            onClick={handleClose}
          >
            {t("Blog")}
          </Link>
          <hr className="h-1 w-[50rem] bg-color-blue-3" />

          <Link
            href={"/aboutUs"}
            className="text-[3rem] text-gray-500 font-extralight xl:text-[3.6rem] 1/2xl:text-[4.2rem] lg:!text-[4.8rem] "
            onClick={handleClose}
          >
            {t("AboutUs")}
          </Link>
          <hr className="h-1 w-[50rem] bg-color-blue-3" />
          <SelectLang />

          <Link href={"/login"}>
            <button
              className={
                "  font-light cursor-pointer hover:opacity-80 py-6 rounded-[2rem] px-[4em] bg-color-blue-4  text-white  text-[3rem] xl:text-[3.6rem] 1/2xl:text-[4.2rem] lg:!text-[4.8rem] "
              }
              onClick={handleClose}
            >
              {t("Log In")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
