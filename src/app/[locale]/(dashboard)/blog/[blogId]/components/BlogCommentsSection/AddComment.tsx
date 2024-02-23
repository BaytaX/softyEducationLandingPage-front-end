import React from "react";
import { useTranslations } from "next-intl";

import Button from "@/app/[locale]/(dashboard)/components/Button";

export default function AddComment() {
  const t = useTranslations("Blog.comments");
  return (
    <div className="mt-28 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h3 className="text-[3.4rem] font-medium">{t("writeCommment")}</h3>
        <p className="text-[1.7rem] text-gray-1">{t("subtitle")}</p>
      </div>
      <input
        type="text"
        className="w-[50rem]  p-3 border font-light text-[1.7rem] shadow-lg  border-gray-200 rounded-full placeholder:text-[1.7rem] pl-12 placeholder:text-gray-400 placeholder:font-extralight outline-2 transition-all duration-300 focus:outline-color-blue-1"
        placeholder={t("yourFullName")}
      />
      <input
        type="text"
        className="w-[80rem]  h-[12rem] p-3 border pb-24 text-[1.7rem] shadow-lg font-light border-gray-200 rounded-[2.8rem] placeholder:text-[1.7rem] pl-12 placeholder:text-gray-400 placeholder:font-extralight outline-2 transition-all duration-300 focus:outline-color-blue-1"
        placeholder={t("yourComment")}
      />
      <Button className="bg-color-blue-1 px-20 py-2 text-white w-[24rem] mt-4">
        {t("addComment")}
      </Button>
    </div>
  );
}
