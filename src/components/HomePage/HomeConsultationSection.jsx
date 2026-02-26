/** HomeConsultationSection: Homepage block for home consultation request (name, phone, consent). Sends POST /api/send-home-consultation-email. */
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";

import HRImage from "../../assets/aboutPage/hr-1.jpg";

import CachedImage from "../CachedImage";

// Validation schema using zod
const schema = z.object({
  fullname: z.string().min(1, "Ihr Name ist erforderlich"),
  phone: z
    .string()
    .regex(/^\d+$/, "Telefonnummer darf nur Ziffern enthalten")
    .min(10, "Telefonnummer muss mindestens 10 Ziffern enthalten"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen.",
  }),
});

const HomeConsultationSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Determine the API base URL dynamically
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL
      : import.meta.env.VITE_API_BASE_URL_RENDER;

  // Define the mutation function
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(
        `${apiBaseUrl}/api/send-home-consultation-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok)
        throw new Error("Rückrufanfrage konnte nicht gesendet werden.");
      return response.json();
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      const validatedData = schema.parse(formData);
      await mutation.mutateAsync(validatedData);

      setSuccessMessage("Rückrufanfrage erfolgreich versendet!");
      setFormData({
        fullname: "",
        phone: "",
        consent: false,
      });
    } catch (error) {
      if (error.errors) {
        const validationErrors = {};
        error.errors.forEach((err) => {
          validationErrors[err.path[0]] = err.message;
        });
        setErrors(validationErrors);
      } else {
        setErrors({ form: "Ein unerwarteter Fehler ist aufgetreten." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-24 px-4 lg:px-12 xl:px-44">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-[60%] space-y-6">
          <h2 className="font-sour text-primary/90 text-3xl lg:text-4xl font-bold mb-4">
            Mehr Lebensqualität in den eigenen vier Wänden
          </h2>
          <p className="text-gray-500 leading-relaxed text-justify">
            Immer mehr Menschen entscheiden sich bewusst für eine Betreuung
            zuhause. Auch im Ruhrgebiet vertrauen viele Pflegebedürftige auf die
            Vorteile der ambulanten Pflege – und damit auf mehr Selbstbestimmung
            und Geborgenheit in vertrauter Umgebung.
            <br />
            <br />
            <strong>Sernitas Care</strong> ist Ihr zuverlässiger Partner für die
            häusliche Pflege in Bochum und Umgebung. Unsere qualifizierten
            Pflegefachkräfte und geschulten Mitarbeitenden aus dem
            hauswirtschaftlichen Bereich sorgen dafür, dass Sie oder Ihre
            Angehörigen medizinisch, pflegerisch und alltagspraktisch bestens
            versorgt sind – direkt in Ihrem Zuhause.
            <br />
            <br />
            Wir bieten Leistungen der <strong>Behandlungspflege</strong> nach §
            37 SGB V – ärztlich verordnet und mit der Krankenkasse abgerechnet.
            Dazu gehören unter anderem die Medikamentengabe, die Kontrolle von
            Blutdruck, Puls und Blutzucker, sowie die Wundversorgung, oder das
            An- und Ausziehen von Kompressionsstrümpfen.
            <br />
            Im Bereich der <strong>Grundpflege</strong> nach SGB XI unterstützen
            wir Sie bei der Körperpflege, der Nahrungsaufnahme, der
            Inkontinenzversorgung und der Mobilität. Voraussetzung für diese
            Leistungen ist ein anerkannter Pflegegrad. Wir beraten Sie gern bei
            der Antragstellung und allen weiteren Schritten.
            <br />
            Ergänzend kümmern wir uns auf Wunsch auch um die{" "}
            <strong>hauswirtschaftliche Versorgung</strong> – z. B. mit
            Einkäufen, Wohnungsreinigung oder der Organisation von Hilfsmitteln
            und Medikamenten.
            <br />
            <br />
            Mit Sernitas Care entscheiden Sie sich für einen kultursensiblen
            Pflegedienst, der nicht nur professionell, sondern auch menschlich
            und mit Respekt für Vielfalt handelt.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-[40%] bg-white shadow-2xl rounded-xl items-center text-center px-6 py-8">
          <h3 className="font-sour text-primary/90 text-2xl font-bold mb-8">
            Kostenfreie Beratung
          </h3>
          <div className="flex justify-center items-center gap-4 text-center mb-6">
            <CachedImage
              src={HRImage}
              alt="Consultant"
              className="w-24 h-24 rounded-full object-cover border-2 border-primary/90"
            />
            <div>
              <p className="font-sour text-primary/90 text-2xl font-bold tracking-wide">
                Dr. Ali Yildiz
              </p>
              <p className="text-gray-400 text-sm">Mo - Fr 08:00 - 17:00</p>
              <p className="text-primary/90 font-bold">0234 / 966 46 480</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <p className="font-sour text-primary/90 font-medium text-xl mb-8">
              Wir rufen Sie zurück!
            </p>
            <div className="ml-4 mr-4 mb-4 text-gray-700">
              <Input
                type="text"
                name="fullname"
                placeholder="Ihr Name *"
                value={formData.fullname}
                onChange={handleChange}
                className="home-consultation-input"
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
              )}
            </div>
            <div className="ml-4 mr-4 mb-8 text-gray-700">
              <Input
                type="tel"
                name="phone"
                placeholder="Telefonnummer *"
                value={formData.phone}
                onChange={handleChange}
                className="home-consultation-input"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="mb-8">
              <label className="flex items-start text-sm text-gray-500">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, consent: e.target.checked })
                  // }
                  onChange={handleChange}
                  className="mr-2 mt-1"
                  required
                />
                Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und
                bin damit einverstanden, dass die von mir angegebenen Daten
                elektronisch erhoben und gespeichert werden.
              </label>
              {errors.consent && (
                <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-2 rounded-2xl hover:bg-primary/80 transition shadow-xl"
            >
              {isLoading ? "Senden..." : "Rückruf anfordern"}
            </Button>
            {successMessage && (
              <p className="text-green-500 text-sm mt-4">{successMessage}</p>
            )}
            {errors.form && (
              <p className="text-red-500 text-sm mt-4">{errors.form}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeConsultationSection;
