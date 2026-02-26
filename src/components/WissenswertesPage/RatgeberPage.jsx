/** RatgeberPage: Single guide article view (route /pflege-ratgeber/:id). Data from ratgeberData. */
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import CachedImage from "../CachedImage";
import ratgeberData from "./ratgeberData"; // Import the data

const RatgeberPage = () => {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate();

  // Find the ratgeber data based on the id
  const ratgeber = ratgeberData.find((item) => item.id === parseInt(id, 10));

  if (!ratgeber) {
    return <p>Ratgeber not found.</p>;
  }

  return (
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-primary/90 hover:text-secondary transition duration-300"
      >
        ← Zurück zu Pflege-Ratgeber
      </button>

      {/* Ratgeber Image */}
      <div className="w-full h-96 flex justify-center items-center bg-gray-100">
        <CachedImage
          src={ratgeber.image}
          alt={ratgeber.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ratgeber Content */}
      <div className="p-6 md:p-12 space-y-6">
        <h2 className="text-3xl font-bold text-primary/90 text-center py-12">
          {ratgeber.title}
        </h2>

        <div
          className="text-primary/90 text-justify leading-relaxed space-y-6 styled-content"
          dangerouslySetInnerHTML={{ __html: ratgeber.description }}
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
          onClick={() => navigate(-1)}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-400 transition duration-300"
        >
          Zurück zu Pflege-Ratgeber
        </button>
      </div>
    </div>
  );
};

RatgeberPage.propTypes = {
  ratgeber: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RatgeberPage;
