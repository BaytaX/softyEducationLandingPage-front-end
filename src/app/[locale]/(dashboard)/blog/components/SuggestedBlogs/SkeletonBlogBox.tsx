import React from "react";
import { Skeleton } from "@/app/[locale]/(dashboard)/components/Skeleton";

export default function SkeletonBlogBox() {
  return (
    <div className="flex flex-col space-y-3 1/2xl:mr-20 lg:!mr-2">
      <Skeleton className="h-[24rem] w-[38rem] rounded-xl 1/2xl:w-[70rem] 1/2xl:h-[32rem]" />
      <div className="flex flex-col gap-4">
        <Skeleton className="h-4 w-[10rem]" />
        <Skeleton className="h-4 w-[24rem]" />
        <Skeleton className="h-4 w-[36rem]" />
        <Skeleton className="h-4 w-[36rem]" />
      </div>
    </div>
  );
}
