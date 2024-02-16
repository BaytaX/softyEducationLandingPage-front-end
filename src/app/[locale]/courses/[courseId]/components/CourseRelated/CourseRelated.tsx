import React from "react";
import CourseRelatedSwiper from "./CourseRelatedSwiper";
import CourseRelatedTitleBox from "./CourseRelatedTitleBox";

export default function CourseRelated() {
  return (
    <div className="mt-44 flex flex-col gap-16">
      <CourseRelatedTitleBox />
      <CourseRelatedSwiper />
    </div>
  );
}
