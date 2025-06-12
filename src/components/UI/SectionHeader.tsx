interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  variant?: "blue" | "green" | "red";
  className?: string;
}

export const SectionHeader = ({
  icon,
  title,
  variant = "blue",
  className = "",
}: SectionHeaderProps) => (
  <div className={`flex items-center space-x-4 ${className}`}>
    <div
      className={`
      w-8 h-8 rounded-full flex items-center justify-center
      ${variant === "blue" ? "bg-blue-100" : ""}
      ${variant === "green" ? "bg-green-100" : ""}
      ${variant === "red" ? "bg-red-100" : ""}
    `}
    >
      <div
        className={`
        w-4 h-4
        ${variant === "blue" ? "text-blue-600" : ""}
        ${variant === "green" ? "text-green-600" : ""}
        ${variant === "red" ? "text-red-600" : ""}
      `}
      >
        {icon}
      </div>
    </div>
    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
  </div>
);
