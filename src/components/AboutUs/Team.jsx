/** About Us sub-page: Team members grid with names and titles. */
import HRImg1 from "../../assets/aboutPage/hr-1.jpg";
import HRImg2 from "../../assets/aboutPage/hr-2.png";
import HRImg3 from "../../assets/aboutPage/hr-3.jpg";

import CachedImage from "../CachedImage";

const team = [
  {
    name: "Dr. Ali Yildiz",
    title: "CEO",
    img: HRImg1,
    link: "https://www.linkedin.com/in/ali-yildiz-09376a157/",
  },
  {
    name: "Sümeyya Yildiz",
    title: "Personalbuchhalterin",
    img: HRImg2,
    link: "https://www.linkedin.com/in/s%C3%BCmeyya-yildiz-9117272a4/",
  },
  {
    name: "Andre Piper",
    title: "Betriebsleiter",
    img: HRImg3,
    link: "https://www.linkedin.com/in/andre-pieper-7b208b24b/",
  },
];

const Team = () => {
  return (
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44">
      {/* Introduction Section */}
      <div className="space-y-6 items-center">
        <h2 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90">
          Lernen Sie die Menschen hinter Sernitas Care kennen
        </h2>
        <p className="text-primary/90 text-justify">
          Jeder Mensch verdient eine Pflege, die von Respekt, Vertrauen und
          echter Menschlichkeit geprägt ist. Genau dafür stehen die Menschen
          hinter Sernitas Care. Unser Team besteht aus engagierten Fachkräften,
          die ihre Leidenschaft für Pflege und Betreuung tagtäglich in ihre
          Arbeit einbringen.
        </p>
        <p className="text-primary/90 text-justify">
          Ob in der Geschäftsführung, der Organisation oder im persönlichen
          Austausch – unsere Mitarbeiter sind das Herzstück von Sernitas Care.
          Mit ihrer Fachkompetenz, Empathie und jahrelangen Erfahrung setzen sie
          sich dafür ein, dass unsere Klienten nicht nur betreut, sondern
          wirklich gesehen und verstanden werden.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <a
            key={index}
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-2xl overflow-hidden shadow-2xl group block"
          >
            {/* Background Image */}
            <CachedImage
              src={member.img}
              alt={member.name}
              className="w-full h-72 object-cover rounded-t-2xl"
            />

            {/* Overlay with Name and Title */}
            <div className="absolute inset-0 flex flex-col justify-end text-center">
              <div className="bg-black/30 p-2 group-hover:opacity-100 hover:scale-105 transition-opacity duration-300 rounded-b-2xl">
                <h3 className=" text-lg font-bold text-white">{member.name}</h3>
                <p className="text-md text-white">{member.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Conclusion Section */}
      <h2 className="font-sour text-3xl xl:text-4xl font-bold text-primary/90 text-center">
        Gemeinsam für Ihre Pflege
      </h2>
      <p className="pt-12 text-primary/90 text-justify">
        Wir glauben daran, dass wahre Qualität in der Pflege nur mit Herzblut
        und echter Hingabe erreicht werden kann. Lernen Sie unser Team kennen
        und entdecken Sie die Gesichter, die unsere Vision von liebevoller,
        hochwertiger Pflege Wirklichkeit werden lassen.
      </p>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h3 className="font-sour text-xl xl:text-2xl font-bold text-primary/90">
          Wir sind für Sie da!
        </h3>
        <p className="text-primary/90 mt-4 pb-8 text-justify">
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

export default Team;
