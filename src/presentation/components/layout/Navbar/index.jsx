import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Gamepad2, Menu, X, Globe, User, LogOut, Settings, Package } from "lucide-react"
// import { useCartStore } from "../../hooks/useCartStore";
import { cn } from "../../../../utils/tailwind"; 

const navigateUrls = [
  { name: "Inicio", url: "/" },
  { name: "Tienda", url: "/shop" },
  { name: "Nosotros", url: "/about" }
];

export function Navbar() {
  const location = useLocation();
  // const cartItems = useCartStore((state) => state.items);
  // const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const itemCount = 10;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/75 backdrop-blur-lg dark:bg-gray-950/75">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Gamepad2 className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">PC Gamer Store</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          {navigateUrls.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={cn(
                "transition-colors hover:text-blue-600 px-3 py-2 rounded-lg",
                location.pathname === item.url
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-white font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions (Theme, Cart, Auth) */}
        <div className="flex items-center space-x-3">

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link
            to="/profile"
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            title="My Account"
          >
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
