import bcrypt from "bcrypt";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const password = process.env.ADMIN_PASSWORD; // Get the password from .env
const saltRounds = 10;

if (!password) {
  console.error("Error: ADMIN_PASSWORD is not defined in .env");
  process.exit(1); // Exit the script if the password is not defined
}

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error("Error hashing password:", err);
  } else {
    console.log("\n✅ Hashed password generated:");
    console.log(hash);
    console.log(
      "\n📋 Copy this hash and update ADMIN_PASSWORD_HASH in your .env file\n"
    );
  }
});
