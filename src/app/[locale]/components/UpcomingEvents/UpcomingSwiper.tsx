"use client";

import React from "react";
import SwiperComponent from "../swiper/Swiper";
import EventBox from "./EventBox";
import UpcomingEventsSwiperButtons from "./UpcomingEventsSwiperButtons";

export default function UpcomingSwiper() {
  const data = [
    {
      eventCategory: "Event category",
      title: "Get started with Angular fundamentals",
      date: "Oct 21, 2023",
      status: "On-site",
    },
    {
      eventCategory: "Event category",
      title: "Get started with Angular fundamentals",
      date: "Oct 21, 2023",
      status: "On-site",
    },
    {
      eventCategory: "Event category",
      title: "Get started with Angular fundamentals",
      date: "Oct 21, 2023",
      status: "On-site",
    },
    {
      eventCategory: "Event category",
      title: "Get started with Angular fundamentals",
      date: "Oct 21, 2023",
      status: "On-site",
    },
    {
      eventCategory: "Event category",
      title: "Get started with Angular fundamentals",
      date: "Oct 21, 2023",
      status: "On-site",
    },
    {
      eventCategory: "Event category",
      title: "Get started with Angular fundamentals",
      date: "Oct 21, 2023",
      status: "On-site",
    },
  ];
  return (
    <SwiperComponent
      data={data}
      Component={EventBox}
      spaceBetween={50}
      SwiperButtons={UpcomingEventsSwiperButtons}
      width="!w-[40rem] "
    />
  );
}
// width="!w-[40rem] mr-[5rem]"
