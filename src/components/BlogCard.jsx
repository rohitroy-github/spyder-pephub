import React from "react";

const BlogCard = ({heading, paragraph1, paragraph2, tags}) => {
  return (
    <>
      <div>
        <img></img>
      </div>
      <div>
        <p>{heading}</p>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{tags}</p>
      </div>
    </>
  );
};

export default BlogCard;
