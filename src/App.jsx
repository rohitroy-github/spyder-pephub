import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import BlogPage from "./pages/BlogPage"; 

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Join from "./components/Join";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Blog/>
      <Join />
      <Footer />
      
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router> */}



    </>
  );
};

export default App;
