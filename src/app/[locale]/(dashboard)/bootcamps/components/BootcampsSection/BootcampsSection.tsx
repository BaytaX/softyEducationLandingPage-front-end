"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";

import SearchInput from "@/app/[locale]/(dashboard)/components/SearchInput";
import SortSelect from "@/app/[locale]/(dashboard)/components/SortSelect";
import BootcampsPagination from "../BootcampsPagination";
import ArabicWrapper from "@/app/[locale]/(dashboard)/components/ArabicWrapper";
import { getAllBootcamps } from "@/api/bootcamp/getAllBootcamps";
import Loader from "@/app/[locale]/(dashboard)/components/Loader";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";
import NoResultFound from "@/app/[locale]/(dashboard)/components/NoResultFound";
import useLocale from "@/helpers/useLocale";
import { SkeletonBootcampBox } from "./SkeletonBootcampBox";

export default function BootcampsSection() {
  const t = useTranslations("Bootcamps");
  const locale = useLocale();
  const [searchBootcamp, setSearchBootcamp] = useState("");
  function handleChange(value: string) {
    setSearchBootcamp(value);
  }
  const [sortValue, setSortValue] = useState("");
  function handleSort(value: string) {
    setSortValue(value);
  }

  const {
    isLoading,
    data: allBootcamps,
    error,
  } = useQuery({
    queryKey: ["bootcamp", searchBootcamp, sortValue],
    queryFn: async () =>
      await getAllBootcamps({ searchBootcamp, sortValue, locale }),
  });

  return (
    <>
      <div className="mt-36 relative h-[330rem]">
        <ArabicWrapper>
          <div className="w-full flex justify-between items-center -ml-12">
            <SearchInput
              handleChange={handleChange}
              searchValue={searchBootcamp}
            />
            <div className="flex gap-8 items-center">
              <label
                htmlFor="select"
                className="text-[1.6rem] font-light text-gray-1"
              >
                {t("sortBy")}
              </label>
              <SortSelect
                options={[
                  { value: "trend-desc", label: t("options.trending") },
                  { value: "title-asc", label: t("options.nameInc") },
                  { value: "title-desc", label: t("options.nameDec") },
                  { value: "createdAt-desc", label: t("options.dateRec") },
                  { value: "createdAt-asc", label: t("options.dateOld") },
                  { value: "price-desc", label: t("options.priceDec") },
                  { value: "price-asc", label: t("options.priceInc") },
                ]}
                onSelect={(val: string) => handleSort(val)}
              />
            </div>
          </div>
        </ArabicWrapper>
        {isLoading ? (
          <div className="flex  flex-col gap-44 justify-center items-center mt-44">
            <SkeletonBootcampBox />
            <SkeletonBootcampBox />
            <SkeletonBootcampBox />
            <SkeletonBootcampBox />
          </div>
        ) : allBootcamps?.length ? (
          <div className=" w-full  mt-28">
            <BootcampsPagination numItems={5} items={allBootcamps} />
          </div>
        ) : (
          <NoResultFound />
        )}
      </div>
    </>
  );
}
