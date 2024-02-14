import React from "react";
import SocialMediaButtons from "./SocialMediaButtons";
import CourseCalendar from "./CourseCalendar";

export default function CourseSchedule() {
  return (
    <div className="mt-36 bg-white shadow-lg p-16 pb-32 rounded-[2rem] w-[98%]">
      <h3 className="text-[2.4rem] font-medium">Course Schedule</h3>
      <div className="flex gap-12 mt-12 items-end">
        <div className="h-[50rem] bg-bg-color-bootcamps rounded-[2rem] w-2/3">
          <CourseCalendar />
        </div>
        <div className="flex flex-col gap-12 w-1/3">
          <h4 className="text-[2.2rem] font-light">About Course Scheduals</h4>
          <p className="text-[1.6rem] text-gray-1 font-light ">
            Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
            ultrices. Cursus sit amet dictum sit amet justo donec enim diam
            porttitor lacus luctus accumsan tortor posuere.Vitae congue eu
            consequat ac felis placerat vestibulum lectus mauris ultrices.Vitae
            congue eu consequat ac felis placerat vestibulum lectus mauris
            ultrices. Cursus sit amet dictum sit amet justo donec enim diam
            porttitor lacus luctus accumsan tortor posuere.Vitae congue eu
            consequat ac felis placerat vestibulum lectus mauris ultrices.
          </p>
          <p className="text-[1.8rem] font-medium">Share this course:</p>
          <SocialMediaButtons />
        </div>
      </div>
    </div>
  );
}
