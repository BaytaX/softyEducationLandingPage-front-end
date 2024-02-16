"use client";
import React from "react";
import SwiperComponent from "@/app/[locale]/components/swiper/Swiper";
import CourseBox from "../../../components/CoursesSection/CourseBox";

export default function CourseRelatedSwiper() {
  const data = {
    id: 1,
    title: "Get started with Angular fundamentals",
    description:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
    mini_description: "Craft stunning websites with Web Design courses",
    category: "web Development",
    img: "/courses_imgs/courseimg.jpg",
    link: "",
    video_link:
      "https://www.youtube.com/embed/oG34F5gxcf8?si=bCWfLCtx4_nPlddh?rel=0&autoplay=1",
    duration: "8 Weeks",
    howManyTimes: "4 Days per week",
    where: "on Site",
    pre_requirements: "Web Development fundamentals, Back-End fundamentals",
    new_session: "Monday 30 Oct, 2023",
    original_price: "280 TND",
    discount_price: "160 TND",
    numLectures: "120 lectures",
    numSections: "5 Sections",
    duration_hours: "15h 30min",
    instructor: {
      full_name: "Edward Kaneway",
      job: "Full Stack Web Developer",
      avatar: "/aboutUs-Imgs/team-1.jpeg",
    },
    course_schedule: {
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
    },
    objectives: {
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat",
      what_learn: [
        "Master HTML and CSS to create visually appealing web pages from scratch",
        "Master HTML and CSS to create visually appealing web pages from scratch",
        "Master HTML and CSS to create visually appealing web pages from scratch",
        "Master HTML and CSS to create visually appealing web pages from scratch",
      ],
    },
    sub_courses: [
      {
        title: "Get started with Angular?",
        numLectures: 5,
        duration: "1h 30min",
        lectures: [
          {
            title: "Get Started",
            type: "lecture",
            propriety: "07:31",
          },
          {
            title: "Environment and requirements ",
            type: "lecture",
            propriety: "03:31",
          },
          {
            title: "The Angular Cheat Sheet ",
            type: "document",
            propriety: "5.3 MB",
          },
          {
            title: "Practice Project ",
            type: "project",
            propriety: "10 MB",
          },
        ],
      },
      {
        title: "Get started with Angular?",
        numLectures: 5,
        duration: "1h 30min",
        lectures: [
          {
            title: "Get Started",
            type: "lecture",
            propriety: "07:31",
          },
          {
            title: "Environment and requirements ",
            type: "lecture",
            propriety: "03:31",
          },
          {
            title: "The Angular Cheat Sheet ",
            type: "document",
            propriety: "5.3 MB",
          },
          {
            title: "Practice Project ",
            type: "project",
            propriety: "10 MB",
          },
        ],
      },
      {
        title: "Get started with Angular?",
        numLectures: 5,
        duration: "1h 30min",
        lectures: [
          {
            title: "Get Started",
            type: "lecture",
            propriety: "07:31",
          },
          {
            title: "Environment and requirements ",
            type: "lecture",
            propriety: "03:31",
          },
          {
            title: "The Angular Cheat Sheet ",
            type: "document",
            propriety: "5.3 MB",
          },
          {
            title: "Practice Project ",
            type: "project",
            propriety: "10 MB",
          },
        ],
      },
      {
        title: "Get started with Angular?",
        numLectures: 5,
        duration: "1h 30min",
        lectures: [
          {
            title: "Get Started",
            type: "lecture",
            propriety: "07:31",
          },
          {
            title: "Environment and requirements ",
            type: "lecture",
            propriety: "03:31",
          },
          {
            title: "The Angular Cheat Sheet ",
            type: "document",
            propriety: "5.3 MB",
          },
          {
            title: "Practice Project ",
            type: "project",
            propriety: "10 MB",
          },
        ],
      },
      {
        title: "Get started with Angular?",
        numLectures: 5,
        duration: "1h 30min",
        lectures: [
          {
            title: "Get Started",
            type: "lecture",
            propriety: "07:31",
          },
          {
            title: "Environment and requirements ",
            type: "lecture",
            propriety: "03:31",
          },
          {
            title: "The Angular Cheat Sheet ",
            type: "document",
            propriety: "5.3 MB",
          },
          {
            title: "Practice Project ",
            type: "project",
            propriety: "10 MB",
          },
        ],
      },
      {
        title: "Get started with Angular?",
        numLectures: 5,
        duration: "1h 30min",
        lectures: [
          {
            title: "Get Started",
            type: "lecture",
            propriety: "07:31",
          },
          {
            title: "Environment and requirements ",
            type: "lecture",
            propriety: "03:31",
          },
          {
            title: "The Angular Cheat Sheet ",
            type: "document",
            propriety: "5.3 MB",
          },
          {
            title: "Practice Project ",
            type: "project",
            propriety: "10 MB",
          },
        ],
      },
    ],
  };
  const { category } = data;
  //with this category we will fetch the related ones

  const wantedData = [
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
      data={wantedData}
      Component={CourseBox}
      classNameSlide="!w-[34rem]"
      spaceBetween={50}
    />
  );
}
