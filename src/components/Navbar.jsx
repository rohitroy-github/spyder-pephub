import React from "react";
import navlogo from "../../assets/codeLogo.png";
import dark from "../../assets/darkmode.svg";
import search from "../../assets/search.svg";
import lang from "../../assets/lang.svg"

import './style.css';

const Navbar = () => {
  return (
    <>
       
       <div className="navbar flex justify-between py-4">
        
        <div className="navlogo px-14 ">
          <img src={navlogo} alt="" className="h-8 w-12" />
        </div>

        <div className="nav-links flex ">
          
          <a href="" className="">
            <img src={dark} alt="" className="px-4" />
          </a>

          <a href="" className="">
            <img src={search} alt="" className="px-4" />
          </a>

          <a href="" className="">
            <img src={lang} alt="" className="px-4" />
          </a>

          <a href="" className=" Navbtn mr-8">
             Start Preparing Now!
          </a>


        </div>


       </div>

       <div className="sub-nav flex justify-around py-2">
         
         <a href="/blog" className="">
         Blogs
         </a>

         <a href="" className="">
         Interview Prep.
         </a>

         <a href="" className="">
         Interview Experience
         </a>

         <a href="" className="">
         Write for Us
         </a> 

         <a href="" className="">
         About Us
         </a>

         <a href="" className="">
         Opinion Pool
         </a>

         


       </div>
      
        


    </>
  );
};

export default Navbar;
