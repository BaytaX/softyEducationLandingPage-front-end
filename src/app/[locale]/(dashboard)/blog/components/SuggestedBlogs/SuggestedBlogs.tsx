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
import TagsSwiper from "./TagsSwiper";

export default function SuggestedBlogs() {
  const t = useTranslations("Blogs");
  const locale = useLocale();

  const [tagId, setTagId] = useState(Number);
  function handleFilterBlogs(value: number) {
    if (tagId === value) setTagId(0);
    else setTagId(value);
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
    <div className="mt-44 relative h-fit min-h-[200rem] 1/2xl:min-h-[350rem]">
      <div className="flex justify-between items-start w-full xl:flex-wrap xl:gap-y-10">
        <h2 className="text-[3.2rem] ml-16 xl:text-[4rem] lg:!text-[5.6rem]">
          {t("suggested")}
        </h2>
        {/* <SuggestedTagsBox handleFilterBlogs={handleFilterBlogs} /> */}
        <div className="w-[60%] xl:w-full">
          <TagsSwiper handleFilterBlogs={handleFilterBlogs} tagId={tagId} />
        </div>
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
        <div className=" flex gap-x-20 h-fit  gap-y-44 flex-wrap  mt-12 1/2xl:mt-36 mb-40 1/2xl:-ml-16 1/2xl:justify-center">
          <BlogsPagination
            numItems={
              (screen.width <= 1008 && 5) || (screen.width <= 1152 && 8) || 9
            }
            items={allBlogs}
          />
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
