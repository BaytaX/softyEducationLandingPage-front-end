import React from "react";
import Image from "next/image";

import aboutUsCheckCircle from "../../../../../../public/aboutUs-Imgs/aboutUsCheckCircle.png";

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
        className="w-16 h-16"
      />
      <div className="flex flex-col gap-3">
        <p className="text-[1.8rem]">{title}</p>
        <p className="text-[1.4rem] font-extralight text-gray-1">
          {description}
        </p>
      </div>
    </div>
  );
}
