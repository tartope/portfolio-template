import React from "react";
import { BlogCard } from "./BlogCard";

export const Blog = ({ blogs }) => {
  const blog = blogs.map((blogItem) => {
    return <BlogCard key={blogItem._id} blogItem={blogItem} />;
  });

  return (
    <div className="blog">
      <div className="overflow-auto w-100 h-50">{blog}</div>
    </div>
  );
};
