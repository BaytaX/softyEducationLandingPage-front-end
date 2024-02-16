import React from "react";
import { useTranslations } from "next-intl";
import BlogsPagination from "./BlogsPagination";
import SuggestedTagsBox from "./SuggestedTagsBox";
export default function SuggestedBlogs() {
  const t = useTranslations("Blogs");

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

  const items = [
    {
      id: 1,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 2,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 3,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 4,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 5,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 6,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 7,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 8,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 9,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 10,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },

    {
      id: 11,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 12,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
    {
      id: 13,
      title:
        "New Research Insights: What Drives Success in Hands-On Learning Activities?",
      description:
        " The in-between is the collection of passive moments after you’ve done what you can do and the only thing left is to wait and maintain faith that eventually someone will..",
      created_at: "October 21, 2023",
      tags: ["Web design", "Research"],
      img: "/blog_imgs/blog.jpg",
      link: "",
    },
  ];

  return (
    <div className="mt-44 relative h-[200rem]">
      <div className="flex justify-between w-full">
        <h2 className="text-[3.2rem] ml-16">{t("suggested")}</h2>
        <SuggestedTagsBox />
      </div>
      <div className=" flex gap-x-20 h-fit gap-y-32 flex-wrap  mt-12 mb-40 ">
        <BlogsPagination numItems={9} items={items} />
      </div>
      <div className="h-2"></div>
    </div>
  );
}
