import React from "react";
import BlogIdHero from "./components/blogIdHero/BlogIdHero";
import BlogIdDetails from "./components/blogIdDetails/BlogIdDetails";
import BlogCommentsSection from "./components/BlogCommentsSection/BlogCommentsSection";

export default function page() {
  return (
    <div className="ml-10">
      <BlogIdHero />
      <BlogIdDetails />
      <BlogCommentsSection />
    </div>
  );
}
