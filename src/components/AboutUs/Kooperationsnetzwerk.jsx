/** About Us sub-page: Kooperationsnetzwerk (cooperation network) content. */
const Kooperationsnetzwerk = () => {
  return (
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12">
      {/* Introduction Section */}
      <div className="space-y-6">
        <h2 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
          EIN TEIL VON SERNITAS!
        </h2>
        <h3 className="font-sour text-2xl xl:text-3xl font-bold text-primary/90">
          Kooperationen, die den Unterschied machen
        </h3>
        <p className="text-primary/90 text-justify">
          Bei Sernitas Care glauben wir daran, dass echte Innovation und
          nachhaltige Qualität nur durch starke Partnerschaften möglich sind.
          Gemeinsam mit unserem Kooperationsnetzwerk schaffen wir es, Pflege neu
          zu denken und Dienstleistungen auf ein noch höheres Niveau zu bringen.
        </p>
        <p className="text-primary/90 text-justify">
          Unsere Partner kommen aus verschiedenen Bereichen – Pflege, Medizin,
          Technologie, Bildung und mehr. Sie alle teilen unsere Werte:
          Menschlichkeit, Kompetenz und Innovationskraft. Durch die enge
          Zusammenarbeit profitieren unsere Klienten von einem breiten Spektrum
          an Fachwissen, modernsten Technologien und individuellen
          Lösungsansätzen.
        </p>
      </div>

      {/* What Connects Us Section */}
      <div className="space-y-6">
        <h3 className="font-sour text-2xl xl:text-3xl font-bold text-primary/90">
          Was uns verbindet:
        </h3>
        <ul className="space-y-4 text-primary/90">
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Gemeinsames Ziel
            einer besseren Gesundheitsversorgung
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Austausch von
            Wissen, Erfahrung und Best Practices
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Entwicklung
            zukunftsweisender Projekte und innovativer Pflegekonzepte
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Stärkung
            regionaler Netzwerke und lokaler Versorgungsstrukturen
          </li>
        </ul>
      </div>

      {/* Vision Section */}
      <div className="space-y-6">
        <h3 className="font-sour text-2xl xl:text-3xl font-bold text-primary/90">
          Unsere Vision:
        </h3>
        <p className="text-primary/90 text-justify">
          Ein Netzwerk aus engagierten Partnern, die mit Leidenschaft daran
          arbeiten, das Leben von Menschen nachhaltig zu verbessern – heute und
          in der Zukunft.
        </p>
      </div>

      {/* Card Section */}
      <div className="space-y-6">
        <h3 className="font-sour text-2xl xl:text-3xl font-bold text-center text-primary/90 py-12">
          Für Sie im Überblick
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col h-full">
            <h4 className="text-lg font-bold text-primary/90">
              Einzelpartnerschaft
            </h4>
            <p className="text-primary/90 mt-2">
              Sie verfügen über gute Kontakte im Gesundheitssektor und möchten
              uns Ihre Ressourcen zur Verfügung stellen, die wir nutzbringend
              einsetzen können. Lassen Sie uns gemeinsam herausfinden, wie wir
              von einer Zusammenarbeit mit Ihnen profitieren können.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col h-full">
            <h4 className="text-lg font-bold text-primary/90">
              Beratungsorganisationen und Agenturen
            </h4>
            <p className="text-primary/90 mt-2">
              Sie sind ein Berater oder eine Agentur im Bereich der
              internationalen Personalbeschaffung. Wir können zusammenarbeiten
              und eine Strategie zum gegenseitigen Nutzen verfolgen. Lassen Sie
              uns darüber sprechen, wie wir uns gegenseitig stärken können.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col h-full">
            <h4 className="text-lg font-bold text-primary/90">Sprachschulen</h4>
            <p className="text-primary/90 mt-2">
              Sie sind eine Sprachschule, die Sprachkurse auf den Niveaustufen
              A1 bis B2 anbietet und möchten mit uns kooperieren? Dann
              kontaktieren Sie uns. Wir freuen uns auf Ihre Anfrage.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col h-full">
            <h4 className="text-lg font-bold text-primary/90">
              Bildungseinrichtungen
            </h4>
            <p className="text-primary/90 mt-2">
              Sie sind eine Universität, Hochschule, Berufsschule oder ein
              Ausbildungsinstitut im Gesundheitssektor. Wir würden uns freuen,
              mit Ihnen über eine gemeinsame internationale Zusammenarbeit zu
              diskutieren, wie wir Ihre Einrichtung unterstützen und bereichern
              können.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="pt-12 space-y-6">
        <h3 className="font-sour text-2xl xl:text-3xl font-bold text-primary/90">
          Werden Sie Teil unseres Netzwerks
        </h3>
        <p className="text-primary/90 text-justify">
          Möchten Sie gemeinsam mit uns neue Wege in der Pflege gehen? Ob als
          Pflegeeinrichtung, medizinischer Dienstleister, Bildungsträger oder
          Technologiepartner – wir freuen uns über jede Kooperation, die unsere
          Vision teilt.
        </p>
        <p className="text-primary/90 text-justify pb-8">
          Kontaktieren Sie uns noch heute und lassen Sie uns gemeinsam die
          Zukunft der Pflege gestalten!
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

export default Kooperationsnetzwerk;
