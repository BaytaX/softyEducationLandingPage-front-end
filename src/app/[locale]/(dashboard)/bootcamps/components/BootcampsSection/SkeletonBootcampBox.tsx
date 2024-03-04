import React from "react";
import { Skeleton } from "@/app/[locale]/(dashboard)/components/Skeleton";

export function SkeletonBootcampBox() {
  return (
    <div className="flex flex-col gap-12 items-end w-10/12 justify-center xl:w-10/12">
      <Skeleton className="h-[24rem] w-[100%] rounded-xl" />
      <div className="flex flex-col gap-4 items-end w-full">
        <Skeleton className="h-4 w-[100%] " />
        <Skeleton className="h-4 w-[100%] " />
        <Skeleton className="h-4 w-[80%] " />
        <Skeleton className="h-4 w-[60%] " />
      </div>
    </div>
  );
}
