import React from "react";
import { useTranslations } from "next-intl";

type TechnologiesButtonPropsType = {
  title: string;
  numCourses: number;
};

export default function TechnologiesButton({
  title,
  numCourses,
}: TechnologiesButtonPropsType) {
  const t = useTranslations("Home.Footer");

  return (
    <div className="flex flex-col items-center bg-white h-[10rem] transition-all gap-2 border border-gray-300 rounded-3xl min-w-[20rem] py-8  hover:border-transparent hover:shadow-xl [&>*:first-child]:hover:text-color-blue-1">
      <p className="text-[2rem] font-semibold">{title}</p>
      <p className="text-[1.4rem] font-light text-gray-1">
        {numCourses} {t("Courses")}
      </p>
    </div>
  );
}
