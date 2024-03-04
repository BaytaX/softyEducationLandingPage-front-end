"use client";
import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";

import { getTeam } from "@/api/aboutUs/getTeam";

import OurTeamSwiper from "./OurTeamSwiper";
import OurTeamTitleBox from "./OurTeamTitleBox";
import TeamCard from "./TeamCard";
import TeamGallery from "./TeamGallery";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";

export default function OurTeamAboutUs() {
  const locale = useLocale();
  const {
    isLoading,
    data: teams,
    error,
  } = useQuery({
    queryKey: ["teams", locale],
    queryFn: async () => await getTeam({ locale }),
  });
  const [memberObj, setMember] = useState(null);
  useEffect(
    function () {
      setMember(teams?.[0]);
    },
    [teams]
  );

  function handleSetMember(member: any) {
    setMember(member);
  }
  return (
    <div className="mt-56 flex gap-28 items-center 2xl:flex-col 2xl:-ml-20 1/2xl:-ml-10">
      {isLoading ? (
        <div className="flex justify-center items-center h-[40rem] w-full">
          <MiniLoader />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-8 w-5/12 relative h-fit pb-16 min-h-[44rem] 2xl:w-[90%] 1/2xl:gap-16 lg:!w-[96%]">
            <OurTeamTitleBox />
            <div className="w-full 2xl:hidden">
              <TeamGallery
                data={teams}
                handleSetMember={handleSetMember}
                member={memberObj}
              />
            </div>
            <div className="w-full hidden 2xl:block ">
              <OurTeamSwiper
                data={teams}
                handleSetMember={handleSetMember}
                member={memberObj}
              />
            </div>
          </div>
          <div className="w-[53%] mr-10 1/2xl:w-[60%] lg:!w-[80%]">
            <TeamCard member={memberObj} />
          </div>
        </>
      )}
    </div>
  );
}
