interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${disabled ? "opacity-50 cursor-not-allowed" : "active:scale-95"}
      ${className}
    `}
  >
    {icon && <span className="inline-flex mr-2">{icon}</span>}
    <span className="inline-flex">{children}</span>
  </button>
);
