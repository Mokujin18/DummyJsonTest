import { twMerge } from "tailwind-merge";

interface IconButtonProps {
  icon: React.ReactNode;
  variant?: "blue" | "green" | "red" | "outline" | "transparent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  rounded?: "full" | "md" | "none";
}

const getIconButtonStyles = ({
  variant = "blue",
  size = "md",
  disabled = false,
  rounded = "full",
  className = "",
}: Pick<
  IconButtonProps,
  "variant" | "size" | "disabled" | "rounded" | "className"
>) => {
  const baseStyles =
    "flex items-center justify-center transition-colors duration-200";

  const variantStyles = {
    blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    green: "bg-green-100 text-green-600 hover:bg-green-200",
    red: "bg-red-100 text-red-600 hover:bg-red-200",
    outline: "bg-white border border-gray-300 text-gray-500 hover:bg-gray-50",
    transparent: "text-gray-400 hover:text-gray-600 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-10 h-10",
  };

  const roundedStyles = {
    full: "rounded-full",
    md: "rounded-md",
    none: "",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    roundedStyles[rounded],
    disabledStyles,
    className
  );
};

const iconSizeStyles = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export const IconButton = ({
  icon,
  variant = "blue",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  title,
  rounded = "full",
}: IconButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={getIconButtonStyles({
      variant,
      size,
      disabled,
      rounded,
      className,
    })}
  >
    <div className={iconSizeStyles[size]}>{icon}</div>
  </button>
);
