"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

import { getRecentBlogs } from "@/api/blog/getRecentBlogs";

import BlogsRightSide from "../../[blogId]/components/BlogsRightSide";
import RecentBlogBox from "./RecentBlogBox";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";
import useLocale from "@/helpers/useLocale";
import BlogsSwiper from "./BlogsSwiper";

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
          <h2 className="text-[3.2rem] ml-8 _xl:text-[4.4rem] _lg:!text-[5.6rem]">
            {t("recent")}
          </h2>
          <div className="flex gap-24  w-full h-fit mt-8 _xl:flex-col">
            <RecentBlogBox data={recentBlogs?.[0]} />
            <div className="flex flex-col gap-10 w-1/2 _xl:w-full _xl:-ml-12">
              <BlogsRightSide
                BlogsClassName={"gap-12 _xl:hidden"}
                data={recentBlogs?.slice(1)}
              />
              <hr className="hidden _xl:block w-8/12 self-center my-10 border-[0.3rem]" />
              <div className="w-full hidden _xl:block">
                <BlogsSwiper data={recentBlogs?.slice(1)} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
