import { type ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantClasses = {
  primary:
    "gradient-primary text-white hover:opacity-90 shadow-lg hover:shadow-xl",
  secondary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl",
  outline:
    "bg-transparent border-2 border-white text-white hover:bg-white/10",
  ghost:
    "bg-transparent text-primary-500 hover:bg-primary-50",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
