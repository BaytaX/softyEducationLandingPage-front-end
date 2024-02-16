"use client";
import React from "react";
import SwiperComponent from "@/app/[locale]/components/swiper/Swiper";
import RelatedBootcampBox from "./RelatedBootcampBox";

export default function RelatedBootcampsSwiper() {
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
  const { category } = data;
  //with this category we will fetcth the related ones
  const wantedData = [
    {
      img: "/imgs/discover_1.png",
      title: "Advanced HTML /CSS for better User Interface",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      img: "/imgs/discover_1.png",
      title: "Advanced HTML /CSS for better User Interface",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      img: "/imgs/discover_1.png",
      title: "Advanced HTML /CSS for better User Interface",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      img: "/imgs/discover_1.png",
      title: "Advanced HTML /CSS for better User Interface",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
    {
      img: "/imgs/discover_1.png",
      title: "Advanced HTML /CSS for better User Interface",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus",
      field: "front-end",
      status: "online",
      duration: "28 weeks",
      learningProgram:
        " Learn the Skills Needed to be a Java Programmer. Quickly master the Java programming language and the packages that constitute its rich set of core libraries.",
      price: 1699,
      link: "",
      skills: ["Front-end  programming ", "Concetipon", " HTML / CSS / JS "],
      level: "Beginner",
    },
  ];
  return (
    <SwiperComponent
      className="h-[47rem] w-full !p-4 "
      data={wantedData}
      Component={RelatedBootcampBox}
      classNameSlide="!w-[58rem]"
      spaceBetween={100}
    />
  );
}
