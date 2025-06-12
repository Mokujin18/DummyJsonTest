import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useProductStore } from "../../stores/productStore";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Search products...",
  className = "",
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { searchProducts, clearFilters, filters, isLoading } =
    useProductStore();

  useEffect(() => {
    if (debouncedSearchTerm !== filters.search) {
      if (debouncedSearchTerm.trim()) {
        searchProducts(debouncedSearchTerm);
      } else if (filters.search) {
        clearFilters();
      }
    }
  }, [debouncedSearchTerm, searchProducts, clearFilters, filters.search]);

  useEffect(() => {
    if (filters.search !== searchTerm) {
      setSearchTerm(filters.search || "");
    }
  }, [filters.search]);

  const handleClear = () => {
    setSearchTerm("");
    clearFilters();
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch
            className={`h-5 w-5 transition-colors duration-200 ${
              isLoading ? "text-blue-500 animate-pulse" : "text-gray-400"
            }`}
          />
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full pl-10 pr-12 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            hover:border-gray-400 transition-all duration-200
            placeholder:text-gray-500
            ${isLoading ? "bg-blue-50" : ""}
          `}
        />

        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 px-3 flex items-center hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
            title="Clear search"
          >
            <FaXmark className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {isLoading && (
        <div className="absolute top-full left-0 right-0 mt-1">
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm text-blue-700">Пошук...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
