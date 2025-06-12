interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "orange" | "green" | "red";
  className?: string;
}

const variantStyles = {
  blue: "bg-blue-100 text-blue-800",
  orange: "bg-orange-100 text-orange-800",
  green: "bg-green-100 text-green-800",
  red: "bg-red-100 text-red-800",
};

export const Badge = ({
  children,
  variant = "blue",
  className = "",
}: BadgeProps) => (
  <span
    className={`
      px-3 py-1 rounded-full font-medium text-sm
      ${variantStyles[variant]}
      ${className}
    `}
  >
    {children}
  </span>
);
