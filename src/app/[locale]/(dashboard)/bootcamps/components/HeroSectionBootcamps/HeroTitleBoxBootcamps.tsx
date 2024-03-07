import React from "react";
import { useTranslations } from "next-intl";
import Button from "@/app/[locale]/(dashboard)/components/Button";

export default function HeroTitleBoxBootcamps() {
  const t = useTranslations("Bootcamps.Hero");

  return (
    <div className="flex flex-col gap-28  -mt-4 ">
      <div className="flex flex-col gap-6">
        <p className="text-[2.8rem] text-color-yellow-2 font-medium _xl:text-[3.2rem] _lg:!text-[4.4rem] ">
          {t("bootcamps")}
        </p>
        <h2 className="text-[5rem] font-medium leading-[5.8rem] _xl:w-9/12 _lg:!w-11/12 _lg:text-[5.6rem] _lg:!leading-[7rem] ">
          {t("title")}
        </h2>
      </div>
      <p className="font-light text-gray-1 text-[2rem] leading-[3rem] -mt-8 w-9/12 _xl:text-[2.8rem] _xl:w-11/12  _xl:leading-[4rem] _lg:!text-[3.6rem] _lg:!leading-[5.6rem]">
        {t("description")}
      </p>
      <Button className=" w-[24rem] px-6 bg-color-yellow-2 text-white font-medium border-[0.3rem] border-transparent py-2 _xl:text-[2.2rem] _xl:w-max _xl:px-20 _xl:py-4 _lg:!text-[3.2rem]">
        {t("btn")}
      </Button>
    </div>
  );
}
