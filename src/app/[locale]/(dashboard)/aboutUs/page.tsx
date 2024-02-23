import React from "react";
import HeroSectionAboutUS from "./components/HeroSectionAboutUS/HeroSectionAboutUS";
import CoreValuesAboutUs from "./components/CoreValuesAboutUs/CoreValuesAboutUs";
import OurGalleryAboutUs from "./components/OurGalleryAboutUs/OurGalleryAboutUs";
import OurTeamAboutUs from "./components/OurTeamAboutUs/OurTeamAboutUs";
import FrequentlyAskedQuestionsSection from "../components/FrequentlyAskedQuestions/FrequentlyAskedQuestionsSection";
import ArabicWrapper from "../components/ArabicWrapper";

export default function page() {
  return (
    <ArabicWrapper>
      <div className="ml-24">
        <HeroSectionAboutUS />
        <CoreValuesAboutUs />
        <OurGalleryAboutUs />
        <OurTeamAboutUs />
        <FrequentlyAskedQuestionsSection />
      </div>
    </ArabicWrapper>
  );
}
