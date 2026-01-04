/**
 * ========================================================================
 * MAIN.JSX - React Application Entry Point
 * ========================================================================
 * 
 * This is the entry point of the React application.
 * It sets up the root component tree with all necessary providers and routing.
 * 
 * Key Features:
 *   - React 18 createRoot API for rendering
 *   - React Router for client-side routing
 *   - React Query for server state management
 *   - Service Worker registration for PWA capabilities
 *   - ScrollToTop component for better UX on route changes
 * 
 * ========================================================================
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./reactQueryClient";

import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

// Service Worker Registration (Progressive Web App - PWA)
// Service Workers enable offline functionality and caching
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

// React 18 createRoot API - Creates the root for the React application
// getElementById("root") finds the div element in index.html
createRoot(document.getElementById("root")).render(
  // StrictMode: Development tool that helps identify potential problems
  // It runs extra checks and warnings in development mode only
  <StrictMode>
    {/* QueryClientProvider: Provides React Query context to all child components */}
    {/* This enables useQuery, useMutation hooks throughout the app */}
    <QueryClientProvider client={queryClient}>
      {/* BrowserRouter: Enables client-side routing (no page refreshes on navigation) */}
      <Router>
        {/* ScrollToTop: Scrolls to top of page when route changes */}
        <ScrollToTop />
        {/* Main App component - Contains all routes and page components */}
        <App />
      </Router>
    </QueryClientProvider>
  </StrictMode>
);
