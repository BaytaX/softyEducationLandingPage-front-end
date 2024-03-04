import React from "react";
import { Metadata } from "next";

import HeroSectionAboutUS from "./components/HeroSectionAboutUS/HeroSectionAboutUS";
import CoreValuesAboutUs from "./components/CoreValuesAboutUs/CoreValuesAboutUs";
import OurGalleryAboutUs from "./components/OurGalleryAboutUs/OurGalleryAboutUs";
import OurTeamAboutUs from "./components/OurTeamAboutUs/OurTeamAboutUs";
import FrequentlyAskedQuestionsSection from "../components/FrequentlyAskedQuestions/FrequentlyAskedQuestionsSection";

import ArabicWrapper from "../components/ArabicWrapper";

export const metadata: Metadata = {
  title: "About Softy Education - Empowering Learning, Inspiring Futures",
  description:
    "Welcome to Softy Education, where we believe in the transformative power of education. At Softy, we strive to provide a dynamic and inclusive e-learning platform, offering courses and bootcamps in programming, web development, mobile development, and more. Our mission is to empower learners globally by fostering a community of knowledge-seekers. Discover the story behind Softy Education and join us in shaping a future where learning knows no bounds.",
};

export default function page() {
  return (
    <ArabicWrapper className="mr-20">
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
