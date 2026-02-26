/** Services sub-page: 24h Rufbereitschaft (on-call) content and image. */
import serviceImage from "../../assets/servicePage/service-15.png";

import CachedImage from "../CachedImage";

const Rufbereitschaft = () => {
  return (
    <div className="space-y-6 py-12 xl:py-24 px-6 lg:px-12 xl:px-44">
      {/* First Section: Text and Image */}
      <div className="flex flex-col lg:flex-row items-center gap-8 ">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="font-sour text-xl xl:text-2xl font-bold text-primary/90">
            24-STUNDEN-PFLEGE im Revier
          </h2>
          <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
            PFLEGEBEDÜRFTIGKEIT STETS IN GUTEN HÄNDEN
          </h3>
          <p className="text-primary/90 text-justify">
            Ob altersbedingt oder aus gesundheitlichen Gründen: Früher oder
            später ist es vielen Menschen unmöglich, sich um sich selbst und den
            eigenen Haushalt zu kümmern. Können Angehörige pflegebedürftige
            Familienmitglieder nicht in ausreichendem Maße betreuen, leisten
            Pflegedienste die nötige Unterstützung – falls erforderlich, bis zu
            24 Stunden am Tag.
          </p>
        </div>
        <div className="lg:w-1/2">
          <CachedImage
            src={serviceImage}
            alt="24-Stunden-Pflege"
            className="w-full max-h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Second Section: Vorteile */}
      <div className="space-y-6 py-24">
        <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
          VORTEILE DER 24-STUNDEN-PFLEGE FÜR DIE PFLEGE IM EIGENEN ZUHAUSE
        </h3>
        <p className="text-primary/90 text-justify">
          Für Betroffene und ihre Angehörigen bietet die 24-Stunden-Pflege
          zahlreiche Vorteile. Bei dieser Form der Pflege im eigenen Zuhause ist
          es üblich, dass die Pflegekraft jederzeit vor Ort ist und sich
          ausschließlich um die pflegebedürftige Person kümmert. Somit schließt
          eine 24-Stunden-Pflege eine individuell ausgerichtete Versorgung ein.
        </p>
        <p className="text-primary/90 text-justify">
          Da unser ambulanter Pflegedienst aus Ruhr diese Form der Pflege
          Zuhause bereits seit langer Zeit anbietet, arbeiten pflegebedürftige
          Personen und ihre Angehörigen automatisch mit einem zuverlässigen
          Partner über einen langen Zeitraum hinweg zusammen. Zudem ist eine
          24-Stunden-Betreuung trotz des großen Leistungsumfangs oftmals nicht
          kostenintensiver als vergleichbare Pflegeangebote in Pflegeheimen.
          Dennoch können Pflegebedürftige im eigenen Zuhause verweilen.
        </p>
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

export default Rufbereitschaft;
