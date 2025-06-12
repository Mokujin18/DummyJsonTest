import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "product" | "filter";
  size?: "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  title?: string;
}

const getButtonStyles = ({
  variant = "primary",
  size = "md",
  disabled = false,
  active = false,
  className = "",
}: Pick<
  ButtonProps,
  "variant" | "size" | "disabled" | "active" | "className"
>) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
    product:
      "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-100 disabled:text-gray-400",
    filter:
      "border-2 hover:scale-105 active:scale-95 transition-all duration-200 rounded-lg",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    full: "px-4 py-2 text-base w-full",
  };

  const filterActiveStyles =
    variant === "filter"
      ? active
        ? "bg-blue-500 text-white border-blue-500 shadow-lg"
        : "bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600"
      : "";

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabledStyles,
    filterActiveStyles,
    className
  );
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  className = "",
  onClick,
  active = false,
  title,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getButtonStyles({
        variant,
        size,
        disabled,
        active,
        className,
      })}
      title={title}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children && (
        <span className={`inline-flex ${icon ? "ml-2" : ""}`}>{children}</span>
      )}
    </button>
  );
};
