import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;