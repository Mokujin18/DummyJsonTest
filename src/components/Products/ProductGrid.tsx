import { useProductStore } from "../../stores/productStore";
import { ProductCard } from "./ProductCard";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { ErrorState } from "./ErrorState";

interface ProductGridProps {
  className?: string;
}

export const ProductGrid = ({ className = "" }: ProductGridProps) => {
  const { products, isLoading, error } = useProductStore();

  if (error) {
    return <ErrorState error={error} />;
  }

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="h-full flex flex-col"
          />
        ))}
      </div>
    </div>
  );
};
