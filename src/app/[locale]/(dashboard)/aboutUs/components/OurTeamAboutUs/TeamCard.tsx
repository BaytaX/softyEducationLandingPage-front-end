import React from "react";
import Image from "next/image";
import { LiaShareSquare } from "react-icons/lia";
import { BASE_URL } from "@/constants/backend";

type TeamCardPropsType = {
  member: {
    id: number;
    attributes: {
      name: string;
      job: string;
      description: string;
      link: string;
      picture: { data: { attributes: { url: string } } };
    };
  } | null;
};

export default function TeamCard({ member }: TeamCardPropsType) {
  if (!member) return;
  const { name, job, description, link, picture } = member?.attributes;
  const avatar = picture?.data?.attributes?.url;
  return (
    <div className="flex gap-10  ">
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${BASE_URL}${avatar}`}
          alt={"team member"}
          width={330}
          height={330}
          className="w-[33rem] h-[33rem] rounded-[2rem] border-2 border-color-blue-border"
          loading="lazy"
          draggable={false}
        />
      }
      <div>
        <div className="flex flex-col justify-around h-full ">
          <div className="flex flex-col ">
            <h3 className="text-[4rem] tracking-wide font-semibold">{name}</h3>
            <p className="text-[2.4rem] text-gray-1">{job}</p>
          </div>
          <p className="text-[1.5rem] text-gray-2 font-light">{description}</p>
          <a
            href={link ? link : "#"}
            target="_blank"
            className="text-color-blue-1 text-[1.5rem] hover:opacity-80 flex items-center gap-2"
          >
            Get in touch with me <LiaShareSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
