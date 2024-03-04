import React from "react";
import { useQuery } from "@tanstack/react-query";

import TechnologiesButton from "./TechnologiesButton";
import SwiperComponent from "../../../components/swiper/Swiper";

import { getAllTechnologies } from "@/api/courses/getAllTechnologies";

export default function TechnologiesSwiper() {
  const {
    isLoading,
    data: allTechnologies,
    error,
  } = useQuery({
    queryKey: ["technologies"],
    queryFn: async () => await getAllTechnologies(),
  });

  return (
    <>
      {isLoading ? null : (
        <SwiperComponent
          data={allTechnologies}
          Component={TechnologiesButton}
          className="relative [direction:ltr] !h-[30%] !w-[94%]  xl:!w-[84%] 1/2xl:!w-[96%] !py-20 !ml-[2rem] 1/2xl:!-ml-[8rem]  xl:!ml-0"
          classNameSlide="!w-[30rem]  xl:!w-[44rem]   "
          isPaginated={screen.width <= 1000}
        />
      )}
    </>
  );
}
