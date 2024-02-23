import React from "react";
import { useTranslations } from "next-intl";
import TitleSubtitleBox from "../TitleSubtitleBox";
import SwipeNextButton from "./SwipeNextButton";
import SwiperPrevButton from "./SwiperPrevButton";
import UpcomingSwiper from "./UpcomingSwiper";

export default function UpcomingEventsSection() {
  const t = useTranslations("Home.Events");

  return (
    <div className="mt-56">
      <TitleSubtitleBox title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-36 -ml-12">
        <UpcomingSwiper />
      </div>
    </div>
  );
}
