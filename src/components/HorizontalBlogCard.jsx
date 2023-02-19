import React from "react";

import blogcard from "../../assets/blog-card-img.png"


const BlogCard = ({heading, paragraph1, paragraph2, tags}) => {
  return (
    <>


    <div>
    <div>
        <img src={blogcard} alt="" className="rounded" />
      </div>

      <div>
        <p className="">{heading}</p>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{tags}</p>
      </div>
    </div>
      
    </>
  );
};

export default BlogCard;
