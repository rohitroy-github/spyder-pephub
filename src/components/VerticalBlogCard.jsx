import React from "react";

const VerticalBlogCard = ({heading, paragraph1, paragraph2, tags}) => {
  return (
    <div>
      {/* image */}
      <div>
        <img></img>
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
