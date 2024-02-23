import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

import TechnologiesButton from "./TechnologiesButton";
import { getAllTechnologies } from "@/api/courses/getAllTechnologies";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function TechnologiesSwiper() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      (sliderRef.current as HTMLDivElement).scrollLeft -= 500;
    }
  };
  const slideRight = () => {
    if (sliderRef.current) {
      (sliderRef.current as HTMLDivElement).scrollLeft += 500;
    }
  };

  const {
    isLoading,
    data: allTechnologies,
    error,
  } = useQuery({
    queryKey: ["technologies"],
    queryFn: async () => await getAllTechnologies(),
  });
  return (
    <>
      {isLoading ? null : (
        <div className="flex items-center gap-8 w-[130rem]">
          <MdChevronLeft
            className={`opacity-50 cursor-pointer hover:opacity-100 w-20 text-[3rem] `}
            onClick={slideLeft}
          />
          <div
            className="overflow-x-scroll  h-[11rem] scroll scrollbar-hide whitespace-nowrap scroll-smooth flex gap-10 "
            ref={sliderRef}
          >
            {allTechnologies?.map((tech: any) => (
              <TechnologiesButton
                title={tech?.attributes?.title}
                numCourses={tech?.attributes?.courses?.data?.length}
                key={tech?.id}
              />
            ))}
          </div>
          <MdChevronRight
            className={`opacity-50 cursor-pointer hover:opacity-100 w-20  text-[3rem]  `}
            onClick={slideRight}
          />
        </div>
      )}
    </>
    // <div className="flex gap-10">
    //   <TechnologiesButton title={"HTML 5"} numCourses={2730} />
    //   <TechnologiesButton title={"CSS 3"} numCourses={13500} />
    //   <TechnologiesButton title={"Javascript"} numCourses={1050} />
    //   <TechnologiesButton title={"Laravel"} numCourses={2400} />
    //   <TechnologiesButton title={"Django"} numCourses={3210} />
    // </div>
  );
}
