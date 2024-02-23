import React from "react";
import { useTranslations } from "next-intl";

import WhyChooseUsText from "@/app/[locale]/(dashboard)/components/WhyChooseUs/WhyChooseUsText";
import ReviewsBootcampsSwiper from "./ReviewsBootcampsSwiper";
import ArabicWrapper from "@/app/[locale]/(dashboard)/components/ArabicWrapper";

export default function BootcampsCardReview() {
  const t = useTranslations("Bootcamps.ReviewCard");

  return (
    <ArabicWrapper>
      <div className="bg-color-blue-8 w-[97%]  mt-80  rounded-[2rem] shadow-xl pt-20 px-28 flex gap-4 pb-32">
        <div className="w-7/12">
          <h2 className="text-[3.8rem] tracking-wide font-medium">
            {t("title")}
          </h2>
          <div className="mt-20 w-10/12">
            <WhyChooseUsText
              title={t("whySoftylines_1")}
              us={true}
              titleClassName="!text-[2rem] text-gray-1 -ml-2"
              boxClassName="h-[9rem]"
            />
            <WhyChooseUsText
              title={t("whySoftylines_2")}
              us={true}
              titleClassName="!text-[2rem]  text-gray-1 -ml-2"
              boxClassName="h-[9rem]"
            />
            <WhyChooseUsText
              title={t("whySoftylines_3")}
              us={true}
              titleClassName="!text-[2rem]  text-gray-1 -ml-2"
              boxClassName="h-[9rem]"
            />
          </div>
        </div>
        <div className="w-[44%]">
          <ReviewsBootcampsSwiper />
        </div>
      </div>
    </ArabicWrapper>
  );
}
