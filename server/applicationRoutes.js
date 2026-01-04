/**
 * ========================================================================
 * APPLICATION ROUTES - Application Management API Endpoints
 * ========================================================================
 * 
 * This module handles all CRUD (Create, Read, Update, Delete) operations
 * for job applications submitted through the website.
 * 
 * Endpoints:
 * - POST   /api/admin/login          - Admin authentication
 * - GET    /api/applications         - Fetch all applications
 * - POST   /api/applications         - Create new application
 * - PATCH  /api/applications/:id/status - Update application status
 * - DELETE /api/applications/:id     - Delete an application
 * 
 * Technologies:
 * - Express.js Router for route handling
 * - Prisma ORM for database operations (MongoDB)
 * - bcrypt for password hashing (admin authentication)
 * 
 * ========================================================================
 */

import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

// Create Express router instance for modular route handling
const router = express.Router();

// Initialize Prisma Client with explicit database connection URL
// Prisma Client is an auto-generated database client that provides type-safe
// database access based on the schema.prisma file
console.log("Initializing Prisma Client...");
const prisma = new PrismaClient({
  datasources: {
    db: {
      // DATABASE_URL contains MongoDB connection string with credentials
      url: process.env.DATABASE_URL,
    },
  },
});
console.log("Prisma Client initialized successfully.");

/**
 * Admin Login Endpoint
 * POST /api/admin/login
 * 
 * Authenticates admin users for accessing the admin dashboard.
 * Uses bcrypt to compare the submitted password with the hashed password stored in env.
 * 
 * Request Body:
 *   { email: string, password: string }
 * 
 * Response:
 *   - 200: { message: "Login successful" }
 *   - 401: { error: "Invalid email or password" }
 * 
 * Security Note: Uses environment variables for credentials (never hardcode)
 */
router.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate email matches the admin email from environment variables
  // Using simple comparison (in production, consider more secure authentication)
  if (email !== process.env.ADMIN_EMAIL) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Compare submitted password with hashed password using bcrypt
  // bcrypt.compare() securely compares the plain password with the hash
  // This prevents storing plain text passwords in the database
  const isPasswordValid = await bcrypt.compare(
    password,
    process.env.ADMIN_PASSWORD_HASH || ""
  );

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Authentication successful
  res.status(200).json({ message: "Login successful" });
});

/**
 * Fetch All Applications
 * GET /api/applications
 * 
 * Retrieves all job applications from the database.
 * Used by the admin dashboard to display the list of applications.
 * 
 * Response:
 *   - 200: Array of application objects
 *   - 500: { error: "Failed to fetch applications" }
 */
router.get("/api/applications", async (req, res) => {
  try {
    // Prisma's findMany() retrieves all records from the Application collection
    // Returns an array of application objects matching the schema
    const applications = await prisma.application.findMany();
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

/**
 * Create New Application
 * POST /api/applications
 * 
 * Creates a new job application in the database.
 * Called when a user submits the application form on the website.
 * 
 * Request Body:
 *   Application data object (firstName, lastName, email, etc.)
 * 
 * Response:
 *   - 201: Created application object (with generated ID and timestamps)
 *   - 500: { error: "Failed to save application" }
 * 
 * Note: Automatically sets status to "Pending" as default
 */
router.post("/api/applications", async (req, res) => {
  try {
    // Prisma's create() method inserts a new record into the database
    // Spreads all fields from req.body and adds default status
    const application = await prisma.application.create({
      data: {
        ...req.body, // Spread all fields from the request body
        status: "Pending", // Set default status for new applications
      },
    });
    // 201 Created status code indicates successful resource creation
    res.status(201).json(application);
  } catch (error) {
    console.error("Error saving application:", error);
    res.status(500).json({ error: "Failed to save application" });
  }
});

/**
 * Update Application Status
 * PATCH /api/applications/:id/status
 * 
 * Updates the status of a specific application.
 * Used by admin dashboard to change application status (e.g., "Pending" -> "Approved")
 * 
 * URL Parameters:
 *   :id - Application ID (MongoDB ObjectId)
 * 
 * Request Body:
 *   { status: string }
 * 
 * Response:
 *   - 200: Updated application object
 *   - 500: { error: "Failed to update application status" }
 */
router.patch("/api/applications/:id/status", async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  const { status } = req.body; // Extract status from request body

  try {
    // Prisma's update() method updates a single record by ID
    const updatedApplication = await prisma.application.update({
      where: { id }, // Find application by ID
      data: { status }, // Update the status field
    });
    res.status(200).json(updatedApplication);
  } catch (error) {
    console.error("Error updating application status:", error);
    res.status(500).json({ error: "Failed to update application status" });
  }
});

/**
 * Delete Application
 * DELETE /api/applications/:id
 * 
 * Permanently deletes an application from the database.
 * Used by admin dashboard to remove applications.
 * 
 * URL Parameters:
 *   :id - Application ID (MongoDB ObjectId)
 * 
 * Response:
 *   - 200: { message: "Application deleted successfully" }
 *   - 500: { error: "Failed to delete application" }
 * 
 * Warning: This operation is irreversible
 */
router.delete("/api/applications/:id", async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  try {
    // Prisma's delete() method removes a record from the database
    await prisma.application.delete({
      where: { id }, // Find and delete application by ID
    });
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ error: "Failed to delete application" });
  }
});

// Export the router to be used in server.js
export default router;
