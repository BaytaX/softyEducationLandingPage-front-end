"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

import { getRecentBlogs } from "@/api/blog/getRecentBlogs";

import BlogsRightSide from "../../[blogId]/components/BlogsRightSide";
import RecentBlogBox from "./RecentBlogBox";
import MiniLoader from "@/app/[locale]/components/MiniLoader";
import useLocale from "@/helpers/useLocale";

export default function RecentBlogs() {
  const t = useTranslations("Blogs");
  const locale = useLocale();
  const {
    isLoading,
    data: recentBlogs,
    error,
  } = useQuery({
    queryKey: ["blogs", locale],
    queryFn: async () => await getRecentBlogs({ locale }),
  });
  return (
    <div className="mt-44">
      {isLoading ? (
        <div className="flex justify-center items-center h-[50rem]">
          <MiniLoader />
        </div>
      ) : (
        <>
          <h2 className="text-[3.2rem] ml-8">{t("recent")}</h2>
          <div className="flex gap-24  w-full h-fit mt-8 ">
            <RecentBlogBox data={recentBlogs?.[0]} />
            <div className="flex flex-col gap-10 w-1/2">
              <BlogsRightSide gap={"gap-12"} data={recentBlogs?.slice(1)} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
