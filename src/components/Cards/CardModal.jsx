/**
 * CardModal: Full-screen overlay showing one service card's details (title + HTML content).
 * Renders cardData.details via dangerouslySetInnerHTML. Includes contact CTA and close button.
 */
import PropTypes from "prop-types";

const CardModal = ({ isOpen, onClose, cardData }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start overflow-y-auto"
      style={{ marginTop: "4rem" }}
    >
      <div className="bg-white w-full max-w-7xl overflow-hidden">
        {/* Close Button */}
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-800 text-3xl p-1 transition duration-300 bg-red-300/10 hover:bg-red-300/20"
        >
          ✕
        </button> */}
        <button
          onClick={onClose}
          className="fixed top-20 right-5 text-red-500 hover:text-red-800 text-3xl p-1 transition duration-300 bg-red-300/10 hover:bg-red-300/20 z-50"
        >
          ✕
        </button>

        {/* Service Content */}
        <div className="p-6 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-primary/90 text-center py-12">
            {cardData.title}
          </h2>

          {/* Content */}
          <div
            className="text-primary/90 text-justify leading-relaxed space-y-6 styled-content"
            dangerouslySetInnerHTML={{ __html: cardData.details }}
          ></div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between p-6 md:p-12">
          <a
            href="/contact"
            className="bg-primary/90 text-white px-6 py-3 rounded-xl hover:bg-secondary transition duration-300"
          >
            Unverbindlich Kontakt aufnehmen →
          </a>

          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-400 transition duration-300"
          >
            Zurück zu Pflege-Ratgeber
          </button>
        </div>
      </div>
    </div>
  );
};

CardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cardData: PropTypes.object.isRequired,
};

export default CardModal;

//  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center overflow-y-auto">
//    <div className="bg-white max-w-7xl w-full max-h-[90vh] p-24 relative overflow-y-auto">
//      {/* Header */}
//      <div className="flex justify-between items-center mb-4">
//        <button
//          onClick={onClose}
//          className="text-primary/90 font-semibold hover:text-secondary hover:border-b-2 hover:border-secondary transition duration-300"
//        >
//          ← Zurück zu Services
//        </button>
//        <button
//          onClick={onClose}
//          className="text-red-500 font-semibold text-2xl p-2 transition duration-300 bg-red-300/10 hover:bg-red-300/20"
//        >
//          ✕
//        </button>
//      </div>

//      {/* Content */}
//      <div
//        className="text-primary/90 text-justify leading-relaxed space-y-4 styled-content"
//        dangerouslySetInnerHTML={{ __html: cardData.details }}
//      ></div>

//      {/* Footer Buttons */}
//      <div className="flex justify-between mt-16">
//        <a
//          href="/contact"
//          className="bg-primary/90 text-white px-6 py-3 rounded-xl hover:bg-secondary transition duration-300"
//        >
//          Unverbindlich Kontakt aufnehmen
//        </a>
//        <a
//          href="/services/grundpflege"
//          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-400 transition duration-300"
//        >
//          Zurück zu Services
//        </a>
//      </div>
//    </div>
//  </div>;
