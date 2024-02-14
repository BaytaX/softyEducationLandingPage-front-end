import React from "react";
import RelatedBootcampBox from "./RelatedBootcampBox";
import RelatedBootcampsSwiper from "./RelatedBootcampsSwiper";

export default function BootcampRelated() {
  return (
    <div className="mt-44 flex flex-col gap-16">
      <h2 className="text-[3.2rem] font-medium">Related to this Bootcamp</h2>
      <RelatedBootcampsSwiper />
    </div>
  );
}
