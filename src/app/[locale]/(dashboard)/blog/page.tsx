import React from "react";
import { Metadata } from "next";

import BlogHero from "./components/BlogHero/BlogHero";
import RecentBlogs from "./components/RecentBlogs/RecentBlogs";
import SuggestedBlogs from "./components/SuggestedBlogs/SuggestedBlogs";

import ArabicWrapper from "../components/ArabicWrapper";

export const metadata: Metadata = {
  title: "Blogs - Stay Informed and Inspired",
  description:
    "Read our insightful blogs at Softy Education. Stay updated on the latest trends in programming, web development, and more. Find inspiration, tips, and valuable insights to fuel your learning journey",
};

export default function page() {
  return (
    <div className="ml-16 ">
      <ArabicWrapper className="ml-16 w-11/12 1/2xl:ml-6">
        <BlogHero />
        <RecentBlogs />
        <SuggestedBlogs />
      </ArabicWrapper>
    </div>
  );
}
