"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import SwiperComponent from "../../../components/swiper/Swiper";
import TagButton from "../../../blog/components/SuggestedBlogs/TagButton";
import { getGallery } from "@/api/aboutUs/getGallery";
import GalleryBox from "./GalleryBox";

export default function GallerySwiper({ handleFilterBlogs }: any) {
  const {
    isLoading: isLoadingGallery,
    data: gallery,
    error: errorGallery,
  } = useQuery({
    queryKey: ["galleries"],
    queryFn: async () => await getGallery(),
  });
  return (
    <>
      {isLoadingGallery ? null : (
        <SwiperComponent
          data={gallery}
          Component={GalleryBox}
          className="relative [direction:ltr]  !w-[90%] "
          classNameSlide="!w-max !mr-20 !pt-6"
          handleClick={handleFilterBlogs}
        />
      )}
    </>
  );
}
