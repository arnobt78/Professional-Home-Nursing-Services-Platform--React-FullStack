/**
 * ========================================================================
 * SERVER.JS - Main Express.js Backend Server Entry Point
 * ========================================================================
 * 
 * This file initializes the Express.js backend server for Sernitas Care.
 * It sets up middleware, routes, and starts the HTTP server.
 * 
 * Key Features:
 * - Express.js REST API server
 * - CORS configuration for frontend communication
 * - Environment variable management
 * - Route handlers for applications and email services
 * - Health check endpoint for monitoring
 * 
 * ========================================================================
 */

import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

// Import route handlers (modular routing)
import applicationRoutes from "./server/applicationRoutes.js";
import emailRoutes from "./server/emailRoutes.js";

// Load environment variables from .env file
// This makes all environment variables available via process.env
dotenv.config();

// Log environment configuration (for debugging - remove sensitive data in production)
// Note: VITE_API_BASE_URL_RENDER is a frontend variable, logged here for reference
console.log("API Base URL:", process.env.VITE_API_BASE_URL_RENDER);
console.log("SMTP Host:", process.env.SMTP_HOST);
console.log("Database URL:", process.env.DATABASE_URL);

// Initialize Express application instance
const app = express();

// Set server port from environment variable, or default to 5000
// PORT is typically set by the deployment platform (Coolify, Render, etc.)
const PORT = process.env.PORT || 5000;

// ========================================================================
// MIDDLEWARE CONFIGURATION
// ========================================================================

// Body Parser Middleware
// Parses incoming JSON request bodies and makes them available via req.body
app.use(bodyParser.json());

// CORS (Cross-Origin Resource Sharing) Configuration
// Allows the frontend (running on different domains/ports) to make API requests
app.use(
  cors({
    // List of allowed origins (frontend URLs that can access this API)
    origin: [
      "http://localhost:5173", // Local development frontend (Vite default port)
      "https://develop-testing-1.netlify.app", // Netlify production frontend
      "https://sernitas-care.com", // Production domain (cPanel hosting)
    ],
    // Allowed HTTP methods
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
    // Allowed request headers
    allowedHeaders: ["Content-Type"],
    // Allow cookies and authentication credentials to be sent with requests
    credentials: true,
  })
);

// ========================================================================
// ROUTE HANDLERS
// ========================================================================

// Mount route handlers from separate modules
// This keeps the code organized and follows the separation of concerns principle
app.use(applicationRoutes); // Application management routes (CRUD operations)
app.use(emailRoutes); // Email sending routes (contact forms, notifications)

// Health Check Endpoint
// Used by deployment platforms (Coolify, Kubernetes, etc.) to monitor server status
// Returns 200 OK if the server is running properly
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Healthy", service: "Sernitas Care Backend" });
});

// Root/Default Route
// Simple endpoint to verify the server is running
// Useful for manual testing and monitoring
app.get("/", (req, res) => {
  res.send("Sernitas Care Backend is Running!");
});

// ========================================================================
// SERVER STARTUP
// ========================================================================

// Start the HTTP server and listen on the specified PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
