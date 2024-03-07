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
    <div className="mt-4 _2xl:mt-[16rem]">
      <>
        {" "}
        <div className="flex flex-wrap  gap-12 items-center  _4xl:hidden">
          <OurTeamPagination
            numItems={10}
            items={data}
            member={member}
            handleSetMember={handleSetMember}
          />{" "}
        </div>
        <div className=" flex-wrap  gap-12 items-center hidden _4xl:flex ">
          <OurTeamPagination
            numItems={8}
            items={data}
            member={member}
            handleSetMember={handleSetMember}
          />
        </div>
      </>
    </div>
  );
}
