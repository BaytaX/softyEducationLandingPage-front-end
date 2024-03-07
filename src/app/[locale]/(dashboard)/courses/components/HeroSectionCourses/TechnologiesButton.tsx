import React from "react";
import { useTranslations } from "next-intl";

type TechnologiesButtonPropsType = {
  data?: {
    attributes: {
      title: string;
      numCourses: number;
      courses: {
        data: any;
      };
    };
  };
};

export default function TechnologiesButton({
  data,
}: TechnologiesButtonPropsType) {
  const t = useTranslations("Home.Footer");
  return (
    <div className="flex flex-col items-center bg-white h-[10rem] _xl:h-[11rem] _lg:!h-[15rem]  transition-all gap-2 border border-gray-300 rounded-3xl w-[80%] _lg:!w-[90%] py-8  hover:border-transparent hover:shadow-xl [&>*:first-child]:hover:text-color-blue-1">
      <p className="text-[2rem] font-semibold _xl:text-[2.4rem] _lg:!text-[3.2rem] ">
        {data?.attributes?.title}
      </p>
      <p className="text-[1.4rem] font-light text-gray-1 _xl:text-[1.8rem] _lg:!text-[2.6rem] ">
        {data?.attributes?.courses?.data?.length} {t("Courses")}
      </p>
    </div>
  );
}
