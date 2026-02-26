/**
 * ScrollToTop: Resets scroll position when the route changes.
 * Without this, users would stay at the same scroll position when navigating to a new page.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }, [pathname]); // Trigger on every route change

  return null; // This component does not render anything
};

export default ScrollToTop;
