/** General terms (AGB) legal page. Renders its own Navbar and Footer. */
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const GeneralTerms = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12 text-justify overflow-visible ">
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-3xl font-bold mt-6 mb-6 text-primary"
        >
          Allgemeine Geschäftsbedingungen
        </motion.h1>
        <motion.div
          variants={slideUp(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="space-y-12 text-primary/90 leading-relaxed overflow-visible"
        >
          {/* <p>
            <strong>AGB</strong>
            <br />
            General Terms and Conditions of the company Sernitas GmbH
          </p>
          <p>
            <strong>
              1 Applicability to entrepreneurs and definition of terms
            </strong>
            <br />
            (1) The following General Terms and Conditions of Business apply to
            all deliveries between us and a consumer in the version valid at the
            time of the order.
          </p>
          <p>
            A consumer is any natural person who enters into a legal transaction
            for purposes that can predominantly be attributed neither to his
            commercial nor to his independent professional activity (§ 13 BGB).
          </p>
          <p>
            <strong>
              2 Conclusion of a contract, storage of the contract text
            </strong>
            <br />
            (1) The following regulations on the conclusion of the contract
            apply to orders placed via our Internet store{" "}
            <a
              href="https://www.sernitas-hr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.sernitas-hr.com
            </a>
            .
          </p>
          <p>
            (2) In the event of contract conclusion, the contract is concluded
            with
          </p>
          <p>
            Sernitas Ltd.
            <br />
            Ali Yıldız
            <br />
            University Street 136
            <br />
            D-44799 Bochum
            <br />
            Commercial register: HRB 19884
            <br />
            Register court: Local court Bochum
          </p>
          <p>
            Address Turkey:
            <br />
            İçerenköy Mah. Değirmenyolu Cad.
            <br />
            Kutay İş Merkezi B Blok K:4
            <br />
            Ataşehir / İstanbul
            <br />
            Phone No.: +90 216 912 22 04
            <br />
            Fax: +90 216 740 09 88
          </p>
          <p>
            (3) The presentation of goods in our Internet store does not
            constitute a legally binding contract offer on our part, but is only
            a non-binding invitation to the consumer to order goods. By ordering
            the desired goods, the consumer makes a binding offer to conclude a
            purchase contract.
          </p>
          <p>
            The acceptance of the offer is made in writing or in text form or by
            sending the ordered goods within one week. After the fruitless
            expiry of this period, the offer shall be deemed to have been
            rejected.
          </p>
          <p>
            (4) Upon receipt of an order in our Internet store, the following
            provisions shall apply: The consumer makes a binding offer to enter
            into a contract by successfully completing the order procedure
            provided in our Internet store.
          </p>
          <p>
            The order is placed in the following steps:
            <br />
            1) Selection of the desired service
            <br />
            2) Confirmation by clicking the “Add to shopping cart” buttons
            <br />
            3) Checking the data in the shopping cart
            <br />
            4) Pressing the button “proceed to checkout”
            <br />
            5) Login to the Internet store after registration and entering the
            login data (e-mail address and password).
            <br />
            6) Checking again or correction of the respective entered data.
            <br />
            7) Binding sending of the order by clicking on the button “order
            with costs” or “buy”.
          </p>
          <p>
            Before the binding submission of the order, the consumer can, after
            checking his details, return to the Internet page on which the
            customer’s details are recorded and correct input errors or cancel
            the order process by closing the Internet browser by pressing the
            “Back” button contained in the Internet browser used by him. We
            confirm the receipt of the order immediately by an automatically
            generated e-mail (confirmation of receipt). This does not constitute
            acceptance of the offer. The acceptance of the offer is made in
            writing, in text form or by sending the ordered goods within one
            week.
          </p>
          <p>
            (5) Storage of the contract text for orders via our Internet store:
            We store the contract text and send you the order data and our terms
            and conditions by e-mail. You can also view the terms and conditions
            at any time at{" "}
            <a
              href="https://www.sernitas-hr.com/agb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.sernitas-hr.com/agb
            </a>
            . Your past orders can be viewed in our customer area under My
            Account -&gt; My Orders.
          </p>
          <p>
            <strong>3 Prices, shipping costs, payment, due date</strong>
            <br />
            (1) The stated prices include the statutory sales tax and other
            price components. In addition, there are any shipping costs.
          </p>
          <p>
            (2) The consumer has the option of payment by instant bank transfer,
            PayPal, credit card (Visa, Mastercard, American Express).
          </p>
          <p>
            <strong>4 Warranty</strong>
            <br />
            The legal warranty regulations apply.
          </p>
          <p>
            <strong>5 Contract language</strong>
            <br />
            The contract language is exclusively German.
          </p> */}
          <p>
            <strong>AGB</strong>
            <br />
            Allgemeine Geschäftsbedingungen der Firma Sernitas GmbH
          </p>
          <p>
            <strong>
              1 Geltungsbereich gegenüber Unternehmern und Begriffsbestimmungen
            </strong>
            <br />
            (1) Die nachfolgenden Allgemeinen Geschäftsbedingungen gelten für
            sämtliche Lieferungen zwischen uns und einem Verbraucher in der zum
            Zeitpunkt der Bestellung gültigen Fassung.
          </p>
          <p>
            Ein Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft
            zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch
            ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können
            (§ 13 BGB).
          </p>
          <p>
            <strong>2 Vertragsschluss, Speicherung des Vertragstextes</strong>
            <br />
            (1) Die folgenden Regelungen zum Vertragsschluss gelten für
            Bestellungen, die über unseren Onlineshop{" "}
            <a
              href="https://www.sernitas-hr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.sernitas-hr.com
            </a>
            getätigt werden.
          </p>
          <p>
            (2) Im Falle eines Vertragsschlusses kommt der Vertrag zustande mit
          </p>
          <p>
            Sernitas GmbH
            <br />
            Ali Yıldız
            <br />
            Universitätstraße 136
            <br />
            D-44799 Bochum
            <br />
            Handelsregister: HRB 19884
            <br />
            Registergericht: Amtsgericht Bochum
          </p>
          <p>
            Adresse Türkei:
            <br />
            İçerenköy Mah. Değirmenyolu Cad.
            <br />
            Kutay İş Merkezi B Blok K:4
            <br />
            Ataşehir / İstanbul
            <br />
            Telefonnummer: +90 216 912 22 04
            <br />
            Fax: +90 216 740 09 88
          </p>
          <p>
            (3) Die Darstellung der Waren in unserem Onlineshop stellt kein
            rechtlich bindendes Angebot unsererseits dar, sondern ist lediglich
            eine unverbindliche Einladung an den Verbraucher, Waren zu
            bestellen. Durch die Bestellung der gewünschten Ware gibt der
            Verbraucher ein verbindliches Angebot zum Abschluss eines
            Kaufvertrages ab.
          </p>
          <p>
            Die Annahme des Angebots erfolgt schriftlich oder in Textform oder
            durch Versand der bestellten Ware innerhalb einer Woche. Nach
            fruchtlosem Ablauf dieser Frist gilt das Angebot als abgelehnt.
          </p>
          <p>
            (4) Nach Eingang einer Bestellung in unserem Onlineshop gelten
            folgende Bestimmungen: Der Verbraucher gibt durch das erfolgreiche
            Durchlaufen des Bestellvorgangs in unserem Onlineshop ein
            verbindliches Angebot zum Vertragsschluss ab.
          </p>
          <p>
            Die Bestellung erfolgt in den folgenden Schritten:
            <br />
            1) Auswahl der gewünschten Leistung
            <br />
            2) Bestätigung durch Klick auf den Button “In den Warenkorb”
            <br />
            3) Überprüfung der Daten im Warenkorb
            <br />
            4) Drücken des Buttons “Zur Kasse gehen”
            <br />
            5) Anmeldung im Onlineshop nach Registrierung und Eingabe der
            Anmeldedaten (E-Mail-Adresse und Passwort).
            <br />
            6) Erneute Überprüfung oder Korrektur der eingegebenen Daten.
            <br />
            7) Verbindliche Absendung der Bestellung durch Klick auf den Button
            “Bestellung mit Kosten” oder “Kaufen”.
          </p>
          <p>
            Vor der verbindlichen Abgabe der Bestellung kann der Verbraucher
            nach Überprüfung seiner Angaben auf die Internetseite zurückkehren,
            auf der die Kundendaten erfasst werden, und Eingabefehler
            korrigieren oder den Bestellvorgang durch Schließen des
            Internetbrowsers abbrechen, indem er den “Zurück”-Button des
            verwendeten Browsers drückt. Wir bestätigen den Eingang der
            Bestellung unmittelbar durch eine automatisch erzeugte E-Mail
            (Bestellbestätigung). Dies stellt noch keine Annahme des Angebots
            dar. Die Annahme des Angebots erfolgt schriftlich, in Textform oder
            durch Versand der bestellten Ware innerhalb einer Woche.
          </p>
          <p>
            (5) Speicherung des Vertragstextes bei Bestellungen über unseren
            Onlineshop: Wir speichern den Vertragstext und senden Ihnen die
            Bestelldaten und unsere AGB per E-Mail zu. Die AGB können Sie
            jederzeit unter{" "}
            <a
              href="https://www.sernitas-hr.com/agb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.sernitas-hr.com/agb
            </a>
            einsehen. Ihre bisherigen Bestellungen können Sie in unserem
            Kundenbereich unter Mein Konto -&gt; Meine Bestellungen einsehen.
          </p>
          <p>
            <strong>3 Preise, Versandkosten, Zahlung, Fälligkeit</strong>
            <br />
            (1) Die angegebenen Preise verstehen sich inklusive der gesetzlichen
            Mehrwertsteuer und weiterer Preisbestandteile. Hinzu kommen etwaige
            Versandkosten.
          </p>
          <p>
            (2) Der Verbraucher hat die Möglichkeit, per Sofortüberweisung,
            PayPal, Kreditkarte (Visa, Mastercard, American Express) zu zahlen.
          </p>
          <p>
            <strong>4 Gewährleistung</strong>
            <br />
            Es gelten die gesetzlichen Gewährleistungsregelungen.
          </p>
          <p>
            <strong>5 Vertragssprache</strong>
            <br />
            Die Vertragssprache ist ausschließlich Deutsch.
          </p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default GeneralTerms;
