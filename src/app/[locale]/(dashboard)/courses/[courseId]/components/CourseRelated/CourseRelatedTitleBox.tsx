"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function CourseRelatedTitleBox() {
  const t = useTranslations("Course");
  return (
    <h2 className="text-[3.2rem] font-medium _2xl:text-[4.4rem]">
      {t("related")}
    </h2>
  );
}
