import React from "react";
import Image from "next/image";

import softyBlogLogo from "../../../../../../public/blog_imgs/softyBlogLogo.png";
import { useTranslations } from "next-intl";

export default function BlogHeroTitleBox() {
  const t = useTranslations("Blogs");
  return (
    <div className="flex items-center flex-col justify-center gap-6">
      <Image
        src={softyBlogLogo}
        alt={"logo of softy blog"}
        width={170}
        height={50}
        draggable={false}

      />
      <h1 className="text-[4rem] ">{t("title")}</h1>
      <p className="text-gray-500 text-[1.5rem] w-8/12 text-center">
        {t("subtitle")}
      </p>
    </div>
  );
}
