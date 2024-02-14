import React from "react";
import Image from "next/image";
import { LiaShareSquare } from "react-icons/lia";

type TeamCardPropsType = {
  member: {
    id: number;
    name: string;
    job: string;
    description: string;
    link: string;
    picture: string;
  } | null;
};

export default function TeamCard({ member }: TeamCardPropsType) {
  if (!member) return;
  const { name, job, description, link, picture } = member;
  return (
    <div className="flex gap-10  ">
      <Image
        src={picture}
        alt={"team member"}
        width={330}
        height={330}
        className="w-[33rem] h-[33rem] rounded-[2rem] border-2 border-color-blue-border"
      />
      <div>
        <div className="flex flex-col justify-around h-full w-11/12">
          <div className="flex flex-col ">
            <h3 className="text-[4rem] tracking-wide font-semibold">{name}</h3>
            <p className="text-[2.4rem] text-gray-1">{job}</p>
          </div>
          <p className="text-[1.5rem] text-gray-2 font-light">{description}</p>
          <a
            href={link ? link : "#"}
            className="text-color-blue-1 text-[1.5rem] hover:opacity-90 flex items-center gap-2"
          >
            Get in touch with me <LiaShareSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
