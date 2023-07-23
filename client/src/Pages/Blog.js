import React from "react";
import { BlogCard } from "./BlogCard";

export const Blog = ({ blogs }) => {
  const blog = blogs.map((blogItem) => {
    return <BlogCard key={blogItem._id} blogItem={blogItem} />;
  });
  return (
    <div className="blogs">
      Blog
      {blog}
    </div>
  );
};
