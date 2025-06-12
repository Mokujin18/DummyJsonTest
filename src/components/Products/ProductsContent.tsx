import { ProductGrid } from "./ProductGrid";
import { Pagination } from "./Pagination";

export const ProductsContent = () => {
  return (
    <>
      <div className="mb-8">
        <ProductGrid />
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <Pagination />
      </div>
    </>
  );
};
