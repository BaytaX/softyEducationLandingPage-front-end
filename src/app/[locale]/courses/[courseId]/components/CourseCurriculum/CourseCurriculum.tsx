"use client";
import React from "react";
import Image from "next/image";
import CollapseCurriculum from "./CollapseCurriculum";
import CourseCollapsedBox from "@/app/[locale]/bootcamps/[bootcampId]/components/BootcampCourses/CourseCollapsedBox";
import lectureIcon from "../../../../../../../public/courses_imgs/lectureIcon.png";
import clockIcon from "../../../../../../../public/courses_imgs/clockCircle.png";
import folderIcon from "../../../../../../../public/courses_imgs/folderIcon.png";
import CurriculumCollapsedBox from "./CurriculumCollapsedBox";

export default function CourseCurriculum() {
  const dataCourse = [
    {
      courseTitle: "Angular Fundamentals",
      description:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.",
      numLectures: 120,
      numSections: 5,
      duration: "15h 30min",
      skills: ["Front-end  programming ", "Concetipon", "HTML / CSS / JS "],
      sub_Courses: [
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
    },
  ];

  const { numLectures, numSections, duration, sub_Courses } = dataCourse[0];
  return (
    <div className="mt-44 flex flex-col gap-4 w-[98%]">
      <div className="flex justify-between items-center">
        <h2 className="text-[3.6rem] font-medium">Course Curriculum </h2>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={folderIcon}
              alt={"folder icon"}
              width={20}
              height={20}
            />
            <p className="text-[1.4rem] text-gray-1 font-light">
              {`${numSections} Sections`}{" "}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={lectureIcon}
              alt={"play lecture icon"}
              width={20}
              height={20}
            />
            <p className="text-[1.4rem] text-gray-1 font-light">
              {`${numLectures} lectures`}{" "}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={clockIcon} alt={"clock icon"} width={20} height={20} />
            <p className="text-[1.4rem] text-gray-1 font-light">{duration}</p>
          </div>
        </div>
      </div>
      <div className=" px-4 border-gray-200 border  rounded-[1.8rem] mt-4">
        {sub_Courses.map((ele, i) => (
          <>
            <CollapseCurriculum Component={CurriculumCollapsedBox} data={ele} />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
