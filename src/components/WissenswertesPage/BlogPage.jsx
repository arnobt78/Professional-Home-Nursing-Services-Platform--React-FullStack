/** BlogPage: Single blog post view (route /pflege-blog/:id). Includes comment form submitting to POST /api/send-comment. */
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { z } from "zod";

import CachedImage from "../CachedImage";
import blogData from "./blogData"; // Import the data

const BlogPage = () => {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate();

  // State for form data, errors, and success message
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    comment: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Find the blog data based on the id
  const blog = blogData.find((item) => item.id === parseInt(id, 10));

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  // Validation schema using zod
  const schema = z.object({
    fullname: z.string().min(1, "Ihr Name ist erforderlich"),
    email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
    comment: z.string().min(1, "Kommentar ist erforderlich"),
    consent: z
      .boolean()
      .refine((val) => val, "Bitte stimmen Sie der Speicherung zu"),
  });

  // Determine the API base URL dynamically
  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL
      : import.meta.env.VITE_API_BASE_URL_RENDER;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      // Validate form data
      const validatedData = schema.parse(formData);

      // Send comment to the server
      const response = await fetch(`${apiBaseUrl}/api/send-comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error("Kommentar konnte nicht gesendet werden.");
      }

      // Show success message
      setSuccessMessage("Kommentar erfolgreich abgeschickt!");
      setFormData({
        fullname: "",
        email: "",
        comment: "",
        consent: false,
      });
    } catch (error) {
      if (error.errors) {
        // Handle validation errors
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
    <div className="py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-primary/90 hover:text-secondary transition duration-300"
      >
        ← Zurück zu Pflege-Blog
      </button>

      {/* Blog Image */}
      <div className="w-full h-96 flex justify-center items-center bg-gray-100">
        <CachedImage
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6 md:p-12 space-y-6">
        <h2 className="text-3xl font-bold text-primary/90 text-center py-12">
          {blog.title}
        </h2>

        <div
          className="text-primary/90 text-justify leading-relaxed space-y-6 styled-content"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
      </div>

      {/* Comments Section */}
      <div className="p-6 md:p-12 space-y-6 mt-8">
        <h3 className="text-xl lg:text-2xl font-bold text-primary/90 mb-8">
          Schreibe Einen Kommentar
        </h3>
        <form onSubmit={handleSubmit}>
          <textarea
            name="comment"
            placeholder="Kommentar *"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            rows="4"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
          {errors.comment && (
            <p className="text-red-500 text-sm">{errors.comment}</p>
          )}
          <input
            type="text"
            name="fullname"
            placeholder="Name *"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm">{errors.fullname}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="E-Mail *"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <label className="flex items-start text-sm text-gray-500 my-8">
            <input
              type="checkbox"
              name="consent"
              className="mr-2 mt-1"
              checked={formData.consent}
              onChange={handleChange}
            />
            Meinen Namen, meine E-Mail-Adresse und meine Website in diesem
            Browser für die nächste Kommentierung speichern.
          </label>
          {errors.consent && (
            <p className="text-red-500 text-sm">{errors.consent}</p>
          )}
          <div className="flex justify-between mt-12">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary/90 text-white px-6 py-3 rounded-xl hover:bg-secondary transition duration-300"
            >
              {isLoading ? "Senden..." : "Kommentar Abschicken"}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-400 transition duration-300"
            >
              Zurück zu Pflege-Blog
            </button>
          </div>
          {successMessage && (
            <p className="text-green-500 text-sm mt-4">{successMessage}</p>
          )}
          {errors.form && (
            <p className="text-red-500 text-sm mt-4">{errors.form}</p>
          )}
        </form>
      </div>
    </div>
  );
};

BlogPage.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default BlogPage;
