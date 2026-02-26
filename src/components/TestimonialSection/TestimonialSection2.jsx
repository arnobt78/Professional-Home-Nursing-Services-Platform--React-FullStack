/** TestimonialSection2: Second testimonial block (alternate image/content) with optional video modal. */
import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

import { FaPlay } from "react-icons/fa";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

import TestimonialImg from "../../assets/aboutPage/hr-2.jpg";

import CachedImage from "../CachedImage";

Modal.setAppElement("#root"); // Required for accessibility

const TestimonialSection2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Correct YouTube embed URL
  const videoUrl = "https://www.youtube.com"; // Replace with your YouTube video ID
  // const videoUrl = "https://www.youtube.com/embed/5ORB8IWFxMo"; // (example) format of your YouTube video ID

  return (
    <div className="bg-primary/40 py-4">
      <motion.div
        className="container flex flex-col md:flex-row-reverse items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }} // Trigger animation every time it enters the viewport
        transition={{ duration: 0.8 }}
      >
        {/* Circular Video Thumbnail with Border Animation */}
        <motion.div
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden cursor-pointer flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpen(true)}
          initial={{ x: -100, opacity: 0 }} // Start from the left
          whileInView={{ x: 0, opacity: 1 }} // Animate to the center
          viewport={{ once: false, amount: 0.2 }} // Trigger animation every time it enters the viewport
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Border Circle */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary/90"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
          <CachedImage
            src={TestimonialImg}
            alt="Testimonial Thumbnail"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full">
            <FaPlay className="text-white text-4xl" />
          </div>
        </motion.div>

        {/* Testimonial Text */}
        <motion.div
          className="flex-1 text-gray-800 text-center md:text-left px-10"
          initial={{ x: 100, opacity: 0 }} // Start from the right
          whileInView={{ x: 0, opacity: 1 }} // Animate to the center
          viewport={{ once: false, amount: 0.2 }} // Trigger animation every time it enters the viewport
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* FaQuoteLeft dynamically aligned to the start of the paragraph */}
            <FaQuoteLeft className="absolute -top-2 -left-10 text-primary/90 text-3xl md:text-4xl" />
            <p className="font-sour text-primary/90 text-md text-justify leading-relaxed">
              Bei Sernitas Care stehen die Menschen im Mittelpunkt. Mit Herz,
              Respekt und echter Hingabe kümmern wir uns um das Wohl unserer
              Klientinnen und Klienten. Für uns ist Pflege mehr als nur ein
              Beruf – es ist eine Herzensangelegenheit. Denn wahre Fürsorge
              beginnt mit Menschlichkeit.
            </p>
            {/* FaQuoteRight dynamically aligned to the bottom of the paragraph */}
            <FaQuoteRight className="absolute -bottom-4 right-0 text-primary/90 text-3xl md:text-4xl" />
          </div>
          <p className="mt-4 text-primary/90 text-lg italic font-bold">
            Sümeyya Yildiz
          </p>
          <p className="text-primary/90 italic">Personalbuchhalterin</p>
        </motion.div>
      </motion.div>

      {/* Modal for Video */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black/70 p-4"
        overlayClassName="fixed inset-0 bg-black/50"
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-2xl"
          >
            &times;
          </button>
          <iframe
            src={videoUrl}
            className="w-full h-80 md:h-96"
            title="Testimonial Video"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default TestimonialSection2;
