import React from "react";
import ReviewsSwiper from "@/app/[locale]/components/Reviews/ReviewsSwiper";

export default function Testimonials() {
  return (
    <div className="mt-44 flex flex-col gap-8">
      <h2 className="text-[3.2rem] font-medium">Testimonials</h2>
      <ReviewsSwiper />
    </div>
  );
}
