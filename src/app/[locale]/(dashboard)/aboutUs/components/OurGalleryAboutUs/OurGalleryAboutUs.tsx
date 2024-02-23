import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Gallery_1 from "@/../../public/aboutUs-Imgs/galery-3.png";
import Gallery_2 from "@/../../public/aboutUs-Imgs/galery-2.png";
import Gallery_3 from "@/../../public/aboutUs-Imgs/galery-1.png";
import Gallery_4 from "@/../../public/aboutUs-Imgs/galery-4.png";

export default function OurGalleryAboutUs() {
  const t = useTranslations("AboutUs.Gallery");

  return (
    <div className="mt-56">
      <div className="flex flex-col gap-8 w-1/2">
        <div className="flex flex-col gap-2">
          <p className="text-[1.7rem] text-color-blue-1 uppercase">
            {t("ourGallery")}
          </p>
          <h3 className="text-[4rem] font-medium">{t("title")}</h3>
        </div>
        <p className="text-[1.6rem] text-gray-2 font-light leading-[2.5rem] w-10/12">
          {t("description")}
        </p>
      </div>
      <div className="flex gap-12 items-center mt-20">
        <Image
          src={Gallery_1}
          alt={"a picture of the team office "}
          className="w-[28rem] h-[20rem]"
          draggable={false}
        />

        <Image
          src={Gallery_2}
          alt={"a picture of the team office "}
          className="w-[28rem] h-[20rem]"
          draggable={false}
        />
        <Image
          src={Gallery_3}
          alt={"a picture of the team office "}
          className="w-[28rem] h-[20rem]"
          draggable={false}
        />

        <Image
          src={Gallery_4}
          alt={"a picture of the team office "}
          className="w-[28rem] h-[20rem]"
          draggable={false}
        />
      </div>
    </div>
  );
}
