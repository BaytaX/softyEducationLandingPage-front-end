"use client";
import React from "react";
import CollapseCourses from "./CollapseCourses";
import transformNumtoLabel from "@/helpers/transformNumtoLabel";
import CourseCollapsedBox from "./CourseCollapsedBox";

export default function BootcampCourses() {
  const data = [
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
  ];
  return (
    <div className="mt-44 flex flex-col gap-4 w-[97%]">
      <h2 className="text-[4rem] font-medium">Career success starts here</h2>
      <p className="text-[1.6rem] text-gray-1 font-extralight">
        The road to your dream job in Web Development lays ahead.
      </p>
      <div className=" px-4 border-gray-200 border rounded-[1.8rem] mt-4">
        {data.map((ele, i) => (
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
