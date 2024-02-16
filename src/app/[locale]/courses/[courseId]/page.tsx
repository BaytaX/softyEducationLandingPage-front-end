import React from "react";

import CourseHero from "./components/CourseHero/CourseHero";
import CourseSchedule from "./components/CourseSchedule/CourseSchedule";
import CourseCurriculum from "./components/CourseCurriculum/CourseCurriculum";
import Testimonials from "../../components/_ui/Testimonials";
import CourseRelated from "./components/CourseRelated/CourseRelated";
import CourseObjectives from "./components/CourseObjectives/CourseObjectives";

export default function page() {
  return (
    <div className="ml-10">
      <CourseHero />
      <CourseSchedule />
      <CourseObjectives />
      <CourseCurriculum />
      <Testimonials />
      <CourseRelated />
    </div>
  );
}
