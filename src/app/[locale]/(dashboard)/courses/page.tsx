import React from "react";
import HeroSectionCourses from "./components/HeroSectionCourses/HeroSectionCourses";
import CoursesSection from "./components/CoursesSection/CoursesSection";
import SubscribeSection from "../components/Subscribe/SubscribeSection";

export default function page() {
  return (
    <div>
      <HeroSectionCourses />
      <CoursesSection />
      <SubscribeSection classNameSubscribe="ml-16 h-[55rem] !w-[95%] !mt-80" />
    </div>
  );
}
