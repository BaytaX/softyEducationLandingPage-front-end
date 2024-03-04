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
}: {
  handleFilter: any;
  handleRemoveFilter: any;
  boxClassName?: string;
}) {
  const t = useTranslations("Courses.filters");
  return (
    <div
      className={`flex flex-col gap-12 w-full 1/2xl:w-[60rem] ${boxClassName}`}
    >
      <CollapseBox
        title={t("category")}
        Component={CategoryComponent}
        handleFilter={handleFilter}
        handleRemoveFilter={handleRemoveFilter}
      />
      <CollapseBox
        title={t("technologies")}
        Component={TechComponent}
        handleFilter={handleFilter}
        handleRemoveFilter={handleRemoveFilter}
      />
      <CollapseBox
        title={t("price")}
        Component={PriceComponent}
        handleFilter={handleFilter}
        handleRemoveFilter={handleRemoveFilter}
      />
      <CollapseBox
        title={t("duration")}
        Component={DurationComponent}
        handleFilter={handleFilter}
        handleRemoveFilter={handleRemoveFilter}
      />
    </div>
  );
}
