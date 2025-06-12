import type { Product } from "../../types";
import { Link } from "react-router-dom";
import {
  formatPrice,
  getDiscountedPrice,
  getStockStatus,
} from "../../utils/getCardDetails";
import { getRatingStars } from "../common/rating/rating";
import { twMerge } from "tailwind-merge";
import { Button } from "../UI/Button";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const discountedPrice = getDiscountedPrice(
    product.price,
    product.discountPercentage
  );
  const stockStatus = getStockStatus(product.stock);

  return (
    <div
      className={twMerge(
        "bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full",
        className
      )}
    >
      <Link to={`/products/${product.id}`} className="block relative pb-[60%]">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            -{Math.round(product.discountPercentage)}%
          </div>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <Link
          to={`/products/${product.id}`}
          className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          {product.title}
        </Link>

        <div className="mt-2 text-sm text-gray-600">{product.brand}</div>

        <div className="mt-2">{getRatingStars(product.rating)}</div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            {product.discountPercentage > 0 ? (
              <>
                <div className="text-2xl font-bold text-gray-900">
                  {formatPrice(discountedPrice)}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  {formatPrice(product.price)}
                </div>
              </>
            ) : (
              <div className="text-2xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </div>
            )}
          </div>

          <div
            className={twMerge(
              "px-3 py-1 rounded-full text-sm font-medium",
              stockStatus.className
            )}
          >
            {stockStatus.text}
          </div>
        </div>

        <Button
          variant="product"
          size="full"
          disabled={product.stock === 0}
          className="mt-auto "
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};
