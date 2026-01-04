import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import applicationRoutes from "./server/applicationRoutes.js";
import emailRoutes from "./server/emailRoutes.js";

// Load environment variables from .env
dotenv.config();

console.log("API Base URL:", process.env.VITE_API_BASE_URL_RENDER);
console.log("SMTP Host:", process.env.SMTP_HOST);
console.log("Database URL:", process.env.DATABASE_URL);

const app = express(); // Initialize app here
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Allow requests from multiple origins (Netlify and localhost)
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local frontend
      "https://develop-testing-1.netlify.app", // Netlify frontend
      "https://sernitas-care.com", // cPanel main domain
    ],
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
    credentials: true, // Allow cookies and credentials
  })
);

// Routes
app.use(applicationRoutes); // Use application routes
app.use(emailRoutes); // Use email routes

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Healthy", service: "Sernitas Care Backend" });
});

// Default route
app.get("/", (req, res) => {
  res.send("Sernitas Care Backend is Running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
