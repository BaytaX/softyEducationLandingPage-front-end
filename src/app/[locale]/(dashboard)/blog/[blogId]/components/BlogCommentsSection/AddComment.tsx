import React from "react";
import { useTranslations } from "next-intl";

import Button from "@/app/[locale]/(dashboard)/components/Button";

export default function AddComment() {
  const t = useTranslations("Blog.comments");
  return (
    <div className="mt-28 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h3 className="text-[3.4rem] font-medium 2xl:text-[3.8rem] 1/2xl:text-[4.4rem] lg:!text-[5rem]">
          {t("writeCommment")}
        </h3>
        <p className="text-[1.7rem] w-10/12 text-gray-1 2xl:text-[2rem] 1/2xl:text-[2.4rem] lg:!text-[3rem] lg:!w-[97%]">
          {t("subtitle")}
        </p>
      </div>
      <input
        type="text"
        className="w-[44%]  p-3 border font-light text-[1.7rem] shadow-lg  border-gray-200 rounded-[1.6rem] placeholder:text-[1.7rem] pl-12 placeholder:text-gray-400 placeholder:font-extralight outline-2 transition-all duration-300 focus:outline-color-blue-1 2xl:text-[2rem] 1/2xl:text-[2.6rem] lg:!text-[3.2rem] 2xl:placeholder:text-[2rem] 1/2xl:placeholder:text-[2.6rem] lg:placeholder:!text-[3.2rem] 2xl:w-[60%] 1/2xl:w-11/12 lg:h-[10rem] lg:rounded-[3rem]"
        placeholder={t("yourFullName")}
      />
      <input
        type="text"
        className="w-[55%]  h-[12rem] p-3 border pb-24 text-[1.7rem] shadow-lg font-light border-gray-200 rounded-[2rem] placeholder:text-[1.7rem] pl-12 placeholder:text-gray-400 placeholder:font-extralight outline-2 transition-all duration-300 focus:outline-color-blue-1 2xl:text-[2rem] 1/2xl:text-[2.6rem] lg:!text-[3.2rem] 2xl:placeholder:text-[2rem] 1/2xl:placeholder:text-[2.6rem] lg:placeholder:!text-[3.2rem] 2xl:w-[70%] 1/2xl:w-11/12 lg:h-[20rem] lg:rounded-[3rem] lg:pb-44"
        placeholder={t("yourComment")}
      />
      <Button className="bg-color-blue-1 px-32 py-3 text-white w-max mt-4 text-[2rem] 2xl:text-[2.4rem] 1/2xl:text-[2.8rem] lg:!text-[3.2rem] lg:!py-6">
        {t("addComment")}
      </Button>
    </div>
  );
}
