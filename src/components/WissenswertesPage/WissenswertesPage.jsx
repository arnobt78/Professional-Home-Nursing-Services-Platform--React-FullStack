/** WissenswertesPage: Tabbed layout for FAQ, Aktuelles, Pflege-Blog, Pflege-Ratgeber, Downloads with nested Routes. */
import { NavLink, Routes, Route, useLocation } from "react-router-dom";

import FAQ from "./FAQ";
import Aktuelles from "./Aktuelles";
import PflegeBlog from "./PflegeBlog";
import PflegeRatgeber from "./PflegeRatgeber";
import Downloads from "./Downloads";

import faqImg from "../../assets/wissenswertesPage/faq-1.png";
import aktuellesImg from "../../assets/wissenswertesPage/aktuelles-1.png";
import pflegeBlogImg from "../../assets/wissenswertesPage/blog-1.png";
import pflegeRatgeberImg from "../../assets/wissenswertesPage/ratgeber-1.png";
import downloadsImg from "../../assets/wissenswertesPage/downloads-1.png";

import CachedImage from "../CachedImage";

const tabs = [
  {
    label: "FAQ",
    path: "/wissenswertes/faq",
    image: faqImg,
  },
  {
    label: "Aktuelles",
    path: "/wissenswertes/aktuelles",
    image: aktuellesImg,
  },
  {
    label: "Pflege-Blog",
    path: "/wissenswertes/pflege-blog",
    image: pflegeBlogImg,
  },
  {
    label: "Pflege-Ratgeber",
    path: "/wissenswertes/pflege-ratgeber",
    image: pflegeRatgeberImg,
  },
  {
    label: "Downloads",
    path: "/wissenswertes/downloads",
    image: downloadsImg,
  },
];

const WissenswertesPage = () => {
  const location = useLocation(); // Get the current location

  // Find the active tab based on the current path
  const activeTab = tabs.find((tab) => location.pathname.startsWith(tab.path));

  return (
    <div className="min-h-screen pt-[68px] pb-16 backdrop-blur-md">
      {/* Top Image */}
      <CachedImage
        src={activeTab?.image || faqImg} // Default to Grundpflege image
        alt="Leistungen"
        className="w-full max-h-[600px] object-cover"
      />

      {/* Tabs */}
      <div className="container mx-auto py-6 bg-gray-200 hidden md:block">
        <div className="flex justify-center gap-12 items-center">
          {tabs.map((tab, index) => (
            <NavLink
              key={index}
              to={tab.path} // Use absolute paths here
              className={({ isActive }) =>
                `text-md xl:text-xl font-bold pb-2 ${
                  isActive
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-primary/90 hover:text-green-700"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aktuelles" element={<Aktuelles />} />
          <Route path="/pflege-blog" element={<PflegeBlog />} />
          <Route path="/pflege-ratgeber" element={<PflegeRatgeber />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </div>
    </div>
  );
};

export default WissenswertesPage;
