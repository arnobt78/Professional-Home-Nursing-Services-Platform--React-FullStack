/**
 * SideHoverIcons: Fixed vertical strip on the right with phone, email, contact link, social links.
 * Expands on hover to show labels. Always visible for quick contact access.
 */
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaAngleDoubleRight,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const SideHoverIcons = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 right-0 z-20 transition-all duration-500 bg-transparent ${
        hover ? "w-64" : "w-14"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col gap-2 py-4 px-2">
        {/* Phone */}
        <div className="flex items-center gap-2 text-white hover:text-gray-200 bg-primary/90 hover:bg-secondary/90 p-2 rounded-md cursor-pointer">
          <a href="tel:+4923496646480" className="flex items-center gap-2">
            <FaPhone className="text-lg" />
            {hover && <span>+49 234 966 46 480</span>}
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 text-white hover:text-gray-200 bg-primary/90 hover:bg-secondary/90 p-2 rounded-md cursor-pointer">
          <a
            href="mailto:info@sernitas-care.com"
            className="flex items-center gap-2"
          >
            <FaEnvelope className="text-lg" />
            {hover && <span>info@sernitas-care.com</span>}
          </a>
        </div>

        {/* Contact Form */}
        <div className="flex items-center gap-2 text-white hover:text-gray-200 bg-primary/90 hover:bg-secondary/90 p-2 rounded-md cursor-pointer">
          <a href="/contact" className="flex items-center gap-2">
            <FaAngleDoubleRight className="text-lg" />
            {hover && <span>Zum Kontaktformular</span>}
          </a>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-2 text-white hover:text-gray-200 bg-primary/90 hover:bg-secondary/90 p-2 rounded-md">
          <a
            href="https://www.facebook.com/sernitasglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pointer-events-auto"
          >
            <FaFacebookF className="text-lg" />
            {hover && <span>Facebook</span>}
          </a>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-2 text-white hover:text-gray-200 bg-primary/90 hover:bg-secondary/90 p-2 rounded-md">
          <a
            href="https://www.instagram.com/sernitashrturkey?igsh=MWphd210cjVod3hjbg=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pointer-events-auto"
          >
            <FaInstagram className="text-lg" />
            {hover && <span>Instagram</span>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideHoverIcons;
