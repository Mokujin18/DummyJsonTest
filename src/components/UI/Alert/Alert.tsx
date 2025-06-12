import {
  FaXmark,
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleInfo,
} from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface AlertProps {
  variant?: "error" | "success" | "warning" | "info";
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
  showIcon?: boolean;
  action?: React.ReactNode;
}

const variants = {
  error: {
    icon: FaXmark,
    containerClass: "bg-red-50 border-red-200",
    iconClass: "text-red-600",
    titleClass: "text-red-800",
    textClass: "text-red-700",
  },
  success: {
    icon: FaCircleCheck,
    containerClass: "bg-green-50 border-green-200",
    iconClass: "text-green-600",
    titleClass: "text-green-800",
    textClass: "text-green-700",
  },
  warning: {
    icon: FaTriangleExclamation,
    containerClass: "bg-yellow-50 border-yellow-200",
    iconClass: "text-yellow-600",
    titleClass: "text-yellow-800",
    textClass: "text-yellow-700",
  },
  info: {
    icon: FaCircleInfo,
    containerClass: "bg-blue-50 border-blue-200",
    iconClass: "text-blue-600",
    titleClass: "text-blue-800",
    textClass: "text-blue-700",
  },
};

export const Alert = ({
  variant = "info",
  title,
  children,
  onClose,
  className = "",
  showIcon = true,
  action,
}: AlertProps) => {
  const variantConfig = variants[variant];
  const Icon = variantConfig.icon;

  return (
    <div
      className={twMerge(
        "border rounded-lg p-4",
        variantConfig.containerClass,
        className
      )}
    >
      <div className="flex items-start space-x-3">
        {showIcon && (
          <Icon
            className={twMerge("w-5 h-5 mt-0.5", variantConfig.iconClass)}
          />
        )}

        <div className="flex-grow">
          {title && (
            <h3
              className={twMerge(
                "text-sm font-medium",
                variantConfig.titleClass
              )}
            >
              {title}
            </h3>
          )}
          <div className={twMerge("text-sm mt-1", variantConfig.textClass)}>
            {children}
          </div>
          {action && <div className="mt-3">{action}</div>}
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className={twMerge(
              "hover:opacity-70 transition-opacity duration-200",
              variantConfig.iconClass
            )}
          >
            <FaXmark className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
