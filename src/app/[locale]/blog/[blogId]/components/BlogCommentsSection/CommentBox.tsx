import React from "react";
import Image from "next/image";

import avatar from "../../../.././../../../public/aboutUs-Imgs/team-1.jpeg";
import { FaRegComments } from "react-icons/fa6";

export default function CommentBox() {
  return (
    <div className="flex items-start gap-6">
      <Image
        src={avatar}
        alt={"avatar"}
        width={40}
        height={100}
        className="rounded-full"
        draggable={false}
      />
      <div className="flex flex-col gap-4">
        <p className="text-[1.6rem] font-medium">
          Guy Hawkins <span className="text-gray-400 ml-3">&#183;</span>
          <span className="text-gray-400 font-light text-[1.4rem] ml-3">
            1 week ago
          </span>
        </p>
        <p className="text-[1.5rem] text-gray-1 font-light">
          I appreciate the precise short videos (10 mins or less each) because
          overly long videos tend to make me lose focus. The instructor is very
          knowledgeable in Web Design and it shows as he shares his knowledge.
          These were my best 6 months of training. Thanks, Vako.
        </p>
        <div className="flex gap-4 cursor-pointer">
          <FaRegComments className=" text-[2.2rem] text-gray-500 " />
          <p className="uppercase text-[1.5rem] text-gray-500 ">reply</p>
        </div>
      </div>
    </div>
  );
}
