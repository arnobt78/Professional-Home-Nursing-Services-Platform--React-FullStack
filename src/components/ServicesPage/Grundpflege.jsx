/** Services sub-page: Grundpflege (basic care) content and image. */
import { FaCheckCircle } from "react-icons/fa";

import Image from "../../assets/servicePage/service-5.png";

import CachedImage from "../CachedImage";

const Grundpflege = () => {
  return (
    <div className="space-y-6 py-12 xl:py-24 px-6 lg:px-12 xl:px-44">
      {/* Text and Image Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="font-sour text-xl xl:text-2xl font-bold text-primary/90">
            Grundpflege
          </h2>
          <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
            Wenn der Alltag schwer fällt, sind wir für Sie da
          </h3>
          <p className="text-primary/90 text-justify">
            Unsere Grundpflege hilft bei den ganz alltäglichen Dingen – wie
            Körperpflege, Ernährung oder Mobilität – mit Herz, Verstand und dem
            Blick fürs Wesentliche. So bleibt das Leben zuhause lebenswert,
            sicher und vertraut. Denn jeder von uns kann durch Krankheit oder
            einen Unfall plötzlich auf Unterstützung angewiesen sein – manchmal
            nur vorübergehend, manchmal dauerhaft. Dann sind unsere Pflegekräfte
            ohne lange Wartezeiten für Sie einsatzbereit und helfen dort, wo
            Hilfe gebraucht wird.
          </p>
          <p className="text-primary/90 text-justify">
            Die Grundpflege ist eine Leistung der Pflegeversicherung nach dem
            Sozialgesetzbuch XI (SGB XI) und richtet sich an Menschen mit
            anerkanntem Pflegegrad. Sie umfasst sogenannte Pflegesachleistungen,
            die wir individuell und bedarfsgerecht im häuslichen Umfeld
            erbringen. Das Team von Sernitas Care steht Ihnen zuverlässig und
            einfühlsam zur Seite, um gemeinsam den Alltag zu meistern – in Ihrer
            gewohnten Umgebung und ganz nach Ihren Bedürfnissen.
          </p>
        </div>
        <div className="lg:w-1/2">
          <CachedImage
            src={Image}
            alt="Grundpflege"
            className="w-full max-h-[300px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-8 py-12">
        <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90 pb-8 text-center">
          Leistungsspektrum der Grundpflege
        </h3>
        <div className="font-sour text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            Körperpflege
          </div>
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            Betten und Lagern
          </div>
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            An- und Auskleiden
          </div>
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            Hilfe bei der Nahrungs- & Flüssigkeitsaufnahme
          </div>
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            Aktivierende Pflege zur Förderung der Selbständigkeit
          </div>
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            Unterstützung beim Toilettengang
          </div>
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            Verwendung von Inkontinenz-produkten
          </div>
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            Prävention von Dekubitus, Thrombose, usw.
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h3 className="font-sour text-xl xl:text-2xl font-bold text-primary/90">
          Wir sind für Sie da!
        </h3>
        <p className="text-primary/90 mt-4">
          Gerne beraten wir Sie, welche Leistungen für Sie passen. Auf diese
          Weise erhalten Sie eine individuell auf Sie oder Ihre Angehörigen
          abgestimmte Grundpflege. Sie haben Fragen? Auch die beantworten Ihnen
          unsere Mitarbeiter gerne. Rufen Sie uns an!
        </p>
        <a
          href="/contact"
          className="bg-primary/90 text-white px-6 py-3 rounded-2xl shadow-2xl hover:bg-green-700 mt-8 inline-block hover:scale-105 transition-transform duration-300"
        >
          Jetzt Kontakt aufnehmen →
        </a>
      </div>
    </div>
  );
};

export default Grundpflege;
