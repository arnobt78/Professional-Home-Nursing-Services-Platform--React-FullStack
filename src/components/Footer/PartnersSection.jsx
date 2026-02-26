/** PartnersSection: Footer area showing partner logos (Sernitas Group, HR, Kliniken, Institute) with links. */
import { motion } from "framer-motion";

import SernitasGroup from "../../assets/footerSection/sernitas-group.png";
import SernitasHR from "../../assets/footerSection/sernitas-hr.png";
import SernitasKliniken from "../../assets/footerSection/sernitas-kliniken.png";
import SernitasInstitute from "../../assets/footerSection/sernitas-institute.png";

import CachedImage from "../CachedImage";

const partners = [
  {
    id: 1,
    img: SernitasGroup,
    alt: "Sernitas Group",
    link: "https://sernitas.com/",
  },
  {
    id: 2,
    img: SernitasHR,
    alt: "Sernitas HR",
    link: "https://www.sernitas-hr.com/",
  },
  {
    id: 3,
    img: SernitasKliniken,
    alt: "Sernitas Kliniken",
    link: "https://www.sernitas-kliniken.com/",
  },
  {
    id: 4,
    img: SernitasInstitute,
    alt: "Sernitas Institute",
    link: "https://sernitas-institute.com/",
  },
];

const PartnersSection = () => {
  return (
    <motion.div
      className="bottom-0 left-0 w-full bg-white py-4 shadow-lg z-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-4">
        {partners.map((partner) => (
          <motion.a
            key={partner.id}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <CachedImage
              src={partner.img}
              alt={partner.alt}
              className="w-24 h-auto md:w-36 lg:w-40 object-contain"
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default PartnersSection;
