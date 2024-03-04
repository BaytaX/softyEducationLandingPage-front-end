import React from "react";
import { Metadata } from "next";

import HeroSectionCourses from "./components/HeroSectionCourses/HeroSectionCourses";
import CoursesSection from "./components/CoursesSection/CoursesSection";
import SubscribeSection from "../components/Subscribe/SubscribeSection";

export const metadata: Metadata = {
  title: "Courses - Explore a Variety of Online Learning Opportunities",
  description:
    "Browse through our extensive collection of courses at Softy Education. From fundamentals to advanced topics, our online courses cover programming, web development, mobile development, and more. Start your learning journey today.",
};

export default function page() {
  return (
    <div>
      <HeroSectionCourses />
      <CoursesSection />
      <SubscribeSection classNameSubscribe="ml-16 h-[55rem] !w-[95%] !mt-80 " />
    </div>
  );
}
