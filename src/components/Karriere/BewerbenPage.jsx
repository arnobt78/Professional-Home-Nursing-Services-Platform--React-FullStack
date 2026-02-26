/** BewerbenPage: Job application form (Karriere/bewerben). Submits via POST /api/send-job-application. Uses React Hook Form + Zod. */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import bewerben1 from "../../assets/karrierePage/bewerben-1.png";
import bewerben2 from "../../assets/karrierePage/bewerben-2.png";

import CachedImage from "../CachedImage";

const BewerbenSchema = z.object({
  firstname: z.string().min(1, "Vorname ist erforderlich"),
  lastname: z.string().min(1, "Nachname ist erforderlich"),
  gender: z.enum(["Männlich", "Weiblich", "Divers"], {
    errorMap: () => ({ message: "Geschlecht ist erforderlich" }),
  }),
  degree: z.enum(["Ausbildung", "Abitur", "Bachelor", "Master", "Sonstiges"], {
    errorMap: () => ({ message: "Abschluss ist erforderlich" }),
  }),
  company: z.string().min(1, "Unternehmen ist erforderlich"),
  country: z.string().min(1, "Aufenthaltsland ist erforderlich"),
  email: z.string().email("Gültige E-Mail-Adresse erforderlich"),
  phone: z.string().min(5, "Telefonnummer ist erforderlich"),
  linkedin: z.string().url("Gültiger LinkedIn-Link erforderlich"),
  subject: z.string().min(1, "Betreffzeile ist erforderlich"),
  message: z.string().min(1, "Anfrage ist erforderlich"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Bitte der Datenverarbeitung zustimmen" }),
  }),
});

const BewerbenPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(BewerbenSchema),
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL
      : import.meta.env.VITE_API_BASE_URL_RENDER;

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccessMessage("");
    setFormError("");

    try {
      await axios.post(`${apiBaseUrl}/api/send-job-application`, data);
      setSuccessMessage("Anfrage erfolgreich gesendet!");
      reset();
    } catch (error) {
      console.error("Fehler beim Senden:", error);
      setFormError(
        "Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="containero">
      {/* Header Section */}
      <div className="w-full">
        <CachedImage
          src={bewerben1}
          alt="Header"
          className="w-full object-contain lg:object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="py-24 px-6 lg:px-12 xl:px-44  grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <CachedImage
            src={bewerben2}
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Form */}
        <div>
          <h2 className="font-sour text-primary/90 text-2xl xl:text-3xl font-bold mb-12">
            Nehmen Sie Kontakt zu unserem Team auf!
          </h2>
          <p className="mb-12 text-primary/90">
            Ob Fachkraft, Gesundheitseinrichtung oder Organisation – wir von
            Sernitas freuen uns, von Ihnen zu hören. Unsere Experten melden sich
            innerhalb kürzester Zeit bei Ihnen.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-primary/90 block mb-1">Vorname *</label>
                <input
                  {...register("firstname")}
                  className="home-consultation-input"
                  placeholder="Vorname"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-primary/90 block mb-1">Nachname *</label>
                <input
                  {...register("lastname")}
                  className="home-consultation-input"
                  placeholder="Nachname"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">
                    {errors.lastname.message}
                  </p>
                )}
              </div>

              <div className="text-primary/90 ">
                <label className="text-primary/90 block mb-1">
                  Geschlecht *
                </label>
                <select
                  {...register("gender")}
                  className="home-consultation-input"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="Männlich">Männlich</option>
                  <option value="Weiblich">Weiblich</option>
                  <option value="Divers">Divers</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm">
                    {errors.gender.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-primary/90 block mb-1">
                  Abschluss *
                </label>
                <select
                  {...register("degree")}
                  className="home-consultation-input"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="Ausbildung">Ausbildung</option>
                  <option value="Abitur">Abitur</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
                {errors.degree && (
                  <p className="text-red-500 text-sm">
                    {errors.degree.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-primary/90 block mb-1">
                  Unternehmen *
                </label>
                <input
                  {...register("company")}
                  className="home-consultation-input"
                  placeholder="Unternehmen"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">
                    {errors.company.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-primary/90 block mb-1">
                  Aufenthaltsland *
                </label>
                <input
                  {...register("country")}
                  className="home-consultation-input"
                  placeholder="Aufenthaltsland"
                />
                {errors.country && (
                  <p className="text-red-500 text-sm">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-primary/90 block mb-1">E-Mail *</label>
                <input
                  {...register("email")}
                  type="email"
                  className="home-consultation-input"
                  placeholder="E-Mail"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="text-primary/90 block mb-1">
                  Telefonnummer *
                </label>
                <input
                  {...register("phone")}
                  className="input home-consultation-input"
                  placeholder="Telefonnummer"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label className="text-primary/90 block mb-1">
                  LinkedIn Profil *
                </label>
                <input
                  {...register("linkedin")}
                  className="home-consultation-input"
                  placeholder="LinkedIn Profil"
                />
                {errors.linkedin && (
                  <p className="text-red-500 text-sm">
                    {errors.linkedin.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="text-primary/90 block mb-1">
                Betreffzeile *
              </label>
              <input
                {...register("subject")}
                className="input home-consultation-input"
                placeholder="Betreffzeile "
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>
            <div>
              <label className="text-primary/90 block mb-1">Anfrage *</label>
              <textarea
                {...register("message")}
                className="input home-consultation-input h-32 w-auto"
                placeholder="Anfrage"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" {...register("consent")} />
              <span className="text-primary/90">
                Ich stimme der Datenverarbeitung laut Datenschutzerklärung zu *
              </span>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm">{errors.consent.message}</p>
            )}
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary/90 text-white px-6 py-3 rounded-2xl text-lg font-medium hover:bg-secondary/90 transition cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {isLoading ? "Senden..." : "Unverbindlich Anfragen"}
            </button>

            {/* Success or Error Messages */}
            {successMessage && (
              <p className="text-green-500 text-sm mt-4">{successMessage}</p>
            )}
            {formError && (
              <p className="text-red-500 text-sm mt-4">{formError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BewerbenPage;
