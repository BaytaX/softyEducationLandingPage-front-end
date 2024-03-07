"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import SwiperComponent from "@/app/[locale]/(dashboard)/components/swiper/Swiper";
import RelatedBootcampBox from "./RelatedBootcampBox";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";
import NoResultFound from "@/app/[locale]/(dashboard)/components/NoResultFound";
import NotFoundPage from "@/app/[locale]/(dashboard)/components/notFound/NotFound";

import { getRelatedBootcamps } from "@/api/bootcamp/getRelatedBootcamps";

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
    queryKey: ["category", bootcampId, locale],
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
          className="h-fit !pb-4 w-full !p-4 "
          data={wantedData}
          Component={RelatedBootcampBox}
          classNameSlide="!w-[58rem] _lg:!w-[70rem]"
          spaceBetween={80}
          isPaginated={false}
        />
      ) : (
        <NoResultFound />
      )}
    </>
  );
}
