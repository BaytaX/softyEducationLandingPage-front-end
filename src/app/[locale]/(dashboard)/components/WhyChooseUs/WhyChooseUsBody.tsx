"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";

import WhyChooseUsText from "./WhyChooseUsText";
import WhyChooseUsSwiper from "./WhyChooseUsSwiper";
import MiniLoader from "../MiniLoader";

import Logo from "@/../../public/imgs/logo.png";
import horizLine from "@/../../public/imgs/horiz.png";

import { getWhyChooseUs } from "@/api/whyChooseUs/getWhyChooseUs";
import NoResultFound from "../NoResultFound";

export default function WhyChooseUsBody() {
  const t = useTranslations("Home.WhyChooseUs");

  const locale = useLocale();
  const {
    isLoading,
    data: whyChooseUsArgs,
    error,
  } = useQuery({
    queryKey: ["why-choose-us", locale],
    queryFn: async () => await getWhyChooseUs({ locale }),
  });

  const whyUsArgs = whyChooseUsArgs?.filter(
    (arg: any) => arg?.attributes?.us === true
  );
  const whyOthersArgs = whyChooseUsArgs?.filter(
    (arg: any) => arg?.attributes?.us === false
  );

  return (
    <>
      {isLoading ? (
        <div className="w-full justify-center items-center">
          {" "}
          <MiniLoader />
        </div>
      ) : whyChooseUsArgs?.length ? (
        <>
          <div className="mt-32 h-fit hidden 2xl:block ">
            <WhyChooseUsSwiper data={whyChooseUsArgs} />
          </div>
          <div className="flex items-center  justify-around rounded-[3rem]  mt-20 p-44 shadow-xl -ml-12 w-full 2xl:hidden">
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
                {whyOthersArgs?.map((ele: any, i: number) => (
                  <WhyChooseUsText
                    title={ele?.attributes?.title}
                    subtitle={ele?.attributes?.subtitle}
                    us={false}
                    key={i}
                  />
                ))}
              </div>
            </div>{" "}
          </div>
        </>
      ) : (
        <NoResultFound />
      )}
    </>
  );
}
