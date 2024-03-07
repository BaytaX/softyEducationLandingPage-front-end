"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import BootcampBox from "../../components/DiscoverOurBootcamps/BootcampBox";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import useArabic from "@/helpers/useArabic";

export default function BootcampsPagination({ numItems, items }: any) {
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
            <BootcampBox
              data={ele}
              key={ele.id}
              bootcampClassName="w-[95%] !-ml-1 _2xl:!mb-44"
            />
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
        className={`flex gap-8 absolute left-1/2 -translate-x-1/2 -bottom-32 text-[1.8rem] _xl:-bottom-44 _1/2xl:text-[2.4rem] _lg:!text-[2.8rem]    items-center  ${
          isArabic ? " [direction:rtl]" : ""
        } `}
        pageLinkClassName="rounded-full py-4 px-8 transition-all hover:bg-color-blue-6 hover:text-color-blue-2 _1/2xl:px-10"
        activeLinkClassName="bg-color-blue-2 text-white hover:!bg-color-blue-2  hover:!text-white"
        disabledClassName="opacity-30 [&>a>div]:cursor-not-allowed"
        breakLabel="..."
        nextLabel={
          <div className=" ml-5  bg-color-blue-6 hover:opacity-80  rounded-full w-[4rem] h-[4rem] flex justify-center items-center transition-all  _2xl:w-[5rem] _2xl:h-[5rem] _1/2xl:w-[6rem] _1/2xl:h-[6rem] _md:w-[7rem] _md:h-[7rem]">
            <GoArrowRight
              className={`text-[2rem] fill-color-blue-2 opacity-100 z-40 _2xl:text-[2.4rem] _1/2xl:text-[2.8rem] _md:!text-[3.2rem] ${
                isArabic ? "rotate-[180deg]" : ""
              }`}
            />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <div className=" mr-5 bg-color-blue-6 hover:opacity-80  rounded-full w-[4rem] h-[4rem] flex justify-center items-center  transition-all  _2xl:w-[5rem] _2xl:h-[5rem] _1/2xl:w-[6rem] _1/2xl:h-[6rem] _md:w-[7rem] _md:h-[7rem]">
            <GoArrowLeft
              className={`text-[2rem] fill-color-blue-2 opacity-100 z-40 _2xl:text-[2.4rem] _1/2xl:text-[2.8rem] _md:!text-[3.2rem] ${
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
