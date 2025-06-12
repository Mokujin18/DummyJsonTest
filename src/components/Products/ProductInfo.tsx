interface ProductInfoProps {
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
  description: string;
}

export const ProductInfo = ({
  title,
  brand,
  price,
  discountPercentage,
  description,
}: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-500">{brand}</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-3xl font-bold text-gray-900">
          ${(price * (1 - discountPercentage / 100)).toFixed(2)}
        </div>
        {discountPercentage > 0 && (
          <>
            <div className="text-xl text-gray-500 line-through">${price}</div>
            <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
              -{discountPercentage}%
            </div>
          </>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold">Description</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
