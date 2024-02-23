import React from "react";
import { useTranslations } from "next-intl";

export default function OurTeamTitleBox() {
  const t = useTranslations("AboutUs.Team");

  return (
    <>
      <p className="text-[4rem] text-color-blue-1 font-medium">
        {t("ourTeam")}
      </p>
      <p className="text-[2rem] font-light text-gray-2 ">{t("description")}</p>
    </>
  );
}
