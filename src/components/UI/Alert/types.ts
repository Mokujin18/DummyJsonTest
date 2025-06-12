import { type ReactNode } from "react";

export interface AlertProps {
  variant?: "info" | "error" | "success" | "warning";
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
  className?: string;
}
