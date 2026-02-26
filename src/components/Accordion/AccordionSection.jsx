/**
 * AccordionSection: FAQ block on homepage. Data from ./data; only one item open at a time (activeQuestionId).
 */
import { motion } from "framer-motion";
import { useState } from "react";

import accordionData from "./data";
import SingleAccordion from "./SingleAccordion";

// Local slide-up animation for section header
const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay,
    },
  },
});

const AccordionSection = () => {
  const [activeQuestionId, setActiveQuestionId] = useState(null); // Track the active question

  const handleToggle = (id) => {
    setActiveQuestionId((prevId) => (prevId === id ? null : id)); // Toggle the active question
  };

  return (
    <motion.section
      className="container mx-auto py-24 px-4 md:px-12 xl:px-44 space-y-12"
      initial="initial"
      animate="animate" // Trigger animation only once
    >
      {/* Header */}
      <motion.h2
        variants={slideUp(0.2)}
        initial="initial"
        animate="animate" // Trigger animation only once
        className="font-sour text-3xl xl:text-4xl font-bold text-center text-primary/90 mb-12"
      >
        Fragen, die oft gestellt werden – Antworten, die helfen!
      </motion.h2>

      {/* Parent Wrapper for Questions and Answers */}
      <div className=" p-4">
        {/* Accordion Questions */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="initial"
          animate="animate" // Trigger animation only once
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {accordionData.map((question, index) => (
            <motion.div
              key={question.id}
              variants={slideUp(index * 0.2)}
              initial="initial"
              animate="animate" // Trigger animation only once
            >
              <SingleAccordion
                {...question}
                isActive={activeQuestionId === question.id} // Pass active state
                onToggle={() => handleToggle(question.id)} // Handle toggle
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AccordionSection;
