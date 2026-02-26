/** About Us sub-page: Leitbild (mission/values) content with image. */
import HeroImage from "../../assets/aboutPage/hero-2.jpg";

import CachedImage from "../CachedImage";

const Leitbild = () => {
  return (
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44">
      {/* Text and Image Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
            Unser Leitbild
          </h2>
          <p className="text-primary/90 text-justify">
            Bei Sernitas Care steht der Mensch im Mittelpunkt. Jeder Einzelne
            bringt seine eigene Geschichte, seine eigenen Bedürfnisse und
            Wünsche mit – und genau darauf gehen wir individuell ein. Unser
            Ansatz basiert auf Respekt, Empathie und Professionalität.
          </p>
          <p className="text-primary/90 text-justify">
            Wir arbeiten eng mit Angehörigen, Ärzten und Therapeuten zusammen,
            um maßgeschneiderte Pflegekonzepte zu entwickeln, die genau auf die
            Lebenssituation unserer Klienten abgestimmt sind. Offenheit,
            Transparenz und ein kontinuierlicher Dialog sind für uns
            selbstverständlich.
          </p>
        </div>
        <div className="lg:w-1/2">
          <CachedImage
            src={HeroImage}
            alt="Unser Leitbild"
            className="w-full max-h-[300px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="mt-12 space-y-6">
        <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
          Was uns auszeichnet
        </h3>
        <ul className="space-y-6 text-primary/90">
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Individuelle
            Pflegepläne: Keine Pflege von der Stange – wir gestalten unsere
            Leistungen flexibel nach Ihren Bedürfnissen.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Qualifiziertes
            Fachpersonal: Unsere Pflegekräfte sind bestens ausgebildet,
            engagiert und nehmen regelmäßig an Fortbildungen teil.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Zuverlässigkeit
            und Erreichbarkeit: Wir sind jederzeit für Sie da – sei es bei
            akuten Anliegen oder langfristiger Unterstützung.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Ganzheitlicher
            Ansatz: Neben der körperlichen Pflege legen wir großen Wert auf
            soziale Betreuung und emotionale Begleitung.
          </li>
        </ul>
      </div>

      {/* Values Section */}
      <div className="mt-12 space-y-6">
        <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
          Unsere Werte
        </h3>
        <ul className="space-y-6 text-primary/90">
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Wertschätzung
            gegenüber jedem Menschen
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Verantwortung im
            täglichen Handeln
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Verlässlichkeit
            in jeder Situation
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Herzlichkeit als
            Grundlage unserer Arbeit
          </li>
        </ul>
      </div>

      {/* Quality of Life Section */}
      <div className="mt-12 space-y-6">
        <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
          Gemeinsam für Ihre Lebensqualität
        </h3>
        <p className="text-primary/90 text-justify">
          Unser Ziel ist es, die Pflege so zu gestalten, dass sie Lebensfreude
          erhält und neue Perspektiven eröffnet. Denn echte Fürsorge bedeutet,
          das Leben unserer Klienten nachhaltig zu bereichern – Tag für Tag.
        </p>
      </div>
    </div>
  );
};

export default Leitbild;
