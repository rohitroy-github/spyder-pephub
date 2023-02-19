import React from "react";

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
      <Blog />
      <Join />
      <Footer />
    </>
  );
};

export default App;
