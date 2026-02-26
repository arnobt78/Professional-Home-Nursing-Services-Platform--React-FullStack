/** MapSection: Homepage section "Für Sie durch das Revier" with contact info and map image. */
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import mapImage from "../../assets/homePage/map-1.jpg";

import CachedImage from "../CachedImage";

const MapSection = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-12 xl:px-44">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-full">
        {/* Text Content */}
        <div className="w-full max-w-full">
          <h2 className="font-sour text-primary/90 text-3xl md:text-4xl font-bold mb-6">
            Für Sie durch das Revier
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-primary/90 mb-4 text-justify">
            Sernitas Care ist täglich mit seinen grün-weißen Flitzern in Bochum
            und den angrenzenden Städten und Gemeinden unterwegs – zuverlässig,
            flexibel und immer nah am Menschen. Unser engagiertes Team aus
            erfahrenen Pflegefachkräften kümmert sich täglich um das
            Wohlbefinden unserer Klientinnen und Klienten und entlastet ihre
            Angehörigen im Alltag. Mit langjähriger Erfahrung und einem
            kultursensiblen Ansatz sorgen wir für eine reibungslose Versorgung –
            ganz ohne lange Wartezeiten und mit einer schnellen Aufnahme in
            unsere bestehenden Touren.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-primary/90 mb-6">
            Pflege, wie das Revier: direkt, stark, herzlich.
          </p>
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-secondary text-xl" />
              <span className="text-primary/90 text-base md:text-lg">
                0234 / 966 46 480
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-secondary text-xl" />
              <span className="text-primary/90 text-base md:text-lg">
                info@sernitas-care.com
              </span>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center w-full max-w-full">
          <CachedImage
            src={mapImage}
            alt="Map showing Sernitas Care coverage"
            className="object-contain max-w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
