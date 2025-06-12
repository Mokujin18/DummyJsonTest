import { useEffect } from "react";
import { useProductStore } from "../../stores/productStore";
import type { CategoryFilterProps } from "./types";
import { FaXmark } from "react-icons/fa6";
import { Button } from "../UI/Button";

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
        <Button
          variant="filter"
          size="sm"
          onClick={() => handleCategoryChange("all")}
          active={currentCategory === "all"}
          className="rounded-full"
        >
          All categories
        </Button>

        {categories.map((category) => (
          <Button
            key={category.slug}
            variant="filter"
            size="sm"
            onClick={() => handleCategoryChange(category.slug)}
            active={currentCategory === category.slug}
            className="rounded-full capitalize"
            title={`Filter by category: ${category.name}`}
          >
            {category.name}
          </Button>
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
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleCategoryChange("all")}
              className="ml-1 p-0.5 bg-transparent hover:bg-blue-50"
              title="Delete filter"
              icon={<FaXmark className="w-4 h-4" />}
            />
          </div>
        </div>
      )}
    </div>
  );
};
