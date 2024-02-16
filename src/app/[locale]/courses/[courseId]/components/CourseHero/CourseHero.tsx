"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "use-intl";

import Button from "@/app/[locale]/components/Button";
import CourseHeroVideoPlayer from "./CourseHeroVideoPlayer";

import HeroBg from "../../../../../../../public/courses_imgs/herocoursesbg.webp";
import clockIcon from "../../../../../../../public/bootcamps_imgs/clockIcon.png";
import mapIcon from "../../../../../../../public/bootcamps_imgs/mapIcon.png";
import calendarIcon from "../../../../../../../public/bootcamps_imgs/calendarIcon.png";
import certifiedIcon from "../../../../../../../public/bootcamps_imgs/certifiedIcon.png";
import calendarMark from "../../../../../../../public/courses_imgs/calendarMark.png";
import tagPrice from "../../../../../../../public/courses_imgs/tagPrice.png";

export default function CourseHero() {
  const t = useTranslations("Course.hero");
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
    title,
    description,
    duration,
    howManyTimes,
    where,
    pre_requirements,
    new_session,
    original_price,
    discount_price,

    instructor: { full_name, job, avatar },
  } = data;
  return (
    <div className="mt-72 w-[98%]">
      <Image
        src={HeroBg}
        alt={"BackGround of the Hero Section"}
        className="absolute top-48 right-0 w-full -ml-52 -z-10 opacity-25"
        priority
      />
      <div className="flex gap-20 items-center mt-32">
        <CourseHeroVideoPlayer />
        <div className="rounded-[2rem] bg-white w-[48%] px-12 pb-12 pt-6  flex flex-col gap-10 shadow-lg">
          <div className="flex flex-col gap-4">
            <h2 className="text-[2.6rem] font-semibold">{title}</h2>
            <p className="text-[1.6rem] font-light text-gray-1 w-11/12">
              {description}
            </p>
          </div>
          <div>
            <h4 className="text-[1.8rem] font-medium">{t("requirements")}</h4>
            <p className="text-[1.6rem] font-light text-gray-1 w-11/12">
              {pre_requirements}
            </p>
          </div>
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
                <Image src={mapIcon} alt={"map Icon"} width={25} height={25} />
                <p className="text-gray-1  text-[1.6rem] font-medium">
                  {where}
                </p>
              </div>
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
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <Image
              src={avatar}
              alt={"avatar"}
              width={60}
              height={60}
              className="rounded-full w-[7rem] h-[7rem]"
            />
            <div className="flex flex-col gap-1">
              <p className="text-[1.6rem] font-light text-gray-1">
                {t("instructor")}
              </p>
              <p className="text-[1.8rem] font-medium">{full_name}</p>
              <p className="text-[1.2rem] font-extralight text-gray-1">{job}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={calendarMark}
                alt={"calendar Icon"}
                width={25}
                height={25}
              />
              <p className="  text-[1.6rem] font-medium">
                {t("new_session")}
                <span className=" font-light text-gray-1 ml-2">
                  {new_session}
                </span>
              </p>
            </div>
            <div className="flex justify-between items-end">
              <Button className=" w-[34rem]  px-6 bg-color-blue-2 text-white font-normal border-[0.3rem] border-transparent py-3 ">
                {t("enroll")}
              </Button>

              <div className="flex flex-col items-end pr-8">
                <p className="text-[1.8rem] tracking-wide text-color-green-1 line-through font-semibold">
                  {original_price}
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={tagPrice}
                    alt={"tag price Icon"}
                    width={35}
                    height={35}
                  />
                  <p className=" text-[3.2rem] tracking-wide font-semibold">
                    {discount_price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
