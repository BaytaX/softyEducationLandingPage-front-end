"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import SwiperComponent from "../swiper/Swiper";
import EventBox from "./EventBox";
import UpcomingEventsSwiperButtons from "./UpcomingEventsSwiperButtons";
import { getAllEvents } from "@/api/events/getAllEvents";
import MiniLoader from "../MiniLoader";
import ArabicWrapper from "../ArabicWrapper";
import { useLocale } from "next-intl";

export default function UpcomingSwiper() {
  const locale = useLocale();
  const {
    isLoading,
    data: events,
    error,
  } = useQuery({
    queryKey: ["events", locale],
    queryFn: async () => await getAllEvents({ locale }),
  });

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[39.5rem] flex justify-center items-center">
          <MiniLoader />
        </div>
      ) : (
        <SwiperComponent
          data={events}
          Component={EventBox}
          spaceBetween={50}
          SwiperButtons={UpcomingEventsSwiperButtons}
          classNameSlide="!w-[40rem] 1/2xl:!w-[70rem]"
        />
      )}
    </>
  );
}
// width="!w-[40rem] mr-[5rem]"
