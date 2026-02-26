/** WelcomeSection: Homepage intro block "Herzlich Willkommen bei Sernitas Care" with image and text. */
import { motion } from "framer-motion";

import teamImage from "../../assets/homePage/service-3.jpg";

import CachedImage from "../CachedImage";

const WelcomeSection = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="font-sour text-primary/90 text-xl lg:text-2xl font-medium mb-4">
            Herzlich Willkommen bei Sernitas Care
          </h2>
          <h1 className="font-sour text-primary/90 text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Professionelle Pflege & Betreuung mit interkulturellem Verständnis
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CachedImage
              src={teamImage}
              alt="Sernitas Team"
              className="rounded-2xl shadow-2xl object-cover w-[600px] h-[600px]"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-primary/90 text-xl md:text-2xl font-semibold mb-4">
              Sernitas Care – Ihre vertrauensvolle Unterstützung im Alltag
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-primary/90 mb-4 text-justify">
              Bei Sernitas Care bieten wir Ihnen eine Vielzahl an
              Dienstleistungen, die individuell auf Ihre Bedürfnisse abgestimmt
              sind. Unser Ziel ist es, Ihnen ein selbstbestimmtes, würdevolles
              Leben in Ihrer gewohnten Umgebung zu ermöglichen – ganz gleich, ob
              es um kleine Alltagshelfer oder um umfassende Pflege geht.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-primary/90 mb-4 text-justify">
              Mit unseren Pflege- und Betreuungsleistungen unterstützen wir Sie
              in den Bereichen, die im Alltag besonders wichtig sind:{" "}
              <span className="font-semibold text-secondary">Körperpflege</span>
              , <span className="font-semibold text-secondary">Ernährung</span>{" "}
              und{" "}
              <span className="font-semibold text-secondary">Mobilität</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-primary/90 text-justify">
              Wir sind da, um Ihnen bei den täglichen Aufgaben zur Seite zu
              stehen und sorgen mit viel Einfühlungsvermögen dafür, dass Sie
              sich rundum wohl und sicher fühlen – zu Hause eben.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
