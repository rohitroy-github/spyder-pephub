import React from "react";

import joinbg from "../../assets/code_pattern 1.svg";

import "./Join.css";

const Join = () => {
  return (
    <>
      <section className="join-section flex jutify-around">
        <div className="pl-16 w-1/2 ">
          <div className="join-text pt-14">
            <h1 className="text-5xl font-semibold leading-[3rem]">
              Share your knowledge.
              <br />
              Write for PepHub
            </h1>

            <h2 className="text-2xl pt-8">
              Write blogs for us, share your knowledge & experience. <br /> Help
              thousands like you prepare better for their goals.
            </h2>

            <button className="startWritingNowBtn mt-8">
              Start writing now!
            </button>
          </div>
        </div>
        <div className="pt-10 w-1/2">
          <h1 className="text-2xl font-medium ">Topics you can write on</h1>

          <div className="joinTopicBlogs">
            Cognizant Digital Nurture Technical Interview Experience
          </div>
          <div className="joinTopicBlogs">
            Cognizant Digital Nurture HR Interview Experience
          </div>
          <div className="joinTopicBlogs">
            TCS Digital Technical Interview Experience
          </div>
          <div className="joinTopicBlogs">
            TCS Ninja Technical Interview Experience
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
