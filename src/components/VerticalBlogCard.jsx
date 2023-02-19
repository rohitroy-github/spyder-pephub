import React from "react";

import blogImg from "../../assets/blog-1.png";

import "./VerticalBlogCard.css";

const VerticalBlogCard = ({heading, paragraph1, paragraph2, tags}) => {
  return (
    <div className="verticalBlogCardMain">
      {/* image */}
      <div>
        <img src={blogImg} className="h-25 w-48" />
      </div>

      {/* content */}
      <div>
        <p>{heading}</p>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{tags}</p>
      </div>
    </div>
  );
};

export default VerticalBlogCard;
