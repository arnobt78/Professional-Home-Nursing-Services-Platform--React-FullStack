/** Reusable button with variants (default, primary, outline) and sizes (default, md, lg). Forwards ref. */
import * as React from "react";
import PropTypes from "prop-types";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors";
    const variantStyles = {
      default: "bg-accent text-primary hover:bg-accent-hover",
      primary: "bg-primary text-white",
      outline:
        "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
    };
    const sizeStyles = {
      default: "h-[44px] px-6",
      md: "h-[48px] px-6",
      lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
    };

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Add PropTypes for validation
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "primary", "outline"]),
  size: PropTypes.oneOf(["default", "md", "lg"]),
};

export { Button };
