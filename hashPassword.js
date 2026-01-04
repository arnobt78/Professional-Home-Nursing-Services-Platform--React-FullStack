/**
 * ========================================================================
 * PASSWORD HASH GENERATOR UTILITY
 * ========================================================================
 * 
 * This script generates a bcrypt hash for the admin password.
 * 
 * Purpose:
 *   - Security: Never store plain text passwords
 *   - Generate hashed password to store in ADMIN_PASSWORD_HASH environment variable
 * 
 * Usage:
 *   1. Set ADMIN_PASSWORD in .env file
 *   2. Run: node hashPassword.js
 *   3. Copy the generated hash to ADMIN_PASSWORD_HASH in .env
 * 
 * Security:
 *   - Uses bcrypt with 10 salt rounds (good balance of security and performance)
 *   - Salt is automatically generated and included in the hash
 *   - Same password will produce different hashes (due to random salt)
 * 
 * ========================================================================
 */

import bcrypt from "bcrypt";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Get the password from environment variables
// This is the plain text password that will be hashed
const password = process.env.ADMIN_PASSWORD;

// Salt rounds determine the computational cost of hashing
// Higher = more secure but slower (10 is a good default)
const saltRounds = 10;

// Validate that password is defined
if (!password) {
  console.error("Error: ADMIN_PASSWORD is not defined in .env");
  process.exit(1); // Exit the script if the password is not defined
}

// Generate bcrypt hash
// bcrypt automatically generates a random salt and includes it in the hash
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error("Error hashing password:", err);
  } else {
    // Display the generated hash
    console.log("\n✅ Hashed password generated:");
    console.log(hash);
    console.log(
      "\n📋 Copy this hash and update ADMIN_PASSWORD_HASH in your .env file\n"
    );
  }
});
