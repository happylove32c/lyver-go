import React from "react";
import { Bell, User, Heart, ShoppingCart, MessageCircle, Search } from "lucide-react";

const user = {
  name: "John Doe",
  profileImage: "https://i.pinimg.com/736x/3d/7a/6f/3d7a6f98293c05a8884e7838825d1e24.jpg"
};

const items = [
  { id: 1, name: "Nike Air Max", price: "$120", image: "https://i.pinimg.com/736x/3d/7a/6f/3d7a6f98293c05a8884e7838825d1e24.jpg", seller: "John Doe" },
  { id: 2, name: "Apple Watch", price: "$250", image: "https://i.pinimg.com/736x/05/ff/c2/05ffc20e533d02706da63d345337135f.jpg", seller: "Jane Smith" },
  { id: 3, name: "MacBook Pro", price: "$1500", image: "https://i.pinimg.com/736x/27/f5/71/27f571e84a6e98ce8d7e7da9dc014138.jpg", seller: "Mark Lee" },
  { id: 4, name: "Cool Chanel Glasses", price: "$120", image: "https://i.pinimg.com/736x/71/05/1c/71051cbad8251d8db69a43117b8cff1d.jpg", seller: "John Doe" },
  { id: 5, name: "Rugged Dyson Fan", price: "$250", image: "https://i.pinimg.com/736x/4e/0a/63/4e0a63437d6aafe46bdc9f964fa37edd.jpg", seller: "Jane Smith" },
  { id: 6, name: "Hand Fans", price: "$1500", image: "https://i.pinimg.com/736x/c7/fc/70/c7fc70d21b9c04494bdedf485a76338c.jpg", seller: "Mark Lee" }
];

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center bg-white shadow-md px-6 py-4 mb-6">
      {/* User Profile */}
      <div className="flex items-center gap-3">
        <img src={user.profileImage} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
        <span className="text-lg font-medium text-gray-700">{user.name}</span>
      </div>

      {/* Notifications */}
      <div className="flex gap-3">
          <button className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200">
        <Bell size={20} className="text-gray-600" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
      </button>

      <button className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200">
        <Search size={20} className="text-gray-600" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
      </button>
      </div>
    </nav>
  );
};

const Shop = () => {
  return (
    <div className="p-6">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-black">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative hover:scale-105 transition-all duration-100 rounded-lg shadow-md overflow-hidden bg-cover bg-center h-64"
            style={{ backgroundImage: `url(${item.image})` }} loading="lazy"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Seller Profile */}
            <div className="absolute top-4 left-4 flex items-center gap-2 text-white z-10">
              <div className="p-2 bg-white bg-opacity-20 rounded-full shadow">
                <User size={20} />
              </div>
              <button 
                // onClick={}
                className="text-white text-sm font-medium hover:underline"
              >
                {item.seller}
              </button>
            </div>

            {/* Text Content */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-lg">{item.price}</p>
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
              <button className="p-3 bg-white bg-opacity-20 rounded-full shadow hover:bg-opacity-40">
                <Heart size={20} className="text-red-500" />
              </button>
              <button className="p-3 bg-white bg-opacity-20 rounded-full shadow hover:bg-opacity-40">
                <ShoppingCart size={20} className="text-blue-500" />
              </button>
              <button className="p-3 bg-white bg-opacity-20 rounded-full shadow hover:bg-opacity-40">
                <MessageCircle size={20} className="text-green-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
