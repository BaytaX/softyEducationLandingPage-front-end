import React from "react";
import { Skeleton } from "@/app/[locale]/components/Skeleton";

export default function SkeletonBlogBox() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[24rem] w-[38rem] rounded-xl" />
      <div className="flex flex-col gap-4">
        <Skeleton className="h-4 w-[10rem]" />
        <Skeleton className="h-4 w-[24rem]" />
        <Skeleton className="h-4 w-[36rem]" />
        <Skeleton className="h-4 w-[36rem]" />
      </div>
    </div>
  );
}
