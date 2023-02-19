import React from "react";

import {BlogData} from "../constants";
import HorizontalBlogCard from "../components/HorizontalBlogCard";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <p>Latest Blogs</p>
        <div>Underline</div>

        {/* mappingOverBlogDataContents */}
        <div>
          <Slider {...settings}>
            {BlogData.map((blog) => (
              <HorizontalBlogCard key={blog.id} {...blog} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Blog;
