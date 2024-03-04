import React from "react";
import Image from "next/image";

import HeroTitleBoxAboutUs from "./HeroTitleBoxAboutUs";

import HeroBg from "@/../../public/imgs/herobg.webp";
import HeroImgAboutUs from "@/../../public/aboutUs-Imgs/aboutUsHero.png";

export default function HeroSectionAboutUS() {
  return (
    <div className="mt-[20rem]">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-[2%] right-0 w-full -ml-52 -z-10"
        draggable={false}
        priority
      />
      <div className="flex gap-4 items-center mt-4  w-[95%] 2xl:flex-col 2xl:gap-20  1/2xl:items-start lg:w-full">
        <HeroTitleBoxAboutUs />
        <Image
          src={HeroImgAboutUs}
          alt={"a teacher write some lessons on board"}
          className="w-1/2  h-fit 2xl:w-9/12 lg:!w-11/12"
          draggable={false}
        />
      </div>
    </div>
  );
}
