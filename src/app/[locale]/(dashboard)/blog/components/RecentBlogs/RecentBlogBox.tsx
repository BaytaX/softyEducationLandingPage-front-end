import React from "react";
import TagBox from "../../[blogId]/components/blogIdDetails/TagBox";
import { BASE_URL } from "@/constants/backend";
import { formatDate } from "@/helpers/formatDate";
import { Link } from "@/navigation/navigation";
import useArabic from "@/helpers/useArabic";

export default function RecentBlogBox({ data }: any) {
  const isArabic = useArabic();
  const { id } = data;
  const { title, description, img, createdAt, tags } = data?.attributes;
  const blog_img = img?.data?.attributes?.url;
  return (
    <div className=" w-1/2">
      <div
        className="h-[45rem] rounded-t-[2rem] bg-cover "
        style={{
          backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${BASE_URL}${blog_img})`,
        }}
      ></div>
      <div className="flex flex-col gap-6 mt-12">
        <div>
          <p className="text-gray-500 text-[1.7rem]">
            {formatDate(createdAt, isArabic)}
          </p>
          <Link href={`/blog/${id}`}>
            <p className="text-[2.4rem] text-color-blue-1 font-medium cursor-pointer hover:opacity-85 transition-all">
              {title}
            </p>
          </Link>
        </div>
        <p className="text-[1.7rem] text-gray-500 font-light">{description}</p>
        <div className="flex gap-4 mt-4">
          {tags?.data
            ?.map((tag: any) => tag?.attributes?.title)
            ?.map((tag: string, i: number) => (
              <TagBox
                tag={tag}
                size="px-12 border-gray-500 text-[1.4rem]"
                key={i}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
