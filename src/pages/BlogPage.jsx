import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "../components/Navbar";
import BlogPageContent from "../components/BlogPageContent";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <BlogPageContent />
    </>
  );
};

export default BlogPage;
