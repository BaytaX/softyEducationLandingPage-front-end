import React from "react";
import TitleSubtitleBox from "../TitleSubtitleBox";
import { useTranslations } from "next-intl";
import ExploreCoursesSwiper from "./ExploreCoursesSwiper";

export default function ExploreCoursesSection() {
  const t = useTranslations("Home.Courses");

  return (
    <div className="mt-44 ">
      <TitleSubtitleBox title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-24  w-full -ml-12">
        <ExploreCoursesSwiper />
      </div>
    </div>
  );
}
