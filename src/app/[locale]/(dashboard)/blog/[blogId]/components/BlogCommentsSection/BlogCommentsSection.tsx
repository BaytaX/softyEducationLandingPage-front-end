import React from "react";
import CommentBox from "./CommentBox";
import AddComment from "./AddComment";
import { useTranslations } from "next-intl";

export default function BlogCommentsSection() {
  const t = useTranslations("Blog.comments");
  return (
    <div className="mt-20 pb-20">
      <h3 className="text-[4rem] font-medium 2xl:text-[4.4rem] 1/2xl:text-[4.8rem] lg:!text-[5.6rem]">
        {t("title")}
      </h3>
      <div className="w-[70%] mt-16 flex flex-col gap-16 2xl:w-[80%] 1/2xl:w-11/12 sm:!w-[98%]">
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </div>
      <AddComment />
    </div>
  );
}
