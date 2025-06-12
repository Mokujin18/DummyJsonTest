import { FaXmark } from "react-icons/fa6";
import type { ErrorMessageProps } from "./types";

export const ErrorMessage = ({ error, onClose }: ErrorMessageProps) => {
  if (!error) return null;

  return (
    <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
      <div className="flex items-center space-x-3">
        <FaXmark className="w-5 h-5 text-red-600" />
        <div>
          <h3 className="text-sm font-medium text-red-800">Loading error</h3>
          <p className="text-sm text-red-700 mt-1">{error}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-auto text-red-600 hover:text-red-800 transition-colors duration-200"
        >
          <FaXmark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
