import React from "react";
import Button from "../Button";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation/navigation";

export default function HeroTitleBox() {
  const t = useTranslations("Home.Hero");

  return (
    <div className="flex flex-col gap-28  w-[46%] -mt-4  _4xl:w-9/12  _4xl:text-center _4xl:items-center _1/2xl:w-11/12 _md:!w-full ">
      <p className="text-[5.2rem] font-medium leading-[6.6rem] _xl:text-[6.4rem] _xl:leading-[8rem] _lg:!text-[7.2rem] _lg:!leading-[9rem] ">
        <span className="text-color-yellow-1">{"< "}</span>
        {t("title")}
        <span className="text-white bg-color-yellow-2 p-1">
          {t("addOnTitle")}
        </span>
        <span className="text-color-yellow-1">{"/>"}</span>
      </p>
      <p className=" font-light  text-[2rem] -mt-8 w-10/12 _4xl:text-[2.4rem] _lg:w-full _1/2xl:text-[3.2rem]">
        {t("description")}
      </p>
      <div className="flex items-center  flex-wrap gap-12 ml-4 _xl:justify-center">
        <Link href={"/courses"} prefetch={false}>
          <Button className=" px-16 bg-color-yellow-2 text-white border-[0.3rem] border-transparent py-2 _4xl:text-[2.2rem] _1/2xl:text-[2.6rem]  _lg:!text-[3.2rem] _md:w-max _1/2xl:py-4 _1/2xl:px-24">
            {t("btn_1")}
          </Button>
        </Link>
        <Link href={"/register"} prefetch={false}>
          <Button className=" px-16 bg-transparent  border-[0.2rem] font-normal border-stone-800 py-2 _4xl:text-[2.2rem] _1/2xl:text-[2.6rem] _lg:!text-[3.2rem] _1/2xl:py-4 _1/2xl:px-24">
            {t("btn_2")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
