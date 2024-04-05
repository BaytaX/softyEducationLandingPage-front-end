import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation/navigation";

import GetToKnowUsVideoPlayer from "./GetToKnowUsVideoPlayer";
import ArabicWrapper from "../ArabicWrapper";

import bgGetToKnowUs from "@/../../public/imgs/bgGetToKnowUs.png";
import bigLogo from "@/../../public/imgs/biglogo.png";

export default function GetToKnowUsSection() {
  const t = useTranslations("Home.GetToKnowUs");

  return (
    <ArabicWrapper className="mr-20">
      <div className="mt-44 -ml-24 bg-gradient-to-l from-color-blue-6 to-bg-color-getToKnowUs _2xl:ml-6 rounded-[3rem] h-[66rem] _2xl:h-fit _2xl:w-11/12 _xl:!w-full _xl:!px-2 _xl:!-ml-10  _2xl:p-20 flex py-40  pr-8 pl-28 relative overflow-hidden">
        <Image
          src={bgGetToKnowUs}
          alt={"background of get to Know Us Section"}
          className="w-full h-full absolute top-0 right-0 z-10 "
          draggable={false}
        />
        <div className="flex items-center z-30  _2xl:flex-col _2xl:gap-20">
          <div className=" flex flex-col gap-24 justify-center w-[40%] _2xl:w-[80%] _2xl:items-center">
            <h3 className="text-[2.4rem] tracking-wider  font-medium _2xl:-ml-10 _2xl:text-[3.6rem] _sm:text-center">
              {t("title")}
            </h3>
            <Image
              src={bigLogo}
              alt={"Logo of Softy Education"}
              width={300}
              height={10}
              draggable={false}
            />
            <p className="text-[2rem] font-light _2xl:text-center _2xl:text-[2.6rem] _1/2xl:text-[3.2rem]">
              {t("description")}
            </p>
            <div className="flex flex-wrap _lg:justify-center gap-4">
              <Link href={"/register"} prefetch={false}>
                <button className="hover:opacity-60 _2xl:text-[2.2rem] transition-all cursor-pointer text-[1.8rem]  px-14 py-2 font-medium border-[2px] rounded-full border-gray-2 _xl:text-[2.8rem] _lg:!text-[3.6rem] _lg:px-28 _lg:w-max _xs:w-fit">
                  {t("joinUsNow")}
                </button>
              </Link>
              <Link href={"/aboutUs"} prefetch={false}>
                <button className=" hover:opacity-60 _2xl:text-[2.2rem] transition-all cursor-pointer rounded-full text-[1.8rem] px-12 py-2 font-medium border-2 border-transparent _xl:text-[2.8rem] _lg:!text-[3.6rem] _lg:w-max">
                  {t("aboutUs")}
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-[60%] _2xl:w-[86%]">
            <GetToKnowUsVideoPlayer />
          </div>
        </div>
      </div>
    </ArabicWrapper>
  );
}
