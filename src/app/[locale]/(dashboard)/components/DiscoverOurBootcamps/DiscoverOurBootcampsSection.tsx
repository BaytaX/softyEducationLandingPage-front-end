import React from "react";
import { useTranslations } from "next-intl";
import BootcampsSwiper from "./BootcampsSwiper";
import { Link } from "@/navigation/navigation";

export default function DiscoverOurBootcampsSection() {
  const t = useTranslations("Home.Bootcamps");

  return (
    <div className="  -ml-[6rem] mt-60 bg-bg-color-bootcamps p-6  pb-20 ">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-color-yellow-2 text-[6.4rem] font-medium text-center">
          {t("title")}
        </h2>
        <p className="text-[2rem] text-center w-8/12 font-normal text-gray-2">
          {t("subtitle")}
        </p>
      </div>
      <div className="mt-10 w-[97%] ml-8  ">
        <BootcampsSwiper />
        <div className="flex justify-center items-center -mt-10 ml-20 ">
          <Link
            href={"/bootcamps"}
            className="text-[2.4rem] text-color-yellow-2 underline tracking-wide hover:opacity-80 transition-all z-40"
          >
            {t("seeAllBootcamps")}
          </Link>
        </div>
      </div>
    </div>
  );
}
