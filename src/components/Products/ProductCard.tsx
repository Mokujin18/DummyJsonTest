import type { Product } from "../../types";
import { Link } from "react-router-dom";
import {
  formatPrice,
  getDiscountedPrice,
  getStockStatus,
} from "../../utils/getCardDetails";
import { getRatingStars } from "../common/rating/rating";
import { Button } from "../UI/Form/Button";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const stockStatus = getStockStatus(product);
  const discountedPrice = getDiscountedPrice(product);
  const hasDiscount = product.discountPercentage > 0;

  return (
    <Link
      to={`/products/${product.id}`}
      className={`
        bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300
        border border-gray-100 overflow-hidden group hover:scale-[1.02]
        ${className}
      `}
    >
      <div className="relative">
        <div className="aspect-w-1 aspect-h-1 bg-gray-200">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            -{product.discountPercentage.toFixed(0)}%
          </div>
        )}

        <div
          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}
        >
          {stockStatus.text}
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded-full uppercase tracking-wide">
            {product.category}
          </span>
          {product.brand && (
            <span className="text-gray-500 font-medium">{product.brand}</span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-tight">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center">
          {getRatingStars(product.rating)}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(discountedPrice)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>

        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
            {product.tags.length > 3 && (
              <span className="text-xs text-gray-400">
                +{product.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        <Button
          disabled={product.stock === 0}
          className={`
            w-full mt-4 py-2 px-4 rounded-lg font-medium transition-all duration-200
            ${
              product.stock === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
            }
          `}
        >
          {product.stock === 0 ? "Out of stock" : "View"}
        </Button>
      </div>
    </Link>
  );
};
