import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

export const getRatingStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} className="w-4 h-4 text-yellow-400" />
      ))}

      {hasHalfStar && (
        <div className="relative">
          <FaRegStar className="w-4 h-4 text-gray-300" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: "50%" }}
          >
            <FaStar className="w-4 h-4 text-yellow-400" />
          </div>
        </div>
      )}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="w-4 h-4 text-gray-300" />
      ))}

      <span className="text-sm text-gray-600 ml-1">({rating})</span>
    </div>
  );
};
