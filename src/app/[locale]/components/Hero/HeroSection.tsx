import React from "react";
import HeroImg from "../HeroImg";
import HeroTitleBox from "./HeroTitleBox";
import HeroBg from "../../../../../public/imgs/herobg.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="mt-[16rem]">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-[2%] right-0 w-full -ml-52 -z-10"
        priority
      />
      <div className="flex gap-4 items-center mt-4">
        <HeroTitleBox />
        <HeroImg />
      </div>
    </div>
  );
}
