"use client";
import React from "react";
import TagBox from "./TagBox";
import { useParams } from "next/navigation";
import useArabic from "@/helpers/useArabic";

export default function BlogIdSuggestedBox() {
  const isArabic = useArabic();

  const data = {
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
  const { img, title, description, created_at, tags } = data;

  return (
    <div className=" w-full h-[20rem] flex gap-8">
      <div
        className={`w-1/2  bg-cover ${
          isArabic ? "rounded-r-[2rem]" : "rounded-l-[2rem]"
        }`}
        style={{
          backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${img})`,
        }}
      ></div>
      <div className="flex flex-col w-1/2 justify-between">
        <div>
          <p className="text-gray-500 text-[1.7rem]">{created_at}</p>
          <p className="text-[1.9rem] text-color-blue-1 font-medium cursor-pointer hover:opacity-85 transition-all">
            {title}
          </p>
        </div>
        <p className="text-[1.4rem] text-gray-500 ">{description}</p>
        <div className="flex gap-4 mt-4">
          {tags?.slice(0, 2)?.map((tag, i) => (
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
