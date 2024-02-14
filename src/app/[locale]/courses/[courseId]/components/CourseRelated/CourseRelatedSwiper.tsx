"use client";
import React from "react";
import SwiperComponent from "@/app/[locale]/components/swiper/Swiper";
import CourseBox from "../../../components/CoursesSection/CourseBox";

export default function CourseRelatedSwiper() {
  const data = [
    {
      id: 1,
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "48 hours",
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
      time: "48 hours",
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
      time: "48 hours",
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
      time: "48 hours",
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
      time: "48 hours",
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
      time: "48 hours",
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
      time: "48 hours",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
    },
  ];
  return (
    <SwiperComponent
      className="h-[36rem] !w-full "
      data={data}
      Component={CourseBox}
      classNameSlide="!w-[34rem]"
      spaceBetween={50}
    />
  );
}
