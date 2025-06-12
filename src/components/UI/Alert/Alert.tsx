import { type AlertProps } from "./types";

export const Alert = ({
  variant = "info",
  icon,
  title,
  children,
  className = "",
}: AlertProps) => {
  const baseClasses = "p-4 rounded-2xl border";

  const variantClasses = {
    info: "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200",
    error: "bg-gradient-to-r from-red-50 to-pink-50 border-red-200",
    success: "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200",
    warning: "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200",
  };

  const textClasses = {
    info: "text-blue-700",
    error: "text-red-700",
    success: "text-green-700",
    warning: "text-yellow-700",
  };

  const titleClasses = {
    info: "text-blue-800",
    error: "text-red-800",
    success: "text-green-800",
    warning: "text-yellow-800",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <div className="flex items-start space-x-3">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="flex-1">
          {title && (
            <h3 className={`text-sm font-medium ${titleClasses[variant]} mb-1`}>
              {title}
            </h3>
          )}
          <div className={`text-sm ${textClasses[variant]}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};
