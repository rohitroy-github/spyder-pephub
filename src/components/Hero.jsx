import React from "react";

import "./hero.css";
import pephub from "../../assets/pephub-logo.svg";
import table from "../../assets/table.svg";

const Hero = () => {
  return (
    <>
      <div className="bg ">
        <div className="logo flex justify-center pt-10">
          <img src={pephub} alt="" className="" />
        </div>

        <div className="hero-text flex pt-2 justify-center text-center decoration-cyan-500">
          Your preparations for that SDE Role <br />
          Better & Easier than ever.
        </div>

        <div className="hero-table flex justify-center pt-6">
          <img src={table} alt="" className="h-80" />
        </div>
      </div>
    </>
  );
};

export default Hero;
