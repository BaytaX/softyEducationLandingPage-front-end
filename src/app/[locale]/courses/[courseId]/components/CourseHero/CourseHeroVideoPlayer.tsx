"use client";
import React, { useState } from "react";
import Image from "next/image";

import playLectureIcon from "../../../../../../../public/courses_imgs/coursePlayer.png";

export default function CourseHeroVideoPlayer() {
  const data = {
    id: 1,
    title: "Get started with Angular fundamentals",
    description:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
    category: "web Development",
    img: "/courses_imgs/courseimg.jpg",
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
  const { img, video_link } = data;
  const [isPlay, setIsPlay] = useState(false);
  function handlePlayVid() {
    setIsPlay(true);
  }
  return (
    <div className="w-1/2 relative rounded-[3rem]  h-[58rem]">
      <div
        className="z-20 h-full  rounded-[3rem] w-full bg-cover flex items-center justify-center"
        style={{
          backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${img})`,
        }}
      >
        <button onClick={handlePlayVid}>
          <Image
            src={playLectureIcon}
            alt={"play Lecture Icon"}
            className="cursor-pointer z-30 "
          />
        </button>
      </div>

      {isPlay ? (
        <iframe
          className={` z-40 w-full rounded-[3rem] absolute top-0 h-full right-0`}
          src={video_link}
          allow="autoplay; encrypted-media"
          title="Softy Education"
        ></iframe>
      ) : null}
    </div>
  );
}
