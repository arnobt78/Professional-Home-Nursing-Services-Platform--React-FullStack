/** Styled textarea for forms. Forwards ref for use with react-hook-form. */
import * as React from "react";
import PropTypes from "prop-types";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-white/10 bg-white/20 px-4 py-5 text-base text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

// Add PropTypes for validation
Textarea.propTypes = {
  className: PropTypes.string,
};

export { Textarea };
