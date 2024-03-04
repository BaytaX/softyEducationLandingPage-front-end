import React from "react";

import OurTeamPagination from "./OurTeamPagination";
import OurTeamSwiper from "./OurTeamSwiper";

type TeamGalleryPropsType = {
  data: {
    id: number;
    attributes: {
      name: string;
      job: string;
      description: string;
      link: string;
      picture: { data: { attributes: { url: string } } };
    };
  }[];
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

export default function TeamGallery({
  data,
  handleSetMember,
  member,
}: TeamGalleryPropsType) {
  return (
    <div className="mt-4 2xl:mt-[16rem]">
      <div className="flex flex-wrap  gap-12 items-center  ">
        <OurTeamPagination
          numItems={(screen.width <= 1336 && 8) || 10}
          items={data}
          member={member}
          handleSetMember={handleSetMember}
        />
      </div>
    </div>
  );
}
