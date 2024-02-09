"use client";
import React from "react";
import SwiperComponent from "../swiper/Swiper";
import BootcampBox from "./BootcampBox";
import BootcampsSwiperLeftBtn from "./BootcampsSwiperLeftBtn";
import BootcampsSwiperRightBtn from "./BootcampsSwiperRightBtn";

function BootcampsSwiperBtns() {
  return (
    <>
      <BootcampsSwiperLeftBtn />
      <BootcampsSwiperRightBtn />
    </>
  );
}

export default function BootcampsSwiper() {
  const data = [
    {
      title: "The front-end development Bootcamp",
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
      title: "The front-end development Bootcamp",
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
      title: "The front-end development Bootcamp",
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
      title: "The front-end development Bootcamp",
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
      data={data}
      Component={BootcampBox}
      SwiperButtons={BootcampsSwiperBtns}
      className="relative"
      classNameSlide={"w-full"}
    />
  );
}
