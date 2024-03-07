import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Gallery_1 from "@/../../public/aboutUs-Imgs/galery-3.png";
import Gallery_2 from "@/../../public/aboutUs-Imgs/galery-2.png";
import Gallery_3 from "@/../../public/aboutUs-Imgs/galery-1.png";
import Gallery_4 from "@/../../public/aboutUs-Imgs/galery-4.png";
import GallerySwiper from "./GallerySwiper";
import ArabicWrapper from "../../../components/ArabicWrapper";

export default function OurGalleryAboutUs() {
  const t = useTranslations("AboutUs.Gallery");

  return (
    <div className="mt-56">
      <div className="flex flex-col gap-8 w-11/12 _lg:!w-full">
        <div className="flex flex-col gap-2">
          <p className="text-[1.7rem] text-color-blue-1 uppercase _2xl:text-[2.6rem] _1/2xl:text-[3.2rem] _lg:!text-[4.4rem]">
            {t("ourGallery")}
          </p>
          <h3 className="text-[4rem] font-medium _2xl:text-[5rem] _lg:!text-[6rem]">
            {t("title")}
          </h3>
        </div>
        <p className="text-[1.6rem] text-gray-2 font-light leading-[2.5rem] w-1/2 _2xl:text-[2.2rem] _2xl:w-full _2xl:leading-[3.6rem] _1/2xl:text-[2.8rem] _1/2xl:leading-[4rem] _lg:!text-[3.6rem] _lg:!leading-[5rem]">
          {t("description")}
        </p>
      </div>
      <div className="mt-20 -ml-20">
        <GallerySwiper />
      </div>
    </div>
  );
}
