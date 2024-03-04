import React from "react";
import { useTranslations } from "next-intl";
import BootcampsSwiper from "./BootcampsSwiper";
import { Link } from "@/navigation/navigation";

export default function DiscoverOurBootcampsSection() {
  const t = useTranslations("Home.Bootcamps");

  return (
    <div className="  -ml-[6rem] mt-60 bg-bg-color-bootcamps p-6  pb-20 xl:-ml-[10rem]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-color-yellow-2 text-[6.4rem] font-medium text-center w-11/12 lg:!text-[7.2rem] ">
          {t("title")}
        </h2>
        <p className="text-[2rem] text-center w-8/12 font-normal text-gray-2 xl:w-10/12 xl:text-[2.4rem] lg:!text-[3.2rem]">
          {t("subtitle")}
        </p>
      </div>
      <div className="mt-10 w-[97%] ml-8 ">
        <BootcampsSwiper />
        <div className="flex justify-center items-center -mt-10 ml-20 2xl:mt-10 2xl:ml-10">
          <Link
            href={"/bootcamps"}
            className="text-[2.4rem] text-color-yellow-2 underline tracking-wide hover:opacity-80 transition-all z-40 xl:text-[3rem] lg:!text-[4.4rem]"
            prefetch={false}
          >
            {t("seeAllBootcamps")}
          </Link>
        </div>
      </div>
    </div>
  );
}
