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
        <div>
          <p>Latest</p>
          <p>Top</p>
          <p>Your Interest</p>
        </div>

        <div>
          {BlogData.map((blog) => (
            <VerticalBlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>

      {/* separatingLine */}
      <div class="separator"></div>

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
