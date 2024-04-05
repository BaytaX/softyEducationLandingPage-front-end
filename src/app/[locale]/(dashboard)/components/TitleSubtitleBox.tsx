import React from "react";

type TitleSubtitle = {
  title: string;
  subtitle: string;
};

export default function TitleSubtitleBox({ title, subtitle }: TitleSubtitle) {
  return (
    <div className="flex flex-col gap-8 _4xl:-ml-10 justify-center items-center">
      <p className="text-[4.2rem] font-medium text-center _xl:text-[5.6rem] _lg:!text-[6.4rem]">
        {title}
      </p>
      <p className="text-[2.2rem] text-gray-1 font-normal text-center w-11/12 _xl:text-[3.2rem] _lg:!text-[3.8rem]">
        {subtitle}
      </p>
    </div>
  );
}
