/** CallbackRequest: Homepage form for callback request (name, phone, consent). Submits via POST /api/send-home-consultation-email. */
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";

// Validation schema using zod
const schema = z.object({
  fullname: z.string().min(1, "Ihr Name ist erforderlich"),
  phone: z
    .string()
    .regex(/^\d+$/, "Telefonnummer darf nur Ziffern enthalten")
    .min(10, "Telefonnummer muss mindestens 10 Ziffern enthalten"),
});

const CallbackRequest = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Determine the API base URL dynamically
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL // Local backend
      : import.meta.env.VITE_API_BASE_URL_RENDER; // Render backend

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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      // Validate form data using zod schema
      const validatedData = schema.parse(formData);

      // Use mutation for API call
      await mutation.mutateAsync(validatedData);

      setSuccessMessage("Rückrufanfrage erfolgreich versendet!");
      setFormData({
        fullname: "",
        phone: "",
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
    <section className="bg-primary/90 py-4 sm:px-4 md:px-12 xl:px-32 border-t-2 border-secondary/90 text-white">
      <form
        className="flex flex-col md:flex-row items-center gap-4"
        onSubmit={handleSubmit}
      >
        <p className="text-white/90 font-medium whitespace-nowrap px-4">
          Wir rufen Sie gerne zurück:
        </p>
        <div className="flex-1 px-4">
          <Input
            type="text"
            name="fullname"
            placeholder="Ihr Name*"
            value={formData.fullname}
            onChange={handleChange}
            className="search-input text-white"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1 items-center">
              {errors.fullname}
            </p>
          )}
        </div>
        <div className="flex-1 px-4">
          <Input
            type="tel"
            name="phone"
            placeholder="Telefonnummer*"
            value={formData.phone}
            onChange={handleChange}
            className="search-input text-white"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 items-center">
              {errors.phone}
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-secondary/90 text-white px-6 py-2 rounded-2xl hover:bg-slate-500 transition duration-300"
        >
          {isLoading ? "Senden..." : "Rückruf anfordern"}
        </Button>
      </form>
      {successMessage && (
        <p className="text-green-500 text-sm mt-4 items-center">
          {successMessage}
        </p>
      )}
      {errors.form && (
        <p className="text-red-500 text-sm mt-4 items-center">{errors.form}</p>
      )}
    </section>
  );
};

export default CallbackRequest;
