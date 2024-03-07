"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import PriceRangeBox from "./PriceRangeBox";
import MiniLoader from "@/app/[locale]/(dashboard)/components/MiniLoader";
import { getPriceRange } from "@/api/courses/getPriceRange";

export function PriceComponent({ handleFilter, value }: any) {
  const {
    isLoading,
    data: priceRange,
    error,
  } = useQuery({
    queryKey: ["price_range"],
    queryFn: async () => await getPriceRange(),
  });
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <MiniLoader />
        </div>
      ) : (
        <PriceRangeBox
          handleFilter={handleFilter}
          priceRange={priceRange}
          value={value}
        />
      )}
    </div>
  );
}
