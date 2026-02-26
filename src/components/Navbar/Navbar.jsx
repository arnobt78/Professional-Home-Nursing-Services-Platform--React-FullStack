/**
 * Navbar: Main site navigation with dropdowns, search, and mobile menu.
 * Features: desktop dropdowns (hover), site search, mobile hamburger menu, fixed positioning.
 */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/footerSection/logo.png";

import CachedImage from "../CachedImage";

const Navbar = () => {
  const navigate = useNavigate();

  // UI state: mobile menu open/closed, which dropdown is active, search visibility and data
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [_isSearchListVisible, _setIsSearchListVisible] = useState(false); // Reserved for future search list visibility

  const searchRef = useRef(null); // Ref for the search bar container (used for click-outside detection)
  const _inputRef = useRef(null); // Reserved for search input ref

  // Used to delay closing dropdown on mouse leave so user can move to submenu
  let hideDropdownTimeout;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search bar visibility
    setSearchQuery(""); // Clear search query
    setSearchResults([]); // Clear search results
  };

  // Filter site pages by search query; results link to internal routes
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Searchable items: titles and routes for main site sections (services, about, wissenswertes, legal)
    const searchableItems = [
      { title: "Unsere Leistungen", link: "/services/grundpflege" },
      { title: "Grundpflege", link: "/services/grundpflege" },
      { title: "Behandlungspflege", link: "/services/behandlungspflege" },
      { title: "Verhinderungspflege", link: "/services/verhinderungspflege" },
      {
        title: "Betreuungs- und Entlastungsleistungen",
        link: "/services/betreuung-entlastung",
      },
      { title: "24h - Rufbereitschaft", link: "/services/rufbereitschaft" },

      { title: "Über uns", link: "/about-us/wir-sind-sernitas" },
      { title: "Wir sind Sernitas", link: "/about-us/wir-sind-sernitas" },
      { title: "Team", link: "/about-us/team" },
      { title: "Leitbild", link: "/about-us/leitbild" },
      { title: "Kooperationsnetzwerk", link: "/about-us/kooperationsnetzwerk" },
      { title: "Mitgliedschaft BAP", link: "/about-us/mitgliedschaft-bap" },

      { title: "Wissenswertes", link: "/wissenswertes/faq" },
      { title: "FAQ", link: "/wissenswertes/faq" },
      { title: "Aktuelles", link: "/wissenswertes/aktuelles" },
      { title: "Pflege-Blog", link: "/wissenswertes/pflege-blog" },
      { title: "Pflege-Ratgeber", link: "/wissenswertes/pflege-ratgeber" },
      { title: "Downloads", link: "/wissenswertes/downloads" },

      { title: "Karriere", link: "/karriere" },
      { title: "Kontakt", link: "/contact" },
      { title: "Impressum", link: "/imprint" },
      { title: "Datenschutz", link: "/privacy-policy" },
      { title: "AGB", link: "/general-terms" },
    ];

    // Filter results based on the query
    const results = searchableItems.filter((item) =>
      item.title.toLowerCase().includes(query),
    );
    setSearchResults(results);
  };

  const handleResultClick = (link) => {
    navigate(link); // Navigate to the selected page
    setIsSearchOpen(false); // Close the search bar
  };

  // Close search bar when user clicks outside the search container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false); // Close the search bar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Navigation structure: top-level labels and sub-items with links (used for desktop dropdowns and mobile menu)
  const navItems = [
    {
      title: "Unsere Leistungen",
      subItems: [
        { title: "Grundpflege", link: "/services/grundpflege" },
        { title: "Behandlungspflege", link: "/services/behandlungspflege" },
        { title: "Verhinderungspflege", link: "/services/verhinderungspflege" },
        {
          title: "Betreuungs- und Entlastungsleistungen",
          link: "/services/betreuung-entlastung",
        },
        { title: "24h - Rufbereitschaft", link: "/services/rufbereitschaft" },
      ],
    },
    {
      title: "Über uns",
      subItems: [
        { title: "Wir sind Sernitas", link: "/about-us/wir-sind-sernitas" },
        { title: "Team", link: "/about-us/team" },
        { title: "Leitbild", link: "/about-us/leitbild" },
        {
          title: "Kooperationsnetzwerk",
          link: "/about-us/kooperationsnetzwerk",
        },
        { title: "Mitgliedschaft BAP", link: "/about-us/mitgliedschaft-bap" },
      ],
    },
    {
      title: "Wissenswertes",
      subItems: [
        { title: "FAQ", link: "/wissenswertes/faq" },
        { title: "Aktuelles", link: "/wissenswertes/aktuelles" },
        { title: "Pflege-Blog", link: "/wissenswertes/pflege-blog" },
        { title: "Pflege-Ratgeber", link: "/wissenswertes/pflege-ratgeber" },
        { title: "Downloads", link: "/wissenswertes/downloads" },
      ],
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-30 py-4"
      >
        <div className="container flex justify-between items-center">
          {/* Clickable Logo */}
          <a href="/" className="flex items-center cursor-pointer">
            <CachedImage
              src={Logo}
              alt="sernitas care logo"
              className="w-[180px] md:w-[200px] hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-7 xl:gap-10 text-white font-medium tracking-wide items-center">
              {/* Home Icon */}
              <li className="flex items-center">
                <a
                  href="/"
                  className="text-white text-lg font-bold hover:text-secondary flex items-center justify-center"
                >
                  <i className="fas fa-home"></i>
                </a>
              </li>

              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group flex items-center gap-2"
                  onMouseEnter={() => {
                    clearTimeout(hideDropdownTimeout);
                    setActiveDropdown(idx);
                  }}
                  onMouseLeave={() => {
                    hideDropdownTimeout = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 300);
                  }}
                >
                  <a
                    href={
                      item.title === "Unsere Leistungen"
                        ? "/services/grundpflege"
                        : item.title === "Über uns"
                          ? "/about-us/wir-sind-sernitas"
                          : item.title === "Wissenswertes"
                            ? "/wissenswertes/faq"
                            : "/"
                    }
                    className="uppercase text-md font-bold hover:text-secondary flex items-center justify-center"
                  >
                    {item.title}
                  </a>

                  {activeDropdown === idx && item.subItems && (
                    <ul
                      className="absolute left-0 top-full mt-2 bg-black bg-opacity-80 rounded-lg shadow-lg m-4 w-64"
                      onMouseEnter={() => clearTimeout(hideDropdownTimeout)}
                      onMouseLeave={() => {
                        hideDropdownTimeout = setTimeout(() => {
                          setActiveDropdown(null);
                        }, 300);
                      }}
                    >
                      {item.subItems.map((sub, i) => (
                        <li key={i}>
                          <a
                            href={sub.link}
                            className="block p-4 text-white hover:text-secondary hover:bg-white/10"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Karriere */}
              <li className="flex items-center">
                <a
                  href="/karriere"
                  className="uppercase text-md font-bold hover:text-secondary flex items-center justify-center"
                >
                  Karriere
                </a>
              </li>

              {/* Kontakt */}
              <li className="flex items-center">
                <a
                  href="/contact"
                  className="uppercase text-md font-bold hover:text-secondary flex items-center justify-center"
                >
                  Kontakt
                </a>
              </li>

              {/* Language Selector */}
              {/* <li className="relative group flex items-center">
                <button className="uppercase text-lg font-bold hover:text-secondary flex items-center gap-2 justify-center">
                  <i className="fas fa-globe"></i>
                </button>
                <ul className="absolute left-0 top-full mt-2 bg-black bg-opacity-90 rounded-lg shadow-lg py-2 px-4 w-32 hidden group-hover:block">
                  <li>
                    <button className="block px-2 py-1 text-white hover:text-secondary hover:bg-white/10 rounded">
                      Deutsch
                    </button>
                  </li>
                  <li>
                    <button className="block px-2 py-1 text-white hover:text-secondary hover:bg-white/10 rounded">
                      Türkisch
                    </button>
                  </li>
                  <li>
                    <button className="block px-2 py-1 text-white hover:text-secondary hover:bg-white/10 rounded">
                      Englisch
                    </button>
                  </li>
                </ul>
              </li> */}

              {/* Search Icon */}
              <li className="flex items-center">
                <button onClick={toggleSearch} className="text-lg font-bold">
                  <i className="fas fa-search"></i>
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end w-full">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div
          ref={searchRef} // Attach ref to the search bar container
          className="fixed top-16 left-0 w-full bg-primary/90 py-4 px-24 lg:px-72 z-50 border-t-2 border-t-secondary text-white"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            className="search-input"
          />
          {searchResults.length > 0 && (
            <ul
              className="mt-4 text-primary/90 bg-gray-100 shadow-lg rounded max-h-64 overflow-y-auto" // Add scrollable styles
            >
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="border-b last:border-none px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleResultClick(result.link)}
                >
                  {result.title}
                </li>
              ))}
            </ul>
          )}
          {searchQuery && searchResults.length === 0 && (
            <p className="mt-4 text-gray-300">Keine Ergebnisse gefunden.</p>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
          <div className="backdrop-blur-md flex flex-col items-start p-6 text-white w-full h-full overflow-y-auto">
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-white text-2xl hover:shadow-md transition-shadow duration-300"
            >
              &times;
            </button>
            <ul className="w-full space-y-6">
              {/* Home Icon */}
              <li className="flex items-center gap-4 text-lg font-bold uppercase">
                <a
                  href="/"
                  className="flex items-center gap-2 hover:text-secondary transition duration-300"
                >
                  <i className="fas fa-home"></i> Home
                </a>
              </li>

              {/* Main Menu Items */}
              {navItems.map((item, idx) => (
                <li key={idx} className="w-full">
                  <div className="text-lg font-bold uppercase flex items-center justify-between">
                    <span>{item.title}</span>
                  </div>
                  <ul className="mt-4 space-y-4 pl-4">
                    {item.subItems.map((sub, i) => (
                      <li key={i}>
                        <a
                          href={sub.link}
                          onClick={toggleMenu}
                          className="block text-md hover:text-secondary transition duration-300"
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              {/* Global Icon */}
              {/* <li className="flex items-center gap-4 text-lg font-bold uppercase">
                <button className="flex items-center gap-2 hover:text-secondary transition duration-300">
                  <i className="fas fa-globe"></i> Language
                </button>
                <ul className="mt-2 space-y-2 pl-4">
                  <li>
                    <button className="block text-sm hover:text-secondary transition duration-300">
                      Deutsch
                    </button>
                  </li>
                  <li>
                    <button className="block text-sm hover:text-secondary transition duration-300">
                      Türkisch
                    </button>
                  </li>
                  <li>
                    <button className="block text-sm hover:text-secondary transition duration-300">
                      Englisch
                    </button>
                  </li>
                </ul>
              </li> */}

              {/* Search Icon */}
              {/* <li className="flex items-center gap-4 text-lg font-bold uppercase">
                <button
                  onClick={toggleMenu}
                  className="flex items-center gap-2 hover:text-secondary transition duration-300"
                >
                  <i className="fas fa-search"></i> Search
                </button>
              </li> */}

              {/* Additional Buttons */}
              <li>
                <a
                  href="/contact"
                  className="w-full text-center px-8 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition duration-300"
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a
                  href="/karriere"
                  className="w-full text-center px-8 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition duration-300"
                >
                  Karriere
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
