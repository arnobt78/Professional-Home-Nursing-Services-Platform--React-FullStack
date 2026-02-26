/**
 * Contact: Contact page with form (name, email, phone, message). Validates with Zod, submits via POST /api/send-email.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query"; // Import useMutation

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

import { z } from "zod";

import bewerben1 from "../../assets/karrierePage/bewerben-1.png";

import CachedImage from "../CachedImage";

// Zod schema for contact form validation (German error messages)
const schema = z.object({
  fullname: z.string().min(1, "Vollständiger Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z
    .string()
    .regex(/^\d+$/, "Telefonnummer darf nur Ziffern enthalten")
    .min(10, "Telefonnummer muss mindestens 10 Ziffern enthalten"),
  message: z.string().min(1, "Nachricht ist erforderlich"),
});

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefonnummer",
    description: "+49 234 966 46 480",
  },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    description: "info@sernitas-care.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: (
      <>
        Sernitas GmbH <br />
        BioMedizinZentrum Bochum <br />
        Universitätsstraße 136, <br />
        44799 Bochum
      </>
    ),
  },
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // API base URL for backend (local in dev, production URL in build)
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL // Local backend
      : import.meta.env.VITE_API_BASE_URL_RENDER; // Render backend

  // Define the mutation function
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`${apiBaseUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok)
        throw new Error("Nachricht konnte nicht gesendet werden.");
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

      setSuccessMessage("Nachricht erfolgreich versendet!");
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        message: "",
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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=" bg-gray-200"
    >
      {/* Header Section */}
      <div className="w-full">
        <CachedImage
          src={bewerben1}
          alt="Header"
          className="w-full object-contain lg:object-cover"
        />
      </div>

      <div className="py-12 xl:py-24 px-6 md:px-8 lg:px-12 xl:px-24 space-y-12">
        {/* Centered Grid Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
          <div className="container mx-auto p-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center justify-center">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <ul className="flex flex-col gap-16">
                  {info.map((item, index) => (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] bg-slate-300 text-primary/90 rounded-md flex justify-center items-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-primary/80">{item.title}</p>
                        <h3 className="text-xl text-primary/90">
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary/90 text-white p-4 md:p-8 xl:p-12 rounded-2xl shadow-2xl w-full"
              >
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <h2 className="font-sour text-2xl lg:text-3xl text-white/90">
                    Wir sind für Sie da
                  </h2>
                  <p className="text-white/80 text-justify">
                    Treten Sie mit Sernitas Care in Kontakt – wir stehen Ihnen
                    mit vertrauensvoller, einfühlsamer und professioneller
                    Pflege zur Seite. Gemeinsam sorgen wir für mehr
                    Wohlbefinden, Würde und Geborgenheit für Ihre Liebsten. Wir
                    freuen uns auf Ihre Nachricht!
                  </p>
                  <div className="grid space-y-12">
                    <Input
                      type="text"
                      name="fullname"
                      placeholder="Vor- und Nachname*"
                      value={formData.fullname}
                      onChange={handleChange}
                      className="search-input text-white"
                    />
                    {errors.fullname && (
                      <p className="text-red-500 text-sm">{errors.fullname}</p>
                    )}
                    <Input
                      type="email"
                      name="email"
                      placeholder="E-Mail-Adresse*"
                      value={formData.email}
                      onChange={handleChange}
                      className="search-input text-white"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Telefonnummer*"
                      value={formData.phone}
                      onChange={handleChange}
                      className="search-input text-white"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                    <Textarea
                      className="search-input text-white"
                      name="message"
                      placeholder="Ihre Nachricht*"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                  </div>

                  {successMessage && (
                    <p className="text-green-500 text-sm">{successMessage}</p>
                  )}
                  {errors.form && (
                    <p className="text-red-500 text-sm">{errors.form}</p>
                  )}

                  {/* Centered Button */}
                  <div className="flex justify-center mt-6">
                    <Button
                      className="px-8 py-6 bg-secondary text-white rounded-2xl border-2 hover:bg-white hover:text-secondary hover:border-secondary transition duration-300 flex items-center justify-center"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Senden..." : "Nachricht senden"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
