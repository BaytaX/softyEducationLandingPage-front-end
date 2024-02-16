import React from "react";
import Image from "next/image";

import calendar from "../../../../../../../public/courses_imgs/calendar.png";

export default function CourseCalendar() {
  return (
    <div>
      <Image
        src={calendar}
        alt={"calendar"}
        width={800}
        height={300}
        className="pt-24 rounded-[2rem]"
      />
    </div>
  );
}
