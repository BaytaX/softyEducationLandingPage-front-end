"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";

import CheckSentenceBox from "@/app/[locale]/courses/components/HeroSectionCourses/CheckSentenceBox";

import PythonLogo from "../../../../../../../public/imgs/python-original.png";
import JsLogo from "../../../../../../../public/imgs/javascript-original.png";
import NodeLogo from "../../../../../../../public/imgs/nodejs-original.png";
import CssLogo from "../../../../../../../public/imgs/css3-original.png";
import transformStringtoArr from "@/helpers/transformStringtoArr";

export default function ObjectivesBootcamp({ data }: any) {
  const t = useTranslations("Bootcamp.objectives");

  const data1 = {
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
  const { objectives_description, what_learn } = data;
  return (
    <div className="mt-44 flex flex-col gap-16">
      <h2 className="text-[3.2rem] font-medium">{t("title")}</h2>
      <div className=" bg-bg-color-bootcamps-2 shadow-lg rounded-[2rem] relative w-[98%] justify-between flex px-16 pb-12">
        <div className="flex flex-col gap-9 py-16 w-[80%]">
          <h4 className="text-[2rem] font-medium">{t("about")}</h4>
          <p className="text-[1.6rem] text-gray-500 font-light w-[65%]">
            {objectives_description}
          </p>
          <h4 className="text-[2rem] font-medium">{t("whatYouLearn")}</h4>
          <div className="flex flex-col gap-12 ">
            <div className="flex gap-8 flex-wrap ">
              {transformStringtoArr(what_learn)?.map(
                (ele: string, i: number) => (
                  <CheckSentenceBox width="!w-[36rem]" title={ele} key={i} />
                )
              )}
            </div>
          </div>
        </div>
        <div className="relative w-[18%]">
          <Image
            src={PythonLogo}
            alt={"Python Logo"}
            width={60}
            height={60}
            className="rotate-[20deg] opacity-50 absolute top-12 right-56 "
            draggable={false}
          />
          <Image
            src={JsLogo}
            alt={"Javascript Logo"}
            width={75}
            height={75}
            className="rotate-[-80deg] opacity-50 absolute top-10 right-12 "
            draggable={false}
          />
          <Image
            src={NodeLogo}
            alt={"Node Js Logo"}
            width={60}
            height={60}
            className="opacity-50 absolute top-48 right-28"
            draggable={false}
          />
          <Image
            src={CssLogo}
            alt={"CSS Logo"}
            width={40}
            height={40}
            className="rotate-[-50deg] opacity-50 absolute top-48 right-72 "
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
