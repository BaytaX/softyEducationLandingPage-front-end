"use client";
import React from "react";
import TagBox from "./TagBox";
import useArabic from "@/helpers/useArabic";
import { BASE_URL } from "@/constants/backend";
import { formatDate } from "@/helpers/formatDate";
import { Link } from "@/navigation/navigation";

export default function BlogIdSuggestedBox({ data }: any) {
  const isArabic = useArabic();

  const { img, title, description, createdAt, tags, uuid } = data.attributes;
  const blog_img = img?.data?.attributes?.url;

  return (
    <div className=" w-full h-[20rem] flex gap-8">
      <div
        className={`w-1/2  bg-cover ${
          isArabic ? "rounded-r-[2rem]" : "rounded-l-[2rem]"
        }`}
        style={{
          backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${BASE_URL}${blog_img})`,
        }}
      ></div>
      <div className="flex flex-col w-1/2 justify-between">
        <div>
          <p className="text-gray-500 text-[1.7rem]">
            {formatDate(createdAt, isArabic)}
          </p>
          <Link href={`/blog/${uuid}`} prefetch={false}>
            <p className="text-[1.9rem] text-color-blue-1 font-medium cursor-pointer hover:opacity-85 transition-all">
              {title}
            </p>
          </Link>
        </div>
        <p className="text-[1.4rem] text-gray-500 ">{description}</p>
        <div className="flex gap-4 mt-4 w-max">
          {tags?.data
            ?.map((tag: any) => tag?.attributes?.title)
            ?.slice(0, 2)
            ?.map((tag: string, i: number) => (
              <TagBox
                tag={tag}
                size="px-10 text-[1.2rem] border-gray-500"
                key={i}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
