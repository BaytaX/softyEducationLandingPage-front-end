import React from "react";
import { Skeleton } from "@/app/[locale]/components/Skeleton";

export function SkeletonPopularCourse() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-20 mt-10">
        <Skeleton className="h-4 w-[10rem] self-end" />
        <div className="flex flex-col gap-8 ">
          <Skeleton className="h-3 w-[25rem]" />
          <Skeleton className="h-3 w-[25rem]" />
          <Skeleton className="h-3 w-[25rem]" />
        </div>
      </div>
      <div className="gap-4 flex flex-col">
        <Skeleton className="h-[20rem] w-[50rem] rounded-xl" />
        <Skeleton className="h-4 w-[20rem] self-end" />
        <Skeleton className="h-3 w-[32rem] self-end" />
        <Skeleton className="h-3 w-[32rem] self-end" />
        <div className="flex gap-6 self-end mt-4 ">
          <Skeleton className="h-2 w-[6rem] self-end" />
          <Skeleton className="h-2 w-[6rem] self-end" />
          <Skeleton className="h-2 w-[6rem] self-end" />
        </div>
      </div>
    </div>
  );
}
