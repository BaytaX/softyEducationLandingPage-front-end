"use client";
import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

import useArabic from "@/helpers/useArabic";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { getAllTags } from "@/api/blog/getAllTags";
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
      // const maxScrollLeft =
      //   (sliderRef.current as HTMLDivElement).scrollWidth -
      //   (sliderRef.current as HTMLDivElement).clientWidth;

      (sliderRef.current as HTMLDivElement).scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      (sliderRef.current as HTMLDivElement).scrollLeft += 500;
    }
  };

  return (
    <div className="flex gap-4 items-center w-[60rem] mr-10 [direction:ltr]">
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
                className="text-[1.6rem] min-w-fit hover:opacity-80 cursor-pointer text-color-blue-1 "
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
