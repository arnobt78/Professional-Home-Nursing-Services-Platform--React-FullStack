/** Single accordion item: clickable header (title), expandable body (info). Parent controls isActive and onToggle. */
import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";

const SingleAccordion = ({ title, info, isActive, onToggle }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.article
      className="question mb-12"
      initial={!hasAnimated ? { opacity: 0, y: 20 } : false}
      animate={!hasAnimated ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onAnimationComplete={() => setHasAnimated(true)} // Mark animation as completed
    >
      {/* Question Header */}
      <div className="bg-primary/90 py-6 px-12 rounded-2xl shadow-2xl">
        <header className="flex justify-between items-center">
          <h5 className="text-lg font-semibold text-white">{title}</h5>
          <button
            className="bg-white text-primary/90 rounded-full w-8 h-8 flex items-center justify-center"
            onClick={onToggle} // Call the toggle function
          >
            {isActive ? (
              <AiOutlineMinus className="text-xl font-bold" />
            ) : (
              <AiOutlinePlus className="text-xl font-bold" />
            )}
          </button>
        </header>
      </div>

      {/* Answer Content */}
      {isActive && (
        <motion.div
          className="border-2 border-primary/90 bg-gray-100 rounded-lg p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-primary/90 text-justify">{info}</p>
        </motion.div>
      )}
    </motion.article>
  );
};

// Add PropTypes for props validation
SingleAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired, // Whether the accordion is active
  onToggle: PropTypes.func.isRequired, // Function to toggle the accordion
};

export default SingleAccordion;
