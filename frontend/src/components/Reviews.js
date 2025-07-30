import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Star, CheckCircle, Quote } from "lucide-react";
import { mockReviews } from "../data/mock";

const Reviews = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-yellow-500 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their skincare routine with PureFom
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">15,000+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">4.9/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-gray-400">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockReviews.map((review) => (
            <Card key={review.id} className="bg-gray-900 border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-8 h-8 text-yellow-500" />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar className="w-12 h-12 bg-green-500">
                    <AvatarFallback className="bg-green-500 text-black font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-white">{review.name}</h4>
                      {review.verified && (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      )}
                    </div>
                    <div className="flex items-center mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 w-fit">
                  {review.product}
                </Badge>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-300 leading-relaxed mb-4 italic">
                  "{review.comment}"
                </p>
                
                <div className="text-xs text-gray-500">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </CardContent>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Review Summary */}
        <div className="bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-2xl p-8 border border-green-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Join Our Community of Glowing Skin
              </h3>
              <p className="text-gray-300 mb-6">
                Experience the PureFom difference and discover why our customers keep coming back. 
                Your skin deserves the best nature and science have to offer.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Avatar key={i} className="w-8 h-8 border-2 border-black bg-green-500">
                      <AvatarFallback className="bg-green-500 text-black text-xs">
                        {String.fromCharCode(65 + i)}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">+15,000 more</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="inline-flex items-center space-x-2 bg-black/50 px-6 py-3 rounded-full border border-green-500/30">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                <span className="text-xl font-bold text-white">4.9 out of 5</span>
              </div>
              <p className="text-gray-400 mt-2">Based on 2,500+ verified reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;