import Image from "next/image";
import React from "react";
import check from "../../../../../public/imgs/Check.png";
import close from "../../../../../public/imgs/Close.png";

type WhyChooseUsTextProps = {
  title: string;
  subtitle: string;
  us: boolean;
};

export default function WhyChooseUsText({
  title,
  subtitle,
  us,
}: WhyChooseUsTextProps) {
  return (
    <div className="flex gap-4 h-[16rem] ">
      <Image
        src={us ? check : close}
        alt={"check img"}
        className=" w-[3.5rem] h-[3.5rem] mt-2"
      />
      <div className="ml-4 flex flex-col gap-6">
        <p className="text-[2.6rem] font-light">{title} </p>
        <p className="text-[1.8rem] text-gray-1 font-thin ">{subtitle}</p>
      </div>
    </div>
  );
}
