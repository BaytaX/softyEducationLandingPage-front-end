"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function TestimonialsTitleBox() {
  const t = useTranslations("Testimonials");
  return <h2 className="text-[3.2rem] font-medium">{t("title")}</h2>;
}
