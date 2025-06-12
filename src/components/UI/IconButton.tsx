interface IconButtonProps {
  icon: React.ReactNode;
  variant?: "blue" | "green" | "red";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
};

const sizeStyles = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
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
}: IconButtonProps) => (
  <div
    onClick={onClick}
    className={`
      rounded-full flex items-center justify-center
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `}
  >
    <div className={iconSizeStyles[size]}>{icon}</div>
  </div>
);
