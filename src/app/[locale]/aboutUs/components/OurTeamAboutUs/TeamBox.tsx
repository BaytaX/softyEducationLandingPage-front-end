import React from "react";
import Image from "next/image";

type TeamBoxPropsType = {
  data: {
    id: number;
    name: string;
    job: string;
    description: string;
    link: string;
    picture: string;
  };
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

export default function TeamBox({
  data,
  member,
  handleSetMember,
}: TeamBoxPropsType) {
  return (
    <Image
      src={data.picture}
      alt={"team member"}
      key={data.id}
      width={80}
      height={80}
      className={`w-[8rem] h-[8rem] cursor-pointer rounded-[2rem] ${
        data.id === member.id
          ? "border-2 border-color-blue-border  scale-125 "
          : ""
      } `}
      onClick={(e) => {
        e.preventDefault();
        handleSetMember(data);
      }}
    />
  );
}
