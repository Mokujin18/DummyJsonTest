import { useProductStore } from "../../stores/productStore";

interface ProductsHeaderProps {
  activeFiltersCount: number;
}

export const ProductsHeader = ({ activeFiltersCount }: ProductsHeaderProps) => {
  const { total } = useProductStore();

  return (
    <div className="mb-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Products catalog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find exactly what you need among {total > 0 && `${total} `}
          products
        </p>
      </div>

      {(total > 0 || activeFiltersCount > 0) && (
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            {total > 0 && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {total} products found
              </span>
            )}
            {activeFiltersCount > 0 && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                {activeFiltersCount} active filters
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
