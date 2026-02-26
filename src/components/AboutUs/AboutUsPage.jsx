/** AboutUsPage: Tabbed layout for About sub-pages (Wir Sind Sernitas, Team, Leitbild, Kooperationsnetzwerk, Mitgliedschaft BAP). */
import { NavLink, Routes, Route, useLocation } from "react-router-dom";

import WirSindSernitas from "./WirSindSernitas";
import Team from "./Team";
import Leitbild from "./Leitbild";
import Kooperationsnetzwerk from "./Kooperationsnetzwerk";
import MitgliedschaftBAP from "./MitgliedschaftBAP";

import wirSindSernitasImg from "../../assets/aboutPage/hero-1.png";
import teamImg from "../../assets/aboutPage/hero-4.jpg";
import leitbildImg from "../../assets/aboutPage/hero-3.png";
import kooperationsnetzwerkImg from "../../assets/aboutPage/hero-6.png";
import bapImg from "../../assets/aboutPage/hero-5.png";

import CachedImage from "../CachedImage";

const tabs = [
  {
    label: "Wir Sind Sernitas",
    path: "/about-us/wir-sind-sernitas",
    image: wirSindSernitasImg,
  },
  {
    label: "Team",
    path: "/about-us/team",
    image: teamImg,
  },
  {
    label: "Leitbild",
    path: "/about-us/leitbild",
    image: leitbildImg,
  },
  {
    label: "Kooperationsnetzwerk",
    path: "/about-us/kooperationsnetzwerk",
    image: kooperationsnetzwerkImg,
  },
  {
    label: "Mitgliedschaft BAP",
    path: "/about-us/mitgliedschaft-bap",
    image: bapImg,
  },
];

const AboutUsPage = () => {
  const location = useLocation(); // Get the current location

  // Find the active tab based on the current path
  const activeTab = tabs.find((tab) => location.pathname.startsWith(tab.path));

  return (
    <div className="min-h-screen pt-[68px] pb-16 backdrop-blur-md">
      {/* Top Image */}
      <CachedImage
        src={activeTab?.image || wirSindSernitasImg} // Default to Grundpflege image
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
          <Route path="/wir-sind-sernitas" element={<WirSindSernitas />} />
          <Route path="/team" element={<Team />} />
          <Route path="/leitbild" element={<Leitbild />} />
          <Route
            path="/kooperationsnetzwerk"
            element={<Kooperationsnetzwerk />}
          />
          <Route path="/mitgliedschaft-bap" element={<MitgliedschaftBAP />} />
        </Routes>
      </div>
    </div>
  );
};

export default AboutUsPage;
