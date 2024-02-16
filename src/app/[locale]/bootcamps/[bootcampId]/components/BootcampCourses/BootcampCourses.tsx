"use client";
import React from "react";
import CollapseCourses from "./CollapseCourses";
import transformNumtoLabel from "@/helpers/transformNumtoLabel";
import CourseCollapsedBox from "./CourseCollapsedBox";
import { useTranslations } from "next-intl";

export default function BootcampCourses() {
  const t = useTranslations("Bootcamp.courses");

  const data = {
    id: 1,
    title: "Advanced HTML/CSS",
    description:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
    category: "web Development",
    field: "front-end",
    learningProgram:
      " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
    price: 1699,
    skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],

    img: "/bootcamps_imgs/bootcampheroimg.jpg",
    link: "",
    level: "Beginner",
    duration: "8 Weeks",
    howManyTimes: "4 Days per week",
    where: "on Site",
    nextSession: ["Nov 11", "Dec 18"],
    pre_requirements: [
      "Basic Knowledge of Back-end Development",
      "Basic Knowledge of Mobile Development",
    ],
    courses: [
      {
        courseTitle: "Get started with Angular?",
        description:
          "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
        numLectures: 20,
        duration: "1h 30min",
        skills: ["Front-end  programming ", "Concetipon", "HTML / CSS / JS "],
      },
      {
        courseTitle: "Get started with Angular?",
        description:
          "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
        numLectures: 20,
        duration: "1h 30min",
        skills: ["Front-end  programming ", "Concetipon", "HTML / CSS / JS "],
      },
      {
        courseTitle: "Get started with Angular?",
        description:
          "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
        numLectures: 20,
        duration: "1h 30min",
        skills: ["Front-end  programming ", "Concetipon", "HTML / CSS / JS "],
      },
      {
        courseTitle: "Get started with Angular?",
        description:
          "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
        numLectures: 20,
        duration: "1h 30min",
        skills: ["Front-end  programming ", "Concetipon", "HTML / CSS / JS "],
      },
      {
        courseTitle: "Get started with Angular?",
        description:
          "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
        numLectures: 20,
        duration: "1h 30min",
        skills: ["Front-end  programming ", "Concetipon", "HTML / CSS / JS "],
      },
      {
        courseTitle: "Get started with Angular?",
        description:
          "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
        numLectures: 20,
        duration: "1h 30min",
        skills: ["Front-end  programming ", "Concetipon", "HTML / CSS / JS "],
      },
      {
        courseTitle: "Get started with Angular?",
        description:
          "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
        numLectures: 20,
        duration: "1h 30min",
        skills: ["Front-end  programming ", "Concetipon", "HTML / CSS / JS "],
      },
    ],
    objectives: {
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat ",
      what_learn: [
        "Master HTML and CSS to create visually appealing web pages from scratch",
        "Master HTML and CSS to create visually appealing web pages from scratch",
        "Master HTML and CSS to create visually appealing web pages from scratch",
        "Master HTML and CSS to create visually appealing web pages from scratch",
      ],
    },
  };
  const { courses } = data;
  return (
    <div className="mt-44 flex flex-col gap-4">
      <h2 className="text-[4rem] font-medium">{t("title")}</h2>
      <p className="text-[1.6rem] text-gray-1 font-extralight">
        {t("subtitle")}
      </p>
      <div className=" px-4 border-gray-200 border rounded-[1.8rem] mt-4">
        {courses?.map((ele, i) => (
          <>
            <CollapseCourses
              title={transformNumtoLabel(i + 1)}
              Component={CourseCollapsedBox}
              data={ele}
            />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
