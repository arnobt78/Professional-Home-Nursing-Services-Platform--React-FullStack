/** Services sub-page: Behandlungspflege (treatment care) content and images. */
import { FaCheckCircle } from "react-icons/fa";

import rightImage from "../../assets/servicePage/service-7.png";
import commentImage from "../../assets/servicePage/service-8.png";
import logoRound from "../../assets/footerSection/logo-round.png";

import CachedImage from "../CachedImage";

const Behandlungspflege = () => {
  return (
    <div className="space-y-6 py-12 xl:py-24 px-6 lg:px-12 xl:px-44">
      {/* First Section: Heading and Right Image */}
      <div className="flex flex-col lg:flex-row items-center gap-8 pb-16 ">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="font-sour text-xl xl:text-2xl font-bold text-primary/90">
            Behandlungspflege
          </h2>
          <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
            Mehr als nur Pflege – medizinische Unterstützung für zuhause
          </h3>
          <p className="text-primary/90 text-justify">
            Manchmal braucht es mehr als Unterstützung im Alltag – nämlich
            medizinische Pflege direkt zuhause. Unsere Behandlungspflege sorgt
            dafür, dass ärztlich verordnete Maßnahmen sicher und professionell
            durchgeführt werden, bequem in Ihrer gewohnten Umgebung.
          </p>
          <p className="text-primary/90 text-justify">
            Ob Wundversorgung, Injektionen, Medikamentengabe oder Kontrolle von
            Blutdruck und Blutzucker – unsere examinierten Pflegekräfte führen
            ärztlich verordnete Maßnahmen zuverlässig und fachgerecht durch. Die
            Behandlungspflege ist eine Leistung der Krankenkasse nach § 37 SGB
            V. Sie wird vom Arzt verordnet und von uns nach Bedarf geplant und
            durchgeführt – flexibel, fachgerecht und ohne lange Wartezeiten.
          </p>
          <p className="text-primary/90 text-justify">
            Sernitas Care steht Ihnen zur Seite, wenn medizinische Pflege
            gebraucht wird – mit Kompetenz, Herz und Erfahrung.
          </p>
        </div>
        <div className="lg:w-1/2">
          <CachedImage
            src={rightImage}
            alt="Behandlungspflege"
            className="w-full max-h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Second Section: Comment Section */}
      <div className="bg-gray-200 py-16 px-6 lg:px-12 rounded-2xl shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center ">
          <div className="lg:w-1/3 flex justify-center">
            <CachedImage
              src={commentImage}
              alt="Comment"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
            />
          </div>
          <div className="lg:w-2/3 justify-center">
            <blockquote className=" font-sour text-xl italic text-primary/90 pb-4">
              „Als behandelnder Arzt, kann ich dank Sernitas Care sicher sein,
              dass meine Patienten auch zuhause medizinisch bestens versorgt
              sind.“
            </blockquote>
            <p className="font-ephesis text-primary/90 text-3xl font-bold tracking-wide">
              Dr. med. Frank Kabs
            </p>
            <p className="text-primary/90">Kooperierender Arzt aus Bochum</p>
          </div>
        </div>
      </div>

      {/* Third Section: Three Cards */}
      <div className="space-y-6 py-24">
        <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90 text-center mb-12">
          Die drei Arten der Behandlungspflege
        </h3>
        <div className="font-sour grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-white  bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            <h4 className="font-bold text-2xl pt-2">
              Medizinische Behandlungspflege auf ärztliche Verordnung
            </h4>
            <p className="text-xl text-gray-100 mt-2">
              Dazu gehören unter anderem die Medikamentengabe, das An- und
              Ausziehen von ärztlich verordneten Kompressionsstrümpfen,
              Zuckerkontrolle und Injektionen usw.
            </p>
          </div>
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            <h4 className="font-bold text-2xl pt-2">
              Krankenhaus vermeidungspflege
            </h4>
            <p className="text-xl text-gray-100 mt-2">
              In manchen Fällen wird die Behandlungspflege verordnet, um einen
              Krankenhausaufenthalt zu vermeiden oder zu verkürzen.
            </p>
          </div>
          <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
            <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
            <h4 className="font-bold text-2xl pt-2">Sicherungspflege</h4>
            <p className="text-xl text-gray-100 mt-2">
              Diese verordnet der Arzt, um sicherzustellen, dass der Patient zu
              Hause dieselbe umfassende Versorgung wie im Krankenhaus erhält.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Section: FAQ Box */}
      <div className="bg-transparent p-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side: Text */}
        <div className="lg:w-2/3 space-y-6">
          <h4 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
            Unser medizinisches Pflegeangebot im Überblick
          </h4>
          <p className="text-primary/90">
            Die medizinische Behandlungspflege zu Hause übernehmen
            ausschließlich qualifizierte Mitarbeiter. Zu deren Tätigkeiten
            zählen unter anderem:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary/90 list-disc pl-5">
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Verabreichung
              von Medikamenten bzw. Medikamentengabe
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>
              An- und Ausziehen von ärztlich verordneten Kompressionsstrümpfen
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>
              Blutdruckmessung und Blutzuckermessung
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Zuckerkontrolle
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Injektionen
              s.c. und i.m.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Wundverbände /
              Wundversorgung
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Katheterwechsel
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Portversorgung
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Stomabehandlung
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Postoperative
              Versorgung
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>
              Sonderversorgung und Ernährung
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>
              Anlegen und Wechseln von Wundverbänden oder stützenden und
              stabilisierenden Verbänden
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Anlegen oder
              Abnehmen eines Kompressionsverbandes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>
              Dekubitusbehandlung
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Drainagen
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Einläufe und
              Infusionen
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-700 font-bold">✔</span>Inhalation
            </li>
          </ul>
        </div>

        {/* Right Side: Logo and Contact */}
        <div className="lg:w-1/3 bg-secondary/20 p-8 rounded-[5rem] shadow-md flex flex-col">
          {/* Right Side: Logo and Heading */}
          <div className="relative py-12 flex justify-between">
            <h4 className="font-sour text-xl font-bold text-green-700 mt-2">
              Sie haben Fragen?
            </h4>
            <CachedImage
              src={logoRound}
              alt="Logo"
              className="absolute -top-12 -right-12 w-32 h-32 object-contain"
            />
          </div>
          <p className="text-primary/90 mt-1">
            Wenn Sie Fragen zu unseren Serviceleistungen, wie zum Beispiel auch
            der <strong>Betreuung zu Hause</strong> und der{" "}
            <strong>Haushaltshilfe nach der Geburt</strong>, oder weitere
            Wünsche haben, können Sie gerne unser Kontaktformular nutzen.
          </p>
          <p className="text-primary/90 mt-1">
            Wir werden uns umgehend mit Ihnen in Verbindung setzen. Oder rufen
            Sie uns einfach an unter: <strong>0234 / 966 46 480</strong>.
          </p>
          <a
            href="/contact"
            className="items-center text-center bg-primary/90 text-white px-4 py-3 rounded-2xl shadow-2xl hover:bg-green-700 mt-8 hover:scale-105 transition-transform duration-300"
          >
            Jetzt Kontakt aufnehmen →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Behandlungspflege;
