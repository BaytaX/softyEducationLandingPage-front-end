import React from "react";
import { useTranslations } from "next-intl";

import TitleSubtitleBox from "../TitleSubtitleBox";
import ReviewsSwiper from "./ReviewsSwiper";
import ArabicWrapper from "../ArabicWrapper";

export default function ReviewsSection() {
  const t = useTranslations("Home.Reviews");

  return (
    <ArabicWrapper>
      <div className="mt-44 lg:-ml-10 md:!-ml-24">
        <TitleSubtitleBox title={t("title")} subtitle={t("subtitle")} />
        <div className="mt-24">
          <ReviewsSwiper />
        </div>
      </div>
    </ArabicWrapper>
  );
}
