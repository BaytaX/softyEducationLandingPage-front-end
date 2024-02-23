"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";

import BlogsPagination from "./BlogsPagination";
import SuggestedTagsBox from "./SuggestedTagsBox";
import { getAllBlogs } from "@/api/blog/getAllBlogs";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";
import NoResultFound from "@/app/[locale]/(dashboard)/components/NoResultFound";
import SkeletonBlogBox from "./SkeletonBlogBox";
import useLocale from "@/helpers/useLocale";

export default function SuggestedBlogs() {
  const t = useTranslations("Blogs");
  const locale = useLocale();

  const [tagId, setTagId] = useState(Number);
  function handleFilterBlogs(value: number) {
    setTagId(value);
  }

  const {
    isLoading,
    data: allBlogs,
    error,
  } = useQuery({
    queryKey: ["blogs", tagId, locale],
    queryFn: async () => await getAllBlogs({ tagId, locale }),
  });

  return (
    <div className="mt-44 relative h-[200rem]">
      <div className="flex justify-between w-full">
        <h2 className="text-[3.2rem] ml-16">{t("suggested")}</h2>
        <SuggestedTagsBox handleFilterBlogs={handleFilterBlogs} />
      </div>
      {isLoading ? (
        <div className="flex gap-24 mt-20 flex-wrap">
          <SkeletonBlogBox />
          <SkeletonBlogBox />
          <SkeletonBlogBox />
          <SkeletonBlogBox />
          <SkeletonBlogBox />
          <SkeletonBlogBox />
        </div>
      ) : allBlogs?.length ? (
        <div className=" flex gap-x-20 h-fit gap-y-32 flex-wrap  mt-12 mb-40 ">
          <BlogsPagination numItems={9} items={allBlogs} />
        </div>
      ) : (
        <div className="flex justify-center items-center mt-80">
          <NoResultFound />
        </div>
      )}
      <div className="h-2"></div>
    </div>
  );
}
