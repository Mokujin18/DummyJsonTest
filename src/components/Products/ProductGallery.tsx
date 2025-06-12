import { useState } from "react";
import type { ProductGalleryProps } from "./types";

export const ProductGallery = ({ images, title }: ProductGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div className="space-y-4">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
        <img
          src={currentImage}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(image)}
            className={`relative rounded-lg overflow-hidden cursor-pointer group ${
              currentImage === image ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={image}
              alt={`${title} - ${index + 1}`}
              className="w-full h-20 object-cover transition-opacity duration-200 group-hover:opacity-75"
            />
            {currentImage === image && <div className="absolute inset-0" />}
          </div>
        ))}
      </div>
    </div>
  );
};
