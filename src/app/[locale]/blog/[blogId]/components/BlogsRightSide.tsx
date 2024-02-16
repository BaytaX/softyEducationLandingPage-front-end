import React from "react";
import BlogIdSuggestedBox from "./blogIdDetails/BlogIdSuggestedBox";

type BlogsRightSidePropsType = {
  gap: string;
};

export default function BlogsRightSide({ gap }: BlogsRightSidePropsType) {
  return (
    <div className={`flex flex-col  ${gap} `}>
      <BlogIdSuggestedBox />
      <BlogIdSuggestedBox />
      <BlogIdSuggestedBox />
    </div>
  );
}
