/**
 * Framer Motion animation variants used across the app.
 * Each function returns initial/animate objects for motion components.
 */

/** Slide-up: element starts 50px below and fades in. Used for content sections. */
export const slideUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

/** Slide-from-top: element starts 100px above and fades in. Used e.g. for Navbar. */
export const slideBottom = (delay) => {
  return {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};
