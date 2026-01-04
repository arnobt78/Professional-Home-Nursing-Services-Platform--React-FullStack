import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const router = express.Router();

// Explicitly pass DATABASE_URL to PrismaClient
console.log("Initializing Prisma Client...");
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
console.log("Prisma Client initialized successfully.");

// Admin login route
router.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (email !== process.env.ADMIN_EMAIL) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Compare the hashed password
  const isPasswordValid = await bcrypt.compare(
    password,
    process.env.ADMIN_PASSWORD_HASH || ""
  );

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  res.status(200).json({ message: "Login successful" });
});

// Fetch all applications
router.get("/api/applications", async (req, res) => {
  try {
    const applications = await prisma.application.findMany();
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

// Save application data
router.post("/api/applications", async (req, res) => {
  try {
    const application = await prisma.application.create({
      data: {
        ...req.body,
        status: "Pending", // Set default status
      },
    });
    res.status(201).json(application);
  } catch (error) {
    console.error("Error saving application:", error);
    res.status(500).json({ error: "Failed to save application" });
  }
});

// Update application status
router.patch("/api/applications/:id/status", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedApplication = await prisma.application.update({
      where: { id },
      data: { status },
    });
    res.status(200).json(updatedApplication);
  } catch (error) {
    console.error("Error updating application status:", error);
    res.status(500).json({ error: "Failed to update application status" });
  }
});

// Delete an application by ID
router.delete("/api/applications/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.application.delete({
      where: { id },
    });
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ error: "Failed to delete application" });
  }
});

export default router;
