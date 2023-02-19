import React from "react";

import {BlogData} from "../constants";
import VerticalBlogCard from "./VerticalBlogCard";

import "./BlogPage.css";

const BlogPage = () => {
  return (
    <div className="BlogPageMain">
      {/* latestSection */}
      <div className="latestSection">
        {/* heading */}
        <div className="flex">
          <p className="text-2xl font-medium px-4">Latest</p>
          <p className="text-2xl font-medium  px-4">Top</p>
          <p className="text-2xl font-medium px-4">Your Interest</p>
        </div>

        <div>
          {BlogData.map((blog) => (
            <VerticalBlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>

      {/* separatingLine */}
      <div class="latestTrendingSeparator"></div>

      {/* trendingSection */}
      <div className="trendingSection">
        <div className="trendingTags">#tag-1</div>
        <div className="trendingTags">#tag-1</div>
        <div className="trendingTags">#tag-1</div>
        <div className="trendingTags">#tag-1</div>
        <div className="trendingTags">#tag-1</div>
      </div>
    </div>
  );
};

export default BlogPage;
