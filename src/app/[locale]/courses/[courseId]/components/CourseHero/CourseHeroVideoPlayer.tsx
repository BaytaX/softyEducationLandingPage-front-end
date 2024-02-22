"use client";
import React, { useState } from "react";
import Image from "next/image";

import playLectureIcon from "../../../../../../../public/courses_imgs/coursePlayer.png";
import { BASE_URL } from "@/constants/backend";

type CourseHeroVideoPlayerPropsType = {
  img: string;
  video_link: string;
};

export default function CourseHeroVideoPlayer({
  img,
  video_link,
}: CourseHeroVideoPlayerPropsType) {
  const [isPlay, setIsPlay] = useState(false);
  function handlePlayVid() {
    setIsPlay(true);
  }
  return (
    <div className="w-1/2 relative rounded-[3rem]  h-[58rem]">
      <div
        className="z-20 h-full  rounded-[3rem] w-full bg-cover flex items-center justify-center"
        style={{
          backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${BASE_URL}${img})`,
        }}
      >
        <button onClick={handlePlayVid}>
          <Image
            src={playLectureIcon}
            alt={"play Lecture Icon"}
            className="cursor-pointer z-30 "
            draggable={false}
          />
        </button>
      </div>

      {isPlay ? (
        <iframe
          className={` z-40 w-full rounded-[3rem] absolute top-0 h-full right-0`}
          src={video_link}
          allow="autoplay; encrypted-media"
          title="Softy Education"
        ></iframe>
      ) : null}
    </div>
  );
}
