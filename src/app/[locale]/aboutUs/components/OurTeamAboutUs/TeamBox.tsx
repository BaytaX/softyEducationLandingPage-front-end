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
  handleSetMember: (member: {}) => void;
};

export default function TeamBox({
  data,
  member,
  handleSetMember,
}: TeamBoxPropsType) {
  const avatar = data?.attributes?.picture?.data?.attributes?.url;
  return (
    <>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${BASE_URL}${avatar}`}
          alt={"team member"}
          key={data.id}
          width={80}
          height={80}
          className={`w-[8rem] h-[8rem] cursor-pointer rounded-[2rem] ${
            data?.id === member?.id
              ? "border-2 border-color-blue-border  scale-125 "
              : ""
          } `}
          loading="lazy"
          draggable={false}
          onClick={(e) => {
            e.preventDefault();
            handleSetMember(data);
          }}
        />
      }
    </>
  );
}
