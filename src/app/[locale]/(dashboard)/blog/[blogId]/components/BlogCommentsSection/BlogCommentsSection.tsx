import React from "react";
import CommentBox from "./CommentBox";
import AddComment from "./AddComment";
import { useTranslations } from "next-intl";

export default function BlogCommentsSection() {
  const t = useTranslations("Blog.comments");
  return (
    <div className="mt-20 pb-20">
      <h3 className="text-[4rem] font-medium">{t("title")}</h3>
      <div className="w-[70%] mt-16 flex flex-col gap-16">
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
