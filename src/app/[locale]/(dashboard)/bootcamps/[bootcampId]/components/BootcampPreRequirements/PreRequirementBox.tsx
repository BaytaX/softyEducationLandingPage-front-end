import React from "react";
import Image from "next/image";

import bagIcon from "@/../../public/bootcamps_imgs/BagIcon.png";

type PreRequirementBoxPropsType = {
  title: string;
};

export default function PreRequirementBox({
  title,
}: PreRequirementBoxPropsType) {
  return (
    <div className="flex items-start gap-4 1/2xl:gap-8">
      <Image
        src={bagIcon}
        alt={"Bag Icon"}
        width={22}
        height={22}
        className="w-[2.2rem] 2xl:w-[3rem] 1/2xl:w-[4rem] lg:!w-[5rem]"
        draggable={false}
      />
      <p className="text-gray-1  text-[1.6rem] 2xl:text-[2rem] 1/2xl:text-[2.4rem] lg:!text-[2.8rem]">
        {title}
      </p>
    </div>
  );
}
