import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import CoreValueBoxCheck from "./CoreValueBoxCheck";

import GalleryAboutUs from "@/../../public/aboutUs-Imgs/aboutUsGallery.png";

export default function CoreValuesAboutUs() {
  const t = useTranslations("AboutUs.Core");

  return (
    <div className="flex gap-20 mt-96 _2xl:flex-col-reverse _2xl:mt-44 _2xl:items-center _2xl:w-11/12 _1/2xl:2xl:items-start">
      <div className="w-1/2 _2xl:w-9/12 _lg:!w-full">
        <Image
          src={GalleryAboutUs}
          alt={"gallery of the team members"}
          className="w-full h-full"
          draggable={false}
        />
      </div>
      <div className="w-5/12  flex flex-col gap-[5rem] _2xl:w-11/12 _2xl:gap-16 _lg:!w-full">
        <div className="flex flex-col gap-8">
          <h3 className="text-[4.4rem] font-medium _2xl:text-[5rem] _lg:!text-[6.4rem]">
            {t("title")}
          </h3>
          <p className="text-[1.8rem] font-light text-gray-2 _2xl:text-[2.4rem] _1/2xl:text-[2.6rem] _lg:!text-[3.4rem]">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-col gap-12 ">
          <CoreValueBoxCheck
            title={t("item_1.title")}
            description={t("item_1.description")}
          />
          <CoreValueBoxCheck
            title={t("item_2.title")}
            description={t("item_2.description")}
          />
          <CoreValueBoxCheck
            title={t("item_3.title")}
            description={t("item_3.description")}
          />
        </div>
      </div>
    </div>
  );
}
