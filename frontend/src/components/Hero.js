import React from "react";
import { Button } from "./ui/button";
import { Leaf, Droplets, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 opacity-20">
          <Leaf className="w-32 h-32 text-green-500 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Droplets className="w-24 h-24 text-green-400 animate-bounce" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-10">
          <Sparkles className="w-40 h-40 text-yellow-500 animate-spin" style={{ animationDuration: '10s' }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Leaf className="w-12 h-12 text-green-500" />
              <h1 className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-wide">
                PUREFOM
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-yellow-400 font-medium">
              Where Nature <span className="text-green-400">🍃</span> Meets Science <span className="text-yellow-500">⚗️</span>
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Clinically Clean,
            <br />
            <span className="text-green-400">Universally Yours</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect harmony between nature's finest ingredients and cutting-edge skincare science. 
            Transform your skin with our premium collection of clean, effective formulations.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">100% Natural</span>
            </div>
            <div className="flex items-center space-x-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Clinically Tested</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <Droplets className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Cruelty Free</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProducts}
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("reviews").scrollIntoView({ behavior: "smooth" })}
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-4 px-8 text-lg transition-all duration-300"
            >
              Read Reviews
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-green-500 rounded-full opacity-70"></div>
      </div>
    </section>
  );
};

export default Hero;