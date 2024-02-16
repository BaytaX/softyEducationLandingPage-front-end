import React from "react";
import ReviewsSwiper from "@/app/[locale]/components/Reviews/ReviewsSwiper";
import TestimonialsTitleBox from "./TestimonialsTitleBox";

export default function Testimonials() {
  return (
    <div className="mt-44 flex flex-col gap-8">
      <TestimonialsTitleBox />
      <ReviewsSwiper />
    </div>
  );
}
