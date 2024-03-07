"use client";
import React from "react";
import { useTranslations } from "next-intl";

import CollapseBox from "./CollapseBox";
import { PriceComponent } from "./PriceComponent";
import { DurationComponent } from "./DurationComponent";
import { TechComponent } from "./TechComponent";
import { CategoryComponent } from "./CategoryComponent";

export default function FilterCourseBoxes({
  handleFilter,
  handleRemoveFilter,
  boxClassName,
  isFilterCatgory,
  isFilterTech,
  isFilterDuration,
  isFilterPrice,
}: {
  handleFilter: any;
  handleRemoveFilter: any;
  boxClassName?: string;
  isFilterCatgory: Number[];
  isFilterTech: Number[];
  isFilterDuration: Number[];
  isFilterPrice: Number[];
}) {
  const t = useTranslations("Courses.filters");
  return (
    <div
      className={`flex flex-col gap-12 w-full _1/2xl:!w-[60rem] _1/2xl:!gap-20  ${boxClassName}`}
    >
      <CollapseBox
        title={t("category")}
        Component={CategoryComponent}
        handleFilter={handleFilter}
        handleRemoveFilter={handleRemoveFilter}
        state={isFilterCatgory}
      />
      <CollapseBox
        title={t("technologies")}
        Component={TechComponent}
        handleFilter={handleFilter}
        handleRemoveFilter={handleRemoveFilter}
        state={isFilterTech}
      />
      <CollapseBox
        title={t("price")}
        Component={PriceComponent}
        handleFilter={handleFilter}
        handleRemoveFilter={handleRemoveFilter}
        state={isFilterPrice}
      />
      <CollapseBox
        title={t("duration")}
        Component={DurationComponent}
        handleFilter={handleFilter}
        handleRemoveFilter={handleRemoveFilter}
        state={isFilterDuration}
      />
    </div>
  );
}
