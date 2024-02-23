import React from "react";
import { Metadata } from "next";

import HeroSectionBootcamps from "./components/HeroSectionBootcamps/HeroSectionBootcamps";
import BootcampsSection from "./components/BootcampsSection/BootcampsSection";
import BootcampsCardReview from "./components/BootcampsCardReview/BootcampsCardReview";

export const metadata: Metadata = {
  title: "Bootcamps - Intensive Learning for Career Growth",
  description:
    "Join our immersive bootcamps at Softy Education. Accelerate your career with hands-on experience in programming, web development, and mobile development. Gain practical skills and stay ahead in the competitive tech industry",
};

export default function page() {
  return (
    <div className="ml-24">
      <HeroSectionBootcamps />
      <BootcampsSection />
      <BootcampsCardReview />
    </div>
  );
}
