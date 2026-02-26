/** FAQ: Wissenswertes sub-page reusing AccordionSection for frequently asked questions. */
import AccordionSection from "../Accordion/AccordionSection";

const FAQ = () => {
  return (
    <>
      <div className="py-12 xl:pt-24 px-6 lg:px-12 xl:px-44 space-y-12">
        {/* Header Section */}
        <div className="space-y-6">
          <h2 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
            Häufige Fragen (FAQ)
          </h2>
          <p className="text-primary/90 text-justify">
            Pflege ist Vertrauenssache – und wir wissen, dass mit der
            Entscheidung für einen Pflegedienst viele Fragen verbunden sind.
            Deshalb haben wir für Sie die häufigsten Anliegen gesammelt und
            verständlich beantwortet.
          </p>
          <p className="text-primary/90 text-justify">
            Egal ob Sie sich über unser Leistungsangebot informieren möchten,
            Fragen zur Finanzierung und Pflegeberatung haben oder wissen wollen,
            wie Sie bei uns als Pflegekraft durchstarten können – bei Sernitas
            Care stehen Ihre Bedürfnisse im Mittelpunkt.
          </p>
          <p className="text-primary/90 text-justify">
            Wir möchten Ihnen mit dieser Übersicht Orientierung bieten und erste
            Antworten auf Ihre wichtigsten Fragen geben. Selbstverständlich
            stehen wir Ihnen auch persönlich für eine individuelle Beratung zur
            Seite – kostenlos und unverbindlich.
          </p>
        </div>
      </div>

      {/* Accordion Section */}
      <AccordionSection />

      <div className="py-12 px-6 lg:px-12 xl:px-44 space-y-12">
        {/* Contact Section */}
        <div className="text-center space-y-6">
          <h3 className="font-sour text-2xl xl:text-3xl font-bold text-primary/90">
            Nehmen Sie Kontakt zu unserem Team auf!
          </h3>
          <p className="text-primary/90">
            Ob Fachkraft, Gesundheitseinrichtung oder Organisation – wir von
            Sernitas freuen uns, von Ihnen zu hören.
          </p>
          <p className="text-primary/90 pb-6">
            Unsere Experten melden sich innerhalb kürzester Zeit bei Ihnen.
          </p>
          <a
            href="/contact"
            className="bg-primary/90 text-white px-6 py-3 rounded-2xl shadow-2xl hover:bg-green-700 mt-8 inline-block hover:scale-105 transition-transform duration-300"
          >
            Jetzt Kontakt aufnehmen →
          </a>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components -- default export is the FAQ component
export default FAQ;
