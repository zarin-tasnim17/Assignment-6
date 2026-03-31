import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productsData from "./data.json";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    if (!cartItems.some((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error("Item removed from cart!");
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setCartItems([]);
      toast.info("Proceeding to checkout. Cart cleared!");
    } else {
      toast.warning("Your cart is empty!");
    }
  };

  const isItemInCart = (id) => cartItems.some((item) => item.id === id);
  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <ToastContainer position="top-right" autoClose={2000} />
??navbar



<nav className="flex items-center justify-between bg-white border-b border-gray-100 px-4 md:px-12 py-3 sticky top-0 z-50">


  <div className="flex-1">
    <a href="#" className="text-3xl font-bold text-[#8B2CFF] tracking-tight">DigiTools</a>
  </div>


  <div className="hidden md:flex gap-10 text-sm font-semibold text-gray-700">
    <a href="#" className="hover:text-[#8B2CFF] transition-colors">Products</a>
    <a href="#" className="hover:text-[#8B2CFF] transition-colors">Features</a>
    <a href="#" className="hover:text-[#8B2CFF] transition-colors">Pricing</a>
    <a href="#" className="hover:text-[#8B2CFF] transition-colors">Testimonials</a>
    <a href="#" className="hover:text-[#8B2CFF] transition-colors">FAQ</a>
  </div>


  <div className="flex-1 flex justify-end items-center gap-6">

    <div className="relative cursor-pointer p-1 text-gray-700" onClick={() => setActiveTab("cart")}>

      <span className="absolute -top-1 -right-1 bg-[#8B2CFF] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
        {cartItems.length}
      </span>
     <img src="assets/products/shopping-cart.png"></img>
    </div>


    <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">Login</button>

    <button className="bg-[#8B2CFF] hover:bg-[#7022D1] text-white rounded-full px-7 py-2 text-sm font-bold transition-all shadow-sm">
      Get Started
    </button>
  </div>
</nav>
<header className="px-4 md:px-24 py-20 flex flex-col md:flex-row items-center gap-16 min-h-[600px] bg-white">

  <div className="flex-1 space-y-8">


    <div className="inline-flex items-center gap-2 bg-[#EBE5FF] text-[#6D28D9] rounded-full px-4 py-1.5 shadow-sm">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B2CFF] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8B2CFF]"></span>
      </span>
      <span className="text-sm font-semibold">New: AI-Powered Tools Available</span>
    </div>


    <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-[#1E293B] leading-[1.1]">
      Supercharge Your <br />
      <span className="text-[#334155]">Digital Workflow</span>
    </h1>


    <p className="text-slate-500 text-xl max-w-lg leading-relaxed">
      Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
    </p>


    <div className="flex flex-wrap gap-4 pt-4">
      <button className="bg-[#8B2CFF] hover:bg-[#7A26E0] text-white rounded-full px-10 py-4 font-bold transition-all shadow-lg shadow-purple-200">
        Explore Products
      </button>
      <button className="flex items-center gap-2 border-2 border-[#E2E8F0] px-10 py-4 rounded-full font-bold text-[#6D28D9] hover:bg-slate-50 transition-all">
        <img src="assets/Play.png"></img>
        Watch Demo
      </button>
    </div>
  </div>


  <div className="flex-1 w-full max-w-2xl">
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">

      <img
        src="assets/banner.png"
        alt="Digital Workflow Preview"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
    </div>
  </div>
</header>
  </div>
  );
 }


export default App;
