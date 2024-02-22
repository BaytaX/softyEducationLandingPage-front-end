import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaComments } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import TagBox from "./TagBox";
import BlogsRightSide from "../BlogsRightSide";
import { BASE_URL } from "@/constants/backend";
import transformStringtoArr from "@/helpers/transformStringtoArr";
import { formatDate } from "@/helpers/formatDate";
import useArabic from "@/helpers/useArabic";

export default function BlogIdDetails({ data, suggestedBlogs }: any) {
  const t = useTranslations("Blogs");
  const isArabic = useArabic();
  const data1 = {
    title: "Conversation with UX research expert",
    description:
      "The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
    img: "/blog_imgs/blog.jpg",
    link: "",
    created_at: "October 21, 2023",
    num_comments: "51 Comments",
    num_views: "9 Views",
    tags: ["Web design", "Research", "Interviews"],
    paragraphs: [
      "In my role as a web designer for a collegiate marketing company, I have honed my empathetic skills by creating personas, user stories, user journey maps, and problem statements. These skills have helped me prioritize the user’s needs and preferences, resulting in designs that are user-friendly and accessible to all.",
      "Moreover, I have gained proficiency in wireframing and prototyping by using tools like Figma, which allows me to create low-fidelity versions of products and present early phases of my work interactively to stakeholders and clients. It was a great experience to compare Figma to other tools we use for prototyping at my job.",
      "To those embarking on their learning journey, please take your time and not rush through the courses. It’s essential to let the information sink in and grasp the concepts thoroughly before moving forward. Remember, learning should be enjoyable, so have fun with it! And don’t forget that Google’s certification program allows you to reset deadlines and learn at a comfortable pace.",
    ],
    sub_titles: [
      {
        title: "The ultimate guide to UX",
        imgs: ["/blog_imgs/uximg_1.png", "/blog_imgs/image.png"],
        paragraphs: [
          "In my role as a web designer for a collegiate marketing company, I have honed my empathetic skills by creating personas, user stories, user journey maps, and problem statements. These skills have helped me prioritize the user’s needs and preferences, resulting in designs that are user-friendly and accessible to all",
          "In my role as a web designer for a collegiate marketing company, I have honed my empathetic skills by creating personas, user stories, user journey maps, and problem statements. These skills have helped me prioritize the user’s needs and preferences, resulting in designs that are user-friendly and accessible to all..",
        ],
      },
    ],
    comments: [],
  };
  const { title, createdAt, img, tags, paragraphs, sub_titles } = data;
  const blog_img = img?.data?.attributes?.url;

  const num_comments = "51 Comments";
  const num_views = "9 Views";

  return (
    <div className="mt-44">
      <h2 className="text-[5rem] font-semibold w-7/12 leading-[6rem]">
        {title}
      </h2>
      <div className="flex flex-col gap-6 mt-12 border-b-2 border-gray-300 pb-20">
        <div className="flex gap-4 items-center ">
          <div className="border-r-2 border-gray-300 p-4 pr-8">
            <p className="text-[1.6rem] text-gray-500  ">
              {formatDate(createdAt, isArabic)}
            </p>
          </div>
          <div className="border-r-2 border-gray-300 p-4 flex gap-4 pr-8">
            <FaComments className="text-gray-500 text-[2.4rem]" />
            <p className="text-[1.6rem] text-gray-500  ">{num_comments}</p>
          </div>
          <div className=" p-4 flex gap-4 ">
            <IoEye className="text-gray-500 text-[2.4rem]" />
            <p className="text-[1.6rem] text-gray-500  ">{num_views}</p>
          </div>
        </div>
        <div className="flex gap-8 ">
          {tags?.data
            ?.map((tag: any) => tag?.attributes?.title)
            ?.map((tag: string, i: number) => (
              <TagBox
                tag={tag}
                size="px-14 text-[1.4rem] border-gray-300"
                key={i}
              />
            ))}
        </div>
        <div className="flex gap-20 mt-8">
          <div className="w-[54%] flex flex-col gap-16">
            <div
              className="rounded-[2rem] bg-cover h-[56rem]"
              style={{
                backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${BASE_URL}${blog_img})`,
              }}
            ></div>
            {paragraphs?.split("$$")?.map((ele: string, i: number) => (
              <p
                className="text-[1.7rem] w-[95%] text-gray-1 leading-[3rem] "
                key={i}
              >
                {ele}
              </p>
            ))}

            {sub_titles?.data?.map((ele: any, i: number) => (
              <div className="flex flex-col gap-16" key={i}>
                <h3 className="text-[3.6rem] font-medium">
                  {ele?.attributes?.title}
                </h3>
                <div className="flex gap-6 items-center flex-wrap w-[100rem]">
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
                          className="rounded-[1.2rem]"
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
                      className="text-[1.7rem] w-[95%] text-gray-1 leading-[3rem] "
                      key={i}
                    >
                      {para}
                    </p>
                  ))}
              </div>
            ))}
          </div>
          <div className="w-1/2  flex flex-col gap-4">
            <p className="text-[2.6rem]">{t("suggested")}</p>
            <BlogsRightSide gap={"gap-20"} data={suggestedBlogs} />
          </div>
        </div>
      </div>
      <div className="flex gap-8 mt-10">
        {tags?.data
          ?.map((tag: any) => tag?.attributes?.title)
          ?.map((tag: string, i: number) => (
            <TagBox
              tag={tag}
              size="px-14 text-[1.4rem] border-gray-300"
              key={i}
            />
          ))}
      </div>
    </div>
  );
}
