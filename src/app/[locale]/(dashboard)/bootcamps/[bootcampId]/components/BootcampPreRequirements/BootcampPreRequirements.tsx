import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import PreRequirementBox from "./PreRequirementBox";

import bigbagIcon from "@/../../public/bootcamps_imgs/bigBag.png";

import transformStringtoArr from "@/helpers/transformStringtoArr";

type BootcampPreRequirementsPropsType = {
  data: string;
};

export default function BootcampPreRequirements({
  data,
}: BootcampPreRequirementsPropsType) {
  const t = useTranslations("Bootcamp.pre-requirements");

  const pre_requirements = transformStringtoArr(data);
  return (
    <div className="mt-44 bg-bg-color-bootcamps-2 shadow-lg rounded-[2rem] w-[96%] flex justify-between items-center px-16">
      <div className="flex flex-col gap-6 py-16">
        <h4 className="text-[2rem] font-medium">{t("title")}</h4>
        <p className="text-[1.7rem] text-gray-500 font-light ">
          {t("subtitle")}
        </p>
        <div className="flex gap-8 items-center flex-wrap w-full">
          {pre_requirements?.map((ele, i) => (
            <PreRequirementBox title={ele} key={i} />
          ))}
        </div>
      </div>
      <div>
        <Image
          src={bigbagIcon}
          alt={"Bag Icon"}
          width={140}
          height={140}
          draggable={false}
        />
      </div>
    </div>
  );
}
