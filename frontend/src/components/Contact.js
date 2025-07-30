import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Clock, Send, Leaf } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      duration: 5000,
    });
    
    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@purefom.com",
      description: "Get in touch with our skincare experts"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Our Lab",
      detail: "123 Science Boulevard, Innovation District",
      description: "San Francisco, CA 94107"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Monday - Friday: 9AM - 6PM EST",
      description: "Weekend: 10AM - 4PM EST"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-yellow-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our products or need skincare advice? Our team of experts is here to help.
          </p>
          <div className="flex items-center justify-center mt-6">
            <Leaf className="w-6 h-6 text-green-500 mr-2" />
            <span className="text-green-400 font-medium">Expert Consultation • Free Skincare Analysis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-500 flex items-center">
                <Send className="w-6 h-6 mr-2 text-green-500" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-black border-green-500/40 text-white focus:border-green-500 transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-black border-green-500/40 text-white focus:border-green-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-gray-300 font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="bg-black border-green-500/40 text-white focus:border-green-500 transition-colors"
                    placeholder="What can we help you with?"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-black border-green-500/40 text-white focus:border-green-500 transition-colors min-h-[120px]"
                    placeholder="Tell us about your skin concerns or questions..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 border-green-500/20 p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Why Choose PureFom?
                </h3>
                <p className="text-gray-300 mb-6">
                  We're not just another skincare brand. We're scientists, researchers, and skincare enthusiasts 
                  committed to creating products that actually work.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">5+</div>
                    <div className="text-gray-400 text-sm">Years Research</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-500 mb-1">100%</div>
                    <div className="text-gray-400 text-sm">Natural Ingredients</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gray-900 border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500/20 p-3 rounded-full">
                        <info.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-green-400 font-medium mb-1">{info.detail}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-900 border-green-500/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-yellow-500 mb-2">
                  How long does shipping take?
                </h4>
                <p className="text-gray-300 text-sm">
                  We offer free standard shipping (3-5 business days) and express shipping (1-2 business days) options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-green-500/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-yellow-500 mb-2">
                  Do you offer a money-back guarantee?
                </h4>
                <p className="text-gray-300 text-sm">
                  Yes! We offer a 60-day money-back guarantee if you're not completely satisfied with your purchase.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-green-500/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-yellow-500 mb-2">
                  Are your products cruelty-free?
                </h4>
                <p className="text-gray-300 text-sm">
                  Absolutely! All PureFom products are cruelty-free and we never test on animals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-green-500/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-yellow-500 mb-2">
                  Can I get personalized skincare advice?
                </h4>
                <p className="text-gray-300 text-sm">
                  Yes! Our skincare experts offer free consultations to help you choose the right products for your skin type.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;