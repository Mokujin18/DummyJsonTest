interface ProductSpecsProps {
  category: string;
  rating: number;
  stock: number;
  sku: string;
}

export const ProductSpecs = ({
  category,
  rating,
  stock,
  sku,
}: ProductSpecsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500">Category</h3>
        <p className="text-gray-900">{category}</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Rating</h3>
        <p className="text-gray-900">{rating}/5</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Availability</h3>
        <p className="text-gray-900">{stock} pcs.</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">SKU</h3>
        <p className="text-gray-900">{sku}</p>
      </div>
    </div>
  );
};
