import React from "react";
import { useTranslations } from "next-intl";

import TagBox from "./TagBox";
import BlogsRightSide from "../BlogsRightSide";

import { FaComments } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

import useArabic from "@/helpers/useArabic";
import { formatDate } from "@/helpers/formatDate";

import { BASE_URL } from "@/constants/backend";

export default function BlogIdDetails({ data, suggestedBlogs }: any) {
  const t = useTranslations("Blogs");
  const isArabic = useArabic();

  const { title, createdAt, img, tags, paragraphs, sub_titles } = data;
  const blog_img = img?.data?.attributes?.url;

  const num_comments = "51 Comments";
  const num_views = "9 Views";

  return (
    <div className="mt-44">
      <h2 className="text-[5rem] font-semibold w-7/12 leading-[6rem] _4xl:w-11/12 _2xl:text-[5.6rem] _1/2xl:text-[6.4rem] _lg:!leading-[8rem] _lg:!text-[7.2rem] ">
        {title}
      </h2>
      <div className="flex flex-col gap-6 mt-12 border-b-2 border-gray-300 pb-20">
        <div className="flex gap-4 items-center flex-wrap w-11/12">
          <div className="border-r-2 border-gray-300 p-4 pr-8">
            <p className="text-[1.6rem] text-gray-500  _2xl:text-[2.2rem] _1/2xl:text-[2.6rem] _lg:!text-[3rem] ">
              {formatDate(createdAt, isArabic)}
            </p>
          </div>
          <div className="border-r-2 border-gray-300 p-4 flex gap-4 pr-8">
            <div>
              <FaComments className="text-gray-500 text-[2.4rem] _2xl:text-[2.8rem] _1/2xl:text-[3.2rem] _lg:!text-[3.6rem] " />
            </div>
            <p className="text-[1.6rem] text-gray-500 _2xl:text-[2.2rem] _1/2xl:text-[2.6rem] _lg:!text-[3rem]  ">
              {num_comments}
            </p>
          </div>
          <div className=" p-4 flex gap-4 ">
            <div>
              <IoEye className="text-gray-500 text-[2.4rem] _2xl:text-[2.8rem] _1/2xl:text-[3.2rem] _lg:!text-[3.6rem]" />
            </div>
            <p className="text-[1.6rem] text-gray-500 _2xl:text-[2.2rem] _1/2xl:text-[2.6rem] _lg:!text-[3rem]  ">
              {num_views}
            </p>
          </div>
        </div>
        <div className="flex gap-8 flex-wrap">
          {tags?.data
            ?.map((tag: any) => tag?.attributes?.title)
            ?.map((tag: string, i: number) => (
              <TagBox
                tag={tag}
                size="px-14 text-[1.4rem] border-gray-300 _2xl:text-[1.8rem] _1/2xl:text-[2.2rem] _lg:!text-[2.8rem]"
                key={i}
              />
            ))}
        </div>
        <div className="flex gap-20 mt-8">
          <div className="w-[54%] flex flex-col gap-16 _2xl:w-11/12">
            <div
              className="rounded-[2rem] bg-cover h-[56rem]"
              style={{
                backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${BASE_URL}${blog_img})`,
              }}
            ></div>
            {paragraphs?.split("$$")?.map((ele: string, i: number) => (
              <p
                className="text-[1.7rem] w-[95%] text-gray-1  _2xl:text-[2.2rem] _1/2xl:text-[2.6rem] _lg:!text-[3rem] _lg:!w-full"
                key={i}
              >
                {ele}
              </p>
            ))}

            {sub_titles?.data?.map((ele: any, i: number) => (
              <div className="flex flex-col gap-16" key={i}>
                <h3 className="text-[3.6rem] font-medium  _2xl:text-[4rem] _1/2xl:text-[4.4rem] _lg:!text-[5rem]">
                  {ele?.attributes?.title}
                </h3>
                <div className="flex gap-6 items-center flex-wrap w-full _md:flex-col">
                  {ele.attributes?.imgs?.data?.map((pic: any, i: number) => (
                    <>
                      {
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={i}
                          src={`${BASE_URL}${pic?.attributes?.url}`}
                          alt={"blog pictures"}
                          width={340}
                          height={50}
                          className="rounded-[1.2rem] w-[46%] _md:w-11/12 _sm:!w-full"
                          loading="lazy"
                          draggable={false}
                        />
                      }
                    </>
                  ))}
                </div>
                {ele.attributes?.paragraphs
                  ?.split("$$")
                  ?.map((para: string, i: number) => (
                    <p
                      className="text-[1.7rem] w-[95%] text-gray-1   _2xl:text-[2.2rem] _1/2xl:text-[2.6rem] _lg:!text-[3rem] _lg:!w-full"
                      key={i}
                    >
                      {para}
                    </p>
                  ))}
              </div>
            ))}
          </div>
          <div className="w-1/2  flex flex-col gap-4 _2xl:hidden">
            <p className="text-[2.6rem]">{t("suggested")}</p>
            <BlogsRightSide BlogsClassName={"gap-20"} data={suggestedBlogs} />
          </div>
        </div>
      </div>
      <div className="flex gap-8 mt-10 flex-wrap">
        {tags?.data
          ?.map((tag: any) => tag?.attributes?.title)
          ?.map((tag: string, i: number) => (
            <TagBox
              tag={tag}
              size="px-14 text-[1.4rem] border-gray-300 _2xl:text-[1.8rem] _1/2xl:text-[2.2rem] _lg:!text-[2.8rem]"
              key={i}
            />
          ))}
      </div>
    </div>
  );
}
