/** Services sub-page: Verhinderungspflege (relief care) content and images. */
import familyImage from "../../assets/servicePage/service-10.png";
import infoIcon from "../../assets/servicePage/service-11.png";

import CachedImage from "../CachedImage";

const Verhinderungspflege = () => {
  return (
    <div className="space-y-6 py-12 xl:py-24 px-6 lg:px-12 xl:px-44">
      {/* First Section: Heading and Right Image */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="font-sour text-xl xl:text-2xl font-bold text-primary/90">
            Verhinderungspflege
          </h2>
          <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
            Weil auch Angehörige mal eine Pause brauchen
          </h3>
          <p className="text-primary/90 text-justify">
            Wer sich täglich um einen lieben Menschen kümmert, leistet Enormes.
            Doch auch pflegende Angehörige brauchen manchmal eine Auszeit – sei
            es wegen Krankheit, Urlaub oder einfach zur Erholung. Genau dann
            springen wir ein: zuverlässig, herzlich und direkt bei Ihnen vor
            Ort.
          </p>
          <p className="text-primary/90 text-justify">
            Unsere Verhinderungspflege sorgt dafür, dass die Pflege weiterläuft,
            wenn Sie als Angehöriger mal nicht da sein können. Ob stundenweise
            oder über mehrere Tage – wir übernehmen die Versorgung zuhause, ganz
            nach Bedarf und in enger Abstimmung mit Ihnen.
          </p>
          <p className="text-primary/90 text-justify">
            Verhinderungspflege ist eine Leistung der Pflegeversicherung nach §
            39 SGB XI. Pflegebedürftige mit anerkanntem Pflegegrad haben
            Anspruch darauf, wenn die häusliche Pflege mindestens sechs Monate
            lang durch Angehörige oder andere nicht-professionelle
            Pflegepersonen erbracht wurde.
          </p>
          <p className="text-primary/90 text-justify">
            Das Team von Sernitas Care sorgt in dieser Zeit nicht nur für
            professionelle Unterstützung, sondern auch für Entlastung,
            Sicherheit und ein gutes Gefühl – für Pflegebedürftige und
            Angehörige gleichermaßen.
          </p>
        </div>
        <div className="lg:w-1/2">
          <CachedImage
            src={familyImage}
            alt="Family"
            className="w-full max-h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Second Section: Leistungen */}
      <div className="space-y-6 py-24">
        <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
          Welche Leistungen beinhaltet die Verhinderungspflege?
        </h3>
        <p className="text-primary/90">
          Der genaue Umfang der Leistungen im Rahmen einer Verhinderungspflege
          ist in § 39 SGB XI festgelegt. Im Wesentlichen handelt es sich um
          Leistungen der Haushaltshilfe:
        </p>
        <ul className="grid grid-cols-1 gap-4 text-primary/90 pl-5">
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Essen zubereiten
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Wäsche waschen
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Wohnung oder
            Haus sauber halten
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Einkaufen
          </li>
        </ul>
        <p className="text-primary/90 pt-8">
          Auch Leistungen der Grundpflege sind im Rahmen einer
          Verhinderungspflege möglich, in Form von Hilfe bei:
        </p>
        <ul className="grid grid-cols-1 gap-4 text-primary/90 pl-5">
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> An- und
            Auskleiden
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Haut-, Bart-,
            Haar- und Nagelpflege
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Essen und
            Trinken
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Betten, Lagern
            oder Transfers
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-700 font-bold">✔</span> Toilettengang
            sowie Inkontinenzversorgung
          </li>
        </ul>
        <p className="text-primary/90 pt-8">
          Lediglich ärztlich verordnete medizinische Behandlungspflege, wie
          Spritzen geben oder Wundversorgung, fällt nicht in den
          Leistungsbereich unseres Pflegedienstes bei einer Verhinderungspflege.
          Sämtliche anderen Betreuungs- und Pflegeaufgaben sind vollständig
          abgedeckt.
        </p>
      </div>

      {/* Third Section: Info Box */}
      <div
        className="flex flex-col lg:flex-row items-center rounded-3xl shadow-2xl border-2 border-primary/80"
        // style={{ borderColor: "#a0b106" }}
      >
        {/* Left Side: Image */}
        <div className="lg:w-1/4 flex">
          <CachedImage
            src={infoIcon}
            alt="Info Icon"
            className="w-full h-60 rounded-tl-3xl rounded-bl-3xl object-cover"
          />
        </div>

        {/* Right Side: Text */}
        <div className="lg:w-3/4 mt-2 mb-2 ml-12 mr-12 text-justify">
          <h4 className="font-sour text-xl font-bold text-green-700">
            Gut zu wissen!
          </h4>
          <p className="font-sour text-md text-primary/90">
            Die Kosten für die Verhinderungspflege werden bis zu 1.612 Euro
            jährlich und für maximal 6 Wochen durch die Pflegeversicherung (ab
            Pflegegrad 2) übernommen.
          </p>
          <p className="font-sour text-md text-primary/90">
            Die Leistungen für Verhinderungspflege und Kurzzeitpflege können
            miteinander kombiniert werden: Wenn die Leistungen für
            Kurzzeitpflege im Jahr nicht oder nicht vollständig abgerufen
            wurden, können bis zu 50 % – das sind 806 Euro – für die
            Verhinderungspflege genutzt werden. Die Leistungen für Ersatzpflege
            lassen sich so auf 2.418 Euro im Kalenderjahr erhöhen.
          </p>
        </div>
      </div>

      {/* Fourth Section: Beratung */}
      <div className="text-center space-y-6 py-24">
        <h3 className="font-sour text-xl xl:text-2xl font-bold text-primary/90">
          Nutzen Sie unsere persönliche Beratung
        </h3>
        <p className="text-primary/90 pb-8">
          Sie haben Fragen zur Verhinderungspflege? Oder möchten mehr über
          unsere Leistungen und die Kostenübernahme erfahren? Dann rufen Sie uns
          an! Wir beraten Sie kostenfrei und beantworten Ihre Fragen. Gemeinsam
          ermitteln wir mit Ihnen, welche Leistungen der Verhinderungspflege für
          Sie und Ihre pflegebedürftigen Angehörigen geeignet sind. So erhalten
          Sie und Ihre Angehörigen die Unterstützung, die Sie benötigen.
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

export default Verhinderungspflege;
