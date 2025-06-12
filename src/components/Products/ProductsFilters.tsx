import { FaList, FaSearch } from "react-icons/fa";
import { CategoryFilter } from "./CategoryFilter";
import { SearchBar } from "./SearchBar";

export const ProductsFilters = () => {
  return (
    <div className="mb-8 space-y-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <FaSearch className="w-4 h-4 text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Search products
          </h2>
        </div>
        <SearchBar className="w-full" />
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <FaList className="w-4 h-4 text-green-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
        </div>
        <CategoryFilter />
      </div>
    </div>
  );
};
