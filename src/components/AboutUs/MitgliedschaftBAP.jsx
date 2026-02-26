/** About Us sub-page: Mitgliedschaft BAP (BAP membership) content. */
const MitgliedschaftBAP = () => {
  return (
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12">
      {/* Header Section */}
      <div className="space-y-6">
        <h2 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
          Mitgliedschaft im bpa
        </h2>
        <h3 className="font-sour text-2xl xl:text-3xl font-bold text-primary/90">
          Gemeinsam stark für eine bessere Pflege
        </h3>
        <p className="text-primary/90 text-justify">
          Als stolzes Mitglied im Bundesverband privater Anbieter sozialer
          Dienste e.V. (bpa) ist Sernitas Care Teil eines starken Netzwerks, das
          sich mit voller Kraft für die Interessen der privaten sozialen
          Dienstleister in Deutschland einsetzt.
        </p>
        <p className="text-primary/90 text-justify">
          Der bpa vertritt über 14.000 Mitgliedseinrichtungen aus den Bereichen
          Pflege, Eingliederungshilfe sowie Kinder- und Jugendhilfe. Mit
          gebündeltem Know-how, politischer Schlagkraft und einem klaren Fokus
          auf Qualität und Innovation gestaltet der Verband aktiv die Zukunft
          der Pflegebranche mit.
        </p>
      </div>

      {/* Why We Are Members Section */}
      <div className="space-y-6">
        <h3 className="font-sour text-2xl xl:text-3xl font-bold text-primary/90">
          Warum wir Mitglied sind
        </h3>
        <ul className="space-y-6 text-primary/90">
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> von aktuellen
            Fachinformationen und rechtlichen Entwicklungen zu profitieren,
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> an bedeutenden
            Fachveranstaltungen, Seminaren und Kongressen teilzunehmen,
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> uns mit anderen
            engagierten Anbietern sozialer Dienstleistungen zu vernetzen,
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> an politischen
            Entscheidungsprozessen mitzuwirken und unsere Interessen
            wirkungsvoll zu vertreten.
          </li>
        </ul>
        <p className="text-primary/90 text-justify">
          Gerade in Zeiten des Wandels – geprägt von Themen wie Digitalisierung,
          künstlicher Intelligenz und Fachkräftesicherung – ist eine starke
          Interessenvertretung wichtiger denn je. Durch den Austausch mit dem
          Verband und seinen Mitgliedern können wir unsere Dienstleistungen für
          unsere Klienten kontinuierlich weiterentwickeln und zukunftssicher
          gestalten.
        </p>
      </div>

      {/* Joint Efforts Section */}
      <div className="space-y-6">
        <h3 className="font-sour text-2xl xl:text-3xl font-bold text-primary/90">
          Gemeinsam mehr erreichen
        </h3>
        <p className="text-primary/90 text-justify">
          Mit unserer Mitgliedschaft im bpa setzen wir ein Zeichen:
        </p>
        <ul className="space-y-4 text-primary/90">
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Für eine
            hochwertige, menschliche und nachhaltige Pflege.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Für bessere
            Rahmenbedingungen in der Sozialwirtschaft.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Für eine starke
            Gemeinschaft von Dienstleistern, die Verantwortung übernehmen.
          </li>
        </ul>
      </div>

      {/* About BPA Section */}
      <div className="space-y-6">
        <h3 className="font-sour text-2xl xl:text-3xl font-bold text-primary/90">
          Über den bpa
        </h3>
        <p className="text-primary/90 text-justify">
          Der bpa ist die größte Interessenvertretung privater sozialer
          Dienstleister in Deutschland:
        </p>
        <ul className="space-y-4 text-primary/90">
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Über 14.000
            Mitgliedseinrichtungen
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Mehr als 424.000
            Arbeits- und Ausbildungsplätze
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Über 31
            Milliarden Euro Investitionskapital
          </li>
        </ul>
        <p className="text-primary/90 text-justify">
          Er verbindet seine Mitglieder mit der Politik, Wirtschaft und
          Wissenschaft und bietet praktische Unterstützung durch
          Fachinformationen, Musterverträge, Beratungsangebote und Schulungen.
        </p>
        <p className="text-primary/90 text-justify pb-6">
          Mehr Informationen unter:{" "}
          <a
            href="https://www.bpa.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-medium hover:underline"
          >
            www.bpa.de
          </a>
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="text-center">
        <button
          onClick={() => window.open("https://www.bpa.de/", "_blank")}
          className="bg-primary/90 text-white px-6 py-3 rounded-2xl shadow-2xl hover:bg-green-700 mt-8 inline-block hover:scale-105 transition-transform duration-300"
        >
          Mehr erfahren →
        </button>
      </div>
    </div>
  );
};

export default MitgliedschaftBAP;
