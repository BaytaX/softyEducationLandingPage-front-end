import { BASE_URL } from "@/constants/backend";
import { formatDate } from "@/helpers/formatDate";
import { Link } from "@/navigation/navigation";
import React from "react";
import TagBox from "../../[blogId]/components/blogIdDetails/TagBox";
import useArabic from "@/helpers/useArabic";

type BlogBoxPropsType = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      createdAt: string;
      tags: {
        data: {
          attributes: {
            title: string;
          };
        }[];
      };
      img: { data: { attributes: { url: string } } };
      slug: string;
    };
  };
};

export default function BlogBox({ data }: BlogBoxPropsType) {
  const isArabic = useArabic();
  const { id } = data;
  const { title, description, createdAt, tags, img, slug } = data?.attributes;
  const blog_img = img?.data?.attributes?.url;
  return (
    <div className="w-full h-fit">
      <div
        className="h-[28rem] rounded-t-[1rem] bg-cover _1/2xl:h-[36rem] _1/2xl:rounded-t-[3rem]"
        style={{
          backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${BASE_URL}${blog_img})`,
        }}
      ></div>
      <div className="flex flex-col gap-6 mt-6 _lg:!gap-10">
        <div className="flex flex-col gap-2 _1/2xl:gap-4 _lg:!gap-6">
          <p className="text-gray-500 text-[1.7rem] _xl:text-[2.2rem] _1/2xl:text-[2.6rem] _lg:!text-[3.2rem]">
            {formatDate(createdAt, isArabic)}
          </p>
          <Link href={`/blog/${slug}`} prefetch={false}>
            <p className="text-[2rem] text-color-blue-1 font-semibold cursor-pointer hover:opacity-85 leading-[2.8rem] transition-all _xl:text-[2.4rem] _1/2xl:text-[2.8rem] _lg:!text-[3.2rem] _lg:!leading-[4rem]">
              {title}
            </p>
          </Link>
        </div>
        <p className="text-[1.7rem] text-gray-500 font-light _xl:text-[2rem] _1/2xl:text-[2.6rem] _lg:!text-[3rem]">
          {description}
        </p>

        <div className="flex gap-4 mt-2 flex-wrap">
          {tags?.data
            ?.slice(0, 2)
            ?.map((tag: any) => tag?.attributes?.title)
            ?.map((tag: string, i: number) => (
              <TagBox
                tag={tag}
                size="px-10 text-[1.4rem] border-gray-500 _xl:text-[1.8rem] _1/2xl:text-[2.2rem] _lg:!text-[2.8rem]"
                key={i}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
