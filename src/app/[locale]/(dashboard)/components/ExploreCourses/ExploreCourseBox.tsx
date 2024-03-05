import React from "react";
import { Link } from "@/navigation/navigation";
import { useTranslations } from "next-intl";

import { BASE_URL } from "@/constants/backend";

type ExploreCourseBoxPropsType = {
  data: {
    id: number;
    attributes: {
      title: string;
      img: { data: { attributes: { url: string } } };
      mini_description: string;
      slug: string;
    };
  };
};

export default function ExploreCourseBox({ data }: ExploreCourseBoxPropsType) {
  const t = useTranslations("Home.Courses");
  const { title, mini_description, img, slug } = data?.attributes;
  const course_img = img?.data?.attributes?.url;
  return (
    <div className="	w-full h-[75rem] overflow-hidden xl:rounded-[3rem] xl:h-[100rem]">
      <div
        style={{
          backgroundImage: `linear-gradient(#00003099,#00003099),url(${BASE_URL}${course_img})`,
        }}
        className={` p-10 gap-44 w-full h-full  bg-cover flex flex-col justify-center items-center    hover:scale-125 transition-all duration-300 	 `}
      >
        <div className="mt-20 flex flex-col h-[20%] items-center gap-4 md:h-[40%] md:gap-12">
          <p className="text-white text-center text-[2.6rem] xl:text-[4.4rem] lg:!text-[5.6rem]">
            {title}
          </p>
          <p className="text-white text-center text-[1.6rem] w-10/12 font-thin xl:text-[2.8rem] lg:!text-[3.6rem]">
            {mini_description}
          </p>
        </div>
        <Link
          href={`/courses/${slug}`}
          className=" w-max hover:opacity-50 transition-all cursor-pointer rounded-full px-32 py-3 bg-transparent  border-2 border-white text-white text-[1.6rem]  xl:text-[2.8rem] xl:px-44 lg:!text-[3.6rem] lg:!px-64"
          prefetch={false}
        >
          {t("view_more")}
        </Link>
      </div>
    </div>
  );
}
