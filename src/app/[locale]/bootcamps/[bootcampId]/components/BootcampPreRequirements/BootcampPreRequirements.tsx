import React from "react";
import Image from "next/image";

import bagIcon from "../../../../../../../public/bootcamps_imgs/BagIcon.png";
import bigbagIcon from "../../../../../../../public/bootcamps_imgs/bigBag.png";

export default function BootcampPreRequirements() {
  return (
    <div className="mt-44 bg-bg-color-bootcamps-2 shadow-lg rounded-[2rem] w-[96%] flex justify-between items-center px-16">
      <div className="flex flex-col gap-6 py-16">
        <h4 className="text-[2rem] font-medium">Pre-Requirements</h4>
        <p className="text-[1.7rem] text-gray-500 font-light ">
          To start this Bootcamp you will need to have knowledge about these
          following fields
        </p>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-4">
            <Image src={bagIcon} alt={"Bag Icon"} width={22} height={22} />
            <p className="text-gray-1  text-[1.6rem] ">
              Basic Knowledge of Back-end Development
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={bagIcon} alt={"Bag Icon"} width={22} height={22} />
            <p className="text-gray-1  text-[1.6rem] ">
              Basic Knowledge of Mobile Development
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image src={bigbagIcon} alt={"Bag Icon"} width={140} height={140} />
      </div>
    </div>
  );
}
