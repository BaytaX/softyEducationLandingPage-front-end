import React from "react";
import { useTranslations } from "next-intl";

import ArabicWrapper from "../ArabicWrapper";
import TitleSubtitleBox from "../TitleSubtitleBox";

import WhyChooseUsBody from "./WhyChooseUsBody";

export default function WhyChooseUsSection() {
  const t = useTranslations("Home.WhyChooseUs");
  return (
    <ArabicWrapper>
      <div className="mt-64">
        <TitleSubtitleBox title={t("title")} subtitle={t("subtitle")} />
        <WhyChooseUsBody />
      </div>
    </ArabicWrapper>
  );
}
