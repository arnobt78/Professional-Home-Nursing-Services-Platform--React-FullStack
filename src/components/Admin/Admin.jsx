/**
 * Admin: Gate for admin area. Shows login form until successful auth, then dashboard.
 * Login state is local (no JWT persistence in this version); refresh loses session.
 */
import { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <AdminLogin onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
};

export default Admin;
