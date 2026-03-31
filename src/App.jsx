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
     <img src="./assets/products/shopping-cart.png"></img>
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
        <img src="./assets/Play.png"></img>
        Watch Demo
      </button>
    </div>
  </div>


  <div className="flex-1 w-full max-w-2xl">
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">

      <img
        src="./assets/banner.png"
        alt="Digital Workflow Preview"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
    </div>
  </div>
</header>
<section className="bg-purple-600 text-white py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center divide-y md:divide-y-0 md:divide-x divide-purple-400">
          <div className="flex-1 py-4 md:py-0">
            <h2 className="text-5xl font-bold mb-2">50K+</h2>
            <p className="text-purple-200">Active Users</p>
          </div>
          <div className="flex-1 py-4 md:py-0">
            <h2 className="text-5xl font-bold mb-2">200+</h2>
            <p className="text-purple-200">Premium Tools</p>
          </div>
          <div className="flex-1 py-4 md:py-0">
            <h2 className="text-5xl font-bold mb-2">4.9</h2>
            <p className="text-purple-200">Rating</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-12 bg-[#F9FAFB] min-h-screen">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-8 text-[#111827]">Premium Digital Tools</h2>

    <div className="inline-flex p-1 bg-white border border-gray-200 rounded-full shadow-sm">
      <button
        className={`px-8 py-2.5 rounded-full font-bold transition-all ${activeTab === 'products' ? 'bg-[#8B2CFF] text-white' : 'text-gray-500'}`}
        onClick={() => setActiveTab('products')}
      >
        Products
      </button>
      <button
        className={`px-8 py-2.5 rounded-full font-bold transition-all ${activeTab === 'cart' ? 'bg-[#8B2CFF] text-white' : 'text-gray-500'}`}
        onClick={() => setActiveTab('cart')}
      >
        Cart ({cartItems.length})
      </button>
    </div>
  </div>


  {activeTab === "products" && (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {productsData.map((p) => (
        <div key={p.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col relative">
          <div className="flex justify-between items-start mb-6">
            <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center p-2 bg-white">
              <img src={p.image} alt={`${p.name} icon`} className="max-w-full max-h-full object-contain" />
            </div>

            <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${p.tagType === 'warning' ? 'bg-[#FFF8E7] text-[#D29D12]' : 'bg-gray-100 text-gray-700'}`}>
              {p.tag}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-3 text-[#1F2937]">{p.name}</h3>
          <p className="text-gray-500 text-sm mb-6 flex-1">{p.description}</p>

          <div className="text-3xl font-extrabold mb-8 text-[#1F2937]">
            ${p.price}<span className="text-sm font-medium text-gray-400">/{p.period}</span>
          </div>

          <ul className="space-y-3.5 mb-10">
            {p.features && p.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 text-green-500 mr-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleAddToCart(p)}
            disabled={isItemInCart(p.id)}
            className={`w-full py-4 rounded-full font-bold transition-all ${isItemInCart(p.id) ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#8B2CFF] text-white hover:bg-[#7022D1]'}`}
          >
            {isItemInCart(p.id) ? "Added to cart" : "Buy Now"}
          </button>
        </div>
      ))}
    </div>
  )}

  {activeTab === "cart" && (
    <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl">
      <h3 className="text-2xl font-bold mb-8 text-gray-900">Your Cart</h3>
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="flex justify-center mb-6">
            <img
              src="assets/products/cart.png"
              alt="Empty Cart"
              className="w-24 h-24 object-contain"
            />
          </div>
          <p className="text-gray-400 text-lg">Your cart is empty.</p>
          <button
            onClick={() => setActiveTab('products')}
            className="mt-4 text-[#8B2CFF] font-bold hover:underline"
          >
            Go shop for tools
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-5">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-400 font-medium">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-[#FF4D88] hover:text-red-700 font-bold text-sm transition-colors"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="pt-8 border-t border-gray-100 flex justify-between items-center mt-8">
            <span className="text-xl font-bold text-gray-400">Total</span>
            <span className="text-5xl font-black text-gray-900">${totalCost}</span>
          </div>

          <button
            onClick={() => setCartItems([])}
            className="w-full bg-[#8B2CFF] text-white py-5 rounded-2xl font-bold text-xl mt-6 hover:bg-[#7022D1] transition-all shadow-xl shadow-purple-100"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  )}
</section>
  </div>
  );
 }


export default App;
