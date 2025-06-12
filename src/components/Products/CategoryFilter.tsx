import { useEffect } from "react";
import { useProductStore } from "../../stores/productStore";
import type { CategoryFilterProps } from "./types";
import { FaXmark } from "react-icons/fa6";

export const CategoryFilter = ({ className = "" }: CategoryFilterProps) => {
  const {
    categories,
    filters,
    isLoadingCategories,
    fetchCategories,
    filterByCategory,
    clearFilters,
  } = useProductStore();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  const handleCategoryChange = (categorySlug: string) => {
    if (categorySlug === "all") {
      clearFilters();
    } else {
      filterByCategory(categorySlug);
    }
  };

  const currentCategory = filters.category || "all";

  if (isLoadingCategories) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-10 bg-gray-200 rounded-full px-4 py-2 w-20"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            border-2 hover:scale-105 active:scale-95
            ${
              currentCategory === "all"
                ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600"
            }
          `}
        >
          All categories
        </button>

        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => handleCategoryChange(category.slug)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              border-2 hover:scale-105 active:scale-95 capitalize
              ${
                currentCategory === category.slug
                  ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600"
              }
            `}
            title={`Filter by category: ${category.name}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {currentCategory !== "all" && (
        <div className="mt-3 flex items-center space-x-2">
          <span className="text-sm text-gray-600">Active filter:</span>
          <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            <span className="capitalize">
              {categories.find((cat) => cat.slug === currentCategory)?.name ||
                currentCategory}
            </span>
            <button
              onClick={() => handleCategoryChange("all")}
              className="ml-1 hover:text-blue-900 transition-colors duration-200"
              title="Delete filter"
            >
              <FaXmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
