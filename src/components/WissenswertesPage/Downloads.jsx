/** Downloads: Wissenswertes sub-page listing downloadable materials (brochures, links). */
import { FiDownload } from "react-icons/fi";

const Downloads = () => {
  const sections = [
    {
      title: "Infomaterialien Sernitas",
      items: [
        {
          name: "Broschüre (DE)",
          link: "https://drive.google.com/file/d/1GDTdJGuinLsj9ru5kYYtJcnE5WFcbhGd/view?usp=sharing",
        },
        {
          name: "Broschüre (TR)",
          link: "https://drive.google.com/file/d/1nqOqOjtFnKgzhtF-4onOo1C1lC9tI_iq/view?usp=sharing",
        },
        {
          name: "Sürec Akisi Aday ve Sernitas",
          link: "https://drive.google.com/file/d/12JGccxoPd7_By_kFe-eRftTKcRNC6amO/view?usp=sharing",
        },
        {
          name: "Anfahrtsbeschreibung Sernitas Bochum",
          link: "https://drive.google.com/file/d/1evHUjm9J91PtEZykGdG5f6_TKb5K62S5/view?usp=sharing",
        },
      ],
    },
    {
      title: "Das beschleunigte Fachkräfteverfahren",
      items: [
        {
          name: "Das Beschnleunigte Fachkräfteverfahren (§ 81a AufenthG)",
          link: "https://drive.google.com/file/d/1FPVQIR0s0yb7X3esFasJJR4kFDbmb7tE/view?usp=sharing",
        },
        {
          name: "Infobrochüre Das Beschleunigte Fachkräfteverfahren",
          link: "https://drive.google.com/file/d/1pNvyNBP90m6GQHGtJWr0gvzf4bf8Gn8u/view?usp=sharing",
        },
      ],
    },
    {
      title: "Visum und Einreise",
      items: [
        {
          name: "Infobroschüre Ehegattennachzug",
          link: "https://drive.google.com/file/d/1vkFp24Wgknyuqx_9OMHDS8ILi2nRFJyy/view?usp=sharing",
        },
        {
          name: "Infoflyer Blaue Karte",
          link: "https://drive.google.com/file/d/1SaKCItF9iqSTmEnTK0NdOO9KrW3pXXJg/view?usp=sharing",
        },
        {
          name: "Infografik Familiennachzug (DE)",
          link: "https://drive.google.com/file/d/1ntFoL2C1C9VVozR4gSFu2VCMYjDXD6vs/view?usp=sharing",
        },
        {
          name: "Vise- ve Istihdam ile Ilgili Infografik",
          link: "https://drive.google.com/file/d/1bijd5MUGTo1DmHccRlFAN68qHrqNCD5x/view?usp=sharing",
        },
        {
          name: "Vizeye Göre Dil Kriterleri",
          link: "https://drive.google.com/file/d/13hz1POnDs5ylnRgWhMZe06VmxQdOmYPW/view?usp=sharing",
        },
      ],
    },
    {
      title: "Gesetze und Verordnungen",
      items: [
        {
          name: "Gesetzentwurf zur Weiterentwicklung der Fachkräfteeinwanderung (2023)",
          link: "https://drive.google.com/file/d/1qG4_9SO0rxvWGlOc9uRknhJmaM3bhJvR/view?usp=sharing",
        },
      ],
    },
    {
      title: "Sonstiges",
      items: [
        {
          name: "Fachwörterbuch Anerkennung (Mehrsprachig)",
          link: "https://drive.google.com/file/d/1_OTyKhY-ik-J4qgwIxObs_iBbq17EJlC/view?usp=sharing",
        },
        {
          name: "Infografik Reglementierte und Nicht-Reglementierte Berufe",
          link: "https://drive.google.com/file/d/15d5ChccY0BBo_QR_rHNmd1y2Vp-jMtXs/view?usp=sharing",
        },
        {
          name: "Flyer Arbeiten in Deutschland (DE)",
          link: "https://drive.google.com/file/d/1v_7O0Syr_12P8xapU0B0NtxE61H_n04b/view?usp=sharing",
        },
        {
          name: "Flyer Working in Germany (EN)",
          link: "https://drive.google.com/file/d/1VfNVKv22wNpcDesDt1VJx7HSVgBeZXY9/view?usp=sharing",
        },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12 items-center text-center justify-center">
        {sections.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className=" items-start font-sour text-3xl xl:text-4xl text-primary/90 font-bold mb-12">
              {section.title}
            </h2>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-xl mb-6">
                  <FiDownload className="mr-2 text-primary/90" />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/90 hover:underline hover:cursor-pointer hover:text-green-600 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
