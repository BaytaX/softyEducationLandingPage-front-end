import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import ArabicWrapper from "../ArabicWrapper";
import TitleSubtitleBox from "../TitleSubtitleBox";
import WhyChooseUsText from "./WhyChooseUsText";

import Logo from "@/../../public/imgs/logo.png";
import horizLine from "@/../../public/imgs/horiz.png";

export default function WhyChooseUsSection() {
  const t = useTranslations("Home.WhyChooseUs");

  return (
    <ArabicWrapper>
      <div className="mt-64">
        <TitleSubtitleBox title={t("title")} subtitle={t("subtitle")} />
        <div className="flex items-center  justify-around rounded-[3rem]  mt-20 p-44 shadow-xl -ml-12 w-full">
          <div className="w-5/12">
            <div className="flex justify-center items-center ">
              <Image
                src={Logo}
                alt={"logo of softy education"}
                width={200}
                height={5}
                draggable={false}
              />
            </div>
            <div className="mt-32 flex flex-col gap-20">
              <WhyChooseUsText
                title={t("whySoftylines_1.title")}
                subtitle={t("whySoftylines_1.description")}
                us={true}
              />
              <WhyChooseUsText
                title={t("whySoftylines_2.title")}
                subtitle={t("whySoftylines_2.description")}
                us={true}
              />
              <WhyChooseUsText
                title={t("whySoftylines_3.title")}
                subtitle={t("whySoftylines_3.description")}
                us={true}
              />
              <WhyChooseUsText
                title={t("whySoftylines_4.title")}
                subtitle={t("whySoftylines_4.description")}
                us={true}
              />
            </div>
          </div>
          <div className="px-20">
            <Image
              src={horizLine}
              alt={"horizontal line"}
              width={1}
              height={10}
              draggable={false}
            />

            <div className="w-2 h-10/12 bg-slate-500"></div>
          </div>
          <div className="self-start w-1/2 ">
            <h3 className="text-[4.4rem] font-medium text-center tracking-wide">
              {t("otherSolutions")}
            </h3>
            <div className="mt-32 flex flex-col gap-20">
              <WhyChooseUsText
                title={t("whyOtherSolutions_1.title")}
                subtitle={t("whyOtherSolutions_1.description")}
                us={false}
              />
              <WhyChooseUsText
                title={t("whyOtherSolutions_2.title")}
                subtitle={t("whyOtherSolutions_2.description")}
                us={false}
              />
              <WhyChooseUsText
                title={t("whyOtherSolutions_3.title")}
                subtitle={t("whyOtherSolutions_3.description")}
                us={false}
              />
              <WhyChooseUsText
                title={t("whyOtherSolutions_4.title")}
                subtitle={t("whyOtherSolutions_4.description")}
                us={false}
              />
            </div>
          </div>
        </div>
      </div>
    </ArabicWrapper>
  );
}
