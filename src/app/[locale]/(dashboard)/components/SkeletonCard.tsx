import { Skeleton } from "./Skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 _xl:w-full">
      <Skeleton className="h-[15rem] w-[27rem] rounded-xl  _4xl:w-[38rem]  _4xl:h-[20rem]  _2xl:w-[60rem] _2xl:h-[32rem] _xl:w-[90%] _lg:!rounded-t-[3rem]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[25rem] _2xl:h-[1.2rem] _2xl:!w-[50rem]  " />
        <Skeleton className="h-4 w-[20rem] _2xl:h-[1.2rem] _2xl:!w-[50rem]  " />
      </div>
    </div>
  );
}
