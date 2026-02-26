/** About Us sub-page: "Wir sind Sernitas" – intro content with image. */
import AboutImg4 from "../../assets/aboutPage/hero-4.jpg";

import CachedImage from "../CachedImage";

const WirSindSernitas = () => {
  return (
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44">
      {/* Text and Image Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="font-sour text-xl xl:text-2xl font-bold text-primary/90">
            Wir sind Sernitas
          </h2>

          <h2 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90 pb-6">
            Unsere Philosophie – Pflege, die den Menschen in den Mittelpunkt
            stellt
          </h2>

          <p className="text-primary/90 text-justify leading-relaxed">
            Bei Sernitas Care verstehen wir Pflege als Berufung – getragen von
            Menschlichkeit, Respekt und einem ganzheitlichen Blick auf den
            Menschen. Wir begleiten unsere Pflegekund*innen mit Würde,
            Einfühlungsvermögen und individueller Aufmerksamkeit, um ein
            selbstbestimmtes Leben in vertrauter Umgebung zu ermöglichen.
            Körperliche, seelische, soziale und spirituelle Bedürfnisse sehen
            wir als untrennbar verbunden – deshalb begegnen wir jedem Menschen
            in seiner Gesamtheit.
            <br />
            <br />
            Unser Handeln ist geprägt von ethischen Grundsätzen, Toleranz und
            kultureller Sensibilität. Dabei orientieren wir uns an modernen
            pflegewissenschaftlichen Standards und arbeiten eng mit Angehörigen
            und anderen Pflegebeteiligten zusammen, um Vertrauen und Transparenz
            zu schaffen. Wir glauben daran, dass echte Fürsorge durch Herz und
            Verstand entsteht – mit dem Ziel, Lebensqualität, Sicherheit und
            Menschlichkeit tagtäglich zu fördern.
          </p>

          <p className="text-primary/90 mt-4 text-justify leading-relaxed">
            Unsere Mission ist es, pflegebedürftigen Menschen ein würdevolles
            und selbstbestimmtes Leben zu ermöglichen. Wir setzen uns dafür ein,
            dass unsere Klienten die Unterstützung erhalten, die sie benötigen,
            um ihren Alltag in ihrer gewohnten Umgebung zu meistern. Dabei legen
            wir großen Wert auf individuelle Betreuung und eine vertrauensvolle
            Zusammenarbeit.
          </p>
        </div>
        <div className="lg:w-1/2">
          <CachedImage
            src={AboutImg4}
            alt="Wir sind Sernitas"
            className="w-full h-fit object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90 pt-12 pb-6">
        Gemeinsam für eine bessere Pflege
      </h3>
      <p className="text-primary/90 text-justify leading-relaxed">
        Sernitas Care steht für Vertrauen, Qualität und Menschlichkeit. Wir sind
        ein engagiertes Team, das sich darauf spezialisiert hat,
        pflegebedürftigen Menschen und ihren Familien die bestmögliche
        Unterstützung zu bieten. Unser Ziel ist es, ein Umfeld zu schaffen, in
        dem sich jeder sicher und geborgen fühlt.
      </p>
      <br />

      <p className="text-primary/90 text-justify leading-relaxed">
        Mit unserer langjährigen Erfahrung und unserem umfassenden Fachwissen
        setzen wir uns dafür ein, die Lebensqualität unserer Klienten zu
        verbessern. Wir glauben daran, dass Pflege mehr ist als nur eine
        Dienstleistung – es ist eine Herzensangelegenheit.
      </p>
    </div>
  );
};

export default WirSindSernitas;
