import React from "react";
import { useTranslations } from "next-intl";

export default function HeroTitleBoxAboutUs() {
  const t = useTranslations("AboutUs.Hero");

  return (
    <div className="flex flex-col gap-32  w-[110rem] -mt-4 ">
      <div className="flex flex-col gap-8">
        <p className="text-[2.6rem] text-color-yellow-2 font-medium">
          {t("aboutUs")}
        </p>
        <h2 className="text-[6.6rem] font-medium leading-[6.6rem]">
          {t("title")}
        </h2>
      </div>
      <p className="font-light  text-[1.8rem] leading-[3rem] -mt-8 w-10/12">
        {t("description")}
      </p>
    </div>
  );
}
