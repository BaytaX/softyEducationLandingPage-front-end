import React from "react";
import { useTranslations } from "next-intl";

export default function BootcampHeroTitleBox() {
  const t = useTranslations("Bootcamp");

  return (
    <div className="flex items-center flex-col justify-center gap-8">
      <h1 className="text-[4.4rem] font-medium"> {t("title")}</h1>
      <p className="text-gray-500 text-[1.5rem] w-9/12 text-center">
        {t("subtitle")}
      </p>
    </div>
  );
}
