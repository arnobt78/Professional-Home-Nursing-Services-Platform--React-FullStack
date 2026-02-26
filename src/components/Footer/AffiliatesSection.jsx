/** AffiliatesSection: Footer area showing affiliate/partner logos (BPA, KABS, clinics, etc.) in a grid. */
import { motion } from "framer-motion";

import BPA from "../../assets/footerSection/bpa.png";
import KABS from "../../assets/footerSection/kabs.png";
import Dr from "../../assets/footerSection/hirler.png";
import Klinikum from "../../assets/footerSection/klinikum.png";
import Burger from "../../assets/footerSection/burger.png";
import LMU from "../../assets/footerSection/lmu.png";

import Goethe from "../../assets/footerSection/goethe.png";
import Nicc from "../../assets/footerSection/nicc.png";
import IEC from "../../assets/footerSection/iec.png";
import Markische from "../../assets/footerSection/markische.png";
import American from "../../assets/footerSection/american.png";
import Ankara from "../../assets/footerSection/ankara.png";
import Timer from "../../assets/footerSection/timer.png";
import LWL from "../../assets/footerSection/lwl.png";

import CachedImage from "../CachedImage";

const affiliates = [
  {
    id: 1,
    img: BPA,
    alt: "BPA",
    link: "https://www.bpa.de/",
  },
  {
    id: 2,
    img: KABS,
    alt: "KABS",
    link: "/",
  },
  {
    id: 3,
    img: Dr,
    alt: "Dr. med. Erwin Hirler",
    link: "/",
  },
  {
    id: 4,
    img: Klinikum,
    alt: "Klinikum Dritter Orden",
    link: "/",
  },
  {
    id: 5,
    img: Burger,
    alt: "Burger",
    link: "/",
  },
  {
    id: 6,
    img: LMU,
    alt: "LMU",
    link: "/",
  },

  {
    id: 7,
    img: Goethe,
    alt: "Goethe Institut",
    link: "https://www.goethe.de/de/index.html",
  },
  {
    id: 8,
    img: Nicc,
    alt: "Nice Education",
    link: "https://www.nice-education.de/",
  },
  {
    id: 9,
    img: IEC,
    alt: "International Education Centers",
    link: "https://internationaleducationcenters.de/?v=a4b7f41804b0",
  },
  {
    id: 10,
    img: Markische,
    alt: "Märkische Kliniken",
    link: "https://www.maerkische-kliniken.de/home.html",
  },
  {
    id: 11,
    img: American,
    alt: "American Life",
    link: "https://www.americanlife.com.tr/",
  },
  {
    id: 12,
    img: Ankara,
    alt: "Ankara University",
    link: "https://www.ankara.edu.tr/",
  },
  {
    id: 13,
    img: Timer,
    alt: "TÖMER Ankara University",
    link: "https://tomer.ankara.edu.tr/",
  },
  {
    id: 14,
    img: LWL,
    alt: "LWL Psychiatry Verbund",
    link: "https://www.lwl-psychiatrieverbund.de/de/",
  },
];

const AffiliatesSection = () => {
  return (
    <motion.div
      className="w-full bg-white mt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Header */}
      <h2 className="font-sour text-3xl xl:text-4xl font-bold text-center text-primary/90">
        Unsere Partner
      </h2>

      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-4">
        {affiliates.map((affiliate) => (
          <motion.a
            key={affiliate.id}
            href={affiliate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center my-12"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <CachedImage
              src={affiliate.img}
              alt={affiliate.alt}
              className="w-20 h-auto md:w-28 lg:w-32 object-contain"
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default AffiliatesSection;
