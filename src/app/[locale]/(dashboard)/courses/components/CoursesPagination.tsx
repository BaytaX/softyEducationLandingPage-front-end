"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import CourseBox from "./CoursesSection/CourseBox";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import useArabic from "@/helpers/useArabic";
import ArabicWrapper from "../../components/ArabicWrapper";

export default function CoursesPagination({ numItems, items }: any) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + numItems;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / numItems);

  const isArabic = useArabic();

  function Items({ currentItems }: any) {
    return (
      <>
        {currentItems &&
          currentItems.map((ele: any) => (
            <div className="w-[32%] _4xl:w-[46%] _2xl:!w-[90%]" key={ele.id}>
              <ArabicWrapper>
                <CourseBox data={ele} />
              </ArabicWrapper>
            </div>
          ))}
      </>
    );
  }

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * numItems) % items.length;
    setItemOffset(newOffset);
  };
  if (pageCount === 1) return <Items currentItems={currentItems} />;
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className={`flex gap-8 absolute    -bottom-32 text-[1.6rem] items-center  ${
          isArabic
            ? "left-[29%] [direction:rtl]"
            : "left-[54%] _2xl:left-[50%] _1/2xl:left-[33%] _1/2xl:-bottom-44 _md:!left-[22%]"
        }`}
        pageLinkClassName="rounded-full py-4 px-6  transition-all hover:bg-color-blue-6 hover:text-color-blue-2  _1/2xl:text-[2.4rem] _md:!text-[2.8rem]"
        activeLinkClassName="bg-color-blue-2 text-white hover:!bg-color-blue-2  hover:!text-white"
        disabledClassName="opacity-30 [&>a>div]:cursor-not-allowed"
        breakLabel="..."
        nextLabel={
          <div className=" ml-5  bg-color-blue-6 hover:opacity-80  rounded-full w-[4rem] h-[4rem] flex justify-center items-center transition-all _2xl:w-[5rem] _2xl:h-[5rem] _1/2xl:w-[6rem] _1/2xl:h-[6rem] _md:w-[7rem] _md:h-[7rem]  ">
            <GoArrowRight
              className={`text-[2rem] fill-color-blue-2 opacity-100 z-40 _2xl:text-[2.4rem] _1/2xl:text-[2.8rem] _md:!text-[3.2rem] ${
                isArabic ? "rotate-[180deg]" : ""
              } `}
            />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <div className=" mr-5 bg-color-blue-6 hover:opacity-80  rounded-full w-[4rem] h-[4rem] flex justify-center items-center  transition-all  _2xl:w-[5rem] _2xl:h-[5rem] _1/2xl:w-[6rem] _1/2xl:h-[6rem] _md:w-[7rem] _md:h-[7rem] ">
            <GoArrowLeft
              className={`text-[2rem] fill-color-blue-2 opacity-100 z-40  _2xl:text-[2.4rem] _1/2xl:text-[2.8rem] _md:!text-[3.2rem] ${
                isArabic ? "rotate-[180deg]" : ""
              } `}
            />
          </div>
        }
        renderOnZeroPageCount={null}
      />
    </>
  );
}
