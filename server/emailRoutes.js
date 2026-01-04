import express from "express";
import nodemailer from "nodemailer";

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

// API Route for sending emails
router.post("/api/send-email", async (req, res) => {
  try {
    const { fullname, email, phone, message } = req.body;

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
      to: `${process.env.EMAIL_USER}, ${process.env.HR_USER}`, // Send to both emails
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

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success
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

// Add a new route for application submission notification
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

// New API Route for HomeConsultationSection
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

// New API Route for BewerbenPage (Job Application)
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

// New API Route for Blog Comment Section
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

export default router;
