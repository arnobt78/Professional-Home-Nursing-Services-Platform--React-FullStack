/** Imprint (Impressum) legal page. Renders its own Navbar and Footer for full-page layout. */
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Imprint = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12 text-justify overflow-visible">
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-bold mt-6 mb-6 text-primary"
        >
          Impressum
        </motion.h1>
        <div className="relative overflow-hidden">
          <motion.div
            variants={slideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="space-y-12 text-primary/90 leading-relaxed"
          >
            {/* <p>
              <strong>Information according to § 5 TMG</strong>
              <br />
              Sernitas GmbH
              <br />
              University road 136
              <br />
              44799 Bochum
            </p>
            <p>
              Commercial register: HRB 19884
              <br />
              Register court: Local court Bochum
            </p>
            <p>
              <strong>Address Turkey:</strong>
              <br />
              İçerenköy Mah. Değirmenyolu Cad.
              <br />
              Kutay İş Merkezi B Blok K:4
              <br />
              Ataşehir / İstanbul
            </p>
            <p>
              Phone No.: +90 216 912 22 04
              <br />
              Fax: +90 216 740 09 88
            </p>
            <p>
              <strong>Represented by:</strong>
              <br />
              Dr. Ali YILDIZ
            </p>
            <p>
              <strong>Contact</strong>
              <br />
              Phone: +49 234 966 46 480
              <br />
              Fax: +49 234 966 45 602
              <br />
              E-Mail: info@sernitas.com
            </p>
            <p>
              Phone: +90 216 519 0083
              <br />
              Fax: +90 216 519 0073
            </p>
            <p>
              <strong>Sales tax ID</strong>
              <br />
              Sales tax identification number according to § 27 a
              Umsatzsteuergesetz: DE351180348
            </p>
            <p>
              <strong>Editorially responsible</strong>
              <br />
              Dr. Ali YILDIZ
            </p>
            <p>
              <strong>EU Dispute Resolution</strong>
              <br />
              The European Commission provides a platform for online dispute
              resolution (OS):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p>You can find our e-mail address in the imprint above.</p>
            <p>
              <strong>
                Consumer dispute resolution/universal dispute resolution body
              </strong>
              <br />
              We participate in a dispute resolution procedure before a consumer
              arbitration board. The universal arbitration board of the Zentrum
              für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein (
              <a
                href="https://www.verbraucher-schlichter.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline"
              >
                https://www.verbraucher-schlichter.de
              </a>
              ) is responsible.
            </p> */}
            <p>
              <strong>Angaben gemäß § 5 TMG</strong>
              <br />
              Sernitas GmbH
              <br />
              Universitätstraße 136
              <br />
              44799 Bochum
            </p>
            <p>
              Handelsregister: HRB 19884
              <br />
              Registergericht: Amtsgericht Bochum
            </p>
            <p>
              <strong>Adresse Türkei:</strong>
              <br />
              İçerenköy Mah. Değirmenyolu Cad.
              <br />
              Kutay İş Merkezi B Blok K:4
              <br />
              Ataşehir / İstanbul
            </p>
            <p>
              Telefonnummer: +90 216 912 22 04
              <br />
              Fax: +90 216 740 09 88
            </p>
            <p>
              <strong>Vertreten durch:</strong>
              <br />
              Dr. Ali YILDIZ
            </p>
            <p>
              <strong>Kontakt</strong>
              <br />
              Telefon: +49 234 966 46 480
              <br />
              Fax: +49 234 966 45 602
              <br />
              E-Mail: info@sernitas.com
            </p>
            <p>
              Telefon: +90 216 519 0083
              <br />
              Fax: +90 216 519 0073
            </p>
            <p>
              <strong>Umsatzsteuer-ID</strong>
              <br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz: DE351180348
            </p>
            <p>
              <strong>Redaktionell verantwortlich</strong>
              <br />
              Dr. Ali YILDIZ
            </p>
            <p>
              <strong>EU-Streitbeilegung</strong>
              <br />
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p>Unsere E-Mail-Adresse finden Sie im oben genannten Impressum.</p>
            <p>
              <strong>
                Verbraucherstreitbeilegung/allgemeine Streitbeilegungsstelle
              </strong>
              <br />
              Wir nehmen an einem Streitbeilegungsverfahren vor einer
              Verbraucherstreitschlichtungsstelle teil. Zuständig ist die
              universelle Schlichtungsstelle des Zentrum für Schlichtung e.V.,
              Straßburger Straße 8, 77694 Kehl am Rhein (
              <a
                href="https://www.verbraucher-schlichter.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline"
              >
                https://www.verbraucher-schlichter.de
              </a>
              ).
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Imprint;
