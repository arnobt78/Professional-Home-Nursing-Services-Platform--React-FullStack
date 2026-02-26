/** ReviewSectionService: Service page review/testimonial section with video modal. */
import { useState } from "react";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";

import reviewImage from "../../assets/servicePage/review-2.png";

import CachedImage from "../CachedImage";

Modal.setAppElement("#root"); // Required for accessibility

const ReviewSectionNew = () => {
  const [isOpen, setIsOpen] = useState(false);

  // YouTube embed URL
  const videoUrl = "https://www.youtube.com/embed/5ORB8IWFxMo"; // Replace with your YouTube video ID

  return (
    <section className="bg-gray-200 py-16 px-6 lg:px-12 rounded-3xl shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image with Play Button */}
        <div className="relative flex-shrink-0">
          <CachedImage
            src={reviewImage}
            alt="Review Thumbnail"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-primary/90"
          />
          {/* Play Button */}
          <button
            className="absolute bottom-[5px] -right-2 transform -translate-x-1/2 bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform "
            onClick={() => setIsOpen(true)}
          >
            <FaPlay className="text-xl" />
          </button>
        </div>

        {/* Review Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-sour text-primary/90 text-md xl:text-lg text-justify leading-relaxed italic pb-4">
            „Pflege zu Hause schenkt uns jeden Tag ein bisschen Lebensfreude.
            Die Betreuer respektieren unsere individuellen Bedürfnisse und
            helfen uns unseren Alltag weiterhin flexibel zu gestalten.“
          </p>
          <p className="font-ephesis text-primary/90 text-3xl font-bold tracking-wide">
            Fam. Zipple
          </p>
          <p className="text-primary/90">Patientin bei Sernitas Care</p>
        </div>
      </div>

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
            title="Review Video"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default ReviewSectionNew;
