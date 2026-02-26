/**
 * Footer: Site footer with logo, social links, quick links, and optional Partners/Affiliates sections.
 * Renders ScrollToTop and AffiliatesSection above the main footer. Uses Framer Motion for staggered row animations.
 */
import { motion } from "framer-motion";

import ScrollToTop from "../ScrollToTop";
import { slideUp } from "../../utility/animation";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaXing,
} from "react-icons/fa";

import Logo from "../../assets/footerSection/logo-bg.png";

import PartnersSection from "./PartnersSection";
import AffiliatesSection from "./AffiliatesSection";

import CachedImage from "../CachedImage";

const Footer = () => {
  // Framer Motion Variants for row animations
  const rowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2, // Staggered animation for each row
      },
    }),
  };

  return (
    <>
      <ScrollToTop /> {/* Ensure ScrollToTop is included */}
      <AffiliatesSection /> {/* Add AffiliatesSection above the footer */}
      <footer className="bg-primary/90 text-white py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Column 1: Logo and Social Links */}
          <motion.div
            custom={0}
            variants={rowVariants}
            className="space-y-4 text-center md:text-left"
          >
            <CachedImage
              src={Logo}
              alt="Sernitas Logo"
              className="w-[200px] mx-auto md:mx-0"
            />
            <p className="font-sour text-lg">
              Wir globalisieren die Gesundheit!
            </p>
            <p className="font-sour text-lg font-medium">Folgen Sie uns</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/sernitasglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/sernitashrturkey?igsh=MWphd210cjVod3hjbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/sernitas/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.xing.com/pages/sernitas-gmbh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-secondary transition-transform duration-300"
              >
                <FaXing size={24} />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Menu */}
          <motion.div
            custom={1}
            variants={rowVariants}
            className="space-y-4 text-center md:text-left"
          >
            <h4 className="text-xl font-bold">Menü</h4>
            <ul className="space-y-2">
              {/* Unsere Leistungen */}
              <li>
                <a
                  href="/services/grundpflege"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Grundpflege
                </a>
              </li>
              <li>
                <a
                  href="/services/behandlungspflege"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Behandlungspflege
                </a>
              </li>
              <li>
                <a
                  href="/services/verhinderungspflege"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Verhinderungspflege
                </a>
              </li>
              <li>
                <a
                  href="/services/betreuung-entlastung"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Betreuungs- und Entlastungsleistungen
                </a>
              </li>
              <li>
                <a
                  href="/services/rufbereitschaft"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  24h - Rufbereitschaft
                </a>
              </li>

              {/* Über uns */}
              <li>
                <a
                  href="/about-us/wir-sind-sernitas"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Wir sind Sernitas
                </a>
              </li>
              <li>
                <a
                  href="/about-us/team"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/about-us/leitbild"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Leitbild
                </a>
              </li>
              <li>
                <a
                  href="/about-us/kooperationsnetzwerk"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Kooperationsnetzwerk
                </a>
              </li>
              <li>
                <a
                  href="/about-us/mitgliedschaft-bap"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Mitgliedschaft BAP
                </a>
              </li>

              {/* Wissenswertes */}
              <li>
                <a
                  href="/wissenswertes/faq"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/wissenswertes/aktuelles"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Aktuelles
                </a>
              </li>
              <li>
                <a
                  href="/wissenswertes/pflege-blog"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Pflege-Blog
                </a>
              </li>
              <li>
                <a
                  href="/wissenswertes/pflege-ratgeber"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Pflege-Ratgeber
                </a>
              </li>
              <li>
                <a
                  href="/wissenswertes/downloads"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Downloads
                </a>
              </li>

              {/* Karriere */}
              <li>
                <a
                  href="/karriere"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Karriere
                </a>
              </li>

              {/* Kontakt */}
              <li>
                <a
                  href="/contact"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Links */}
          <motion.div
            custom={2}
            variants={rowVariants}
            className="space-y-4 text-center md:text-left"
          >
            <h4 className="text-xl font-bold">Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/imprint"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="/general-terms"
                  className="hover:scale-110 hover:text-secondary transition-transform duration-300"
                >
                  AGB
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            custom={3}
            variants={rowVariants}
            className="space-y-4 text-center md:text-left"
          >
            <h4 className="text-xl font-bold">Kontakt aufnehmen</h4>
            <p>
              <span className="font-bold">E-mail:</span> info@sernitas-care.com
            </p>
            <p>
              Sernitas GmbH
              <br />
              BioMedizinZentrum Bochum
              <br />
              Universitätsstraße 136
              <br />
              44799 Bochum
            </p>
            <p>
              <span className="font-bold">Telefon:</span> +49 234 966 46 480
              <br />
              <span className="font-bold">Fax:</span> +49 234 966 45 602
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={slideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-center mt-10"
        >
          <p className="font-sour text-md">
            Made with <span className="text-red-500">❤️</span>
          </p>
          <p className="text-sm font-medium">
            COPYRIGHT &copy; 2025 Sernitas GmbH
          </p>
        </motion.div>
      </footer>
      <PartnersSection /> {/* Add PartnersSection below the footer */}
    </>
  );
};

export default Footer;
