"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import CourseBox from "./CoursesSection/CourseBox";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function Pagination({ numItems, items }: any) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + numItems;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / numItems);

  function Items({ currentItems }: any) {
    return (
      <>
        {currentItems &&
          currentItems.map((ele: any) => (
            <div className="w-[32%] " key={ele.id}>
              <CourseBox data={ele} />
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
        className="flex gap-4 absolute left-1/2 -translate-x-1/2 -bottom-32 text-[1.6rem] items-center "
        pageLinkClassName="rounded-full py-4 px-6 transition-all "
        activeLinkClassName="bg-color-blue-2 text-white"
        disabledClassName="opacity-30 "
        breakLabel="..."
        nextLabel={
          <div className=" ml-5 bg-color-blue-6 rounded-full w-[4rem] h-[4rem] flex justify-center items-center hover:opacity-90 transition-all  ">
            <GoArrowRight className="text-[2rem] fill-color-blue-2 opacity-100 z-40 " />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <div className=" mr-5 bg-color-blue-6 rounded-full w-[4rem] h-[4rem] flex justify-center items-center  hover:opacity-90 transition-all  ">
            <GoArrowLeft className="text-[2rem] fill-color-blue-2 opacity-100 z-40" />
          </div>
        }
        renderOnZeroPageCount={null}
      />
    </>
  );
}
