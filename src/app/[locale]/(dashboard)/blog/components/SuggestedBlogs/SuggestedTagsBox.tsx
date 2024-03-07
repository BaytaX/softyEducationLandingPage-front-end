"use client";
import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllTags } from "@/api/blog/getAllTags";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import useLocale from "@/helpers/useLocale";

export default function SuggestedTagsBox({ handleFilterBlogs }: any) {
  const locale = useLocale();
  const {
    isLoading: isLoadingTags,
    data: tags,
    error: errorTags,
  } = useQuery({
    queryKey: ["tags", locale],
    queryFn: async () => await getAllTags({ locale }),
  });
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

  return (
    <div className="flex gap-4 items-center w-[60rem] mr-10 [direction:ltr] _xl:w-11/12">
      {isLoadingTags ? null : (
        <>
          <MdChevronLeft
            className={`opacity-50 cursor-pointer hover:opacity-100 w-20 text-[3rem] `}
            onClick={slideLeft}
          />

          <div
            ref={sliderRef}
            className="overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth flex gap-12 items-end pb-2 border-b-2 border-color-blue-1 opacity-60 "
          >
            {tags?.map((tag: any, i: any) => (
              <button
                className="text-[1.6rem] min-w-fit hover:opacity-80 cursor-pointer text-color-blue-1 _xl:text-[2rem] _1/2xl:text-[2.4rem] _lg:!text-[3rem]"
                onClick={() => handleFilterBlogs(tag?.id)}
                key={i}
              >
                {tag?.attributes?.title}
              </button>
            ))}
          </div>
          <MdChevronRight
            className={`opacity-50 cursor-pointer hover:opacity-100 w-20  text-[3rem]  `}
            onClick={slideRight}
          />
        </>
      )}
    </div>
  );
}
