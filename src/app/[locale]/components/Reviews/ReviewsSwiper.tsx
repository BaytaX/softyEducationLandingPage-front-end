"use client";
import React from "react";
import SwiperComponent from "../swiper/Swiper";
import ReviewBox from "./ReviewBox";

export default function ReviewsSwiper() {
  const data = [
    {
      title: "Amazing Learning Experience",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident”",
      rate: 4,
      userName: "John Carter",
      user_profession: "Student",
      user_pic_url: "",
    },
    {
      title: "Amazing Learning Experience",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident”",
      rate: 4,
      userName: "John Carter",
      user_profession: "Student",
      user_pic_url: "",
    },
    {
      title: "Amazing Learning Experience",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident”",
      rate: 4,
      userName: "John Carter",
      user_profession: "Student",
      user_pic_url: "",
    },
    {
      title: "Amazing Learning Experience",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident”",
      rate: 4,
      userName: "John Carter",
      user_profession: "Student",
      user_pic_url: "",
    },
    {
      title: "Amazing Learning Experience",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident”",
      rate: 4,
      userName: "John Carter",
      user_profession: "Student",
      user_pic_url: "",
    },
  ];
  return (
    <SwiperComponent
      className="h-[34rem] "
      data={data}
      Component={ReviewBox}
      classNameSlide="!w-[40rem]"
    />
  );
}
