import React from "react";
import Image from "next/image";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

type TeamGalleryPropsType = {
  data: {
    id: number;
    name: string;
    job: string;
    description: string;
    link: string;
    picture: string;
  }[];
  member: {
    id: number;
    name: string;
    job: string;
    description: string;
    link: string;
    picture: string;
  };
  handleSetMember: (member: {}) => void;
};

export default function TeamGallery({
  data,
  handleSetMember,
  member,
}: TeamGalleryPropsType) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap  gap-8 items-center ">
        {data?.map((ele) => (
          <Image
            src={ele.picture}
            alt={"team member"}
            key={ele.id}
            width={80}
            height={80}
            className={`w-[8rem] h-[8rem] cursor-pointer rounded-[2rem] ${
              ele.id === member.id
                ? "border-2 border-color-blue-border  scale-125 "
                : ""
            } `}
            onClick={(e) => {
              e.preventDefault();
              handleSetMember(ele);
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 p-4 rounded-xl cursor-pointer hover:opacity-90 ">
          <GoArrowLeft className="text-black text-[2.4rem]" />
        </div>
        <div className="bg-gray-200 p-4 rounded-xl cursor-pointer hover:opacity-90">
          <GoArrowRight className="text-black text-[2.4rem] " />
        </div>
      </div>
    </div>
  );
}
