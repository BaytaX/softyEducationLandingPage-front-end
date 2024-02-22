import React from "react";
import CourseRelatedSwiper from "./CourseRelatedSwiper";
import CourseRelatedTitleBox from "./CourseRelatedTitleBox";

type CourseRelatedPropsType = {
  categoryId: number;
  courseId: number;
};

export default function CourseRelated({
  categoryId,
  courseId,
}: CourseRelatedPropsType) {
  return (
    <div className="mt-44 flex flex-col gap-16">
      <CourseRelatedTitleBox />
      <CourseRelatedSwiper categoryId={categoryId} courseId={courseId} />
    </div>
  );
}
