import React from "react";
import Image from "next/image";
import GalleryAboutUs from "../../../../../../public/aboutUs-Imgs/aboutUsGallery.png";
import { useTranslations } from "next-intl";
import CoreValueBoxCheck from "./CoreValueBoxCheck";

export default function CoreValuesAboutUs() {
  const t = useTranslations("AboutUs.Core");

  return (
    <div className="flex gap-20 mt-96">
      <div className="w-71/2">
        <Image
          src={GalleryAboutUs}
          alt={"gallery of the team members"}
          className="w-full h-full"
          draggable={false}
        />
      </div>
      <div className="w-5/12 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <h3 className="text-[4.4rem] font-medium">{t("title")}</h3>
          <p className="text-[1.8rem] font-light text-gray-2">
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
