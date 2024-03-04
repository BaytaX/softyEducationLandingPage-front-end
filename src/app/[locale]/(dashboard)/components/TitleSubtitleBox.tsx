import React from "react";

type TitleSubtitle = {
  title: string;
  subtitle: string;
};

export default function TitleSubtitleBox({ title, subtitle }: TitleSubtitle) {
  return (
    <div className="flex flex-col gap-8 6xl:-ml-10 justify-center items-center">
      <p className="text-[4.2rem] font-medium text-center xl:text-[5.6rem] lg:!text-[6.4rem]">
        {title}
      </p>
      <p className="text-[2.2rem] text-gray-1 font-normal text-center w-11/12 xl:text-[3.2rem] lg:!text-[4.2rem]">
        {subtitle}
      </p>
    </div>
  );
}
