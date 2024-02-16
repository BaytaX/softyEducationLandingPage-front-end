"use client";
import React from "react";
import { useParams } from "next/navigation";
import ReviewCardBox from "./ReviewCardBox";
import SwiperComponent from "@/app/[locale]/components/swiper/Swiper";
import SwiperPrevButton from "@/app/[locale]/components/UpcomingEvents/SwiperPrevButton";
import SwipeNextButton from "@/app/[locale]/components/UpcomingEvents/SwipeNextButton";
import useArabic from "@/helpers/useArabic";

function ReviewsBootcampsSwiperBtns() {
  const isArabic = useArabic();
  return (
    <div
      className={`flex gap-4 items-center [direction:ltr] absolute top-0  z-40 ${
        isArabic ? "left-0 flex-row-reverse" : "right-0"
      }`}
    >
      <SwiperPrevButton
        btnClassName="!bg-color-blue-2 !w-[4.4rem] !h-[4.4rem] "
        arrowClassName={`!fill-white !text-[2.4rem]  ${
          isArabic ? "rotate-[180deg]" : ""
        }`}
      />
      <SwipeNextButton
        btnClassName="!bg-color-blue-2 !w-[4.4rem] !h-[4.4rem] "
        arrowClassName={`!fill-white !text-[2.4rem] ${
          isArabic ? "rotate-[180deg]" : ""
        }`}
      />
    </div>
  );
}
export default function ReviewsBootcampsSwiper() {
  const data = [
    {
      comment:
        "The bootcamp allowed me to acquire a solid foundation in Front-end, to practice on real world problems, to join a lively and close-knit international community and to land the job of my dreams as a Front-end developer! I 100% recommend SofyEducations",
      rate: 4,
      userName: "John Carter",
      user_profession: "Front-end developer",
      job_experience: 4,
      user_pic_url: "",
    },
    {
      comment:
        "The bootcamp allowed me to acquire a solid foundation in Front-end, to practice on real world problems, to join a lively and close-knit international community and to land the job of my dreams as a Front-end developer! I 100% recommend SofyEducations",
      rate: 4,
      userName: "John Carter",
      user_profession: "Front-end developer",
      job_experience: 4,
      user_pic_url: "",
    },
    {
      comment:
        "The bootcamp allowed me to acquire a solid foundation in Front-end, to practice on real world problems, to join a lively and close-knit international community and to land the job of my dreams as a Front-end developer! I 100% recommend SofyEducations",
      rate: 4,
      userName: "John Carter",
      user_profession: "Front-end developer",
      job_experience: 4,
      user_pic_url: "",
    },
    {
      comment:
        "The bootcamp allowed me to acquire a solid foundation in Front-end, to practice on real world problems, to join a lively and close-knit international community and to land the job of my dreams as a Front-end developer! I 100% recommend SofyEducations",
      rate: 4,
      userName: "John Carter",
      user_profession: "Front-end developer",
      job_experience: 4,
      user_pic_url: "",
    },
    {
      comment:
        "The bootcamp allowed me to acquire a solid foundation in Front-end, to practice on real world problems, to join a lively and close-knit international community and to land the job of my dreams as a Front-end developer! I 100% recommend SofyEducations",
      rate: 4,
      userName: "John Carter",
      user_profession: "Front-end developer",
      job_experience: 4,
      user_pic_url: "",
    },
  ];
  return (
    <SwiperComponent
      data={data}
      Component={ReviewCardBox}
      SwiperButtons={ReviewsBootcampsSwiperBtns}
      className="relative"
    />
  );
}
