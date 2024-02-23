"use client";
import React, { useState } from "react";
import Image from "next/image";

import GetToKnowUsImg from "@/../../public/imgs/gettoKnowUsImg.png";
import playLectureIcon from "@/../../public/imgs/PlayCircle.png";

export default function GetToKnowUsVideoPlayer() {
  const [isPlay, setIsPlay] = useState(false);
  function handlePlayVid() {
    setIsPlay(true);
  }
  return (
    <>
      <Image
        src={GetToKnowUsImg}
        alt={"background picture of video"}
        width={1100}
        className="z-20"
      />
      <button onClick={handlePlayVid}>
        <Image
          src={playLectureIcon}
          alt={"play Lecture Icon"}
          className="absolute top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 "
        />
      </button>
      {isPlay ? (
        <iframe
          className={` z-40 w-[77.6rem] rounded-[3rem] absolute top-4 h-[43.4rem] right-5`}
          src={`https://www.youtube.com/embed/oG34F5gxcf8?si=bCWfLCtx4_nPlddh?rel=0&autoplay=1`}
          allow="autoplay; encrypted-media"
          title="Softy Education"
        ></iframe>
      ) : null}
    </>
  );
}
