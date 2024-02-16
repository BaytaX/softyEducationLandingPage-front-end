"use client";
import React from "react";
import CollapseBox from "./CollapseBox";
import CheckTitleBox from "./CheckTitleBox";
import PriceRangeBox from "./PriceRangeBox";
import { useTranslations } from "next-intl";

function CategoryComponent() {
  return (
    <div>
      {[
        { title: "Web development", numCourses: 1650 },
        { title: "Data Science", numCourses: 200 },
        { title: "Mobile Development", numCourses: 568 },
        { title: "Software Testing", numCourses: 420 },
        { title: "Software Engineering", numCourses: 133 },
        { title: "Software Development Tools", numCourses: 174 },
        { title: "No-Code Development", numCourses: 23 },
      ].map((ele) => (
        <CheckTitleBox
          title={ele.title}
          numCourses={ele.numCourses}
          key={ele.title}
        />
      ))}
    </div>
  );
}
function TechComponent() {
  return (
    <div>
      {[
        { title: "HTML 5", numCourses: 1650 },
        { title: "CSS 3", numCourses: 200 },
        { title: "React", numCourses: 568 },
        { title: "Angular", numCourses: 420 },
        { title: "Node.js", numCourses: 133 },
        { title: "Laravel", numCourses: 174 },
        { title: "Saas", numCourses: 23 },
        { title: "Wordpress", numCourses: 23 },
      ].map((ele) => (
        <CheckTitleBox
          title={ele.title}
          numCourses={ele.numCourses}
          key={ele.title}
        />
      ))}
    </div>
  );
}
function DurationComponent() {
  return (
    <div>
      {[
        { title: "6-12 Months", numCourses: 1650 },
        { title: "3-6 Months", numCourses: 200 },
        { title: "1-3 Months", numCourses: 568 },
        { title: "1-4 Weeks", numCourses: 420 },
        { title: "1-7 Days", numCourses: 133 },
      ].map((ele) => (
        <CheckTitleBox
          title={ele.title}
          numCourses={ele.numCourses}
          key={ele.title}
        />
      ))}
    </div>
  );
}
function PriceComponent() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <PriceRangeBox />
    </div>
  );
}

export default function FilterCourseBoxes() {
  const t = useTranslations("Courses.filters");
  return (
    <div className="flex flex-col gap-12 w-full   ">
      <CollapseBox title={t("category")} Component={CategoryComponent} />
      <CollapseBox title={t("technologies")} Component={TechComponent} />
      <CollapseBox title={t("price")} Component={PriceComponent} />
      <CollapseBox title={t("duration")} Component={DurationComponent} />
    </div>
  );
}
