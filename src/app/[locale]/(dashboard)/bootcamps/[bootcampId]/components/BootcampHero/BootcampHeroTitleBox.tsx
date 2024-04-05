import React from "react";
import { useTranslations } from "next-intl";

export default function BootcampHeroTitleBox() {
  const t = useTranslations("Bootcamp");

  return (
    <div className="flex items-center flex-col justify-center gap-8 _lg:items-start">
      <h1 className="text-[4.4rem] font-medium _xl:text-[5.6rem] _lg:!text-[7.2rem]">
        {t("title")}
      </h1>
      <p className="text-gray-500 text-[1.7rem] w-9/12 text-center _xl:text-[2.2rem] _xl:w-10/12 _lg:text-start _lg:!text-[3.2rem] _lg:!w-11/12">
        {t("subtitle")}
      </p>
    </div>
  );
}
