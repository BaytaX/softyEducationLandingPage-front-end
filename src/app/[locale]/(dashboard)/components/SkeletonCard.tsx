import { Skeleton } from "./Skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 ">
      <Skeleton className="h-[15rem] w-[28rem] rounded-xl  2xl:!w-[50rem]  xl:w-[70rem] xl:h-[26rem] 1/2xl:!w-[80rem] 1/2xl:!h-[36rem]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[25rem] xl:w-[40rem] xl:h-[1.2rem] 1/2xl:!w-[50rem] 1/2xl:!h-[1.6rem] " />
        <Skeleton className="h-4 w-[20rem] xl:w-[40rem] xl:h-[1.2rem] 1/2xl:!w-[50rem] 1/2xl:!h-[1.6rem] " />
      </div>
    </div>
  );
}
