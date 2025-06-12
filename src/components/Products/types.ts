import type { Product } from "../../types";

export interface ProductGalleryProps {
  images: string[];
  title: string;
}

export interface CategoryFilterProps {
  className?: string;
}

export interface ErrorMessageProps {
  error: string;
  onClose: () => void;
}

export interface PaginationProps {
  className?: string;
}

export interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export interface ProductSpecsProps {
  category: string;
  rating: number;
  stock: number;
  sku: string;
}

export interface ProductAdditionalInfoProps {
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
}

export interface ProductCardProps {
  product: Product;
  className?: string;
}
