import React from "react";
import BlogHero from "./components/BlogHero/BlogHero";
import RecentBlogs from "./components/RecentBlogs/RecentBlogs";
import SuggestedBlogs from "./components/SuggestedBlogs/SuggestedBlogs";
import ArabicWrapper from "../components/ArabicWrapper";

export default function page() {
  return (
    <div className="ml-16">
      <ArabicWrapper>
        <BlogHero />
        <RecentBlogs />
        <SuggestedBlogs />
      </ArabicWrapper>
    </div>
  );
}
