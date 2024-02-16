"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import TeamBox from "./TeamBox";
import useArabic from "@/helpers/useArabic";
// import BlogBox from "./BlogBox";
type OurTeamPaginationPropsType = {
  member: {
    id: number;
    name: string;
    job: string;
    description: string;
    link: string;
    picture: string;
  };
  handleSetMember: (member: {}) => void;
  numItems: number;
  items: {
    id: number;
    name: string;
    job: string;
    description: string;
    link: string;
    picture: string;
  }[];
};

export default function OurTeamPagination({
  numItems,
  items,
  member,
  handleSetMember,
}: OurTeamPaginationPropsType) {
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
            <div className="" key={ele.id}>
              <TeamBox
                data={ele}
                member={member}
                handleSetMember={handleSetMember}
              />
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
        className={`flex gap-4 absolute -translate-x-1/2 -bottom-12 text-[1.6rem] items-center  ${
          isArabic ? "-right-[35%]" : "left-1/2 "
        } `}
        pageLinkClassName="hidden"
        disabledClassName="  [&>a>div>svg]:hover:text-black [&>a>div]:cursor-not-allowed [&>a>div]:hover:bg-gray-200 [&>a>div]:opacity-40  [&>a>div]:hover:shadow-none"
        breakLabel="..."
        nextLabel={
          isArabic ? (
            <div className="bg-gray-200 p-4 rounded-xl bottom-20 -left-[26rem] transition-all [&>svg]:hover:text-white cursor-pointer hover:bg-color-blue-1  hover:shadow-[0_2px_10px_2px_#5590f5] absolute">
              <GoArrowLeft className={`text-black text-[2.4rem]`} />
            </div>
          ) : (
            <div className="bg-gray-200 p-4 rounded-xl bottom-20 -left-[20rem] transition-all [&>svg]:hover:text-white cursor-pointer hover:bg-color-blue-1  hover:shadow-[0_2px_10px_2px_#5590f5] absolute">
              <GoArrowRight className={`text-black text-[2.4rem] `} />
            </div>
          )
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          isArabic ? (
            <div className="bg-gray-200 p-4 rounded-xl bottom-20 -left-[20rem] transition-all [&>svg]:hover:text-white cursor-pointer hover:bg-color-blue-1  hover:shadow-[0_2px_10px_2px_#5590f5] absolute">
              <GoArrowRight className={`text-black text-[2.4rem] `} />
            </div>
          ) : (
            <div className="bg-gray-200 p-4 rounded-xl bottom-20 -left-[26rem] transition-all [&>svg]:hover:text-white cursor-pointer hover:bg-color-blue-1  hover:shadow-[0_2px_10px_2px_#5590f5] absolute">
              <GoArrowLeft className={`text-black text-[2.4rem]`} />
            </div>
          )
        }
        renderOnZeroPageCount={null}
      />
    </>
  );
}
