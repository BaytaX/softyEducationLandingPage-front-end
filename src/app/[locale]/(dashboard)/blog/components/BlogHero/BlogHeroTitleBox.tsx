import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import softyBlogLogo from "@/../../public/blog_imgs/softyBlogLogo.png";

export default function BlogHeroTitleBox() {
  const t = useTranslations("Blogs");
  return (
    <div className="flex items-center flex-col justify-center gap-6 _lg:items-start ">
      <Image
        src={softyBlogLogo}
        alt={"logo of softy blog"}
        width={170}
        height={50}
        draggable={false}
      />
      <h1 className="text-[4.4rem] _xl:text-[5.6rem] _lg:!text-[7.2rem]">
        {t("title")}
      </h1>
      <p className="text-gray-500 text-[1.7rem] w-8/12 text-center _xl:text-[2.2rem] _xl:w-10/12 _lg:text-start _lg:!text-[3.2rem] _lg:!w-11/12">
        {t("subtitle")}
      </p>
    </div>
  );
}
