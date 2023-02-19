import React from "react";

import joinbg from "../../assets/code_pattern 1.svg";

const Join = () => {
  return (
    <>
      <section className="join-section flex jutify-around">
        <div className="pl-16 ">
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

            <button className="pt-8">Start writing now!</button>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-2xl font-medium ">Topics you can write on</h1>

          <div>Cognizant Digital Nurture Technical Interview Experience</div>
          <div>Cognizant Digital Nurture HR Interview Experience</div>
          <div>TCS Digital Technical Interview Experience</div>
          <div>TCS Ninja Technical Interview Experience</div>
        </div>
      </section>
    </>
  );
};

export default Join;
