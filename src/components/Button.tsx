
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  to?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      href,
      to,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center";
    
    const variantStyles = {
      primary: "bg-greenfield hover:bg-greenfield-dark text-white shadow-sm",
      secondary: "bg-white hover:bg-gray-100 text-greenfield border border-greenfield",
      outline: "bg-transparent hover:bg-greenfield/10 text-greenfield border border-greenfield",
    };
    
    const sizeStyles = {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-5 py-2.5",
      lg: "text-lg px-6 py-3",
    };
    
    const buttonClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );
    
    if (to) {
      return (
        <Link to={to} className={buttonClasses}>
          {children}
        </Link>
      );
    }
    
    if (href) {
      return (
        <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    
    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
