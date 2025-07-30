import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Plus, Minus, Star, Leaf } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "../hooks/use-toast";
import { mockProducts } from "../data/mock";

const Products = () => {
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const { toast } = useToast();

  const updateQuantity = (productId, change) => {
    setQuantities(prev => {
      const currentQty = prev[productId] || 1;
      const newQty = Math.max(1, Math.min(10, currentQty + change));
      return { ...prev, [productId]: newQty };
    });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
    toast({
      title: "Added to Cart",
      description: `${quantity}x ${product.name} added to your cart`,
      duration: 3000,
    });
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-yellow-500 mb-4">
            Our Premium Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our scientifically formulated skincare products, crafted with the finest natural ingredients
          </p>
          <div className="flex items-center justify-center mt-6">
            <Leaf className="w-6 h-6 text-green-500 mr-2" />
            <span className="text-green-400 font-medium">Sustainably Sourced • Dermatologist Approved</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockProducts.map((product) => (
            <Card key={product.id} className="bg-gray-900 border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-black font-bold">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-yellow-500 text-xl mb-2 group-hover:text-green-400 transition-colors">
                  {product.name}
                </CardTitle>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Benefits */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.benefits.slice(0, 2).map((benefit, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-green-500/20 text-green-400 border-green-500/30">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="ml-2 text-gray-400 text-sm">(4.9)</span>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-white mb-4">
                  ${product.price}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">Quantity:</span>
                  <div className="flex items-center space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-8 h-8 p-0 border-green-500/40 text-green-400 hover:bg-green-500 hover:text-black"
                      onClick={() => updateQuantity(product.id, -1)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-white font-bold w-8 text-center">
                      {quantities[product.id] || 1}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-8 h-8 p-0 border-green-500/40 text-green-400 hover:bg-green-500 hover:text-black"
                      onClick={() => updateQuantity(product.id, 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold transition-all duration-300 transform hover:scale-105"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Can't decide? Start with our bestselling Oil Control Serum
          </p>
          <Button
            onClick={() => {
              const oilSerum = mockProducts.find(p => p.name === "Oil Control Serum");
              if (oilSerum) handleAddToCart(oilSerum);
            }}
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-medium px-8 py-3"
          >
            Try Our Bestseller
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;