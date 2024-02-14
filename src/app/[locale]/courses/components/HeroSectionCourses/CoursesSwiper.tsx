"use client";
import SwiperComponent from "@/app/[locale]/components/swiper/Swiper";
import React from "react";
import CourseBoxSwiper from "./CourseBoxSwiper";
import CoursesSwiperLeftBtn from "./CoursesSwiperLeftBtn";
import CoursesSwiperRightBtn from "./CoursesSwiperRightBtn";

function CoursesSwiperBtns() {
  return (
    <>
      <CoursesSwiperLeftBtn />
      <CoursesSwiperRightBtn />
    </>
  );
}

export default function CoursesSwiper() {
  const data = [
    {
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
      learn: [
        "Master HTML and CSS to create visually appealing web pages from scratch ",
        "Master HTML and CSS to create visually appealing web pages from scratch",
        " Master HTML and CSS to create visually appealing web pages from scratch",
      ],
    },
    {
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
      learn: [
        "Master HTML and CSS to create visually appealing web pages from scratch ",
        "Master HTML and CSS to create visually appealing web pages from scratch",
        " Master HTML and CSS to create visually appealing web pages from scratch",
      ],
    },
    {
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
      learn: [
        "Master HTML and CSS to create visually appealing web pages from scratch ",
        "Master HTML and CSS to create visually appealing web pages from scratch",
        " Master HTML and CSS to create visually appealing web pages from scratch",
      ],
    },
    {
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
      learn: [
        "Master HTML and CSS to create visually appealing web pages from scratch ",
        "Master HTML and CSS to create visually appealing web pages from scratch",
        " Master HTML and CSS to create visually appealing web pages from scratch",
      ],
    },
    {
      title: "Get started with Angular fundamentals",
      description:
        "basic understanding of javascript is required , Any computer works- windows , MacOS ,Linux",
      time: "08 : 30 PM - 12 : 00 PM",
      starting_date: "Oct 21, 2023",
      status: "on-site",
      img: "/courses_imgs/courses_img.jpg",
      link: "",
      learn: [
        "Master HTML and CSS to create visually appealing web pages from scratch ",
        "Master HTML and CSS to create visually appealing web pages from scratch",
        " Master HTML and CSS to create visually appealing web pages from scratch",
      ],
    },
  ];
  return (
    <SwiperComponent
      data={data}
      Component={CourseBoxSwiper}
      SwiperButtons={CoursesSwiperBtns}
      className="relative h-[40rem] w-11/12 "
    />
  );
}
