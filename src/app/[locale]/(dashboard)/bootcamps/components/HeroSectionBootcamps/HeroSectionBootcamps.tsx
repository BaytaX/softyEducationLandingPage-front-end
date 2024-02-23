import React from "react";
import Image from "next/image";

import HeroTitleBoxBootcamps from "./HeroTitleBoxBootcamps";
import ArabicWrapper from "@/app/[locale]/(dashboard)/components/ArabicWrapper";

import HeroBg from "@/../../public/imgs/herobg.webp";
import HeroImgBootcamps from "@/../../public/bootcamps_imgs/bootcampsHeroImg.jpg";

export default function HeroSectionBootcamps() {
  return (
    <ArabicWrapper>
      <div className="mt-[20rem]">
        <Image
          src={HeroBg}
          alt={"BackGround of the Hero Section"}
          className="absolute top-[2%] right-0 w-full -ml-52 -z-10"
          draggable={false}
          priority
        />
        <div className="flex gap-28 items-center mt-4 mr-12">
          <HeroTitleBoxBootcamps />
          <Image
            src={HeroImgBootcamps}
            alt={
              " some students are learning & in front of them there is a teacher  "
            }
            width={450}
            height={350}
            className="w-[45rem] h-[35rem] rounded-[3rem]"
            draggable={false}
          />
        </div>
      </div>
    </ArabicWrapper>
  );
}
