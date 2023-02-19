import React from "react";

import {BlogData} from "../constants";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <div>
        <p>Latest Blogs</p>
        <div>Underline</div>
      </div>
      <div>
        {BlogData.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </>
  );
};

export default Blog;
