import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/app/[locale]/components/Button";
import BootcampHeroTitleBox from "./BootcampHeroTitleBox";

import HeroBg from "../../../../../../../public/imgs/herobg.webp";
import clockIcon from "../../../../../../../public/bootcamps_imgs/clockIcon.png";
import mapIcon from "../../../../../../../public/bootcamps_imgs/mapIcon.png";
import calendarIcon from "../../../../../../../public/bootcamps_imgs/calendarIcon.png";
import certifiedIcon from "../../../../../../../public/bootcamps_imgs/certifiedIcon.png";

export default function BootcampHero() {
  const t = useTranslations("Bootcamp");
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
  const {
    title,
    description,
    img,
    duration,
    howManyTimes,
    where,
    nextSession,
  } = data;
  return (
    <div className="mt-72 w-[96%] ">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-0 right-0 w-full -ml-52 -z-10 "
        priority
      />
      <BootcampHeroTitleBox />
      <div className="flex gap-12 items-center mt-10">
        <div className="rounded-[2rem] bg-white w-1/2 p-14 flex flex-col gap-16 shadow-lg">
          <h2 className="text-[3rem] font-medium">{title}</h2>
          <p className="text-[1.6rem] font-light text-gray-1 w-11/12">
            {description}
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-2">
                <Image
                  src={clockIcon}
                  alt={"clock Icon"}
                  width={25}
                  height={25}
                />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {duration}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={calendarIcon}
                  alt={"calendar Icon"}
                  width={25}
                  height={25}
                />

                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {howManyTimes}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-2">
                <Image
                  src={certifiedIcon}
                  alt={" certified Icon"}
                  width={25}
                  height={25}
                />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {"Certified Course"}
                </p>
                <a
                  href="#"
                  className="text-gray-400  text-[1.2rem] hover:underline font-extralight"
                >
                  {t("learnMore")}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Image src={mapIcon} alt={"map Icon"} width={25} height={25} />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {where}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-12">
            <Button className=" w-[18rem] px-6 bg-color-yellow-2 text-white font-normal border-[0.3rem] border-transparent py-2 ">
              {t("enroll")}
            </Button>
            <div className=" flex gap-6 rounded-full px-6 bg-bg-color-bootcamps font-medium border-[0.3rem] border-transparent py-3 text-[1.6rem]   ">
              <p>
                {t("next_session")} <span>{nextSession[0]}</span> &#8212;
                <span>{nextSession[1]}</span>
              </p>
              <div className="w-[2.4rem] bg-white rounded-full p-[0.2rem] border border-gray-300  ">
                <div className=" bg-color-green-1 rounded-full  h-full w-full "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={img}
            alt={"a lapton on the desk"}
            height={600}
            width={900}
            className="h-[46rem] rounded-[3rem] w-full"
          />
        </div>
      </div>
    </div>
  );
}
