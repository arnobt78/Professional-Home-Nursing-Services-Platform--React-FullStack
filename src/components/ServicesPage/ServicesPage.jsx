/** ServicesPage: Tabbed layout for service sub-pages (Grundpflege, Behandlungspflege, Verhinderungspflege, etc.) with nested Routes. */
import { NavLink, Routes, Route, useLocation } from "react-router-dom";

import Grundpflege from "./Grundpflege";
import Behandlungspflege from "./Behandlungspflege";
import Verhinderungspflege from "./Verhinderungspflege";
import BetreuungEntlastung from "./BetreuungEntlastung";
import Rufbereitschaft from "./Rufbereitschaft";

import grundpflegeImg from "../../assets/servicePage/service-4.png";
import behandlungspflegeImg from "../../assets/servicePage/service-6.png";
import verhinderungspflegeImg from "../../assets/servicePage/service-9.png";
import betreuungEntlastungImg from "../../assets/servicePage/service-12.png";
import rufbereitschaftImg from "../../assets/servicePage/service-14.png";

import CachedImage from "../CachedImage";

const tabs = [
  {
    label: "Grundpflege",
    path: "/services/grundpflege",
    image: grundpflegeImg,
  },
  {
    label: "Behandlungspflege",
    path: "/services/behandlungspflege",
    image: behandlungspflegeImg,
  },
  {
    label: "Verhinderungspflege",
    path: "/services/verhinderungspflege",
    image: verhinderungspflegeImg,
  },
  {
    label: "Betreuungs- und Entlastungsleistungen",
    path: "/services/betreuung-entlastung",
    image: betreuungEntlastungImg,
  },
  {
    label: "24h - Rufbereitschaft",
    path: "/services/rufbereitschaft",
    image: rufbereitschaftImg,
  },
];

const ServicesPage = () => {
  const location = useLocation(); // Get the current location

  // Find the active tab based on the current path
  const activeTab = tabs.find((tab) => location.pathname.startsWith(tab.path));

  return (
    <div className="min-h-screen pt-[68px] pb-16 backdrop-blur-md">
      {/* Top Image */}
      <CachedImage
        src={activeTab?.image || grundpflegeImg} // Default to Grundpflege image
        alt="Leistungen"
        className="w-full max-h-[600px] object-cover"
      />

      {/* Tabs */}
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
      {/* Tabs */}
      {/* <div className="container mx-auto py-6 bg-gray-200">
        <div className="flex justify-start md:justify-center gap-4 md:gap-12 items-center overflow-x-auto scrollbar-hide">
          {tabs.map((tab, index) => (
            <NavLink
              key={index}
              to={tab.path} // Use absolute paths here
              className={({ isActive }) =>
                `text-sm md:text-md xl:text-xl font-bold pb-2 whitespace-nowrap ${
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
      </div> */}

      {/* Content */}
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/grundpflege" element={<Grundpflege />} />
          <Route path="/behandlungspflege" element={<Behandlungspflege />} />
          <Route
            path="/verhinderungspflege"
            element={<Verhinderungspflege />}
          />
          <Route
            path="/betreuung-entlastung"
            element={<BetreuungEntlastung />}
          />
          <Route path="/rufbereitschaft" element={<Rufbereitschaft />} />
        </Routes>
      </div>
    </div>
  );
};

export default ServicesPage;
