/** Styled input (height, border, placeholder) for forms. Forwards ref for use with react-hook-form. */
import * as React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-white/20 text-white px-4 py-5 text-base placeholder:text-white/60 outline-none ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// Add PropTypes for validation
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export { Input };
