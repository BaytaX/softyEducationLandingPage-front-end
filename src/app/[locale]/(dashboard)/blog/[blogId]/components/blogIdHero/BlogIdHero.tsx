import React from "react";
import Image from "next/image";

import HeroBg from "@/../../public/imgs/herobg.webp";
import softyBlogLogo from "@/../../public/blog_imgs/softyblogbiglogo.png";

export default function BlogIdHero() {
  return (
    <div className="mt-80">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-0 right-0 w-full -ml-52 -z-10 "
        draggable={false}
        priority
      />
      <div>
        <Image
          src={softyBlogLogo}
          alt={"Logo of softy blog"}
          width={420}
          height={100}
          className="w-[42rem] lg:w-[50rem]"
          draggable={false}
        />
      </div>
    </div>
  );
}
