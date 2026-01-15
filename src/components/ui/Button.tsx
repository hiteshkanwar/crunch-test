import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  fullWidth?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "font-bold uppercase transition-colors cursor-pointer";

  const variantClasses = {
    primary: "bg-yellow text-white px-6 py-4 text-sm hover:bg-yellow/90",
    secondary:
      "bg-gradient-primary text-white px-6 py-4 text-sm hover:opacity-90",
    outline:
      "inline-flex items-center justify-center bg-white text-primary px-8 py-3 hover:bg-gray-100 transition-all duration-200",
    text: "text-yellow text-sm tracking-[10%] hover:text-yellow/80",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
