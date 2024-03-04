import React from "react";
import BlogIdSuggestedBox from "./blogIdDetails/BlogIdSuggestedBox";

type BlogsRightSidePropsType = {
  BlogsClassName: string;
  data: any;
};

export default function BlogsRightSide({
  BlogsClassName,
  data,
}: BlogsRightSidePropsType) {
  if (!data?.length)
    return (
      <div className="text-[2rem] text-gray-500">No Suggested Blogs ...</div>
    );

  return (
    <div className={`flex flex-col  ${BlogsClassName} `}>
      {data?.slice(0, 3)?.map((ele: { id: number; attributes: any }) => (
        <BlogIdSuggestedBox key={ele.id} data={ele} />
      ))}
    </div>
  );
}
