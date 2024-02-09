import React from "react";
import Image from "next/image";

import HeroTitleBoxAboutUs from "./HeroTitleBoxAboutUs";
import HeroBg from "../../../../../../public/imgs/herobg.png";
import HeroImgAboutUs from "../../../../../../public/aboutUs-Imgs/aboutUsHero.png";

export default function HeroSectionAboutUS() {
  return (
    <div className="mt-[20rem]">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-[2%] right-0 w-full -ml-52 -z-10"
        priority
      />
      <div className="flex gap-4 items-center mt-4">
        <HeroTitleBoxAboutUs />
        <Image
          src={HeroImgAboutUs}
          alt={"a teacher write some lessons on board"}
          className="w-[59rem] h-[35rem]"
        />
      </div>
    </div>
  );
}
