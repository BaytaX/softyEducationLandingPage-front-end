"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getBlogById } from "@/api/blog/getBlogById";

import BlogIdHero from "./components/blogIdHero/BlogIdHero";
import BlogIdDetails from "./components/blogIdDetails/BlogIdDetails";
import BlogCommentsSection from "./components/BlogCommentsSection/BlogCommentsSection";
import NotFoundPage from "../../components/notFound/NotFound";
import Loader from "../../components/Loader";
import { getSuggestedBlogs } from "@/api/blog/getSuggestedBlogs";
import useLocale from "@/helpers/useLocale";
import ArabicWrapper from "../../components/ArabicWrapper";

export default function Page() {
  const locale = useLocale();
  const params = useParams();
  const { blogId } = params;
  const {
    isLoading,
    data: blog,
    error,
  } = useQuery({
    queryKey: ["blogs", blogId, locale],
    queryFn: async () => await getBlogById({ blogId, locale }),
  });

  const {
    isLoading: isLoadingSuggested,
    data: suggestedBlogs,
    error: errorSuggested,
  } = useQuery({
    queryKey: ["blogs", "blog", blogId, locale],
    queryFn: async () => await getSuggestedBlogs({ blogId, locale }),
  });

  if (blog === null) return <NotFoundPage />;

  return (
    <div className="ml-10">
      {isLoading && isLoadingSuggested ? (
        <div className="flex items-center justify-center h-[100rem]">
          <Loader />
        </div>
      ) : (
        <ArabicWrapper className="-ml-20">
          <BlogIdHero />
          <BlogIdDetails
            data={blog?.attributes}
            suggestedBlogs={suggestedBlogs}
          />
          <BlogCommentsSection />
        </ArabicWrapper>
      )}
    </div>
  );
}
