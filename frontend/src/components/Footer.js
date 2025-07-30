import React from "react";
import { Leaf, Mail, Phone, Instagram, Facebook, Twitter, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Oil Control Serum", href: "#products" },
        { name: "Hydrating Face Mist", href: "#products" },
        { name: "Vitamin C Cream", href: "#products" },
        { name: "Gentle Cleanser", href: "#products" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#hero" },
        { name: "Our Story", href: "#hero" },
        { name: "Careers", href: "#contact" },
        { name: "Press Kit", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "FAQ", href: "#contact" },
        { name: "Shipping Info", href: "#contact" },
        { name: "Returns", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Disclaimer", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-t border-green-500/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">
              Join the PureFom Community
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get exclusive access to new products, skincare tips, and special offers. 
              Plus, receive a 15% discount on your first order!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-green-500/40 rounded-md text-white focus:outline-none focus:border-green-500 transition-colors"
              />
              <Button className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3">
                Subscribe
              </Button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              No spam, unsubscribe at any time. Your email is safe with us.
            </p>
          </div>
        </div>
      </div>

      <Separator className="bg-green-500/20" />

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="w-8 h-8 text-green-500" />
                <span className="text-3xl font-bold text-yellow-500">PUREFOM</span>
              </div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Where Nature Meets Science. We're dedicated to creating premium skincare products 
                that combine the best of natural ingredients with cutting-edge scientific research.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4 text-green-500" />
                  <span className="text-sm">hello@purefom.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4 text-green-500" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-green-500/20" />

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">
                © 2024 PureFom. All rights reserved.
              </span>
              <span className="text-gray-600">|</span>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                <span>for your skin</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-green-400 p-2"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-8 border-t border-green-500/10">
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <Leaf className="w-4 h-4 text-green-500" />
              <span>100% Cruelty Free</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              <span>Dermatologist Tested</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
              <span>FDA Approved Facility</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <span className="w-4 h-4 bg-white rounded-full"></span>
              <span>Sustainably Sourced</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;