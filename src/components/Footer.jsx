import React from "react";

import link from "../../assets/linkedn.svg";
import insta from "../../assets/insta.svg";
import fb from "../../assets/facebook.svg";

const Footer = () => {
  return (
    <>
      <div className="footer flex">
        {/* topFooterPartDiv */}
        <div className="w-1/2">
          {/* div-1 */}
          <div className="m-20">
            <h1 className="text-5xl text-white font-semibold">SDE Prep</h1>
            {/* socialIconsDiv */}
            <div className="flex pt-8">
              <img src={link} alt="" className="pr-5" />
              <img src={insta} alt="" className="px-5" />
              <img src={fb} alt="" className="px-5" />
            </div>
            <p className="text-2xl text-white pt-10 font-semibold mt-8">
              join our newsletter for daily updates!
            </p>
            {/* subscribeSection */}
            <div className="mt-4">
              <input className="px-20 py-1"></input>
              <button></button>
            </div>
          </div>
        </div>
        {/*bottomFooterPart */}
        <div className="flex justify-center">
          {/* div-2 */}
          <div className="flex flex-col justify-center px-20">
            <p className="text-2xl py-2 text-white ">Blogs</p>
            <p className="text-2xl py-2 text-white ">Interview Preparation</p>
            <p className="text-2xl py-2 text-white ">Interview Experience</p>
            <p className="text-2xl py-2 text-white ">Write for Us</p>
            <p className="text-2xl py-2 text-white ">About Us</p>
          </div>

          {/* div-3 */}
          <div className="flex flex-col justify-center">
            <p className="text-2xl py-2 text-white ">Resource</p>
            <p className="text-2xl py-2 text-white ">Resource</p>
            <p className="text-2xl py-2 text-white ">Resource</p>
            <p className="text-2xl py-2 text-white ">Resource</p>
            <p className="text-2xl py-2 text-white ">Resource</p>
            <p className="text-2xl py-2 text-white ">Resource</p>
          </div>
          
        </div>

        <div className="div">
          <p>© The Clever World. All rights reserved.</p>
          </div>
      </div>
    </>
  );
};

export default Footer;
