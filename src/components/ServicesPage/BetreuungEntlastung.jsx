/** Services sub-page: Betreuungs- und Entlastungsleistungen. Includes ReviewSectionService and HomeConsultationSection. */
import ReviewSectionService from "../ReviewSection/ReviewSectionService";
import HomeConsultationSection from "../HomePage/HomeConsultationSection";

import { FaCheckCircle } from "react-icons/fa";

import infoIcon from "../../assets/servicePage/service-11.png";
import serviceImage from "../../assets/servicePage/service-13.png";

import CachedImage from "../CachedImage";

const BetreuungEntlastung = () => {
  return (
    <>
      <div className="space-y-6 py-12 xl:pt-24 px-6 lg:px-12 xl:px-44">
        {/* First Section: Text and Image */}
        <div className="flex flex-col lg:flex-row items-center gap-8 pb-24">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="font-sour text-xl xl:text-2xl font-bold text-primary/90">
              Betreuungs- und Entlastungsleistungen
            </h2>
            <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
              Den Alltag gemeinsam leichter machen
            </h3>
            <p className="text-primary/90 text-justify">
              Manchmal sind es nicht nur die großen Dinge, die belasten –
              sondern die vielen kleinen Aufgaben im Alltag. Wenn Organisation,
              Haushalt oder einfach das Gefühl von Einsamkeit zur
              Herausforderung werden, stehen wir Ihnen mit Herz und Zeit zur
              Seite.
            </p>
            <p className="text-primary/90 text-justify">
              Unsere Betreuungs- und Entlastungsleistungen bieten genau die
              Unterstützung, wo sie gebraucht wird: bei Spaziergängen,
              gemeinsamen Gesprächen, der Begleitung zu Terminen oder auch bei
              alltäglichen Dingen wie dem Einkauf oder leichten
              Haushaltstätigkeiten. Damit der Alltag leichter wird – für
              Pflegebedürftige und Angehörige.
            </p>
            <p className="text-primary/90 text-justify">
              Diese Leistungen können von allen Pflegebedürftigen mit
              anerkanntem Pflegegrad in Anspruch genommen werden und werden
              durch den Entlastungsbetrag nach § 45b SGB XI finanziert. Sie
              dienen der Aktivierung, der sozialen Teilhabe und der spürbaren
              Entlastung pflegender Angehöriger.
            </p>
            <p className="text-primary/90 text-justify">
              Das Team von Sernitas Care begleitet Sie zuverlässig, freundlich
              und mit einem offenen Ohr – damit Zuhause ein Ort bleibt, an dem
              man sich wohl und aufgehoben fühlt.
            </p>
          </div>
          <div className="lg:w-1/2">
            <CachedImage
              src={serviceImage}
              alt="Betreuung und Entlastung"
              className="w-full max-h-[400px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6 py-12 px-6 lg:px-12 xl:px-32">
        {/* Second Section: Review Section */}
        <ReviewSectionService />
      </div>

      <div className="space-y-6 py-12 px-6 lg:px-12 xl:px-44">
        {/* Third Section: Additional Services */}
        <div className="space-y-6 py-24">
          <h3 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90 text-center">
            Diese Zusatzleistungen bieten wir an
          </h3>
          <p className="text-primary/90 text-center pb-12">
            Sernitas Care bietet verschiedene Zusatzleistungen an, die nicht
            Teil der Grundpflege und Behandlungspflege sind. Bei Bedarf können
            unsere Patienten Leistungen zur hauswirtschaftlichen Versorgung
            buchen, die den Ablauf des täglichen Lebens erleichtern. Diese
            werden entweder als Pflegesachleistung über die Pflegekasse oder als
            Privatleistung abgerechnet.
          </p>
          <div className="font-sour text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Spaziergänge & Bewegungsangebote
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Alltagsbegleitung & Gesellschaft
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Begleitung zu Terminen oder Einkäufen
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Unterstützung im Haushalt
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Entlastung pflegender Angehöriger
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Gemeinsame soziale Aktivitäten
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Aufstehen, Aufsetzen und Liegen
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Unterstützung beim Toilettengang
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              An- und Auskleiden
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Hilfe bei der Nahrungs- & Flüssigkeitsaufnahme
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Gemeinsames Spielen, Basteln oder Musikhören
            </div>
            <div className="text-white bg-primary/80 p-12 rounded-2xl text-center shadow-2xl flex flex-col items-center">
              <FaCheckCircle className="text-gray-100 text-3xl flex-shrink-0" />
              Versorgung von Haustieren
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 py-12 px-6 lg:px-12 xl:px-44">
        {/* Fourth Section: Info Box */}
        <div
          className="flex flex-col lg:flex-row items-center rounded-3xl shadow-lg border-2 border-primary/80"
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
              Die Kosten für die Seniorenbetreuung können – sofern ein
              Pflegegrad vorliegt – im Rahmen der{" "}
              <strong>Verhinderungspflege</strong> oder zusätzlicher Betreuungs-
              und Entlastungsleistungen von der Pflegekasse übernommen werden.
            </p>
            <p className="font-sour text-md text-primary/90">
              Wenn Sie wissen möchten, wie man Leistungen der Pflegeversicherung
              beantragt, schauen Sie doch einmal auf der Seite{" "}
              <strong>Pflegebegutachtung</strong> vorbei.
            </p>
          </div>
        </div>
      </div>

      {/* Fifth Section: Review Section */}
      <HomeConsultationSection />
    </>
  );
};

export default BetreuungEntlastung;
