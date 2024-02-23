import transformStringtoArr from "@/helpers/transformStringtoArr";
import React from "react";

type CourseCollapsedBoxPropsType = {
  data: {
    title: string;
    description: string;
    skills: string;
  };
};

export default function CourseCollapsedBox({
  data,
}: CourseCollapsedBoxPropsType) {
  const { title, description, skills } = data;
  return (
    <div className="flex flex-col gap-6 px-8 pb-8">
      <p className="text-[1.6rem]">{title}</p>
      <p className="text-[1.6rem] w-10/12 text-gray-1 font-light">
        {description}
      </p>
      <div className="flex gap-4 items-center">
        {transformStringtoArr(skills)?.map((skill: string) => (
          <div
            key={skill}
            className="bg-color-blue-3 py-3 px-6 rounded-full w-fit text-[1.2rem] font-medium "
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
