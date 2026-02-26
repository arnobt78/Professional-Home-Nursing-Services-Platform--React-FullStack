/** TestimonialSection1: Homepage testimonial block with image and optional video modal. */
import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

import { FaPlay } from "react-icons/fa";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

import TestimonialImg from "../../assets/aboutPage/hr-1.jpg";

import CachedImage from "../CachedImage";

Modal.setAppElement("#root"); // Required for accessibility

const TestimonialSection1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Correct YouTube embed URL
  // const videoUrl = "https://www.youtube.com/embed/<your-youtube-video-id>"; // Replace with your YouTube video ID
  const videoUrl = "https://www.youtube.com/embed/5ORB8IWFxMo"; // (example) format of your YouTube video ID

  return (
    <div className="bg-primary/30 py-16 px-6 lg:px-12">
      <motion.div
        className="container flex flex-col md:flex-row items-center justify-center gap-8"
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
            <p className="font-sour text-primary/90 text-md xl:text-lg text-justify leading-relaxed italic pb-4">
              Der respektvolle und vertrauensvolle Umgang mit Menschen gehört zu
              den elementaren Bestandteilen unseres Handelns und spiegelt sich
              auch in unserem Namen wieder. Zusammengesetzt aus den lateinischen
              Begriffen Servitium (= Dienstleistung) und Humanitas (=
              Menschlichkeit) beschreibt er den Kern unseres Handelns: den
              Dienst am Menschen.
            </p>
            {/* FaQuoteRight dynamically aligned to the bottom of the paragraph */}
            <FaQuoteRight className="absolute -bottom-5 right-0 text-primary/90 text-3xl md:text-4xl" />
          </div>
          <p className="font-ephesis text-primary/90 text-3xl font-bold tracking-wide">
            Dr. Ali Yildiz
          </p>
          <p className="text-primary/90">Geschäftsführer</p>
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

export default TestimonialSection1;
