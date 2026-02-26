/**
 * AdminLogin: Form to authenticate admin. Calls POST /api/admin/login (email + password).
 * On success calls onLogin() so parent (Admin) switches to AdminDashboard.
 */
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useMutation } from "@tanstack/react-query"; // Import useMutation

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_LOCAL // Local backend
      : import.meta.env.VITE_API_BASE_URL_RENDER; // Render backend

  // React Query mutation for login; backend validates against ADMIN_EMAIL and ADMIN_PASSWORD_HASH
  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await axios.post(`${apiBaseUrl}/api/admin/login`, {
        email,
        password,
      });
      if (response.status !== 200) throw new Error("Login failed");
      return response.data;
    },
  });

  const handleLogin = async () => {
    try {
      await mutation.mutateAsync({ email, password }); // Use mutation for API call
      onLogin(); // Notify parent component of successful login
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="container mx-auto py-24">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded-xl"
        />
        <button
          onClick={handleLogin}
          className="bg-primary/90 text-white rounded-xl border-2 hover:bg-white hover:text-primary/90 hover:border-primary/90 transition duration-300 px-4 py-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

// Add PropTypes validation for the 'onLogin' prop
AdminLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default AdminLogin;
