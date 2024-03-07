"use client";
import React from "react";

import SwiperComponent from "@/app/[locale]/(dashboard)/components/swiper/Swiper";
import BlogBox from "../SuggestedBlogs/BlogBox";

export default function BlogsSwiper({ data }: any) {
  return (
    <SwiperComponent
      data={data}
      Component={BlogBox}
      className="relative w-11/12 !pb-[8rem] "
      classNameSlide="!w-[75%] _lg:!w-[94%] "
      isPaginated={screen.width <= 1000}
      spaceBetween={20}
    />
  );
}
