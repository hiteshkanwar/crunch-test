import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  borderLeft?: boolean;
}

export default function Card({ children, className = "", borderLeft = false }: CardProps) {
  return (
    <div
      className={`text-center bg-white px-10 ${
        borderLeft ? "md:border-l md:border-gray-200" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
