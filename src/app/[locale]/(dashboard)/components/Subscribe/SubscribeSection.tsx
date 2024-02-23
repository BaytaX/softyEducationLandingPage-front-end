import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "../Button";
import ArabicWrapper from "../ArabicWrapper";

import subscribeImg from "@/../../public/imgs/subscribe.png";

type SubscribeSectionPropsType = {
  classNameSubscribe?: string;
};

export default function SubscribeSection({
  classNameSubscribe,
}: SubscribeSectionPropsType) {
  const t = useTranslations("Home.Subscribe");

  return (
    <ArabicWrapper>
      <div
        className={`shadow-2xl flex justify-between mt-52 rounded-[3rem] h-[60rem] -ml-12 w-full ${classNameSubscribe} `}
      >
        <div className="p-20 flex flex-col justify-around w-7/12">
          <p className="text-[2.4rem] tracking-wider  font-medium">
            {t("title")}
          </p>
          <p className="text-[1.7rem] font-extralight text-gray-500 w-9/12">
            {t("description")}
          </p>
          <div className="flex flex-col gap-10">
            <input
              type="text"
              placeholder={t("placeHolderName")}
              className="w-[52rem] pr-10 py-3 rounded-full text-[1.6rem] placeholder:text-[1.6rem] placeholder:text-gray-400 placeholder:tracking-wide placeholder:font-thin border border-gray-400 pl-14"
            />
            <input
              type="text"
              placeholder={t("placeHolderEmail")}
              className="w-[52rem] pr-10  py-3 rounded-full text-[1.6rem] placeholder:text-[1.6rem] placeholder:text-gray-400 placeholder:tracking-wide placeholder:font-thin border border-gray-400 pl-14"
            />
            <input
              type="text"
              placeholder={t("placeHolderPhone")}
              className="w-[52rem] pr-10  py-3 rounded-full text-[1.6rem] placeholder:text-[1.6rem] placeholder:text-gray-400 placeholder:tracking-wide placeholder:font-thin border border-gray-400 pl-14"
            />
          </div>
          <Button className="bg-color-blue-2 py-4 px-24 text-[1.6rem] font-normal tracking-wide text-white w-[33rem]">
            {t("subscribeNow")}
          </Button>
        </div>
        <div>
          <Image
            src={subscribeImg}
            alt={"picture of tech products "}
            className="h-full w-full "
            draggable={false}
          />
        </div>
      </div>
    </ArabicWrapper>
  );
}
