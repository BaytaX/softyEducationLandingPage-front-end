import React from "react";
import { useTranslations } from "next-intl";

import WhyChooseUsText from "@/app/[locale]/(dashboard)/components/WhyChooseUs/WhyChooseUsText";
import ReviewsBootcampsSwiper from "./ReviewsBootcampsSwiper";
import ArabicWrapper from "@/app/[locale]/(dashboard)/components/ArabicWrapper";

export default function BootcampsCardReview() {
  const t = useTranslations("Bootcamps.ReviewCard");

  return (
    <ArabicWrapper className="-ml-24 ">
      <div className="bg-color-blue-8 w-[96%]  mt-80  rounded-[2rem] shadow-xl pt-20 px-28 flex gap-4 pb-32 _xl:-ml-12 _xl:w-full _lg:px-10 _1/2xl:pt-44 _2xl:flex-col ">
        <div className="w-7/12 _2xl:w-11/12 _lg:!w-full">
          <h2 className="text-[3.8rem] tracking-wide font-medium _lg:text-[4.4rem]">
            {t("title")}
          </h2>
          <div className="mt-20 w-10/12 _2xl:w-full _lg:mt-44">
            <WhyChooseUsText
              title={t("whySoftylines_1")}
              us={true}
              titleClassName="text-[2rem] text-gray-1 -ml-2 _2xl:text-[2.6rem] _lg:!text-[3.6rem] "
              boxClassName="h-fit pb-[2rem] min-h-[8rem]"
            />
            <WhyChooseUsText
              title={t("whySoftylines_2")}
              us={true}
              titleClassName="text-[2rem]  text-gray-1 -ml-2 _2xl:text-[2.6rem] _lg:!text-[3.6rem]"
              boxClassName="h-fit pb-[2rem] min-h-[8rem]"
            />
            <WhyChooseUsText
              title={t("whySoftylines_3")}
              us={true}
              titleClassName="text-[2rem]  text-gray-1 -ml-2 _2xl:text-[2.6rem] _lg:!text-[3.6rem]"
              boxClassName="h-fit pb-[2rem] min-h-[8rem]"
            />
          </div>
        </div>
        <div className="w-[44%] _2xl:w-2/3 self-center _1/2xl:w-[90%] _md:!w-full">
          <ReviewsBootcampsSwiper />
        </div>
      </div>
    </ArabicWrapper>
  );
}
