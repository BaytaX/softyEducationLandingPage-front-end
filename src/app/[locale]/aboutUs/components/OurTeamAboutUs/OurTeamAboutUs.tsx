"use client";
import React, { useState } from "react";
import Image from "next/image";

import OurTeamTitleBox from "./OurTeamTitleBox";
import TeamCard from "./TeamCard";
import TeamGallery from "./TeamGallery";

export default function OurTeamAboutUs() {
  const [memberObj, setMember] = useState({
    id: 1,
    name: "Jane Doe",
    job: "Business Developer",
    description:
      "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
    link: "",
    picture: "/aboutUs-Imgs/team-1.jpeg",
  });

  const data = [
    {
      id: 1,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-1.jpeg",
    },
    {
      id: 2,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-2.jpeg",
    },
    {
      id: 3,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-3.png",
    },
    {
      id: 4,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-4.jpeg",
    },
    {
      id: 5,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-5.jpeg",
    },
    {
      id: 6,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-6.jpeg",
    },
    {
      id: 7,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-7.jpeg",
    },
    {
      id: 8,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-8.jpeg",
    },
    {
      id: 9,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-8.jpeg",
    },
    {
      id: 10,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-8.jpeg",
    },
    {
      id: 11,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-8.jpeg",
    },
    {
      id: 12,
      name: "Jane Doe",
      job: "Business Developer",
      description:
        "Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.",
      link: "",
      picture: "/aboutUs-Imgs/team-8.jpeg",
    },
  ];

  function handleSetMember(member: any) {
    setMember(member);
  }
  return (
    <div className="mt-56 flex gap-28 items-center ">
      <div className="flex flex-col gap-8 w-5/12 relative h-[48rem]">
        <OurTeamTitleBox />

        <TeamGallery
          data={data}
          handleSetMember={handleSetMember}
          member={memberObj}
        />
      </div>
      <div className="w-[53%]">
        <TeamCard member={memberObj} />
      </div>
    </div>
  );
}
