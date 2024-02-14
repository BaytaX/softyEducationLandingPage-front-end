"use client";
import React, { useState } from "react";
import Image from "next/image";

import playLectureIcon from "../../../../../../../public/courses_imgs/coursePlayer.png";

export default function CourseHeroVideoPlayer() {
  const [isPlay, setIsPlay] = useState(false);
  function handlePlayVid() {
    setIsPlay(true);
  }
  return (
    <div className="w-1/2 relative rounded-[3rem]  h-[58rem]">
      <div
        className="z-20 h-full  rounded-[3rem] w-full bg-cover flex items-center justify-center"
        style={{
          backgroundImage: ` linear-gradient(#0000305f,#00003052),url(${"/courses_imgs/courseimg.jpg"})`,
        }}
      >
        <button onClick={handlePlayVid}>
          <Image
            src={playLectureIcon}
            alt={"play Lecture Icon"}
            className="cursor-pointer z-30 "
          />
        </button>
      </div>

      {isPlay ? (
        <iframe
          className={` z-40 w-full rounded-[3rem] absolute top-0 h-full right-0`}
          src={`https://www.youtube.com/embed/oG34F5gxcf8?si=bCWfLCtx4_nPlddh?rel=0&autoplay=1`}
          allow="autoplay; encrypted-media"
          title="Softy Education"
        ></iframe>
      ) : null}
    </div>
  );
}
