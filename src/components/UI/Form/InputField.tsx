import { FaXmark } from "react-icons/fa6";
import { type InputFieldProps } from "./types";

export const InputField = ({
  label,
  icon,
  error,
  containerClassName = "",
  className = "",
  value,
  ...props
}: InputFieldProps) => {
  const hasValue = value && String(value).length > 0;

  return (
    <div className={`w-full ${containerClassName}`}>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          value={value}
          className={`
            w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            hover:border-gray-400 transition-all duration-200
            placeholder:text-gray-500
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${icon ? "pr-12" : ""}
            ${className}
          `}
        />
        {icon && (
          <div
            className={`
            absolute right-4 top-1/2 transform -translate-y-1/2 
            transition-colors duration-200
            ${
              error
                ? "text-red-500"
                : hasValue
                ? "text-blue-500"
                : "text-gray-400"
            }
          `}
          >
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <FaXmark className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};
