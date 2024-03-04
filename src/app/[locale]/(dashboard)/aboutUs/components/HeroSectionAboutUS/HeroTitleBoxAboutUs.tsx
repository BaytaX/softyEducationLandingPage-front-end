import React from "react";
import { useTranslations } from "next-intl";

export default function HeroTitleBoxAboutUs() {
  const t = useTranslations("AboutUs.Hero");

  return (
    <div className="flex flex-col gap-20  w-1/2 -mt-4 2xl:w-11/12">
      <div className="flex flex-col gap-8">
        <p className="text-[2.6rem] text-color-yellow-2 font-medium 2xl:text-[3.2rem] lg:!text-[4.4rem]">
          {t("aboutUs")}
        </p>
        <h2 className="text-[6.6rem] font-medium leading-[6.6rem] ">
          {t("title")}
        </h2>
      </div>
      <p className="font-light text-gray-1 text-[1.8rem] leading-[3rem] w-10/12 2xl:text-[2.2rem] 2xl:leading-[4rem] 1/2xl:text-[2.6rem] 1/2xl:leading-[4.6rem] lg:!w-11/12 lg:!text-[3.4rem] lg:!leading-[5.6rem]">
        {t("description")}
      </p>
    </div>
  );
}
