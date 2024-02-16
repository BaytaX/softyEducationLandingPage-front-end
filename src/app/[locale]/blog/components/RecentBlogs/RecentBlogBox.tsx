import React from "react";
import TagBox from "../../[blogId]/components/blogIdDetails/TagBox";

export default function RecentBlogBox() {
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
  const { title, description, img, created_at, tags } = data;
  return (
    <div className=" w-1/2">
      <div
        className="h-[45rem] rounded-t-[2rem] bg-cover "
        style={{
          backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${img})`,
        }}
      ></div>
      <div className="flex flex-col gap-6 mt-12">
        <div>
          <p className="text-gray-500 text-[1.7rem]">{created_at}</p>
          <p className="text-[2.4rem] text-color-blue-1 font-medium cursor-pointer hover:opacity-85 transition-all">
            {title}
          </p>
        </div>
        <p className="text-[1.7rem] text-gray-500 font-light">{description}</p>
        <div className="flex gap-4 mt-4">
          {tags?.map((tag, i) => (
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
