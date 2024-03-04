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
    <div className="flex gap-10  2xl:flex-col 2xl:items-center 2xl:-ml-[10rem] 1/2xl:ml-0">
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={
            avatar
              ? `${BASE_URL}${avatar}`
              : "https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"
          }
          alt={"team member"}
          width={330}
          height={330}
          className="w-[33rem] h-[33rem] rounded-[2rem]  border-2 border-color-blue-border 2xl:w-[80%] 2xl:h-fit 1/2xl:w-full 2xl:!rounded-[6rem] "
          loading="lazy"
          draggable={false}
        />
      }
      <div>
        <div className="flex flex-col justify-around h-full 2xl:items-center 2xl:gap-8">
          <div className="flex flex-col 2xl:items-center">
            <h3 className="text-[4rem] tracking-wide font-semibold 1/2xl:text-[6.4rem] 2xl:text-center  lg:!text-[8.2rem]">
              {name}
            </h3>
            <p className="text-[2.4rem] text-gray-1 2xl:text-center  1/2xl:text-[3.6rem] lg:!text-[4.4rem]">
              {job}
            </p>
          </div>
          <p className="text-[1.5rem] text-gray-2 font-light 2xl:text-center 2xl:w-2/3 2xl:text-[1.8rem] 1/2xl:text-[2.4rem] 1/2xl:w-full lg:!text-[3.4rem]">
            {description}
          </p>
          <a
            href={link ? link : "#"}
            target="_blank"
            className="text-color-blue-1 text-[1.5rem] hover:opacity-80 flex items-center gap-2 2xl:text-[1.8rem] 1/2xl:text-[2.4rem] lg:!text-[3.2rem]"
          >
            Get in touch with me <LiaShareSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
