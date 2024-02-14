import React from "react";
import BlogHero from "./components/BlogHero/BlogHero";
import RecentBlogs from "./components/RecentBlogs/RecentBlogs";
import SuggestedBlogs from "./components/SuggestedBlogs/SuggestedBlogs";

export default function page() {
  return (
    <div className="ml-16">
      <BlogHero />
      <RecentBlogs />
      <SuggestedBlogs />
    </div>
  );
}
