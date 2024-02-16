import React from "react";
import BootcampHero from "./components/BootcampHero/BootcampHero";
import BootcampPreRequirements from "./components/BootcampPreRequirements/BootcampPreRequirements";
import BootcampCourses from "./components/BootcampCourses/BootcampCourses";
import BootcampRelated from "./components/BootcampRelated/BootcampRelated";
import FrequentlyAskedQuestionsSection from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestionsSection";
import Objectives from "./components/BootcampObjectives/ObjectivesBootcamp";
import Testimonials from "../../components/_ui/Testimonials";
import ObjectivesBootcamp from "./components/BootcampObjectives/ObjectivesBootcamp";

export default function page() {
  return (
    <div className="ml-16">
      <BootcampHero />
      <BootcampPreRequirements />
      <BootcampCourses />
      <ObjectivesBootcamp />
      <Testimonials />
      <BootcampRelated />
      <FrequentlyAskedQuestionsSection boxClassName="!w-[98%] !ml-2" />
    </div>
  );
}
