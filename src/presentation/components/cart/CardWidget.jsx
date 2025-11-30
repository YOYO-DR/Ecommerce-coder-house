
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "../ui/Dropdown";
const CartWidget = ({ open }) => {
  const items = [
    { id: 1, name: "Teclado Mecánico RGB", color: "Negro", img: "https://via.placeholder.com/60" },
    { id: 2, name: "Mouse Gaming Pro", color: "Negro/Rojo", img: "https://via.placeholder.com/60" },
    { id: 3, name: "Auriculares 7.1", color: "Negro", img: "https://via.placeholder.com/60" },
  ];

  return (
    <Dropdown open={open}>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 items-center border-b border-gray-200 dark:border-gray-700 pb-4 last:border-none last:pb-0">
            <img src={item.img} alt={item.name} className="w-14 h-14 rounded-lg object-cover bg-gray-100 dark:bg-gray-700" />
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-100">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.color}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 mt-4 font-medium transition-colors">
        Ir al Checkout
      </button>

      <button className="w-full text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm mt-2 transition-colors">
        Ver Carrito Completo
      </button>
    </Dropdown>
  );
}

export default CartWidget;