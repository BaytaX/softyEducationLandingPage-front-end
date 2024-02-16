import React from "react";
import RelatedBootcampsSwiper from "./RelatedBootcampsSwiper";
import BootcampRelatedTitleBox from "./BootcampRelatedTitleBox";

export default function BootcampRelated() {
  return (
    <div className="mt-44 flex flex-col gap-16">
      <BootcampRelatedTitleBox />
      <RelatedBootcampsSwiper />
    </div>
  );
}
