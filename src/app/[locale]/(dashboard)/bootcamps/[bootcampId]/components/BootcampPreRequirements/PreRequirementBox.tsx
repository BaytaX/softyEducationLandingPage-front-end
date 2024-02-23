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
    <div className="flex items-center gap-4">
      <Image
        src={bagIcon}
        alt={"Bag Icon"}
        width={22}
        height={22}
        draggable={false}
      />
      <p className="text-gray-1  text-[1.6rem] ">{title}</p>
    </div>
  );
}
