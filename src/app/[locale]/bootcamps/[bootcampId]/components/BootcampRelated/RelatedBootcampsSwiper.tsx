"use client";
import React from "react";
import SwiperComponent from "@/app/[locale]/components/swiper/Swiper";
import RelatedBootcampBox from "./RelatedBootcampBox";

export default function RelatedBootcampsSwiper() {
  const data = [
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
      data={data}
      Component={RelatedBootcampBox}
      classNameSlide="!w-[58rem]"
      spaceBetween={100}
    />
  );
}
