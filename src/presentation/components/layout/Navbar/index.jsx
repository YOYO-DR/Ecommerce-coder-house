import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Gamepad2, Menu, X, Globe, User, LogOut, Settings, Package } from "lucide-react"
// import { useCartStore } from "../../hooks/useCartStore";
import { cn } from "../../../../utils/tailwind";
import CartWidget from "../../cart/CardWidget";
import CategoryProductsWidget from "../../products/CategoryProductsWidget";

const navigateUrls = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/products" },
  { name: "Tienda", url: "/shop" },
  { name: "Nosotros", url: "/about" }
];

export function Navbar() {
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);
  const [showCategories, setshowCategories] = useState(false);
  const cartRef = useRef(null);
  const categoriesRef = useRef(null);
  // const cartItems = useCartStore((state) => state.items);
  // const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const itemCount = 10;

  // Cerrar al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(e) {
      // Cerrar carrito
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCart(false);
      }
      // Cerrar categorias
      if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
        setshowCategories(false);
      }
    }
    // Agregar listener
    document.addEventListener("mousedown", handleClickOutside);
    // Limpiar listener
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          {/* Carrito con dropdown */}
          <div className="relative" ref={cartRef}>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              title="Carrito"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Dropdown */}
            <CartWidget open={showCart} />
          </div>

          {/* Categoria de productos con dropdown */}
          <div className="relative" ref={categoriesRef}>
            <button
              onClick={() => setshowCategories(!showCategories)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              title="Categorías"
            >
              <Package className="h-6 w-6" />
            </button>

            {/* Dropdown */}
            <CategoryProductsWidget open={showCategories} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
