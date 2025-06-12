export interface ProductGalleryProps {
  images: string[];
  thumbnail: string;
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
