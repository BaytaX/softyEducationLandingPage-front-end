import React from "react";

import OurTeamPagination from "./OurTeamPagination";

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
    <div className="mt-4 ">
      <div className="flex flex-wrap  gap-12 items-center  ">
        <OurTeamPagination
          numItems={10}
          items={data}
          member={member}
          handleSetMember={handleSetMember}
        />
      </div>
    </div>
  );
}
