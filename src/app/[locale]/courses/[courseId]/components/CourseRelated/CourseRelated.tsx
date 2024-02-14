import React from "react";
import CourseRelatedSwiper from "./CourseRelatedSwiper";

export default function CourseRelated() {
  return (
    <div className="mt-44 flex flex-col gap-16">
      <h2 className="text-[3.2rem] font-medium">Related to this Course</h2>
      <CourseRelatedSwiper />
    </div>
  );
}
