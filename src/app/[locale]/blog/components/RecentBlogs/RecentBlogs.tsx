import { useTranslations } from "next-intl";
import React from "react";
import BlogsRightSide from "../../[blogId]/components/BlogsRightSide";
import RecentBlogBox from "./RecentBlogBox";
import ArabicWrapper from "@/app/[locale]/components/ArabicWrapper";

export default function RecentBlogs() {
  const t = useTranslations("Blogs");
  return (
    <div className="mt-44">
      <h2 className="text-[3.2rem] ml-8">{t("recent")}</h2>
      <div className="flex gap-24  w-full h-fit mt-8 ">
        <RecentBlogBox />
        <div className="flex flex-col gap-10 w-1/2">
          <BlogsRightSide gap={"gap-12"} />
        </div>
      </div>
    </div>
  );
}
