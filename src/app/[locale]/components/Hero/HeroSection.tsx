import React from "react";
import HeroImg from "../HeroImg";
import HeroTitleBox from "./HeroTitleBox";
import HeroBg from "../../../../../public/imgs/herobg.webp";
import Image from "next/image";
import { useParams } from "next/navigation";
import ArabicWrapper from "../ArabicWrapper";

export default function HeroSection() {
  // const params = useParams();
  // const { locale } = params;
  // const isArabic = locale === "ar";
  return (
    <ArabicWrapper className="mr-36">
      <div className="mt-[16rem]">
        <Image
          src={HeroBg}
          alt={"BackGround of the Hero Section"}
          className="absolute top-[2%] right-0 w-full -ml-52 -z-10"
          draggable={false}
          priority
        />
        <div className={`flex gap-4 items-center  mt-4 `}>
          <HeroTitleBox />
          <HeroImg />
        </div>
      </div>
    </ArabicWrapper>
  );
}
