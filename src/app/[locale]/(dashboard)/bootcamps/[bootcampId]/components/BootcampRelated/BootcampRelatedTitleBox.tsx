"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function BootcampRelatedTitleBox() {
  const t = useTranslations("Bootcamp");
  return (
    <h2 className="text-[3.2rem] font-medium 2xl:text-[4rem] 1/2xl:text-[4.8rem] lg:!text-[5.2rem]">
      {t("related")}
    </h2>
  );
}
