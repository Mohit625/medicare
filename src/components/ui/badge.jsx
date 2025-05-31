import React from "react";
import { cn } from "./../../lib/utils";

const badgeVariants = {
  default: "border-transparent bg-blue-600 text-white",
  secondary: "border-transparent bg-gray-200 text-gray-800",
  destructive: "border-transparent bg-red-600 text-white",
  outline: "border border-gray-300 text-gray-700",
};

export function Badge({ className = "", variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}
