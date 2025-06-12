import { AuthGuard } from "../components/Auth/AuthGuard";
import { Header } from "../components/Layout/Header";

import { useProductStore } from "../stores/productStore";
import { useProductsInitialization } from "../hooks/useProductsInitialization";
import { ProductsHeader } from "../components/Products/ProductsHeader";
import { ProductsFilters } from "../components/Products/ProductsFilters";
import { ErrorMessage } from "../components/Products/ErrorMessage";
import { ProductsContent } from "../components/Products/ProductsContent";

export const ProductsPage = () => {
  const { filters, clearError, error } = useProductStore();

  useProductsInitialization();

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.search) count++;
    if (filters.category) count++;
    if (filters.sortBy) count++;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />

        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <ProductsHeader activeFiltersCount={activeFiltersCount} />
          <ProductsFilters />
          {error && <ErrorMessage error={error} onClose={clearError} />}
          <ProductsContent />
        </main>
      </div>
    </AuthGuard>
  );
};
