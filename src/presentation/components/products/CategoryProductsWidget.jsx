import Dropdown from "../ui/Dropdown";

const CategoryProductsWidget = ({ open }) => {
  const categories = [
    { id: 1, name: "Teclados", img: "https://via.placeholder.com/60" },
    { id: 2, name: "Mouses", img: "https://via.placeholder.com/60" },
    { id: 3, name: "Auriculares", img: "https://via.placeholder.com/60" },
  ];

  return (
    <Dropdown open={open}>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="flex gap-4 items-center border-b border-gray-200 dark:border-gray-700 pb-4 last:border-none last:pb-0">
            <img src={category.img} alt={category.name} className="w-14 h-14 rounded-lg object-cover bg-gray-100 dark:bg-gray-700" />
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-100">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 mt-4 font-medium transition-colors">
        Ver Todas las Categorías
      </button>
    </Dropdown>
  );
}

export default CategoryProductsWidget;