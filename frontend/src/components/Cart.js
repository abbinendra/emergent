import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Plus, Minus, X, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "../hooks/use-toast";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { toast } = useToast();
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return;
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id, itemName) => {
    removeFromCart(id);
    toast({
      title: "Item Removed",
      description: `${itemName} removed from cart`,
      duration: 3000,
    });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (cart.items.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Please add some products to your cart first",
        duration: 3000,
      });
      return;
    }

    // Mock order submission
    toast({
      title: "Order Submitted!",
      description: "Thank you for your order. We'll contact you soon!",
      duration: 5000,
    });
    
    // Clear form and cart
    setOrderForm({ name: "", email: "", message: "" });
    clearCart();
  };

  const handleInputChange = (field, value) => {
    setOrderForm(prev => ({ ...prev, [field]: value }));
  };

  if (cart.items.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-6">
        <ShoppingBag className="w-16 h-16 text-gray-600 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Your cart is empty</h3>
        <p className="text-gray-400 mb-4">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-yellow-500">Your Cart</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearCart}
          className="text-gray-400 hover:text-red-400"
        >
          Clear All
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-6">
        {cart.items.map((item) => (
          <Card key={item.id} className="bg-gray-900 border-green-500/20">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">{item.name}</h4>
                  <p className="text-sm text-gray-400 mb-2">${item.price}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-7 h-7 p-0 border-green-500/40 text-green-400"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="text-white font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-7 h-7 p-0 border-green-500/40 text-green-400"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="bg-green-500/20 mb-4" />

      {/* Total */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-lg font-bold">
          <span className="text-white">Total:</span>
          <span className="text-green-400">${getTotalPrice().toFixed(2)}</span>
        </div>
      </div>

      {/* Order Form */}
      <Card className="bg-gray-900 border-green-500/20 mb-4">
        <CardHeader>
          <CardTitle className="text-yellow-500 text-lg">Complete Your Order</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOrderSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">Full Name</Label>
              <Input
                id="name"
                value={orderForm.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-black border-green-500/40 text-white"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                type="email"
                value={orderForm.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-black border-green-500/40 text-white"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="text-gray-300">Special Instructions (Optional)</Label>
              <Textarea
                id="message"
                value={orderForm.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-black border-green-500/40 text-white"
                rows={3}
                placeholder="Any special requests or notes..."
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3"
            >
              Place Order - ${getTotalPrice().toFixed(2)}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;