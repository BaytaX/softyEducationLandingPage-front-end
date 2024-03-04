import React from "react";
import Image from "next/image";

import ArabicWrapper from "../ArabicWrapper";
import HeroTitleBox from "./HeroTitleBox";

import HeroImg from "../HeroImg";
import HeroBg from "@/../../public/imgs/herobg.webp";

export default function HeroSection() {
  return (
    <ArabicWrapper className="mr-36">
      <div className="mt-[20rem] ">
        <Image
          src={HeroBg}
          alt={"BackGround of the Hero Section"}
          className="absolute top-[2%] right-0 w-full -ml-52 -z-10"
          draggable={false}
          priority
        />
        <div
          className={`flex gap-8 items-center w-full mt-4 6xl:-ml-12 6xl:-mr-20 6xl:flex-col  6xl:justify-center 6xl:gap-44 lg:m-0 `}
        >
          <HeroTitleBox />
          <HeroImg />
        </div>
      </div>
    </ArabicWrapper>
  );
}
