import React from "react";
import { useTranslations } from "next-intl";
import ArabicWrapper from "./ArabicWrapper";

export default function NoResultFound() {
  const t = useTranslations("no_results");
  return (
    <ArabicWrapper>
      <div className="ml-10 mt-10">
        <p className="text-[2.6rem] text-gray-500 tracking-wide ">{t("msg")}</p>
      </div>
    </ArabicWrapper>
  );
}
