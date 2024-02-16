"use client";
import React from "react";
import SocialMediaButtons from "./SocialMediaButtons";
import CourseCalendar from "./CourseCalendar";
import { useTranslations } from "next-intl";

export default function CourseSchedule() {
  const t = useTranslations("Course.schedule");
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
  const {
    course_schedule: { description },
  } = data;
  return (
    <div className="mt-36 bg-white shadow-lg p-16 pb-32 rounded-[2rem] w-[98%]">
      <h3 className="text-[2.4rem] font-medium">{t("title")}</h3>
      <div className="flex gap-12 mt-12 items-end">
        <div className="h-[50rem] bg-bg-color-bootcamps rounded-[2rem] w-2/3">
          <CourseCalendar />
        </div>
        <div className="flex flex-col gap-12 w-1/3">
          <h4 className="text-[2.2rem] font-light">{t("about_schedule")}</h4>
          <p className="text-[1.6rem] text-gray-1 font-light ">{description}</p>
          <p className="text-[1.8rem] font-medium">{t("share_course")}</p>
          <SocialMediaButtons />
        </div>
      </div>
    </div>
  );
}
