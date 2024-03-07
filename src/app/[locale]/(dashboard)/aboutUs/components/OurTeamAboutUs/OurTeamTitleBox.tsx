import React from "react";
import { useTranslations } from "next-intl";

export default function OurTeamTitleBox() {
  const t = useTranslations("AboutUs.Team");

  return (
    <>
      <p className="text-[4rem] text-color-blue-1 font-medium _2xl:text-[5rem] tracking-wide _1/2xl:text-[6rem] _lg:!text-[7.2rem]">
        {t("ourTeam")}
      </p>
      <p className="text-[2rem] font-light text-gray-2 _2xl:text-[2.6rem] _1/2xl:text-[3rem] _lg:!text-[3.8rem]">
        {t("description")}
      </p>
    </>
  );
}
