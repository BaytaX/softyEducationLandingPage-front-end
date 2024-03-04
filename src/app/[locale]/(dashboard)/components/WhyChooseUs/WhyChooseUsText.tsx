import React from "react";
import Image from "next/image";

import check from "@/../../public/imgs/Check.png";
import close from "@/../../public/imgs/Close.png";
import ArabicWrapper from "../ArabicWrapper";

type WhyChooseUsTextProps = {
  title: string;
  subtitle?: string;
  us: boolean;
  titleClassName?: string;
  boxClassName?: string;
};

export default function WhyChooseUsText({
  title,
  subtitle,
  us,
  titleClassName,
  boxClassName,
}: WhyChooseUsTextProps) {
  return (
    <ArabicWrapper>
      <div
        className={`flex gap-8 h-fit  min-h-[16rem] lg:!mb-24 lg:!min-h-[23rem]  ${boxClassName} `}
      >
        <Image
          src={us ? check : close}
          alt={"check img"}
          className=" w-[3.5rem] h-[3.5rem] xl:w-[5rem] xl:h-[5rem] lg:!w-[7rem] lg:!h-[7rem]"
        />
        <div className="ml-4 flex flex-col gap-6">
          <p
            className={`text-[2.6rem] font-light 2xl:text-[3rem]   xl:text-[3.4rem] lg:!text-[4.4rem] ${titleClassName}  `}
          >
            {title}
          </p>
          <p className="text-[1.8rem] text-gray-1 font-thin   xl:text-[2.4rem]  lg:!text-[3.2rem]  ">
            {subtitle}
          </p>
        </div>
      </div>
    </ArabicWrapper>
  );
}
