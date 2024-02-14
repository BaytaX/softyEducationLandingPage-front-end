import React from "react";
import Image from "next/image";

import BlogHeroTitleBox from "./BlogHeroTitleBox";
import HeroBg from "../../../../../../public/imgs/herobg.webp";

export default function BlogHero() {
  return (
    <div className="mt-64">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-0 right-0 w-full -ml-52 -z-10 "
        priority
      />
      <BlogHeroTitleBox />
    </div>
  );
}
