"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import OurTeamTitleBox from "./OurTeamTitleBox";
import TeamCard from "./TeamCard";
import TeamGallery from "./TeamGallery";
import { getTeam } from "@/api/aboutUs/getTeam";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";

export default function OurTeamAboutUs() {
  const {
    isLoading,
    data: teams,
    error,
  } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => await getTeam(),
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
    <div className="mt-56 flex gap-28 items-center ">
      {isLoading ? (
        <div className="flex justify-center items-center h-[40rem] w-full">
          <MiniLoader />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-8 w-5/12 relative h-[48rem]">
            <OurTeamTitleBox />
            <TeamGallery
              data={teams}
              handleSetMember={handleSetMember}
              member={memberObj}
            />
          </div>
          <div className="w-[53%]">
            <TeamCard member={memberObj} />
          </div>
        </>
      )}
    </div>
  );
}
