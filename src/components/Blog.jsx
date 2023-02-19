import React from "react";

import {BlogData} from "../constants";
import HorizontalBlogCard from "../components/HorizontalBlogCard";

const Blog = () => {
  return (
    <>
      <div>
        <p>Latest Blogs</p>
        <div>Underline</div>

        {/* mappingOverBlogDataContents */}
        <div>
          {BlogData.map((blog) => (
            <HorizontalBlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
