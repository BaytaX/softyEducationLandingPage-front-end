import HeroSection from "./components/Hero/HeroSection";
import UpcomingEventsSection from "./components/UpcomingEvents/UpcomingEventsSection";
import ExploreCoursesSection from "./components/ExploreCourses/ExploreCoursesSection";
import DiscoverOurBootcampsSection from "./components/DiscoverOurBootcamps/DiscoverOurBootcampsSection";
import WhyChooseUsSection from "./components/WhyChooseUs/WhyChooseUsSection";
import GetToKnowUsSection from "./components/GetToKnowUs/GetToKnowUsSection";
import ReviewsSection from "./components/Reviews/ReviewsSection";
import SubscribeSection from "./components/Subscribe/SubscribeSection";
import FrequentlyAskedQuestionsSection from "./components/FrequentlyAskedQuestions/FrequentlyAskedQuestionsSection";
import ArabicWrapper from "./components/ArabicWrapper";

export default function Page() {
  return (
    <div className="ml-24  ">
      <HeroSection />
      <UpcomingEventsSection />
      <ExploreCoursesSection />
      <DiscoverOurBootcampsSection />
      <WhyChooseUsSection />
      <GetToKnowUsSection />
      <ReviewsSection />
      <SubscribeSection />
      <FrequentlyAskedQuestionsSection />
    </div>
  );
}
