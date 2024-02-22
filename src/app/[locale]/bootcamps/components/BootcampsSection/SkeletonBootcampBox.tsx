import React from "react";
import { Skeleton } from "@/app/[locale]/components/Skeleton";

export function SkeletonBootcampBox() {
  return (
    <div className="flex flex-col gap-10 items-end">
      <Skeleton className="h-[24rem] w-[124rem] rounded-xl" />
      <div className="flex flex-col gap-4 items-end">
        <Skeleton className="h-4 w-[100rem]" />
        <Skeleton className="h-4 w-[100rem]" />
        <Skeleton className="h-4 w-[80rem]" />
        <Skeleton className="h-4 w-[60rem]" />
      </div>
    </div>
  );
}
