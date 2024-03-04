import React from "react";
import { useTranslations } from "next-intl";

export default function BootcampHeroTitleBox() {
  const t = useTranslations("Bootcamp");

  return (
    <div className="flex items-center flex-col justify-center gap-8 lg:items-start">
      <h1 className="text-[4.4rem] font-medium xl:text-[5.6rem] lg:!text-[7.2rem]">
        {t("title")}
      </h1>
      <p className="text-gray-500 text-[1.5rem] w-9/12 text-center xl:text-[2.2rem] xl:w-10/12 lg:text-start lg:!text-[3.2rem] lg:!w-11/12">
        {t("subtitle")}
      </p>
    </div>
  );
}
