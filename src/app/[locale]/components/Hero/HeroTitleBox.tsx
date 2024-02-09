import React from "react";
import Button from "../Button";
import { useTranslations } from "next-intl";

export default function HeroTitleBox() {
  const t = useTranslations("Home.Hero");

  return (
    <div className="flex flex-col gap-28  w-[100rem] -mt-4 ">
      <p className="text-[5rem] font-medium leading-[6.4rem]">
        <span className="text-color-yellow-1">{"< "}</span>
        {t("title")}
        <span className="text-white bg-color-yellow-2 p-1">
          {t("addOnTitle")}
        </span>
        <span className="text-color-yellow-1">{"/>"}</span>
      </p>
      <p className="font-light  text-[2rem] leading-[3rem] -mt-8 w-10/12">
        {t("description")}
      </p>
      <div className="flex items-center gap-20 ml-4">
        <Button className=" px-16 bg-color-yellow-2 text-white border-[0.3rem] border-transparent py-2 ">
          {t("btn_1")}
        </Button>
        <Button className=" px-16 bg-transparent  border-[0.2rem] font-normal border-stone-800 py-2 ">
          {t("btn_2")}
        </Button>
      </div>
    </div>
  );
}
