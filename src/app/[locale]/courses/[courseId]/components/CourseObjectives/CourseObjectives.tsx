"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";

import PythonLogo from "../../../../../../../public/imgs/python-original.png";
import JsLogo from "../../../../../../../public/imgs/javascript-original.png";
import NodeLogo from "../../../../../../../public/imgs/nodejs-original.png";
import CssLogo from "../../../../../../../public/imgs/css3-original.png";
import CheckSentenceBox from "../../../components/HeroSectionCourses/CheckSentenceBox";

export default function CourseObjectives() {
  const t = useTranslations("Course.objectives");
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
    objectives: { description, what_learn },
  } = data;
  return (
    <div className="mt-44 flex flex-col gap-16">
      <h2 className="text-[3.2rem] font-medium">{t("title")}</h2>
      <div className=" bg-bg-color-bootcamps-2 shadow-lg rounded-[2rem] relative w-[98%]  px-16 pb-12">
        <div className="flex flex-col gap-9 py-16 ">
          <h4 className="text-[2rem] font-medium">{t("about")}</h4>
          <p className="text-[1.6rem] text-gray-500 font-light w-[65%]">
            {description}
          </p>
          <h4 className="text-[2rem] font-medium">{t("whatYouLearn")}</h4>
          <div className="flex flex-col gap-12 w-[65%]">
            <div className="flex gap-8 flex-wrap ">
              {what_learn?.map((ele, i) => (
                <CheckSentenceBox title={ele} key={i} />
              ))}
            </div>
          </div>
        </div>
        <Image
          src={PythonLogo}
          alt={"Python Logo"}
          width={60}
          height={60}
          className="rotate-[20deg] opacity-50 absolute top-12 right-56 "
        />
        <Image
          src={JsLogo}
          alt={"Javascript Logo"}
          width={75}
          height={75}
          className="rotate-[-80deg] opacity-50 absolute top-10 right-12 "
        />
        <Image
          src={NodeLogo}
          alt={"Node Js Logo"}
          width={60}
          height={60}
          className="opacity-50 absolute top-48 right-28"
        />
        <Image
          src={CssLogo}
          alt={"CSS Logo"}
          width={40}
          height={40}
          className="rotate-[-50deg] opacity-50 absolute top-48 right-72 "
        />
      </div>
    </div>
  );
}
