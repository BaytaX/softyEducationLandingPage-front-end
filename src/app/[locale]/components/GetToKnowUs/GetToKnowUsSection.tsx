import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/navigation/navigation";
import bgGetToKnowUs from "../../../../../public/imgs/bgGetToKnowUs.png";
import bigLogo from "../../../../../public/imgs/biglogo.png";
import GetToKnowUsVideoPlayer from "./GetToKnowUsVideoPlayer";
import ArabicWrapper from "../ArabicWrapper";

export default function GetToKnowUsSection() {
  const t = useTranslations("Home.GetToKnowUs");

  return (
    <ArabicWrapper>
      <div className="mt-44 -ml-20 bg-gradient-to-l from-color-blue-6 to-bg-color-getToKnowUs rounded-[3rem] h-[66rem] flex py-40  items-center pr-8 pl-28 relative overflow-hidden">
        <Image
          src={bgGetToKnowUs}
          alt={"background of get to Know Us Section"}
          className="w-full h-full absolute top-0 right-0 z-10 "
        />
        <div className="flex items-center z-30 ">
          <div className=" flex flex-col gap-24 justify-center w-1/2 ">
            <h3 className="text-[2.4rem] tracking-wider  font-medium">
              {t("title")}
            </h3>
            <Image
              src={bigLogo}
              alt={"Logo of Softy Education"}
              width={300}
              height={10}
            />
            <p className="text-[1.8rem] font-light">{t("description")}</p>
            <div className="flex">
              <button className="hover:opacity-60 transition-all cursor-pointer text-[1.8rem]  px-14 py-2 font-medium border-[2px] rounded-full border-gray-2">
                {t("joinUsNow")}
              </button>
              <Link href={"/aboutUs"}>
                <button className=" hover:opacity-60 transition-all cursor-pointer rounded-full text-[1.8rem] px-12 py-2 font-medium border-2 border-transparent">
                  {t("aboutUs")}
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <GetToKnowUsVideoPlayer />
          </div>
        </div>
      </div>
    </ArabicWrapper>
  );
}
