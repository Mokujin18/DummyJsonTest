import type { ProductSpecsProps } from "./types";

const ProductSpecsItem = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-gray-900">{value}</p>
    </div>
  );
};

export const ProductSpecs = ({
  category,
  rating,
  stock,
  sku,
}: ProductSpecsProps) => {
  const items = [
    { title: "Category", value: category },
    { title: "Rating", value: rating.toString() },
    { title: "Stock", value: stock.toString() },
    { title: "SKU", value: sku },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <ProductSpecsItem key={item.title} {...item} />
      ))}
    </div>
  );
};
