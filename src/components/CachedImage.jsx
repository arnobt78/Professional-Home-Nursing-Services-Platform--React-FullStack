// import React, { useEffect } from "react";
// import PropTypes from "prop-types";

// const CachedImage = ({ src, alt, className }) => {
//   useEffect(() => {
//     if ("caches" in window) {
//       caches.open("dynamic-assets").then((cache) => {
//         cache.add(src).catch((err) => {
//           console.error("Failed to cache image:", src, err);
//         });
//       });
//     }
//   }, [src]);

//   return <img src={src} alt={alt} className={className} />;
// };

// CachedImage.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   className: PropTypes.string,
// };

// export default CachedImage;

/**
 * CachedImage: img that also adds the image to the Cache API (dynamic-assets) for offline/PWA.
 * Uses forwardRef so ref can be passed to the underlying img. Exports both plain and motion-wrapped version.
 */
import { useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CachedImage = forwardRef(({ src, alt, className }, ref) => {
  useEffect(() => {
    if ("caches" in window) {
      caches.open("dynamic-assets").then((cache) => {
        cache.add(src).catch((err) => {
          console.error("Failed to cache image:", src, err);
        });
      });
    }
  }, [src]);

  return <img ref={ref} src={src} alt={alt} className={className} />;
});

// Add a display name for the component to fix the ESLint warning
CachedImage.displayName = "CachedImage";

// Add PropTypes validation
CachedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Export motion-wrapped CachedImage
const MotionCachedImage = motion(CachedImage);
export { MotionCachedImage };
export default CachedImage;
