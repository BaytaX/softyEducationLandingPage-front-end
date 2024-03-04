import React from "react";
import SwiperPrevButton from "./SwiperPrevButton";
import SwipeNextButton from "./SwipeNextButton";

export default function UpcomingEventsSwiperButtons() {
  return (
    <div className="mt-16 flex items-center gap-10 justify-center xl:hidden">
      <SwiperPrevButton />
      <SwipeNextButton />
    </div>
  );
}
