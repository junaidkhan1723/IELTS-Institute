import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TestFormatCards from "../components/TestFormatCards";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TestFormatCards />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
