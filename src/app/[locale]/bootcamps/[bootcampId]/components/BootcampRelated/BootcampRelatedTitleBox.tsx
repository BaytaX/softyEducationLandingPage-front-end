"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function BootcampRelatedTitleBox() {
  const t = useTranslations("Bootcamp");
  return <h2 className="text-[3.2rem] font-medium">{t("related")}p</h2>;
}
