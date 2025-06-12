import type { ProductGalleryProps } from "./types";

export const ProductGallery = ({
  images,
  thumbnail,
  title,
}: ProductGalleryProps) => {
  return (
    <div className="space-y-4">
      <div className="aspect-w-1 aspect-h-1 w-full">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - ${index + 1}`}
            className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75"
          />
        ))}
      </div>
    </div>
  );
};
