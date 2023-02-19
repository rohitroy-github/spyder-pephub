import React from "react";

import {BlogData} from "../constants";

const BlogPage = () => {
  return (
    <div>
      {/* latestSection */}
      <div>
        {/* heading */}
        <div>
          <p>Latest</p>
          <p>Top</p>
          <p>Your Interest</p>
        </div>

        <div>
          {BlogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>

      {/* separatingLine */}
      <div></div>

      {/* trendingSection */}
      <div></div>
    </div>
  );
};

export default BlogPage;
