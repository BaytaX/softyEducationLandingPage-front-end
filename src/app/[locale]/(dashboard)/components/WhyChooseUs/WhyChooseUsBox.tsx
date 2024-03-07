import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import WhyChooseUsText from "./WhyChooseUsText";

import Logo from "@/../../public/imgs/logo.png";

export default function WhyChooseUsBox({ data, additionalData: args }: any) {
  const t = useTranslations("Home.WhyChooseUs");
  const isSofty = data.isSofty;

  const whyUsArgs = args?.filter((arg: any) => arg?.attributes?.us === true);
  const whyOthersArgs = args?.filter(
    (arg: any) => arg?.attributes?.us === false
  );

  return (
    <>
      {isSofty ? (
        <div className="w-11/12 _lg:mt-56 h-fit">
          <div className="flex justify-start ml-10 ">
            <Image
              src={Logo}
              alt={"logo of softy education"}
              width={200}
              height={5}
              draggable={false}
            />
          </div>
          <div className="mt-32 flex flex-col gap-6 _xl:gap-20 ">
            {whyUsArgs?.map((ele: any, i: number) => (
              <WhyChooseUsText
                title={ele?.attributes?.title}
                subtitle={ele?.attributes?.subtitle}
                us={true}
                key={i}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="self-start mt-16 w-11/12 _lg:mt-80 h-fit">
          <h3 className="text-[4.4rem] font-medium text-center tracking-wide _lg:text-[6.4rem]">
            {t("otherSolutions")}
          </h3>
          <div className="mt-32 flex flex-col gap-6 ">
            {whyOthersArgs?.map((ele: any, i: number) => (
              <WhyChooseUsText
                title={ele?.attributes?.title}
                subtitle={ele?.attributes?.subtitle}
                us={false}
                key={i}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
