import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import application1 from "../../assets/aboutPage/hero-2.jpg";

import CachedImage from "../CachedImage";

/**
 * ApplicationForm: Pflege (nursing care) application form.
 * Uses React Hook Form + Zod for validation, React Query mutations for submit and notification email.
 * Submits to POST /api/applications and POST /api/send-application-notification.
 */

// Zod validation schema (messages in German)
const ApplicationFormSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  birthDate: z.string().nonempty("Geburtsdatum ist erforderlich"),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Geschlecht ist erforderlich" }),
  }),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  telephone: z
    .string()
    .regex(/^\d+$/, "Telefonnummer darf nur Ziffern enthalten")
    .min(10, "Telefonnummer muss mindestens 10 Ziffern enthalten"),
  streetName: z
    .string()
    .min(2, "Straßenname muss mindestens 2 Zeichen lang sein"),
  houseNumber: z.string().min(1, "Hausnummer ist erforderlich"),
  postalCode: z
    .string()
    .min(4, "Postleitzahl muss mindestens 4 Zeichen lang sein"),
  city: z.string().min(2, "Stadt muss mindestens 2 Zeichen lang sein"),
  occupation: z.string().min(2, "Beruf muss mindestens 2 Zeichen lang sein"),
  emergencyContactName: z
    .string()
    .min(2, "Name der Kontaktperson muss mindestens 2 Zeichen lang sein"),
  emergencyContactNumber: z
    .string()
    .regex(/^\d+$/, "Notfallnummer darf nur Ziffern enthalten")
    .min(10, "Notfallnummer muss mindestens 10 Ziffern enthalten"),
  primaryPhysician: z.string().optional(),
  insuranceProvider: z.string().optional(),
  insurancePolicyNumber: z.string().optional(),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.enum([
    "Passport",
    "National ID",
    "Driving License",
    "Other",
  ]),
  identificationNumber: z.string().optional(),
  remarks: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val, {
    message: "Sie müssen der Datenschutzerklärung zustimmen",
  }),
});

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Reset function to clear the form
  } = useForm({
    resolver: zodResolver(ApplicationFormSchema),
  });

  // API base URL: local in development, production (Netlify/VPS) in production
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL // Local backend
      : import.meta.env.VITE_API_BASE_URL_RENDER; // Render backend

  // React Query mutation: POST application to backend and cache invalidation
  const submitApplicationMutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`${apiBaseUrl}/api/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok)
        throw new Error("Übermittlung der Bewerbung fehlgeschlagen");
      return response.json();
    },
  });

  // React Query mutation: trigger backend to send notification email to HR/admin
  const sendNotificationEmailMutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(
        `${apiBaseUrl}/api/send-application-notification`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok)
        throw new Error("Fehler beim Senden der Benachrichtigungs-E-Mail");
      return response.json();
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSuccessMessage(""); // Clear previous success message
    setErrorMessage(""); // Clear previous error message

    try {
      // Submit the application
      await submitApplicationMutation.mutateAsync(data);

      // Send the notification email
      const notificationData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.telephone,
        age: new Date().getFullYear() - new Date(data.birthDate).getFullYear(), // Calculate age
        gender: data.gender,
      };
      await sendNotificationEmailMutation.mutateAsync(notificationData);

      // Set success message
      setSuccessMessage("Bewerbung erfolgreich eingereicht!");

      // Reset the form
      reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      setErrorMessage(
        "Fehler beim Einreichen der Bewerbung. Bitte versuchen Sie es erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center">
        <CachedImage
          src={application1}
          alt="Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* New Text Section */}
      <div className="bg-primary/90 text-white py-12 xl:py-24 px-6 lg:px-12 xl:px-32  space-y-12">
        <h1 className="font-sour text-3xl xl:text-4xl font-bold text-center">
          Jetzt kostenlos beraten lassen – Bewerben Sie sich bei Sernitas Care
        </h1>
        <p className="text-white/90 text-justify">
          Möchten Sie Teil eines engagierten Teams werden, das sich mit Herz und
          Kompetenz für die Pflege und das Wohlbefinden von Menschen einsetzt?
          Dann freuen wir uns auf Ihre Bewerbung bei Sernitas Care!
        </p>
        <p className="text-white/90 text-justify">
          Unser Bewerbungsformular bietet Ihnen die Möglichkeit, sich einfach,
          schnell und unverbindlich bei uns zu bewerben. Egal ob
          Pflegefachkraft, Pflegehelfer*in, Betreuungskraft oder Quereinsteiger
          – wir nehmen uns Zeit für Ihre individuelle Situation und beraten Sie
          gerne persönlich.
        </p>
        <ul className="list-disc list-inside text-white/90 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-white font-bold">✔</span>Ein wertschätzendes
            Arbeitsumfeld mit familiärer Atmosphäre
          </li>

          <li className="flex items-start gap-2">
            <span className="text-white font-bold">✔</span>Individuelle
            Einarbeitung und kontinuierliche Weiterbildung
          </li>

          <li className="flex items-start gap-2">
            <span className="text-white font-bold">✔</span>Flexible
            Arbeitszeiten und faire Vergütung
          </li>

          <li className="flex items-start gap-2">
            <span className="text-white font-bold">✔</span>Ein starkes Team, das
            zusammenhält
          </li>
        </ul>
        <p className="text-white/80 text-justify">
          Sie haben Fragen zur Bewerbung oder möchten sich zunächst
          unverbindlich informieren? Kein Problem – unser Team steht Ihnen gerne
          zur Seite. Lassen Sie sich jetzt kostenlos beraten und erfahren Sie
          mehr über Ihre Möglichkeiten bei Sernitas Care.
        </p>
        <p className="text-white/90 flex flex-col gap-2">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" /> Telefon: +49 234 966 46 480
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-white" /> E-Mail: info@sernitas-care.com
          </span>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-white" /> Standort: Bochum
          </span>
        </p>
      </div>

      {/* Application Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-12 mx-auto bg-primary/90 text-white px-6 lg:px-12 xl:px-32 pb-24"
      >
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium mb-1">Vorname*</label>
            <div className="relative">
              <Input
                type="text"
                placeholder="John"
                {...register("firstName")}
                className="search-input"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-md mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Nachname*</label>
            <Input
              type="text"
              placeholder="Doe"
              {...register("lastName")}
              className="search-input"
            />
            {errors.lastName && (
              <p className="text-red-500 text-md mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        {/* Birth Date and Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium mb-1">
              Geburtsdatum*
            </label>
            <Input
              type="date"
              {...register("birthDate")}
              className="search-input justify-between"
            />
            {errors.birthDate && (
              <p className="text-red-500 text-md mt-1">
                {errors.birthDate.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Geschlecht*
            </label>
            <div className="relative">
              <select
                {...register("gender")}
                className="w-full h-[48px] text-white bg-[#436b6c] search-input rounded-md p-2"
              >
                <option value="">Geschlecht wählen</option>
                <option value="Male">Männlich</option>
                <option value="Female">Weiblich</option>
                <option value="Other">Divers</option>
              </select>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-md mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>
        </div>
        {/* Email and Telephone fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium mb-1">E-Mail*</label>
            <Input
              type="email"
              placeholder="example@example.com"
              {...register("email")}
              className="search-input"
            />
            {errors.email && (
              <p className="text-red-500 text-md mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Telefonnummer*
            </label>
            <Input
              type="text"
              placeholder="0123456789"
              {...register("telephone")}
              className="search-input"
            />
            {errors.telephone && (
              <p className="text-red-500 text-md mt-1">
                {errors.telephone.message}
              </p>
            )}
          </div>
        </div>

        {/* Address Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium mb-1">
              Straßenname*
            </label>
            <Input
              type="text"
              placeholder="Beispielstraße"
              {...register("streetName")}
              className="search-input"
            />
            {errors.streetName && (
              <p className="text-red-500 text-md mt-1">
                {errors.streetName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Hausnummer*
            </label>
            <Input
              type="text"
              placeholder="12A"
              {...register("houseNumber")}
              className="search-input"
            />
            {errors.houseNumber && (
              <p className="text-red-500 text-md mt-1">
                {errors.houseNumber.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium mb-1">
              Postleitzahl*
            </label>
            <Input
              type="text"
              placeholder="12345"
              {...register("postalCode")}
              className="search-input"
            />
            {errors.postalCode && (
              <p className="text-red-500 text-md mt-1">
                {errors.postalCode.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Stadt*</label>
            <Input
              type="text"
              placeholder="Berlin"
              {...register("city")}
              className="search-input"
            />
            {errors.city && (
              <p className="text-red-500 text-md mt-1">{errors.city.message}</p>
            )}
          </div>
        </div>
        {/* Occupation */}
        <div>
          <label className="block text-lg font-medium mb-1">Beruf*</label>
          <Input
            type="text"
            placeholder="Pflegekraft"
            {...register("occupation")}
            className="search-input"
          />
          {errors.occupation && (
            <p className="text-red-500 text-md mt-1">
              {errors.occupation.message}
            </p>
          )}
        </div>
        {/* Emergency Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium mb-1">
              Name der Kontaktperson für Notfälle*
            </label>
            <Input
              type="text"
              placeholder="Jane Doe"
              {...register("emergencyContactName")}
              className="search-input"
            />
            {errors.emergencyContactName && (
              <p className="text-red-500 text-md mt-1">
                {errors.emergencyContactName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Telefonnummer der Kontaktperson*
            </label>
            <Input
              type="text"
              placeholder="0123456789"
              {...register("emergencyContactNumber")}
              className="search-input"
            />
            {errors.emergencyContactNumber && (
              <p className="text-red-500 text-md mt-1">
                {errors.emergencyContactNumber.message}
              </p>
            )}
          </div>
        </div>
        {/* Primary Physician */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Hausarzt / Hausärztin
          </label>
          <Input
            type="text"
            placeholder="Dr. Schmidt"
            {...register("primaryPhysician")}
            className="search-input"
          />
        </div>
        {/* Insurance Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium mb-1">
              Krankenkasse
            </label>
            <Input
              type="text"
              placeholder="AOK, TK, etc."
              {...register("insuranceProvider")}
              className="search-input"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Versichertennummer
            </label>
            <Input
              type="text"
              placeholder="XYZ123456"
              {...register("insurancePolicyNumber")}
              className="search-input"
            />
          </div>
        </div>
        {/* Medical History */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Allergien oder Erkrankungen
          </label>
          <Textarea
            placeholder="Bitte Allergien oder bekannte Krankheiten angeben"
            {...register("allergies")}
            className="search-input"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Aktuelle Medikamente
          </label>
          <Textarea
            placeholder="Liste der derzeit eingenommenen Medikamente"
            {...register("currentMedication")}
            className="search-input"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Medizinische Familiengeschichte
          </label>
          <Textarea
            placeholder="Relevante Informationen zur Familienanamnese"
            {...register("familyMedicalHistory")}
            className="search-input"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Frühere Krankheiten
          </label>
          <Textarea
            placeholder="Bisherige gesundheitliche Beschwerden oder Diagnosen"
            {...register("pastMedicalHistory")}
            className="search-input"
          />
        </div>
        {/* Identification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium mb-1">
              Ausweisart*
            </label>
            <select
              {...register("identificationType")}
              className="w-full h-[48px] text-white bg-[#436b6c] rounded-md p-2 search-input"
            >
              <option value="">Ausweisart wählen</option>
              <option value="Passport">Reisepass</option>
              <option value="National ID">Personalausweis</option>
              <option value="Driving License">Führerschein</option>
              <option value="Other">Sonstige</option>
            </select>
            {errors.identificationType && (
              <p className="text-red-500 text-md mt-1">
                {errors.identificationType.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">
              Ausweisnummer
            </label>
            <Input
              type="text"
              placeholder="123456789"
              {...register("identificationNumber")}
              className="search-input"
            />
            {errors.identificationNumber && (
              <p className="text-red-500 text-md mt-1">
                {errors.identificationNumber.message}
              </p>
            )}
          </div>
        </div>
        {/* Remarks */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Bemerkungen / Kommentare
          </label>
          <Textarea
            placeholder="Zusätzliche Informationen oder Hinweise"
            {...register("remarks")}
            className="search-input"
          />
          {errors.remarks && (
            <p className="text-red-500 text-md mt-1">
              {errors.remarks.message}
            </p>
          )}
        </div>
        {/* Privacy Consent */}
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("privacyConsent")}
            className="mr-2"
          />
          <label className="text-md">
            Ich stimme der Datenschutzerklärung zu*
          </label>
        </div>
        {errors.privacyConsent && (
          <p className="text-red-500 text-md mt-1">
            {errors.privacyConsent.message}
          </p>
        )}

        {/* Success or Error Message */}
        {successMessage && (
          <p className="text-green-500 text-center text-md mb-4">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center text-md mb-4">
            {errorMessage}
          </p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-auto border-white border-2 bg-secondary text-white px-6 py-6 rounded-2xl hover:bg-slate-300 hover:border-slate-300 transition duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Bewerbung absenden"}
        </Button>
      </form>
    </>
  );
};

export default ApplicationForm;
