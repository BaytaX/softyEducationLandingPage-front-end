"use client";
import useArabic from "@/helpers/useArabic";
import { useParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function SuggestedTagsBox() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isArabic = useArabic();

  const tags = [
    "Research",
    "Business",
    "Web Design",
    "Front-end Development",
    "Back-end Development",
    "Full Stack",
    "Research",
    "Business",
    "Web Design",
    "Front-end Development",
    "Back-end Development",
  ];
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
    <div className="flex gap-4 items-center w-[60%] mr-10 [direction:ltr]">
      <MdChevronLeft
        className={`opacity-50 cursor-pointer hover:opacity-100 w-20 text-[3rem] `}
        onClick={slideLeft}
      />

      <div
        ref={sliderRef}
        className="overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth flex gap-12 items-end pb-2 border-b-2 border-color-blue-1 opacity-60 "
      >
        {tags?.map((tag, i) => (
          <p
            className="text-[1.6rem] min-w-fit hover:opacity-80 cursor-pointer text-color-blue-1 "
            key={i}
          >
            {tag}
          </p>
        ))}
      </div>
      <MdChevronRight
        className={`opacity-50 cursor-pointer hover:opacity-100 w-20  text-[3rem]  `}
        onClick={slideRight}
      />
    </div>
  );
}
