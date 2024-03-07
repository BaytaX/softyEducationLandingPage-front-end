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
    <div className="mt-56 flex gap-28 items-center _2xl:flex-col _2xl:-ml-20 _1/2xl:-ml-10">
      {isLoading ? (
        <div className="flex justify-center items-center h-[40rem] w-full">
          <MiniLoader />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-8 w-5/12 relative h-fit pb-16 min-h-[44rem] _2xl:w-[90%] _1/2xl:gap-16 _lg:!w-[96%]">
            <OurTeamTitleBox />
            <div className="w-full _2xl:hidden">
              <TeamGallery
                data={teams}
                handleSetMember={handleSetMember}
                member={memberObj}
              />
            </div>
            <div className="w-full hidden _2xl:block ">
              <OurTeamSwiper
                data={teams}
                handleSetMember={handleSetMember}
                member={memberObj}
              />
            </div>
          </div>
          <div className="w-[53%] mr-10 _1/2xl:w-[60%] _lg:!w-[80%]">
            <TeamCard member={memberObj} />
          </div>
        </>
      )}
    </div>
  );
}
