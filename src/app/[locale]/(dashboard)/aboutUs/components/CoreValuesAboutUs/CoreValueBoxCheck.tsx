import React from "react";
import Image from "next/image";

import aboutUsCheckCircle from "@/../../public/aboutUs-Imgs/aboutUsCheckCircle.png";

type CoreValueBoxCheckPropsTYpe = {
  title: string;
  description: string;
};

export default function CoreValueBoxCheck({
  title,
  description,
}: CoreValueBoxCheckPropsTYpe) {
  return (
    <div className="flex gap-6">
      <Image
        src={aboutUsCheckCircle}
        alt={"Check Circle"}
        className="w-16 h-16 lg:w-24 lg:h-24"
        draggable={false}
      />
      <div className="flex flex-col gap-3">
        <p className="text-[1.8rem] 2xl:text-[2.4rem] 1/2xl:text-[3rem] lg:!text-[4.4rem]">
          {title}
        </p>
        <p className="text-[1.4rem] font-extralight text-gray-1 2xl:text-[2rem]  1/2xl:text-[2.4rem] lg:!text-[3.4rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
