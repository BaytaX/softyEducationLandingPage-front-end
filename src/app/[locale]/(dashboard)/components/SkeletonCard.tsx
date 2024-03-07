import { Skeleton } from "./Skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 ">
      <Skeleton className="h-[15rem] w-[28rem] rounded-xl  _4xl:w-[36rem]  _4xl:h-[20rem]  _2xl:!w-[60rem] _2xl:!h-[26rem]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[25rem] _2xl:h-[1.2rem] _2xl:!w-[50rem]  " />
        <Skeleton className="h-4 w-[20rem] _2xl:h-[1.2rem] _2xl:!w-[50rem]  " />
      </div>
    </div>
  );
}
