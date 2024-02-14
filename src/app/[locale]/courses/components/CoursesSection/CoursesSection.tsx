import React from "react";
import FilterCourseBoxes from "./FilterCourseBoxes";
import SearchInput from "@/app/[locale]/components/SearchInput";
import CourseBox from "./CourseBox";
import Pagination from "../Pagination";

export default function CoursesSection() {
  const items = [
    {
      id: 1,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 2,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 3,
      title: "Get started with React fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 4,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 5,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 6,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 7,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 8,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 9,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 10,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 11,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 12,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 13,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 14,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 15,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
    {
      id: 16,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
  ];
  return (
    <div className="mt-40 ml-0">
      <SearchInput />

      <div className="flex gap-8 w-full mt-20">
        <div className="w-[24%]">
          <FilterCourseBoxes />
        </div>
        <div className="w-[76%] flex gap-x-6 h-fit gap-y-20 flex-wrap relative">
          <Pagination numItems={15} items={items} />
        </div>
      </div>
    </div>
  );
}
