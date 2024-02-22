"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import SwiperComponent from "@/app/[locale]/components/swiper/Swiper";
import RelatedBootcampBox from "./RelatedBootcampBox";
import { getRelatedBootcamps } from "@/api/bootcamp/getRelatedBootcamps";
import MiniLoader from "@/app/[locale]/components/MiniLoader";
import NoResultFound from "@/app/[locale]/components/NoResultFound";
import useLocale from "@/helpers/useLocale";

export default function RelatedBootcampsSwiper({
  categoryId,
  bootcampId,
}: {
  categoryId: number;
  bootcampId: number;
}) {
  const locale = useLocale();
  const {
    isLoading,
    data: category,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await getRelatedBootcamps(categoryId),
  });
  const wantedData = category?.attributes?.bootcamps?.data?.filter(
    (bootcamp: any) =>
      bootcamp?.id !== bootcampId && bootcamp?.attributes?.locale === locale
  );

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[40rem] flex justify-center items-center">
          <MiniLoader />
        </div>
      ) : wantedData?.length ? (
        <SwiperComponent
          className="h-[48rem] w-full !p-4 "
          data={wantedData}
          Component={RelatedBootcampBox}
          classNameSlide="!w-[58rem]"
          spaceBetween={100}
        />
      ) : (
        <NoResultFound />
      )}
    </>
  );
}
