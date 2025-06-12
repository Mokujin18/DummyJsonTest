export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const getDiscountedPrice = (price: number, discount: number): number => {
  return price * (1 - discount / 100);
};

export const getStockStatus = (stock: number) => {
  if (stock === 0) {
    return {
      text: "Out of Stock",
      className: "bg-red-100 text-red-800",
    };
  }
  if (stock < 10) {
    return {
      text: "Low Stock",
      className: "bg-yellow-100 text-yellow-800",
    };
  }
  return {
    text: "In Stock",
    className: "bg-green-100 text-green-800",
  };
};
