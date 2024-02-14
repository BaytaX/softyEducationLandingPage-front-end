import React from "react";

import CourseHero from "./components/CourseHero/CourseHero";
import CourseSchedule from "./components/CourseSchedule/CourseSchedule";
import Objectives from "../../components/_ui/Objectives";
import CourseCurriculum from "./components/CourseCurriculum/CourseCurriculum";
import Testimonials from "../../components/_ui/Testimonials";
import CourseRelated from "./components/CourseRelated/CourseRelated";

export default function page() {
  return (
    <div className="ml-10">
      <CourseHero />
      <CourseSchedule />
      <Objectives title={"Course"} />
      <CourseCurriculum />
      <Testimonials />
      <CourseRelated />
    </div>
  );
}
