import React from "react";
import { useTranslations } from "next-intl";

import TitleSubtitleBox from "../TitleSubtitleBox";
import ReviewsSwiper from "./ReviewsSwiper";

export default function ReviewsSection() {
  const t = useTranslations("Home.Reviews");

  return (
    <div className="mt-44">
      <TitleSubtitleBox title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-24">
        <ReviewsSwiper />
      </div>
    </div>
  );
}
