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
    <div className="flex flex-col gap-6 px-8 pb-8 lg:pb-12">
      <p className="text-[1.6rem] 2xl:text-[2.2rem]  1/2xl:text-[2.6rem] lg:!text-[3rem]">
        {title}
      </p>
      <p className="text-[1.6rem] w-10/12 text-gray-1 font-light 2xl:text-[1.8rem]  2xl:w-11/12  1/2xl:text-[2.2rem] 1/2xl:!w-full lg:!text-[2.8rem]">
        {description}
      </p>
      <div className="flex gap-8 items-center flex-wrap">
        {transformStringtoArr(skills)?.map((skill: string) => (
          <div
            key={skill}
            className="bg-color-blue-3 py-3 px-6 rounded-full w-fit text-[1.2rem] font-medium 2xl:text-[1.6rem] 1/2xl:text-[2rem] 1/2xl:px-12 1/2xl:py-4 lg:!text-[2.4rem]"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
