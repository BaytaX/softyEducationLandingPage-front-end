import React from "react";
import HeroSectionBootcamps from "./components/HeroSectionBootcamps/HeroSectionBootcamps";
import BootcampsSection from "./components/BootcampsSection/BootcampsSection";
import BootcampsCardReview from "./components/BootcampsCardReview/BootcampsCardReview";

export default function page() {
  return (
    <div className="ml-24">
      <HeroSectionBootcamps />
      <BootcampsSection />
      <BootcampsCardReview />
    </div>
  );
}
