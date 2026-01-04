/**
 * ========================================================================
 * EMAIL ROUTES - Email Notification API Endpoints
 * ========================================================================
 *
 * This module handles all email-sending functionality for the application.
 * Uses Nodemailer to send emails via SMTP (Gmail in production).
 *
 * Endpoints:
 * - POST /api/send-email                      - Contact form submissions
 * - POST /api/send-application-notification   - Application submission notifications
 * - POST /api/send-home-consultation-email    - Home consultation requests
 * - POST /api/send-job-application            - Job application submissions
 * - POST /api/send-comment                    - Blog comment submissions
 *
 * Email Configuration:
 * - Uses environment variables for SMTP settings (SMTP_HOST, SMTP_PORT, etc.)
 * - Emails are sent to both EMAIL_USER and HR_USER (configured in .env)
 *
 * Technologies:
 * - Nodemailer for SMTP email delivery
 * - Express.js Router for route handling
 *
 * ========================================================================
 */

import express from "express";
import nodemailer from "nodemailer";

// Create Express router instance for email-related routes
const router = express.Router();

// API Route for sending emails
// router.post("/api/send-email", async (req, res) => {
//   try {
//     const { fullname, email, phone, message } = req.body;

//     // Configure nodemailer transporter
//     let transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST, // SMTP host
//       port: process.env.SMTP_PORT, // SMTP port
//       secure: process.env.SMTP_SECURE === "true", // Use SSL/TLS
//       auth: {
//         user: process.env.EMAIL_USER, // Email address
//         pass: process.env.EMAIL_PASS, // Email password
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: `"Sernitas Care" <${process.env.EMAIL_USER}>`, // Sender address
//       to: process.env.EMAIL_USER, // Your email address to receive messages
//       subject: `New Message from ${fullname}`,
//       text: `
//         Name: ${fullname}
//         Email: ${email}
//         Phone: ${phone}
//         Message: ${message}
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     // Respond with success
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res
//       .status(500)
//       .json({ error: "Error sending email", details: error.message });
//   }
// });

/**
 * Contact Form Email Endpoint
 * POST /api/send-email
 *
 * Sends an email notification when a user submits the contact form.
 * Recipients: Both EMAIL_USER and HR_USER (configured in environment variables)
 *
 * Request Body:
 *   { fullname: string, email: string, phone: string, message: string }
 *
 * Response:
 *   - 200: { message: "Email sent successfully to both recipients" }
 *   - 500: { error: "Error sending email", details: string }
 */
router.post("/api/send-email", async (req, res) => {
  try {
    const { fullname, email, phone, message } = req.body;

    // Configure Nodemailer transporter
    // Transporter is the SMTP server configuration for sending emails
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // SMTP server address (e.g., smtp.gmail.com)
      port: process.env.SMTP_PORT, // SMTP port (587 for TLS, 465 for SSL)
      secure: process.env.SMTP_SECURE === "true", // Use SSL/TLS (true for port 465, false for port 587)
      auth: {
        user: process.env.EMAIL_USER, // SMTP authentication username (email address)
        pass: process.env.EMAIL_PASS, // SMTP authentication password (app password for Gmail)
      },
    });

    // Configure email content and recipients
    const mailOptions = {
      from: `"Sernitas Care" <${process.env.EMAIL_USER}>`, // Sender display name and address
      to: `${process.env.EMAIL_USER}, ${process.env.HR_USER}`, // Send to both primary email and HR email
      subject: `New Message from ${fullname}`,
      text: `
        A new message has been submitted via contact page.

        Name: ${fullname}
        Email: ${email}
        Phone: ${phone}
        Message: 
        
        ${message}

        Please contact the sender as soon as possible.
      `,
    };

    // Send email using the configured transporter
    // This is an async operation that connects to SMTP server and sends the email
    await transporter.sendMail(mailOptions);

    // Respond with success status
    res
      .status(200)
      .json({ message: "Email sent successfully to both recipients" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Error sending email", details: error.message });
  }
});

/**
 * Application Submission Notification Endpoint
 * POST /api/send-application-notification
 *
 * Sends an email notification when a new job application is submitted.
 * Includes key applicant information (name, email, phone, age, gender).
 *
 * Request Body:
 *   { firstName, lastName, email, phone, age, gender }
 *
 * Response:
 *   - 200: { message: "Notification email sent successfully" }
 *   - 500: { error: "Error sending notification email", details: string }
 */
