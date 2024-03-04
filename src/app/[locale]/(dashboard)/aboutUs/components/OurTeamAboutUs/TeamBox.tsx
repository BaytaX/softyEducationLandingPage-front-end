import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/constants/backend";

type TeamBoxPropsType = {
  data: {
    id: number;
    attributes: {
      name: string;
      job: string;
      description: string;
      link: string;
      picture: { data: { attributes: { url: string } } };
    };
  };

  additionalData: {
    id: number;
    attributes: {
      name: string;
      job: string;
      description: string;
      link: string;
      picture: { data: { attributes: { url: string } } };
    };
  } | null;
  handleClick: (member: {}) => void;
};

export default function TeamBox({
  data,
  additionalData: member,
  handleClick,
}: TeamBoxPropsType) {
  const avatar = data?.attributes?.picture?.data?.attributes?.url;
  return (
    <>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={
            avatar
              ? `${BASE_URL}${avatar}`
              : "https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"
          }
          alt={"team member"}
          key={data.id}
          width={80}
          height={80}
          className={`w-[8rem] h-[8rem] cursor-pointer rounded-[2rem] 2xl:w-[12rem] 2xl:h-[12rem] 1/2xl:w-[16rem] 1/2xl:!rounded-[3rem] 1/2xl:h-[16rem] lg:!w-[22rem] lg:!h-[22rem] ${
            data?.id === member?.id
              ? "border-2 border-color-blue-border  scale-125 "
              : ""
          } `}
          loading="lazy"
          draggable={false}
          onClick={(e) => {
            e.preventDefault();
            handleClick(data);
          }}
        />
      }
    </>
  );
}
