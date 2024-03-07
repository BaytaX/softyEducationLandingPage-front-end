import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllTechnologies } from "@/api/courses/getAllTechnologies";
import SwiperComponent from "../../../components/swiper/Swiper";
import TagButton from "./TagButton";
import { useLocale } from "next-intl";
import { getAllTags } from "@/api/blog/getAllTags";

export default function TagsSwiper({ handleFilterBlogs, tagId }: any) {
  const locale = useLocale();
  const {
    isLoading: isLoadingTags,
    data: tags,
    error: errorTags,
  } = useQuery({
    queryKey: ["tags", locale],
    queryFn: async () => await getAllTags({ locale }),
  });

  return (
    <>
      {isLoadingTags ? null : (
        <SwiperComponent
          data={tags}
          Component={TagButton}
          className="relative [direction:ltr]  !w-[90%] "
          classNameSlide="!w-max !mr-10 !pt-6"
          handleClick={handleFilterBlogs}
          additionalData={tagId}
          isPaginated={false}
        />
      )}
    </>
  );
}
