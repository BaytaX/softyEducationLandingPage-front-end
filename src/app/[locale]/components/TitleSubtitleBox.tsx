import React from "react";

type TitleSubtitle = {
  title: string;
  subtitle: string;
};

export default function TitleSubtitleBox({ title, subtitle }: TitleSubtitle) {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-[4.2rem] font-medium text-center">{title}</p>
      <p className="text-[2.2rem] text-gray-1 font-normal text-center">
        {subtitle}
      </p>
    </div>
  );
}
