import React from "react";
import BlogIdSuggestedBox from "./blogIdDetails/BlogIdSuggestedBox";

type BlogsRightSidePropsType = {
  gap: string;
  data: any;
};

export default function BlogsRightSide({ gap, data }: BlogsRightSidePropsType) {
  if (!data?.length)
    return (
      <div className="text-[2rem] text-gray-500">No Suggested Blogs ...</div>
    );

  return (
    <div className={`flex flex-col  ${gap} `}>
      {data?.slice(0, 3)?.map((ele: { id: number; attributes: any }) => (
        <BlogIdSuggestedBox key={ele.id} data={ele} />
      ))}
    </div>
  );
}
