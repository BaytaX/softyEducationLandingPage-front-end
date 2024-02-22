import React from "react";
import { Link } from "@/navigation/navigation";
import { BASE_URL } from "@/constants/backend";
import { useTranslations } from "next-intl";

type ExploreCourseBoxPropsType = {
  data: {
    id: number;
    attributes: {
      title: string;
      img: { data: { attributes: { url: string } } };
      mini_description: string;
    };
  };
};

export default function ExploreCourseBox({ data }: ExploreCourseBoxPropsType) {
  const t = useTranslations("Home.Courses");
  const { id } = data;
  const { title, mini_description, img } = data?.attributes;
  const course_img = img?.data?.attributes?.url;
  return (
    <div className="	w-full h-[75rem] overflow-hidden">
      <div
        style={{
          backgroundImage: `linear-gradient(#00003099,#00003099),url(${BASE_URL}${course_img})`,
        }}
        className={` p-10 gap-44 w-full h-full  bg-cover flex flex-col justify-center items-center    hover:scale-125 transition-all duration-300 	 `}
      >
        <div className="mt-20 flex flex-col items-center gap-4">
          <p className="text-white text-center text-[2.6rem]">{title}</p>
          <p className="text-white text-center text-[1.4rem] w-10/12 font-thin">
            {mini_description}
          </p>
        </div>
        <Link href={`/courses/${id}`}>
          <button className="hover:opacity-50 transition-all cursor-pointer rounded-full px-32 py-3 bg-transparent  border-2 border-white text-white text-[1.6rem] ">
            {t("view_more")}
          </button>
        </Link>
      </div>
    </div>
  );
}