router.post("/api/send-application-notification", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, age, gender } = req.body;

    // Configure nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // SMTP host
      port: process.env.SMTP_PORT, // SMTP port
      secure: process.env.SMTP_SECURE === "true", // Use SSL/TLS
      auth: {
        user: process.env.EMAIL_USER, // Email address
        pass: process.env.EMAIL_PASS, // Email password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Sernitas Care" <${process.env.EMAIL_USER}>`, // Sender address
      // to: process.env.EMAIL_USER, // Your email address to receive notifications
      to: `${process.env.EMAIL_USER}, ${process.env.HR_USER}`, // Send to both emails
      subject: "New Pflege Application Submitted",
      text: `
        A new pflege application has been submitted.

        Applicant Name: ${firstName} ${lastName}
        Applicant Email: ${email}
        Applicant Phone: ${phone}
        Applicant Age: ${age}
        Applicant Gender: ${gender}

        Please check the admin dashboard for more details.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(200).json({ message: "Notification email sent successfully" });
  } catch (error) {
    console.error("Error sending notification email:", error);
    res.status(500).json({
      error: "Error sending notification email",
      details: error.message,
    });
  }
});

/**
 * Home Consultation Request Endpoint
 * POST /api/send-home-consultation-email
 *
 * Sends an email notification for home consultation callback requests.
 * Used when users request a callback for home consultation services.
 *
 * Request Body:
 *   { fullname: string, phone: string, consent: boolean }
 *
 * Response:
 *   - 200: { message: "Email sent successfully" }
 *   - 500: { error: "Error sending email", details: string }
 */
router.post("/api/send-home-consultation-email", async (req, res) => {
  try {
    const { fullname, phone, consent } = req.body;

    // Configure nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // SMTP host
      port: process.env.SMTP_PORT, // SMTP port
      secure: process.env.SMTP_SECURE === "true", // Use SSL/TLS
      auth: {
        user: process.env.EMAIL_USER, // Email address
        pass: process.env.EMAIL_PASS, // Email password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Sernitas Care" <${process.env.EMAIL_USER}>`, // Sender address
      // to: process.env.EMAIL_USER, // Your email address to receive messages
      to: `${process.env.EMAIL_USER}, ${process.env.HR_USER}`, // Send to both emails
      subject: `New Callback Request from ${fullname}`,
      text: `
        A new callback request has been submitted via home consulation page.

        Name: ${fullname}
        Phone: ${phone}
        Consent: ${consent ? "Yes" : "No"}

        Please contact the sender as soon as possible.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Error sending email", details: error.message });
  }
});

/**
 * Job Application Submission Endpoint
 * POST /api/send-job-application
 *
 * Sends an email notification when a user submits a job application.
 * Includes comprehensive applicant information (personal details, qualifications, etc.)
 *
 * Request Body:
 *   { firstname, lastname, gender, degree, company, country, email, phone, linkedin, subject, message }
 *
 * Response:
 *   - 200: { message: "Bewerbung erfolgreich gesendet!" }
 *   - 500: { error: "Fehler beim Senden der Bewerbung", details: string }
 *
 * Note: Message is in German ("Bewerbung" = application/job application)
 */
router.post("/api/send-job-application", async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      gender,
      degree,
      company,
      country,
      email,
      phone,
      linkedin,
      subject,
      message,
    } = req.body;

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Sernitas Care" <${process.env.EMAIL_USER}>`,
      // to: process.env.EMAIL_USER,
      to: `${process.env.EMAIL_USER}, ${process.env.HR_USER}`, // Send to both emails
      subject: `Neue Bewerbung: ${firstname} ${lastname}`,
      text: `
        A new job application has been submitted via job apply page.

        Vorname: ${firstname}
        Nachname: ${lastname}
        Geschlecht: ${gender}
        Abschluss: ${degree}
        Unternehmen: ${company}
        Aufenthaltsland: ${country}
        E-Mail: ${email}
        Telefonnummer: ${phone}
        LinkedIn: ${linkedin}

        Betreffzeile: ${subject}

        Anfrage:
        
        ${message}

        Please contact the sender as soon as possible.
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Bewerbung erfolgreich gesendet!" });
  } catch (error) {
    console.error("Fehler beim Senden der Bewerbung:", error);
    res.status(500).json({
      error: "Fehler beim Senden der Bewerbung",
      details: error.message,
    });
  }
});

/**
 * Blog Comment Submission Endpoint
 * POST /api/send-comment
 *
 * Sends an email notification when a user submits a comment on a blog post.
 * Used for the Pflege Blog comment section.
 *
 * Request Body:
 *   { fullname: string, email: string, comment: string }
 *
 * Response:
 *   - 200: { message: "Comment sent successfully" }
 *   - 500: { error: "Error sending comment", details: string }
 */
router.post("/api/send-comment", async (req, res) => {
  try {
    const { fullname, email, comment } = req.body;

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Sernitas Care" <${process.env.EMAIL_USER}>`,
      // to: process.env.EMAIL_USER,
      to: `${process.env.EMAIL_USER}, ${process.env.HR_USER}`, // Send to both emails
      subject: `New Comment from ${fullname}`,
      text: `
        A new comment has been submitted via pflege blog page.

        Name: ${fullname}
        Email: ${email}
        Comment: 
        
        ${comment}

        Please contact the sender as soon as possible.
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Comment sent successfully" });
  } catch (error) {
    console.error("Error sending comment:", error);
    res
      .status(500)
      .json({ error: "Error sending comment", details: error.message });
  }
});

// Export the router to be used in server.js
export default router;
