import type { Product } from "../types";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const getDiscountedPrice = (product: Product) => {
  if (product.discountPercentage > 0) {
    return product.price * (1 - product.discountPercentage / 100);
  }
  return product.price;
};

export const getStockStatus = (product: Product) => {
  if (product.stock === 0) {
    return {
      text: "Out of stock",
      color: "bg-red-100 text-red-800",
    };
  }
  if (product.stock <= 10) {
    return {
      text: "Running out",
      color: "bg-yellow-100 text-yellow-800",
    };
  }
  return {
    text: "In stock",
    color: "bg-green-100 text-green-800",
  };
};
